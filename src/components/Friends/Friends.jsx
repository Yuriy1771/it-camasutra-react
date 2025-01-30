import React from 'react'
import Pagination from "../other/Pagination/Pagination";
import Friend from "./Friend";

const Friends = ({totalUsersCount, countUsersOfPage, followThunk, unfollowThunk,
                     users, isDisabledFollow, currentPage, onCurrentPageClick}) => {

    let pagesCount = Math.ceil(totalUsersCount / countUsersOfPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {users.map((user) => <Friend key={user.id} user={user} isDisabledFollow={isDisabledFollow}
                                         followThunk={followThunk} unfollowThunk={unfollowThunk}/>)
            }
            <Pagination pages={pages} currentPage={currentPage} onCurrentPageClick={onCurrentPageClick}/>
        </div>
    )
}

export default Friends