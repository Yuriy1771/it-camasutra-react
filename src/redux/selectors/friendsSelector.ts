import {createSelector} from "reselect";
import {appStateType} from "../redux-store.ts";

const getUsers = (state:appStateType) => {
    return state.friendsPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getCountUsersOfPage = (state:appStateType) => {
    return state.friendsPage.countUsersOfPage
}

export const getIsLoader = (state:appStateType) => {
    return state.friendsPage.isLoader
}

export const getTotalUsersCount = (state:appStateType) => {
    return state.friendsPage.totalUsersCount
}

export const getIsDisabledFollow = (state:appStateType) => {
    return state.friendsPage.isDisabledFollow
}

export const getCurrentPage = (state:appStateType) => {
    return state.friendsPage.currentPage
}

export const getTerm = (state:appStateType) => {
    return state.friendsPage.filter
}