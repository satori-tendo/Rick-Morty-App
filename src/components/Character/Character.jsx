import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './Character.module.scss'

const Character = () => {

    let { charaId } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${charaId}`)
            .then(response => {
                setCharacter(response.data)
                console.log(character)
            })
    }, [charaId])
    window.character = character;
    window.id = charaId;

  return (
    <div className={s.character}>
        <div className={s.info}>
            <img src={character.image} alt="" />
            <div className={s.abouts}>
                <h1 className={s.name}>{character.name}</h1>
                <ul className={s.list}>
                    <li>Gender: {character.gender}</li>
                    <li>Status: {character.status}</li>
                    <li>{character.type ? character.type : ''}</li>
                </ul>
            </div>
        </div>
        <div className={s.text}>
            <span>Тут должно быть что-то о "{character.name}" но ты мне не пишешь</span>
            <span>P.S: Если информация не прогружается, то это не я плохо написал код, а апишка тормозит,
                    ну или просто немного подождите, кек</span> 
        </div>
    </div>
  )
}


export default Character