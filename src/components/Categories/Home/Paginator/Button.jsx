import React from 'react'
import s from '../Home.module.scss'

const Button = ({inner, ...props}) => {
  return (
    <button className={s.arrowButton} onClick={props.onClick}>{inner}</button>
  )
}

export default Button