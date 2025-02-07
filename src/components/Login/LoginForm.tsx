import React, {FC} from 'react'
import {InjectedFormProps} from "redux-form";
import {createField, Input} from "../other/FormsControls/FormsControls.tsx";
import {maxLengthCreator, required} from "../../utils/validators/validators.ts";
import styles from '../other/FormsControls/FormsControls.module.css'
import {LoginFormOwnProps} from "./Login";

export type loginFormType = { email: string, password: string, rememberMe: boolean, captcha: string }
type loginFormValuesTypeKeys = Extract<keyof loginFormType,string>


const LoginForm:FC<InjectedFormProps<loginFormType,LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captcha}) => {

    const maxLength = maxLengthCreator(50)

    return (
        <form onSubmit={handleSubmit}>
            {createField<loginFormValuesTypeKeys>('email', 'email', Input, required, maxLength)}
            {createField<loginFormValuesTypeKeys>('password', 'password', Input, required, maxLength, 'password')}
            {createField<loginFormValuesTypeKeys>(undefined, 'rememberMe', Input, required, maxLength, 'checkbox', 'remember me')}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
            {captcha && <img src={captcha} alt="captcha"/>}
            {captcha && createField<loginFormValuesTypeKeys>('enter symbols from picture', 'captcha', Input, required, maxLength) }
        </form>
    )
}

export default LoginForm