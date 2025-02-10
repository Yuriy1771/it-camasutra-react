import React, {FC, useEffect} from 'react'
import Pagination from "../other/Pagination/Pagination.tsx";
import Friend from "./Friend.tsx";
import {usersType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {
    getCountUsersOfPage,
    getCurrentPage, getIsDisabledFollow,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/selectors/friendsSelector.ts";
import {followThunk, getUsersThunk, unfollowThunk} from "../../redux/friendsReducer.ts";

type propsType = {}

const Friends:FC<propsType> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const countUsersOfPage = useSelector(getCountUsersOfPage)
    const users = useSelector(getUsersSelector)
    const isDisabledFollow = useSelector(getIsDisabledFollow)

    useEffect(() => {
        dispatch(getUsersThunk(currentPage, countUsersOfPage))
    },[])

    const dispatch = useDispatch()

    const onCurrentPageClick = (pageNumber) => {
        dispatch(getUsersThunk(pageNumber, countUsersOfPage))
    }

    const follow = (id:number) => {
        dispatch(followThunk(id))
    }

    const unfollow = (id:number) => {
        dispatch(unfollowThunk(id))
    }
    return (
        <div>
            {users.map((user:usersType) => <Friend key={user.id} user={user} isDisabledFollow={isDisabledFollow}
                                                   follow={follow} unfollow={unfollow}/>)
            }
            <Pagination currentPage={currentPage} onCurrentPageClick={onCurrentPageClick}
                        totalUsersCount={totalUsersCount} countUsersOfPage={countUsersOfPage}/>
        </div>
    )
}

export default Friends