import React from 'react'
import styles from "./MyPosts.module.css";
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators.ts";
import {Textarea} from "../../other/FormsControls/FormsControls.tsx";

const maxLength = maxLengthCreator(300)

const addPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
                <Field component={Textarea} name={'newTextPost'} placeholder={'write post'}
                       validate={[required, maxLength]}/>
                <button>add post</button>
            </div>
        </form>
    )
}
export default addPostForm