import React from 'react'
import Pagination from "../other/Pagination/Pagination";
import Friend from "./Friend";

const Friends = ({totalUsersCount, countUsersOfPage, followThunk, unfollowThunk,
                     users, isDisabledFollow, currentPage, onCurrentPageClick}) => {
    return (
        <div>
            {users.map((user) => <Friend key={user.id} user={user} isDisabledFollow={isDisabledFollow}
                                         followThunk={followThunk} unfollowThunk={unfollowThunk}/>)
            }
            <Pagination currentPage={currentPage} onCurrentPageClick={onCurrentPageClick}
                        totalUsersCount={totalUsersCount} countUsersOfPage={countUsersOfPage}/>
        </div>
    )
}

export default Friends