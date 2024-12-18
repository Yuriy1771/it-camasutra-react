import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                <DialogItem name='Katy' id='1'/>
                <DialogItem name='Artem' id='2'/>
                <DialogItem name='Maria' id='3'/>
                <DialogItem name='Liza' id='4'/>
                <DialogItem name='Michail' id='5'/>
                <DialogItem name='Albert' id='6'/>
            </div>
            <div className={styles.messages}>
                <MessageItem message='Hello! i am at work now'/>
            </div>
        </div>
    )
}

export default Dialogs