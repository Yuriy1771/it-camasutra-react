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