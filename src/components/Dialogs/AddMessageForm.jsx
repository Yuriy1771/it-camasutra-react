import React from 'react'
import {Field} from "redux-form";
import {Textarea} from "../other/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
    const maxLength = maxLengthCreator(10)
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength]} name={'newTextMessage'} placeholder={'Enter your message'}/>
            <button>send</button>
        </form>
    )
}

export default AddMessageForm