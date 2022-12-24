import React, {useState, useEffect} from 'react'
import Item from './Item'
import s from './Home.module.scss'
import axios from 'axios'

const Main = () => {

    const [characters, setCharacters] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const onChange = (e) => {
        setInputValue(e.target.value)
    }
    
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
          .then(response => {
            setCharacters(response.data.results)
          })
        console.log(characters)
      }, [])

    
      window.chara = characters;

  return (
    <div className={s.home}>
        <div className={s.formDiv}>
            <form action="" className={s.form}>
                <input type="text" placeholder='Search for characters by name...'
                    value={inputValue} onChange={onChange}/>
                <button type='submit'>Search</button>
            </form>
        </div>
        <h1 className={s.title}>All Characters</h1>
        <div className={s.items}>
            {characters.map((person) => {
                return <Item img={person.image} name={person.name} key={person.id}/>
            })}
        </div>
        
    </div>
  )
}

export default Main