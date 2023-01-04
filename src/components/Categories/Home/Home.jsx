import React, {useState, useEffect} from 'react'
import Item from './Item'
import s from './Home.module.scss'
import Paginator from './Paginator/Paginator'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCharactersThunk } from '../../../redux/characterReducer'


const Main = () => {

    const [searchParams] = useSearchParams();
    const currentPage = searchParams.get('page')

    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters.characters) 
    const charactersInfo = useSelector(state => state.characters.charactersInfo)

    window.currentPage = currentPage;

// при перезагрузке страницы мы берем данные из useState и поэтому при перезагрузке 
// мы попадаем обратно на первую страницу т.к дефолтное значение 1
// TODO: попробовать взять данные из url 

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    useEffect(() => {
        dispatch(getCharactersThunk(currentPage))
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
                return <Link to={'/character/' + person.id}>
                            <Item img={person.image} name={person.name} key={person.id}/>
                        </Link>
            })}
        </div>
        <Paginator pages={charactersInfo.pages} currentPage={currentPage}/>
    </div>
  )
}

export default Main