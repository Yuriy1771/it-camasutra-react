import React, {useEffect, useState} from 'react'
import styles from "./Pagination.module.css";

type propsType = {currentPage: number, onCurrentPageClick:(page:number)=>void, totalUsersCount:number, countUsersOfPage:number, portionSize?: number}

const Pagination:React.FC<propsType> = ({currentPage, onCurrentPageClick, totalUsersCount, countUsersOfPage, portionSize = 10}) => {

    let pagesCount:number = Math.ceil(totalUsersCount / countUsersOfPage)
    let pages:number[] = []
    for (let i:number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)),[currentPage, portionSize])

    let portionCount:number = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber:number = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber:number = portionNumber * portionSize
    return (
        <>
            <div className={styles.pagination}>
                {portionNumber > 0 &&
                    <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={portionNumber === 1} className={styles.prevBtn}>{'<<'}</button>}
                {
                    pages.filter((page) => page >= leftPortionPageNumber && page<= rightPortionPageNumber)
                        .map((page) => <div onClick={() => onCurrentPageClick(page)}
                                          className={currentPage === page ? styles.selectedPage : styles.numberPage}>{page}</div>)}
                {portionCount > portionNumber &&
                    <button onClick={() => setPortionNumber(portionNumber +1)} className={styles.nextBtn}>{'>>'}</button>}
            </div>
        </>
    )
}

export default Pagination