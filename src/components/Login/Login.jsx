import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";

const LoginFormRedux = reduxForm({form: 'login',})(LoginForm)

const Login = ({loginThunk, isAuth}) => {
    const onSubmit = (formData) => {
        loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if(isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
        <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {
    loginThunk,
    logoutThunk,
})(Login)