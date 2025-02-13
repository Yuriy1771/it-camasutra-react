import React, {FC} from 'react'
import styles from './MessageItem.module.css'

type propsType = {message: string}

const MessageItem:FC<propsType> = ({message}) => {
    return (
        <div className={styles.messagesWindow}>
                <div><p>{message}</p></div>
        </div>
    )
}

export default MessageItem