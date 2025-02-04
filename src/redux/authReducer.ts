import {authAPI, securityAPI} from "../api/api.js";
import {stopSubmit} from "redux-form";
const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

export type initStateType = typeof initialState

let initialState: initStateType = {
    id: null as number | null,
    email: '' as  string | null,
    login: '' as  string | null,
    isAuth: false,
    captcha: null as  string | null,
}

const authReducer = (state = initialState, action: any): initStateType => {
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

type authUserDataDataType = {
    id: number|null
    email: string|null
    login: string|null
    isAuth: boolean
}

type authUserDataType = {
    type: typeof SET_AUTH_USER_DATA
    data: authUserDataDataType
}
export const setAuthUserData = (id: number|null, email: string|null, login: string|null, isAuth: boolean): authUserDataType => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
})

type captchaACType = {
    type: typeof SET_CAPTCHA,
    captcha: string,
}

const setCaptcha = (captcha): captchaACType => ({type: SET_CAPTCHA, captcha})

export const setAuthUserDataThunk = () => async (dispatch: any) => {
    const responseAuthData = await authAPI.getAuthDataAPI()
    if (responseAuthData.resultCode === 0) {
        let {id, email, login} = responseAuthData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginThunk = (email: string, password: number, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const responseLogin = await authAPI.login(email, password, rememberMe, captcha)
    if (responseLogin.resultCode === 0) {
        dispatch(setAuthUserDataThunk())
    } else {
        if (responseLogin.resultCode === 10) {
            dispatch(captchaThunk())
        }
        let errorMessage = responseLogin.messages.length > 0 ? responseLogin.messages[0] : 'something error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logoutThunk = () => async (dispatch: any) => {
    const responseLogout = await authAPI.logout()
    if (responseLogout.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const captchaThunk = () => async (dispatch: any) => {
    const responseCaptcha = await securityAPI.getCaptchaAPI()
    const captchaUrl = responseCaptcha.url
    dispatch(setCaptcha(captchaUrl))
}


export default authReducer