import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";

const LoginFormRedux = reduxForm({form: 'login',})(LoginForm)

const Login = ({loginThunk, isAuth, captcha}) => {
    const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})

export default connect(mapStateToProps, {
    loginThunk,
    logoutThunk,
})(Login)