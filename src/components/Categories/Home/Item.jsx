import React from 'react'
import s from './Home.module.scss'

const Item = (props) => {
  return (
    <div className={s.item}>
        <img src={props.img} alt="" className={s.poster} />
        <div className={s.info}>
            <span className={s.name}>{props.name}</span>
        </div>
    </div>
  )
}

export default Item