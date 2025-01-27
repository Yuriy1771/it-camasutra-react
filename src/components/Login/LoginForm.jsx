import React from 'react'
import {Field} from "redux-form";
import {Input} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const LoginForm = (props) => {

    const maxLength = maxLengthCreator(10)

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='login' name={'login'} component={Input} validate={[required, maxLength]}/></div>
            <div><Field placeholder='password' name={'password'} component={Input} validate={[required, maxLength]}/></div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input} validate={[required,]}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm