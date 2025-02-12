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
    } = useForm()

    return (
        <div className={styles.wrapperForm}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {/*<div>{errors?.email ? errors?.email.message : 'error'}</div>*/}
                <input className={styles.emailInput} type="text" {...register('email', {
                    required: "field required"
                })}/>
                <input className={styles.passwordInput} type="password" {...register('password')}/>
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
                    <button className={styles.loginBtn}>login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm