import React from 'react'
import Item from './Item'
import s from './Main.module.scss'

const Main = () => {
  return (
    <div className={s.main}>
        <div className={s.formDiv}>
            <form action="" className={s.form}>
                <input type="text" placeholder='Search for characters by name...'/>
                <button>Search</button>
            </form>
        </div>
        <h1 className={s.title}>All Characters</h1>
        <div className={s.items}>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        
    </div>
  )
}

export default Main