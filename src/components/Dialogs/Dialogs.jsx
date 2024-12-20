import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let newMessageRef = React.createRef()

    let componentDialogs = props.state.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let addMessage = () => {
        props.addMessage()
    }

    let onChangeText = () => {
        let textMessage = newMessageRef.current.value
        props.updateNewTextMessage(textMessage)
    }

    let componentMessages = props.state.messages.map((message) => {
        console.log(message.message)
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
                <div className={styles.message_item}>
                    {props.message}
                </div>
                    <textarea onChange={onChangeText} ref={newMessageRef} value={props.state.newTextMessage}></textarea>
                    <button onClick={addMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs