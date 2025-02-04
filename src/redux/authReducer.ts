import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false,
    captcha: null,
}

const authReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return stateCopy = {
                ...state,
                ...action.data,
            }
        case SET_CAPTCHA:
            return stateCopy = {
                ...state,
                captcha: action.captcha,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
})
const setCaptcha = (captcha) => ({type: SET_CAPTCHA, captcha})

export const setAuthUserDataThunk = () => async (dispatch) => {
    const responseAuthData = await authAPI.getAuthDataAPI()
    if (responseAuthData.resultCode === 0) {
        let {id, email, login} = responseAuthData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
    const responseLogin = await authAPI.login(email, password, rememberMe, captcha)
    if (responseLogin.resultCode === 0) {
        dispatch(setAuthUserDataThunk())
    } else {
        if(responseLogin.resultCode === 10) {
            dispatch(captchaThunk())
        }
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

export const captchaThunk = () => async (dispatch) => {
    const responseCaptcha = await securityAPI.getCaptchaAPI()
    const captchaUrl = responseCaptcha.url
    dispatch(setCaptcha(captchaUrl))
}


export default authReducer