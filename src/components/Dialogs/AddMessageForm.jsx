import React from 'react'
import {Field} from "redux-form";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newTextMessage'} placeholder={'Enter your message'}/>
            <button>send</button>
        </form>
    )
}

export default AddMessageForm