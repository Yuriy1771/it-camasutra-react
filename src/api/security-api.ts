import {instance} from "./api";

type captchaType = {url:string}
export const securityAPI = {
    getCaptchaAPI() {
        return instance.get<captchaType>(`security/get-captcha-url`).then(response => response.data)
    }
}