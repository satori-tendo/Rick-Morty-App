import React from 'react'
import s from './Main.module.scss'
import img from '../../assets/images/main/RickSanchez.jpeg'

const Item = () => {
  return (
    <div className={s.item}>
        <img src={img} alt="" className={s.poster} />
        <div className={s.info}>
            <span className={s.name}>Rick Sanchez</span>
        </div>
    </div>
  )
}

export default Item