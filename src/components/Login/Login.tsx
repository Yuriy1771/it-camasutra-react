import React, {FC} from 'react'
import LoginForm, {loginFormType} from "./LoginForm.tsx";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";
import {appStateType} from "../../redux/redux-store";

export type LoginFormOwnProps = {captcha: string|null}
const LoginFormRedux = reduxForm<loginFormType, LoginFormOwnProps>({form: 'login',})(LoginForm)

type propsType = {loginThunk: (email: string, password: number, rememberMe: boolean, captcha: string) => void, isAuth: boolean, captcha: string|null}
type mapStatePropsType = {isAuth: boolean, captcha: string}
type mapDispatchPropsType = {loginThunk:(email: string, password: number, rememberMe: boolean, captcha: string) => void, logoutThunk: () => void}

const Login:FC<propsType> = ({loginThunk, isAuth, captcha}) => {
    const onSubmit = (formData: any) => {
        loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
        <LoginFormRedux onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}

const mapStateToProps = (state:appStateType):mapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect<mapStatePropsType, mapDispatchPropsType, appStateType>(mapStateToProps, {
    loginThunk,
    logoutThunk,
})(Login)