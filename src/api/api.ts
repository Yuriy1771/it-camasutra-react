import axios from "axios";
import {profileType, usersType} from "../types/types";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '1d9719b2-4c93-4cca-b827-f6e8e5eb5596'},
})

type getUsersType = {items: usersType, totalCount: number, error: string}
type followUnfollowType = {resultCode: resultCodesEnum, messages: string[], data:{}}

export const usersAPI = {
    getUsersAPI(currentPage:number = 1, countUsersOfPage:number = 10) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${countUsersOfPage}`).then(response => response.data)
    },
    followAPI(id:number) {
        return instance.post<followUnfollowType>(`follow/${id}`).then(response => response.data)
    },
    unfollowAPI(id:number) {
        return instance.delete<followUnfollowType>(`follow/${id}`).then(response => response.data)
    }
}
export enum resultCodesEnum {success = 0, error = 1,}
export enum resultCodeForCaptcha {captchaIsRequired = 10,}
export type getAuthType = {data: {id: number, email: string, login: string}, resultCode: resultCodesEnum, messages: string[]}
type loginType = {data: {userId: number}, messages: string[], resultCode: resultCodeForCaptcha|resultCodesEnum}
type logoutType = {resultCode: resultCodesEnum, messages: string[], data: {}}

export const authAPI = {
    getAuthDataAPI() {
        return instance.get<getAuthType>(`auth/me`).then(response => response.data)
    },
    login(email:string, password:string, rememberMe:boolean = false, captcha:string|null = null) {
        return instance.post<loginType>(`auth/login`, {email, password, rememberMe, captcha}).then(response => response.data)
    },
    logout() {
        return instance.delete<logoutType>(`auth/login`).then(response => response.data)
    }
}

type updateProfileStatusType = {resultCode: resultCodesEnum, messages:string[], data:{}}
type savePhotoType = updateProfileStatusType
type putProfileInfoType = updateProfileStatusType
export const profileAPI = {
    getProfileAPI(id:number) {
        return instance.get<profileType>(`profile/${id}`).then(response => response.data)
    },
    getProfileStatusAPI(id:number) {
        return instance.get<string>(`profile/status/${id}`).then(response => response.data)
    },
    updateProfileStatusAPI(status:string) {
        return instance.put<updateProfileStatusType>(`profile/status`, {status: status}).then(response => response.data)
    },
    savePhotoAPI(mainPhoto:any) {
        const formData = new FormData()
        formData.append('image', mainPhoto)
        return instance.put<savePhotoType>(`profile/photo`, formData).then(response => response.data)
    },
    putProfileInfo(data:profileType) {
        return instance.put<putProfileInfoType>(`profile`, data).then(response => response.data)
    }
}

type captchaType = {url:string}
export const securityAPI = {
    getCaptchaAPI() {
        return instance.get<captchaType>(`security/get-captcha-url`).then(response => response.data)
    }
}