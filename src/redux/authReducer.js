import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return stateCopy = {
                ...state,
                ...action.data,
            }
        default: return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}})

export const setAuthUserDataThunk = () => (dispatch) => {
    authAPI.getAuthDataAPI().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0) {
            dispatch(setAuthUserDataThunk())
        }
    })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(data => {
        if(data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer