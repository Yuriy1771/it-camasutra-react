import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props) => {

    let newMessageRef = React.createRef()
    let onClickSendMessage = () => {
        let textMessage = newMessageRef.current.value
        alert(textMessage)
    }
    return (
        <div className={styles.messagesWindow}>
            <div className={styles.message_item}>
                {props.message}
            </div>
            <div className={styles.blockSendMessage}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={onClickSendMessage}>send</button>
            </div>
        </div>
    )
}

export default MessageItem