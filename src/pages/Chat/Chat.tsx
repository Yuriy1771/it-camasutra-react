import React, {FC, useEffect, useState} from 'react'
import styles from './Chat.module.css'

export type chatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const Chat: FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    let ws: WebSocket
    const closeHandler = () => {
        setTimeout(createChannel, 3000)
    }
    useEffect(() => {
        const createChannel = () => {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws?.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
        }
    }, []);

    return (
        <>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </>
    )
}


export const Messages: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const messageHandler = (e) => {
        const newMessages = JSON.parse(e.data)
        setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }

    const [messages, setMessages] = useState<chatMessageType[]>([])

    useEffect(() => {
        wsChannel?.addEventListener('message', messageHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

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

const AddMessageForm: FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {

    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const openHandler = () => {
        setReadyStatus('ready')
    }

    useEffect(() => {
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const onSendMessage = () => {
        if (message === '') return
        wsChannel?.send(message)
        setMessage('')
    }

    return (
        <div className={styles.wrapperTextarea}>
            <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button onClick={onSendMessage} disabled={wsChannel === null && readyStatus !== 'ready'}>send</button>
        </div>
    )
}