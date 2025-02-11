import React from 'react'
import {useForm} from 'react-hook-form'
import styles from './Settings.module.css'

const Settings = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({mode: 'onBlur'})

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    first name
                    <input {...register('firstName', {
                        required: 'Поле обязатеьное',
                        minLength: {
                            value: 3,
                            message: 'минимум 3 символа'
                        }
                    })}/>
                </label>
                <label>
                    last name
                    <input {...register('lastName', {
                        required: 'Field require',
                        minLength: {
                            value: 3,
                            message: 'minimum 3 symbols'
                        }
                    })}/>
                </label>
                <input type="submit" disabled={isValid === false}/>
                <div>
                    {errors?.firstName && <span>{errors?.firstName?.message || 'error'}</span>
                        || errors?.lastName && <span>{errors?.lastName?.message || 'error'}</span>}
                </div>
            </form>
        </div>
    )
}

export default Settings