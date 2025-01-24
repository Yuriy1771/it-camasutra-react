import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST'
const SET_USER_PROFILE = 'SET_USE_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
    ],
    profile: [],
    newTextPost: '',
    status: '',
}

const profileReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case ADD_POST:
            return stateCopy = {
                ...state,
                posts: [{id: 3, postMessage: state.newTextPost}, ...state.posts],
                newTextPost: '',
            }
        case UPDATE_NEW_TEXT_POST:
            return stateCopy = {
                ...state,
                newTextPost: action.newText,
            }
        case SET_USER_PROFILE:
            return stateCopy = {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return stateCopy = {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST,})
export const updateNewTextPostAC = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text,})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_STATUS, status})

export const getProfileAPIThunk = (userId) => (dispatch) => {
    profileAPI.getProfileAPI(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getProfileStatusThunk = (id) => (dispatch) => {
    profileAPI.getProfileStatusAPI(id).then(data => {
        dispatch(setProfileStatus(data))
    })
}

export const updateProfileStatusThunk = (status) => (dispatch) => {
    profileAPI.updateProfileStatusAPI(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    })
}

export default profileReducer