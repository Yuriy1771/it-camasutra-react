import React from 'react'
import {Field} from "redux-form";
import styles from './Dialogs.module.css'
import {Textarea} from "../other/FormsControls/FormsControls.tsx";
import {fieldValidatorType, maxLengthCreator, required} from "../../utils/validators/validators.ts";

const AddMessageForm = ({handleSubmit}) => {
    const maxLength:fieldValidatorType = maxLengthCreator(10)
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