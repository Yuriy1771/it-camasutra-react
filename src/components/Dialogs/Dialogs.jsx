import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import {addMessageAC, updateNewTextMessageAC} from "../../redux/state"

const Dialogs = (props) => {
    debugger
    let newMessageRef = React.createRef()
    let componentDialogs = props.state.dialogsPage.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name}/>

    })

    let addMessage = () => {
        props.dispatch(addMessageAC())
    }

    let onChangeText = (event) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewTextMessageAC(text))
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
                    <textarea onChange={onChangeText} ref={newMessageRef}
                              value={props.state.dialogsPage.newTextMessage} placeholder='Enter your message'/>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs