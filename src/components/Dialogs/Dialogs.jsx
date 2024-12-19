import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Yuliana',},
        {id: 2, name: 'Adam',},
        {id: 3, name: 'Mom',},
        {id: 4, name: 'Tolya',},
        {id: 5, name: 'Sveta',},
        {id: 6, name: 'Tanya',},
        {id: 7, name: 'Sasha',},
        {id: 8, name: 'Dad'},
    ]

    let messages = [
        {id: 1, message: 'Hello! i am at work now'},
    ]

    let componentDialogs = dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let componentMessages = messages.map((message) => {
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