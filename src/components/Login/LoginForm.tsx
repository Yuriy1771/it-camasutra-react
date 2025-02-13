import React, {FC} from 'react'
import styles from './LoginForm.module.css'
import {useForm} from "react-hook-form";

export type loginFormType = { onSubmit: (data: any) => any, captcha: string }


const LoginForm: FC<loginFormType> = ({onSubmit, captcha}) => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid,
        }
    } = useForm({mode: "onBlur"})

    return (
        <div className={styles.wrapperForm}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {/*<div>{errors?.email ? errors?.email.message : 'error'}</div>*/}
                <input placeholder={'email'}
                    className={styles.emailInput} type="text" {...register('email', {
                    required: "field required",
                    maxLength: {
                        value: 50,
                        message: 'too many symbols',
                    }
                })}/>
                <input placeholder={'password'}
                    className={styles.passwordInput} type="password" {...register('password', {
                    required: 'field required',
                    maxLength: {
                        value: 50,
                        message: 'too many symbols',
                    }
                })}/>
                <div>
                    <label htmlFor="checkbox">
                        <input id='checkbox' className={styles.checkboxInput}
                               type="checkbox" {...register('rememberMe')}/>
                        <span className={styles.rememberMeText}>remember me</span>
                    </label>
                </div>
                <div className={styles.wrapperCaptcha}>
                    {captcha && <img className={styles.captcha} src={captcha} alt="captcha"/>}
                    {captcha && <input className={styles.captchaInput} placeholder={'enter captcha'}
                                       type="text" {...register('captcha')}/>}
                </div>
                <div>
                    <button className={styles.loginBtn} disabled={!isValid}>login</button>
                </div>
                <div className={styles.errors}>
                    <span>{errors?.email && 'email - ' + errors.email.message}</span>
                    <br/>
                    <span>{errors?.password && 'password - ' + errors.password.message}</span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm