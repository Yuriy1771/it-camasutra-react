import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
        <div>
            <div className={styles.message_item}>{props.message}</div>
        </div>
    )
}

export default MessageItem