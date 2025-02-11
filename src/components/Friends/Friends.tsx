import React, {FC, useEffect} from 'react'
import Pagination from "../other/Pagination/Pagination.tsx";
import Friend from "./Friend.tsx";
import {usersType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {
    getCountUsersOfPage,
    getCurrentPage, getIsDisabledFollow, getTerm,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/selectors/friendsSelector.ts";
import {filterType, followThunk, getUsersThunk, unfollowThunk} from "../../redux/friendsReducer.ts";
import FriendsSearchForm from "./FriendsSearchForm.tsx";

type propsType = {}

const Friends:FC<propsType> = () => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const countUsersOfPage = useSelector(getCountUsersOfPage)
    const users = useSelector(getUsersSelector)
    const isDisabledFollow = useSelector(getIsDisabledFollow)
    const term = useSelector(getTerm)

    useEffect(() => {
        dispatch(getUsersThunk(currentPage, countUsersOfPage, term))
    },[])

    const dispatch = useDispatch()

    const onCurrentPageClick = (pageNumber) => {
        dispatch(getUsersThunk(pageNumber, countUsersOfPage, term))
    }

    const onFilterChanged = (filter: filterType) => {
        dispatch(getUsersThunk(1, countUsersOfPage, filter))
    }

    const follow = (id:number) => {
        dispatch(followThunk(id))
    }

    const unfollow = (id:number) => {
        dispatch(unfollowThunk(id))
    }
    return (
        <div>
            <FriendsSearchForm onFilterChanged={onFilterChanged}/>
            {users.map((user:usersType) => <Friend key={user.id} user={user} isDisabledFollow={isDisabledFollow}
                                                   follow={follow} unfollow={unfollow}/>)
            }
            <Pagination currentPage={currentPage} onCurrentPageClick={onCurrentPageClick}
                        totalUsersCount={totalUsersCount} countUsersOfPage={countUsersOfPage}/>
        </div>
    )
}

export default Friends