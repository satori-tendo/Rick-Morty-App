import React, {useState, useEffect} from 'react'
import Item from './Item'
import s from './Home.module.scss'
import axios from 'axios'
import Paginator from './Paginator/Paginator'

const Main = () => {

    const [characters, setCharacters] = useState([]);
    const [charactersInfo, setCharactersInfo] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1)

    const updateCurrPage = (number) => { //прокидываем в Paginator чтобы получить оттуда текущую страницу
        setCurrentPage(number)
    }
    window.currentPage = currentPage;


    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
          .then(response => {
            setCharacters(response.data.results)
            setCharactersInfo(response.data.info)
          })
        console.log(characters)
      }, [currentPage])


      window.info = charactersInfo;
      window.chara = characters;

  return (
    <div className={s.home}>
        <div className={s.formDiv}>
            <form action="" className={s.form}>
                <input type="text" placeholder='Search for characters by name...'
                    value={inputValue} onChange={onInputChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <h1 className={s.title}>All Characters</h1>
        <div className={s.items}>
            {characters.map((person) => {
                return <Item img={person.image} name={person.name} key={person.id}/>
            })}
        </div>
        <Paginator pages={charactersInfo.pages} updateCurrPage={updateCurrPage}/>
    </div>
  )
}

export default Main