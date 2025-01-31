import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USE_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO'

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
    ],
    profile: [],
    status: '',
}

const profileReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case ADD_POST:
            return stateCopy = {
                ...state,
                posts: [{id: 3, postMessage: action.postText}, ...state.posts],
            }
        case DELETE_POST:
            return stateCopy = {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
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
        case SET_USER_PHOTO:
            return stateCopy = {
                ...state,
                profile: {...state.profile, photos: action.mainPhoto}
            }
        default:
            return state
    }
}

export const addPostAC = (postText) => ({type: ADD_POST, postText})
export const deletePostAC = (id) => ({type: DELETE_POST, id})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_STATUS, status})
export const setUserMainPhoto = (mainPhoto) => ({type: SET_USER_PHOTO, mainPhoto})

export const getProfileAPIThunk = (userId) => async (dispatch) => {
    const responseProfile = await profileAPI.getProfileAPI(userId)
    dispatch(setUserProfile(responseProfile))
}

export const getProfileStatusThunk = (id) => async (dispatch) => {
    const responseProfileStatus = await profileAPI.getProfileStatusAPI(id)
    dispatch(setProfileStatus(responseProfileStatus))
}

export const updateProfileStatusThunk = (status) => async (dispatch) => {
    const responseProfileStatus = await profileAPI.updateProfileStatusAPI(status)
    if (responseProfileStatus.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export const savePhotoThunk = (mainPhoto) => async (dispatch) => {
    debugger
    const response = await profileAPI.savePhotoAPI(mainPhoto)
    if (response.resultCode === 0) {
        dispatch(setUserMainPhoto(response.data.photos))
    }
}

export default profileReducer