import React, {useState} from 'react'
import s from '../Home.module.scss'
import Button from './Button'

const Paginator = ({portionSize = 5, pages, ...props}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const onButtonClick = (page) => {
        setCurrentPage(page)
        props.updateCurrPage(page)
    }

    // const [portionNumber, setPortionNumber] = useState(1);
    // const portionsCount = Math.ceil(pages / portionSize);

    const pagesCount = [];
    for(let i = 1; i <= pages; i++){
        pagesCount.push(i)
    }
    

  return (
    <div className={s.paginator}>
        {/* {leftPortionNumber > 1 && <Button inner={'<'}/>} */}
        <div className={s.buttons}>
            <Button inner='<'/>
                {pagesCount.map((p) => {
                    return <button className={p == currentPage ? s.currPageButton : s.button} key={p}
                        onClick={(e) => onButtonClick(p)}>{p}</button>
                })}
            <Button inner='>'/>
        </div>
        {/* {rightPortionNumber > } */}
    </div>
  )

}

export default Paginator