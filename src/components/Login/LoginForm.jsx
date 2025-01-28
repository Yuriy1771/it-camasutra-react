import React from 'react'
import {Field} from "redux-form";
import {Input} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import styles from '../other/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {

    const maxLength = maxLengthCreator(50)

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='email' name={'email'} component={Input} validate={[required, maxLength]}/></div>
            <div><Field placeholder='password' type={'password'} name={'password'} component={Input} validate={[required, maxLength]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required,]}/>remember me</div>
            { props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm