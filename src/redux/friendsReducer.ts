import {usersAPI} from "../api/api.js";
import {updateObjectInArray} from "../utils/helpers/objectHelpers.js";

const FOLLOW = 'friends/FOLLOW'
const UNFOLLOW = 'friends/UNFOLLOW'
const SET_USERS = 'friends/SET_USERS'
const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'friends/SET_USERS_TOTAL_COUNT'
const SET_PRELOADER = 'friends/SET_PRELOADER'
const IS_DISABLED_FOLLOW = 'friends/IS_DISABLED_FOLLOW'

let initialState = {
    users: [],
    countUsersOfPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoader: true,
    isDisabledFollow: [],
}

const friendsReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case FOLLOW:
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId,{followed: true})
            }
        case UNFOLLOW:
            return stateCopy = {
                ...state,
                users: updateObjectInArray(state.users, action.userId,{followed: false})
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

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount})
export const setPreloader = (isLoader) => ({type: SET_PRELOADER, isLoader})
export const setIsDisabledFollow = (isDisabledFollow, id) => ({type: IS_DISABLED_FOLLOW, isDisabledFollow, id})

export const getUsersThunk = (currentPage, countUsersOfPage) => async (dispatch) => {
    dispatch(setPreloader(true))
    const responseUsers = await usersAPI.getUsersAPI(currentPage, countUsersOfPage)
    dispatch(setPreloader(false))
    dispatch(setUsers(responseUsers.items))
    dispatch(setCurrentPage(currentPage))
    dispatch(setTotalUsersCount(responseUsers.totalCount))
}

const followUnfollow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setIsDisabledFollow(true, id))
    const responseUnfollow = await apiMethod(id)
    if (responseUnfollow.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(setIsDisabledFollow(false, id))
}

export const followThunk = (id) => async (dispatch) => {
    await followUnfollow(dispatch, id, usersAPI.followAPI.bind(usersAPI), follow)
}

export const unfollowThunk = (id) => async (dispatch) => {
    await followUnfollow(dispatch, id, usersAPI.unfollowAPI.bind(usersAPI), unfollow)
}

export default friendsReducer