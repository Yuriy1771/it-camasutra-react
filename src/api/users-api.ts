import {usersType} from "../types/types";
import {instance, resultCodesEnum} from "./api";

type getUsersType = {items: usersType[], totalCount: number, error: string | null}
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