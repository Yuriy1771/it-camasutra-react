import React from 'react'
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";

const LoginFormRedux = reduxForm({form: 'login',})(LoginForm)

const Login = (props) => {
    const onSubmit = (fromData) => {
        console.log(fromData)
    }
    return (
        <div>
        <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    )
}

export default Login