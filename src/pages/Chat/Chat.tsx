import React, {FC, useEffect, useState} from 'react'
import styles from './Chat.module.css'

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type chatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const Chat: FC = () => {
    return (
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    )
}


export const Messages: FC = () => {
    const [messages, setMessages] = useState<chatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return (
        <div className={styles.wrapperMessages}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    )
}

const Message: FC<{ message: chatMessageType }> = ({message}) => {
    return (
        <div className={styles.wrapperMessage}>
            <div className={styles.wrapperImg}>
                <img src={message.photo} alt="avatar"/> <p>{message.userName}</p>
            </div>
            <div className={styles.message}>
                {message.message}
            </div>
        </div>
    )
}

const AddMessageForm: FC = () => {

    const [message, setMessage] = useState('')

    const onSendMessage = () => {
        if (message === '') return
        wsChannel.send(message)
        setMessage('')
    }

    return (
        <div className={styles.wrapperTextarea}>
            <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button onClick={onSendMessage}>send</button>
        </div>
    )
}