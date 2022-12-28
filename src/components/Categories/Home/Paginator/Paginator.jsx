import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import s from '../Home.module.scss'
import Button from './Button'

const Paginator = ({portionSize = 5, pages, ...props}) => {

    const [currentPage, setCurrentPage] = useState(1);
    const onButtonClick = (page) => {
        setCurrentPage(page)
        props.updateCurrPage(page)
    }

    const [portionNumber, setPortionNumber] = useState(1);
    const portionsCount = Math.ceil(pages / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const pagesCount = [];
    for(let i = 1; i <= pages; i++){
        pagesCount.push(i)
    }
    
    const minusPortionNumber = () => {
        if(portionNumber <= 1) {
            setPortionNumber(1)
        } else {
            setPortionNumber(portionNumber - 1)
        }
    }
    const plusPortionNumber = () => {
        if(portionNumber == portionsCount) {
            setPortionNumber(portionNumber)
        } else {
            setPortionNumber(portionNumber + 1)
        }
    }

    window.portionNumber = portionNumber;

  return (
    <div className={s.paginator}>
        <div className={s.buttons}>
            <Button inner='<' onClick={(e) => {minusPortionNumber()}}/>
                {pagesCount
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                        return <Link to={`/home?page=${p}`} key={p}><button className={p == currentPage ? s.currPageButton : s.button} key={p}
                            onClick={(e) => onButtonClick(p)}>{p}</button></Link>
                    })}
            <Button inner='>' onClick={(e) => {plusPortionNumber()}}/>
        </div>
    </div>
  )

}

export default Paginator