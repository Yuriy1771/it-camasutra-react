import React, {FC} from 'react'
import LoginForm from "./LoginForm.jsx";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";

const LoginFormRedux = reduxForm({form: 'login',})(LoginForm)

type propsType = {loginThunk: any, isAuth: boolean, captcha: string}
type mapStatePropsType = {isAuth: boolean, captcha: string}
type mapDispatchPropsType = {loginThunk:(email: string, password: number, rememberMe: boolean, captcha: string) => void, logoutThunk: () => void}

const Login:FC<propsType> = ({loginThunk, isAuth, captcha}) => {
    const onSubmit = (formData) => {
        loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(isAusth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
        <LoginFormRedux onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}

const mapStateToProps = (state):mapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect<mapStatePropsType, mapDispatchPropsType>(mapStateToProps, {
    loginThunk,
    logoutThunk,
})(Login)