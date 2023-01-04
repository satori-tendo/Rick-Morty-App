import axios from "axios";


const GET_CHARACTERS = 'GET_CHARACTERS';
const GET_CHARACTERS_INFO = 'GET_CHARACTERS_INFO';
const GET_SINGLE_CHARACTER = 'GET_SINGLE_CHARACTER';

const initialState = {
    characters: [],
    charactersInfo: {},
    singleCharacter: {},
}


export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, characters: [...action.payload]}
        case GET_CHARACTERS_INFO:
            return {...state, charactersInfo: {...action.payload}}
        case GET_SINGLE_CHARACTER:
            return {...state, singleCharacter: {...action.singleCharacter}}
            
        default:
            return state
    }
}

export const getCharactersAC = (payload) => ({type: GET_CHARACTERS, payload})
export const getCharactersInfoAC = (payload) => ({type: GET_CHARACTERS_INFO, payload})
export const getSingleCharacterAC = (singleCharacter) => ({type: GET_SINGLE_CHARACTER, singleCharacter})


export const getCharactersThunk = (currentPage) => {
    return function(dispatch) {
        axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
          .then(response => {
            dispatch(getCharactersAC(response.data.results))
            dispatch(getCharactersInfoAC(response.data.info))
          }
        )
    }
}
export const getSingleCharacterThunk = (characterId) => {
    return function(dispatch) {
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
                dispatch(getSingleCharacterAC(response.data))
            })
    }
}

window.usersState = initialState;