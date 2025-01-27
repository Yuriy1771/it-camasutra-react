import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import AddMessageForm from "./AddMessageForm";
import {reduxForm} from "redux-form";

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm',})(AddMessageForm)

const Dialogs = (props) => {
    let componentDialogs = props.state.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>

    })

    let componentMessages = props.state.messages.map((message) => {
        return <MessageItem message={message.message} key={message.id}/>
    })

    const onSubmit = (formData) => {
        props.addMessage(formData.newTextMessage)
        console.log(formData)
    }
    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                {componentDialogs}
            </div>
            <div className={styles.messages}>
                {componentMessages}
                <div className={styles.userInputBlock}>
                   <AddMessageFormRedux onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )

}

export default Dialogs