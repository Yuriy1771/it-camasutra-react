const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_PRELOADER = 'SET_PRELOADER'
const IS_DISABLED_FOLLOW = 'IS_DISABLED_FOLLOW'

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
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return stateCopy = {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case SET_USERS:
            return stateCopy = {...state, users: action.users,}
        case SET_USERS_TOTAL_COUNT:
            return stateCopy = {...state, totalUsersCount: action.usersCount}
        case SET_CURRENT_PAGE:
            return stateCopy = {...state, currentPage: action.currentPage}
        case SET_PRELOADER:
            return stateCopy = {...state, isLoader: action.isLoader}
        case IS_DISABLED_FOLLOW:
            return stateCopy = {...state, isDisabledFollow: action.isDisabledFollow
                    ?[...state.isDisabledFollow, action.id]
                    : state.isDisabledFollow.filter(id => id != action.id)}
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

export default friendsReducer