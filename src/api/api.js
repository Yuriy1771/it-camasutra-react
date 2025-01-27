import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '1d9719b2-4c93-4cca-b827-f6e8e5eb5596'},
})

export const usersAPI = {
    getUsersAPI (currentPage = 1, countUsersOfPage = 10) {
        return instance.get(`users?page=${currentPage}&count=${countUsersOfPage}`).then(response => response.data)
    },
    followAPI(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowAPI(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuthDataAPI() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileAPI(id) {
        return instance.get(`profile/${id}`).then(response => response.data)
    },
    getProfileStatusAPI(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data)
    },
    updateProfileStatusAPI(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
}