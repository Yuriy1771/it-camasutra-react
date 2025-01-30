import React from 'react'
import {Field} from "redux-form";
import {Textarea} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const AddMessageForm = ({handleSubmit}) => {
    const maxLength = maxLengthCreator(10)
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength]} name={'newTextMessage'} placeholder={'Enter your message'}/>
            <button>send</button>
        </form>
    )
}

export default AddMessageForm