import React from 'react'
import {Field} from "redux-form";
import {createField, Input} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from '../other/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {

    const maxLength = maxLengthCreator(50)

    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'email', Input, required, maxLength)}
            {createField('password', 'password', Input, required, maxLength, 'password')}
            {createField('', 'rememberMe', Input, required, maxLength, 'checkbox', 'remember me')}
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm