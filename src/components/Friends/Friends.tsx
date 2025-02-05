import React, {FC} from 'react'
import Pagination from "../other/Pagination/Pagination.tsx";
import Friend from "./Friend.tsx";
import {usersType} from "../../types/types";

type propsType = {totalUsersCount: number, countUsersOfPage: number, followThunk:(id:number) => void, unfollowThunk:(id:number) => void,
    users:usersType[], isDisabledFollow:number[], currentPage:number, onCurrentPageClick: (page:number) => void}

const Friends:FC<propsType> = ({totalUsersCount, countUsersOfPage, followThunk, unfollowThunk,
                     users, isDisabledFollow, currentPage, onCurrentPageClick}) => {
    return (
        <div>
            {users.map((user:usersType) => <Friend key={user.id} user={user} isDisabledFollow={isDisabledFollow}
                                         followThunk={followThunk} unfollowThunk={unfollowThunk}/>)
            }
            <Pagination currentPage={currentPage} onCurrentPageClick={onCurrentPageClick}
                        totalUsersCount={totalUsersCount} countUsersOfPage={countUsersOfPage}/>
        </div>
    )
}

export default Friends