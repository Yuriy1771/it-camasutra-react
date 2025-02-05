import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.tsx"
import MessageItem from "./MessageItem/MessageItem.tsx"
import AddMessageForm from "./AddMessageForm.tsx";
import {reduxForm} from "redux-form";
import {dialogsType, messagesType} from "../../types/types";

type propsType = {dialogs: dialogsType, messages: messagesType, addMessage: (newTextMessage:string) => void}
const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm',})(AddMessageForm)

const Dialogs = ({dialogs, messages, addMessage}):propsType => {
    let componentDialogs = dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>

    })

    let componentMessages = messages.map((message) => {
        return <MessageItem message={message.message} key={message.id}/>
    })

    const onSubmit = (formData):void => {
        addMessage(formData.newTextMessage)
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