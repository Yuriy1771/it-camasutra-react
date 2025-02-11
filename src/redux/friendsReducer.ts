import {resultCodesEnum, usersAPI} from "../api/api.ts";
import {updateObjectInArray} from "../utils/helpers/objectHelpers.js";
import {usersType} from "../types/types";
import {Dispatch} from "redux";
import {appStateType, inferActionsTypes} from "./redux-store";

type initialStateType = typeof initialState
let initialState: initialStateType = {
    users: [] as usersType,
    countUsersOfPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoader: true,
    isDisabledFollow: [] as number[], //array of users ids
    filter: {
        term: ''
    }
}

const friendsReducer = (state = initialState, action: actionsType): initialStateType => {
    let stateCopy
    switch (action.type) {
        case 'FOLLOW':
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: true})
            }
        case 'UNFOLLOW':
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
            }
        case 'SET_USERS':
            return stateCopy = {...state, users: action.users}
        case 'SET_USERS_TOTAL_COUNT':
            return stateCopy = {...state, totalUsersCount: action.usersCount}
        case 'SET_CURRENT_PAGE':
            return stateCopy = {...state, currentPage: action.currentPage}
        case 'SET_PRELOADER':
            return stateCopy = {...state, isLoader: action.isLoader}
        case 'IS_DISABLED_FOLLOW':
            return stateCopy = {
                ...state, isDisabledFollow: action.isDisabledFollow
                    ? [...state.isDisabledFollow, action.id]
                    : state.isDisabledFollow.filter(id => id !== action.id)
            }
        case "SET_FILTER":
            return stateCopy = {...state, filter: action.term}
    }
    return state
}

export type filterType = typeof initialState.filter
type actionsType = inferActionsTypes<typeof actions>

export const actions = {
    follow: (userId: number) => ({type: 'FOLLOW', userId} as const),
    unfollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    setUsers: (users: usersType) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (usersCount: number) => ({type: 'SET_USERS_TOTAL_COUNT', usersCount} as const),
    setPreloader: (isLoader: boolean) => ({type: 'SET_PRELOADER', isLoader} as const),
    setIsDisabledFollow: (isDisabledFollow: boolean, id: number) => ({type: 'IS_DISABLED_FOLLOW', isDisabledFollow, id} as const),
    setFilter: (term:string) => ({type: 'SET_FILTER', term} as const),
}

export const getUsersThunk = (currentPage: number, countUsersOfPage: number, term: string) =>
    async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
        dispatch(actions.setPreloader(true))
        dispatch(actions.setCurrentPage(currentPage))
        debugger
        dispatch(actions.setFilter(term))
        const responseUsers = await usersAPI.getUsersAPI(currentPage, countUsersOfPage, term)
        dispatch(actions.setPreloader(false))
        dispatch(actions.setUsers(responseUsers.items))
        dispatch(actions.setTotalUsersCount(responseUsers.totalCount))
    }

const followUnfollow = async (dispatch: Dispatch<actionsType>, id: number, apiMethod: any,
                              actionCreator: (id: number) => actionsType) => {
    dispatch(actions.setIsDisabledFollow(true, id))
    const responseUnfollow = await apiMethod(id)
    if (responseUnfollow.resultCode === resultCodesEnum.success) {
        dispatch(actionCreator(id))
    }
    dispatch(actions.setIsDisabledFollow(false, id))
}

export const followThunk = (id: number) => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    await followUnfollow(dispatch, id, usersAPI.followAPI.bind(usersAPI), actions.follow)
}

export const unfollowThunk = (id: number) => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    await followUnfollow(dispatch, id, usersAPI.unfollowAPI.bind(usersAPI), actions.unfollow)
}

export default friendsReducer