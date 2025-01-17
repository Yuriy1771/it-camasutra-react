const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'

let initialState = {
    users: [],
    countUsersOfPage: 10,
    totalUsersCount: 0,
    currentPage: 1,
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
    }
    return state
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount})

export default friendsReducer