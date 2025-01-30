import React from 'react'
import styles from "./Pagination.module.css";

const Pagination = ({pages, currentPage, onCurrentPageClick}) => {
    return (
        <>
            <div className={styles.pagination}>
                {pages.map((page) => <div onClick={() => onCurrentPageClick(page)}
                                          className={currentPage === page ? styles.selectedPage : styles.numberPage}>{page}</div>)}
            </div>
        </>
    )
}

export default Pagination