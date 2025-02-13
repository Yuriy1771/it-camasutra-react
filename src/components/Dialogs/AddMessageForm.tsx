import React from 'react'
import styles from './Dialogs.module.css'
import {useForm} from "react-hook-form";
import {addMessageAC} from "../../redux/dialogsReducer.ts";
import {useDispatch} from "react-redux";


const AddMessageForm = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isValid
        }
    } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (formData):void => {
        dispatch(addMessageAC(formData.newTextMessage))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.wrapperTextarea}>
                <textarea placeholder={'Enter your message'} {...register('newTextMessage', {
                    required: 'field empty',
                    maxLength: {
                        value: 200,
                        message: 'maximum 200 symbols'
                    }
                })}/>
                <button disabled={!isValid}>send</button>
            </div>
        </form>
    )
}

export default AddMessageForm