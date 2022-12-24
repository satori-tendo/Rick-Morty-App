import React from 'react'
import s from './Sidebar.module.scss'

const Item = (props) => {
    return (
        <li className={s.item}>
            <img src={props.icon} alt="" className={s.itemImg} />
            <span className={s.itemTitle}>{props.title}</span>
        </li>
    )
}

export default Item