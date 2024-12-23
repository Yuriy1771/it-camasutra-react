import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    debugger
    let newMessageRef = React.createRef()
    let componentDialogs = props.state.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let addMessage = () => {
        props.dispatch({type: 'ADD_MESSAGE'})
    }

    let onChangeText = () => {
        let text = newMessageRef.current.value
        props.dispatch({type: 'UPDATE_NEW_TEXT_MESSAGE', newText: text})
    }

    let componentMessages = props.state.dialogsPage.messages.map((message) => {
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
                    <textarea onChange={onChangeText} ref={newMessageRef} value={props.state.dialogsPage.newTextMessage}/>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs