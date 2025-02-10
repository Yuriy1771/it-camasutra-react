import {profileType} from "../types/types";
import {resultCodesEnum} from "./auth-api";
import {instance} from "./api";

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