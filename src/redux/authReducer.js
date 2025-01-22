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
                isAuth: true
            }
        default: return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}})

export const setAuthUserDataThunk = () => (dispatch) => {
    authAPI.getAuthDataAPI().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer