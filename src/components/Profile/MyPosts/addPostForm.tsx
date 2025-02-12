import React, {FC} from 'react'
import styles from "./MyPosts.module.css";
import {addPostAC} from "../../../redux/profileReducer.ts";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

const AddPostForm:FC = (props) => {


    const {
        handleSubmit,
        register,
        formState: {
            isValid,
        },
        reset
    } = useForm()

    const dispatch = useDispatch()
    const onSubmit = (formData):void => {
        dispatch(addPostAC(formData.newTextPost))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputWrapper}>
                <textarea placeholder={'write post'} {...register('newTextPost', {
                    required: 'field empty',
                    maxLength: {
                        value: 200,
                        message: 'maximum 200 symbols',
                    }
                })}/>
                <button disabled={!isValid}>add post</button>
            </div>
        </form>
    )
}
export default AddPostForm