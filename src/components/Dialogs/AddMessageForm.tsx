import React from 'react'
import {Field} from "redux-form";
import styles from './Dialogs.module.css'
import {Textarea} from "../other/FormsControls/FormsControls.jsx";
import {maxLengthCreator, required} from "../../utils/validators/validators.js";

const AddMessageForm = ({handleSubmit}) => {
    const maxLength:number = maxLengthCreator(10)
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.wrapperTextarea}>
                <Field component={Textarea} validate={[required, maxLength]} name={'newTextMessage'}
                       placeholder={'Enter your message'}/>
                <button>send</button>
            </div>
        </form>
    )
}

export default AddMessageForm