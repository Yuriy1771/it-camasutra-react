import {authAPI, resultCodeForCaptcha, resultCodesEnum, securityAPI} from "../api/api.ts";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {appStateType} from "./redux-store";

const SET_AUTH_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA = 'auth/SET_CAPTCHA'

export type initStateType = typeof initialState

let initialState: initStateType = {
    id: null as number | null,
    email: '' as string | null,
    login: '' as string | null,
    isAuth: false,
    captcha: null as string | null,
}

const authReducer = (state = initialState, action: actionsType): initStateType => {
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
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type authUserDataType = { type: typeof SET_AUTH_USER_DATA, data: authUserDataDataType }
type captchaACType = { type: typeof SET_CAPTCHA, captcha: string }

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): authUserDataType => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login, isAuth}
})

const setCaptcha = (captcha): captchaACType => ({type: SET_CAPTCHA, captcha})


type actionsType = authUserDataType | captchaACType
export const setAuthUserDataThunk = () => async (dispatch: Dispatch<actionsType>, getUsers: () => appStateType) => {
    const responseAuthData = await authAPI.getAuthDataAPI()
    if (responseAuthData.resultCode === resultCodesEnum.success) {
        let {id, email, login} = responseAuthData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string) =>
    async (dispatch: Dispatch<actionsType>, getUsers: () => appStateType) => {
        const responseLogin = await authAPI.login(email, password, rememberMe, captcha)
        if (responseLogin.resultCode === resultCodesEnum.success) {
            dispatch(setAuthUserDataThunk())
        } else {
            if (responseLogin.resultCode === resultCodeForCaptcha.captchaIsRequired) {
                dispatch(captchaThunk())
            }
            let errorMessage = responseLogin.messages.length > 0 ? responseLogin.messages[0] : 'something error'
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }
    }

export const logoutThunk = () => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    const responseLogout = await authAPI.logout()
    if (responseLogout.resultCode === resultCodesEnum.success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const captchaThunk = () => async (dispatch: Dispatch<actionsType>, getState: () => appStateType) => {
    const responseCaptcha = await securityAPI.getCaptchaAPI()
    const captchaUrl = responseCaptcha.url
    dispatch(setCaptcha(captchaUrl))
}


export default authReducer