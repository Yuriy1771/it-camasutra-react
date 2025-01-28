import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.friendsPage.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getCountUsersOfPage = (state) => {
    return state.friendsPage.countUsersOfPage
}

export const getIsLoader = (state) => {
    return state.friendsPage.isLoader
}

export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount
}

export const getIsDisabledFollow = (state) => {
    return state.friendsPage.isDisabledFollow
}

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage
}