import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import MessageItem from "./MessageItem/MessageItem"
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let newMessageRef = React.createRef()
    let componentDialogs = props.state.dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>

    })

    let onAddMessage = () => {
        props.addMessage()
    }

    let onChangeMessage = (event) => {
        let text = event.currentTarget.value
        props.updateNewTextMessage(text)
    }

    let componentMessages = props.state.messages.map((message) => {
        return <MessageItem message={message.message} key={message.id}/>
    })

    if(!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                {componentDialogs}
            </div>
            <div className={styles.messages}>
                {componentMessages}
                <div className={styles.userInputBlock}>
                    <textarea onChange={onChangeMessage} ref={newMessageRef}
                              value={props.state.newTextMessage} placeholder='Enter your message'/>
                    <button onClick={onAddMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs