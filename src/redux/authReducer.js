import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return stateCopy = {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
})

export const setAuthUserDataThunk = () => async (dispatch) => {
    const responseAuthData = await authAPI.getAuthDataAPI()
    if (responseAuthData.resultCode === 0) {
        let {id, email, login} = responseAuthData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    const responseLogin = await authAPI.login(email, password, rememberMe)
    if (responseLogin.resultCode === 0) {
        dispatch(setAuthUserDataThunk())
    } else {
        let errorMessage = responseLogin.messages.length > 0 ? responseLogin.messages[0] : 'something error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logoutThunk = () => async (dispatch) => {
    const responseLogout = await authAPI.logout()
    if (responseLogout.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer