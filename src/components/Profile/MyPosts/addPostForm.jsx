import React from 'react'
import styles from "./MyPosts.module.css";
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../other/FormsControls/FormsControls";

const maxLength = maxLengthCreator(5)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newTextPost'} placeholder={'write post'} validate={[required, maxLength]}/>
            <div className={styles.button}>
                <button>add post</button>
            </div>
        </form>
    )
}

export default addPostForm