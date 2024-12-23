import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    debugger
    let newMessageRef = React.createRef()
    let componentDialogs = props.store.getState().dialogsPage.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let addMessage = () => {
        props.store.addMessage()
    }

    let onChangeText = () => {
        let textMessage = newMessageRef.current.value
        props.store.updateNewTextMessage(textMessage)
    }

    let componentMessages = props.store.getState().dialogsPage.messages.map((message) => {
        return <MessageItem
            message={message.message}
        />
    })

    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                {componentDialogs}
            </div>
            <div className={styles.messages}>
                {componentMessages}
                <div className={styles.userInputBlock}>
                    <textarea onChange={onChangeText} ref={newMessageRef} value={props.store.getState().dialogsPage.newTextMessage}/>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs