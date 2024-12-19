import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let componentDialogs = props.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let componentMessages = props.messages.map((message) => {
        return <MessageItem message={message.message}/>
    })

    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                {componentDialogs}
            </div>
            <div className={styles.messages}>
                {componentMessages}
            </div>
        </div>
    )
}

export default Dialogs