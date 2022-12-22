import React from 'react'
import s from './Sidebar.module.scss'
import Item from './Item'
import home from '../assets/images/sidebar/Home.png'
import history from '../assets/images/sidebar/history.png'
import user from '../assets/images/sidebar/user.png'
import options from '../assets/images/sidebar/options.png'

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
        <h1 className={s.title}>Rick&Morty</h1>
        <div className={s.search}>
            <input type="text" placeholder='Search' className={s.input}/>
        </div>
        <ul className={s.defaultList}>
            <Item title='Home' icon={home}/>
            <Item title='History' icon={history}/>
        </ul>
        <button className={s.createCategory}>
            + Create category
        </button>
        <div className={s.myCategories}>
            <h3>My Lists</h3>
            {/* <ul>
                <li></li>
            </ul> */}
        </div>
        <div className={s.user}>
            <img src={user} alt="avatar" className={s.userPhoto}/>
            <span>Guest</span>
            <button className={s.options}><img src={options} alt="options" /></button>
        </div>
    </aside>
  )
}

export default Sidebar