import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div className={styles.messagesWindow}>
                {props.message}
        </div>
    )
}

export default MessageItem