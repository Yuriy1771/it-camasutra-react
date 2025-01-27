import React from 'react'
import styles from "./MyPosts.module.css";
import {Field} from "redux-form";

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newTextPost'}/>
            <div className={styles.button}>
                <button>add post</button>
            </div>
        </form>
    )
}

export default addPostForm