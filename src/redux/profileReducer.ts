import {profileAPI} from "../api/api.js";
import {stopSubmit} from "redux-form";
import {photosType, postsType, profileType} from "../types/types";

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USE_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO'
const SET_ABOUT_ME = 'profile/SET_ABOUT_ME'

export type initialStateType = typeof initialState

let initialState:initialStateType = {
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
    ] as postsType[],
    profile: [] as profileType | null,
    status: '',
}

const profileReducer = (state = initialState, action:any):initialStateType => {
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
        case SET_ABOUT_ME:
            return stateCopy = {
                ...state,
                profile: {...state.profile, profile: action.data}
            }
        default:
            return state
    }
}

type addPostACType = {type: typeof ADD_POST, postText: string}
type deletePostACType = {type: typeof DELETE_POST, id: number}
type setUserProfileACType = {type: typeof SET_USER_PROFILE, profile: profileType}
type setProfileStatusACType = {type: typeof SET_STATUS, status: string}
type setUserMainPhotoACType = {type: typeof SET_USER_PHOTO, mainPhoto: photosType}
type setDataProfileInfoACType = {type: typeof SET_ABOUT_ME, data:string}

export const addPostAC = (postText:string):addPostACType => ({type: ADD_POST, postText})
export const deletePostAC = (id:number):deletePostACType => ({type: DELETE_POST, id})
export const setUserProfile = (profile:profileType):setUserProfileACType => ({type: SET_USER_PROFILE, profile})
export const setProfileStatus = (status:string):setProfileStatusACType => ({type: SET_STATUS, status})
export const setUserMainPhoto = (mainPhoto:photosType):setUserMainPhotoACType => ({type: SET_USER_PHOTO, mainPhoto})
export const setDataProfileInfo = (data:string):setDataProfileInfoACType => ({type: SET_ABOUT_ME, data})

export const getProfileAPIThunk = (userId:number) => async (dispatch:any) => {
    const responseProfile = await profileAPI.getProfileAPI(userId)
    dispatch(setUserProfile(responseProfile))
}

export const getProfileStatusThunk = (id:number) => async (dispatch:any) => {
    const responseProfileStatus = await profileAPI.getProfileStatusAPI(id)
    dispatch(setProfileStatus(responseProfileStatus))
}

export const updateProfileStatusThunk = (status:string) => async (dispatch:any) => {
    const responseProfileStatus = await profileAPI.updateProfileStatusAPI(status)
    if (responseProfileStatus.resultCode === 0) {
        dispatch(setProfileStatus(status))
    }
}

export const savePhotoThunk = (mainPhoto:any) => async (dispatch:any) => {
    const response = await profileAPI.savePhotoAPI(mainPhoto)
    if (response.resultCode === 0) {
        dispatch(setUserMainPhoto(response.data.photos))
    }
}

export const saveProfileInfoThunk = (data:string) => async (dispatch:any) => {
    const response = await profileAPI.putProfileInfo(data)
    if(response.resultCode === 0) {
        dispatch(setDataProfileInfo(data))
    } else {
        let errorMessage = response.messages.length > 0 ? response.messages[0] : 'something error'
        dispatch(stopSubmit('editProfile'), {_error: errorMessage})
    }
}

export default profileReducer