import React from 'react'
import s from '../Home.module.scss'

const Button = ({inner}) => {
  return (
    <button className={s.arrowButton}>{inner}</button>
  )
}

export default Button