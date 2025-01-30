import React, {useEffect, useState} from 'react'
import styles from "./Pagination.module.css";

const Pagination = ({currentPage, onCurrentPageClick, totalUsersCount, countUsersOfPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / countUsersOfPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => setPortionNumber(Math.ceil(currentPage / portionSize)),[currentPage, portionSize])

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
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