import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = ({message}) => {
    return (
        <div className={styles.messagesWindow}>
                {message}
        </div>
    )
}

export default MessageItem