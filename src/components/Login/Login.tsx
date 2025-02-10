import React, {FC} from 'react'
import LoginForm, {loginFormType} from "./LoginForm.tsx";
import {reduxForm} from "redux-form";
import { useDispatch, useSelector} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";
import {appStateType} from "../../redux/redux-store";

export type LoginFormOwnProps = {captcha: string|null}
const LoginFormRedux = reduxForm<loginFormType, LoginFormOwnProps>({form: 'login',})(LoginForm)

type propsType = {}

const Login:FC<propsType> = () => {

    const isAuth = useSelector((state:appStateType) =>state.auth.isAuth)
    const captcha = useSelector((state:appStateType) => state.auth.captcha)
    const dispatch = useDispatch()

    const onSubmit = (formData: any) => {
        dispatch(loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha))
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

export default Login