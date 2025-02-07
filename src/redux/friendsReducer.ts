import {usersAPI} from "../api/api.ts";
import {updateObjectInArray} from "../utils/helpers/objectHelpers.js";
import {photosType, usersType} from "../types/types";
import {Dispatch} from "redux";
import {appStateType} from "./redux-store";

const FOLLOW = 'friends/FOLLOW'
const UNFOLLOW = 'friends/UNFOLLOW'
const SET_USERS = 'friends/SET_USERS'
const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'friends/SET_USERS_TOTAL_COUNT'
const SET_PRELOADER = 'friends/SET_PRELOADER'
const IS_DISABLED_FOLLOW = 'friends/IS_DISABLED_FOLLOW'

type initialStateType = typeof initialState
let initialState: initialStateType = {
    users: [] as usersType,
    countUsersOfPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoader: true,
    isDisabledFollow: [] as number[], //array of users ids
}

const friendsReducer = (state = initialState, action: actionsType): initialStateType => {
    let stateCopy
    switch (action.type) {
        case FOLLOW:
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: true})
            }
        case UNFOLLOW:
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
            }
        case SET_USERS:
            return stateCopy = {...state, users: action.users}
        case SET_USERS_TOTAL_COUNT:
            return stateCopy = {...state, totalUsersCount: action.usersCount}
        case SET_CURRENT_PAGE:
            return stateCopy = {...state, currentPage: action.currentPage}
        case SET_PRELOADER:
            return stateCopy = {...state, isLoader: action.isLoader}
        case IS_DISABLED_FOLLOW:
            return stateCopy = {
                ...state, isDisabledFollow: action.isDisabledFollow
                    ? [...state.isDisabledFollow, action.id]
                    : state.isDisabledFollow.filter(id => id !== action.id)
            }
    }
    return state
}
type actionsType = (followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCount |
    setPreloaderACType | setIsDisabledFollowACType)

type followACType = { type: typeof FOLLOW, userId: number }
type unfollowACType = { type: typeof UNFOLLOW, userId: number }
type setUsersACType = { type: typeof SET_USERS, users: usersType }
type setCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
type setTotalUsersCount = { type: typeof SET_USERS_TOTAL_COUNT, usersCount: number }
type setPreloaderACType = { type: typeof SET_PRELOADER, isLoader: boolean }
type setIsDisabledFollowACType = { type: typeof IS_DISABLED_FOLLOW, isDisabledFollow: boolean, id: number }

export const follow = (userId: number): followACType => ({type: FOLLOW, userId})
export const unfollow = (userId: number): unfollowACType => ({type: UNFOLLOW, userId})
export const setUsers = (users: usersType): setUsersACType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount: number): setTotalUsersCount => ({
    type: SET_USERS_TOTAL_COUNT,
    usersCount
})
export const setPreloader = (isLoader: boolean): setPreloaderACType => ({type: SET_PRELOADER, isLoader})
export const setIsDisabledFollow = (isDisabledFollow: boolean, id: number): setIsDisabledFollowACType => ({
    type: IS_DISABLED_FOLLOW,
    isDisabledFollow,
    id
})

export const getUsersThunk = (currentPage: number, countUsersOfPage: number) =>
    async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
        dispatch(setPreloader(true))
        const responseUsers = await usersAPI.getUsersAPI(currentPage, countUsersOfPage)
        dispatch(setPreloader(false))
        dispatch(setUsers(responseUsers.items))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(responseUsers.totalCount))
    }

const followUnfollow = async (dispatch: Dispatch<actionsType>, id: number, apiMethod: any,
                              actionCreator: (id: number) => followACType | unfollowACType) => {
    dispatch(setIsDisabledFollow(true, id))
    const responseUnfollow = await apiMethod(id)
    if (responseUnfollow.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setIsDisabledFollow(false, id))
}

export const followThunk = (id: number) => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    await followUnfollow(dispatch, id, usersAPI.followAPI.bind(usersAPI), follow)
}

export const unfollowThunk = (id: number) => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    await followUnfollow(dispatch, id, usersAPI.unfollowAPI.bind(usersAPI), unfollow)
}

export default friendsReducer