import React, {FC} from 'react'
import LoginForm from "./LoginForm.tsx";
import { useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../redux/authReducer.ts";
import {Navigate} from "react-router-dom";
import {appStateType} from "../../redux/redux-store";
import styles from './LoginForm.module.css'

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
        <div className={styles.wrapperLogin}>
            <div className={styles.loginText}>
                <h2>LOGIN</h2>
            </div>
        <LoginForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}

export default Login