import React, {FC, useEffect, useState} from 'react'
import styles from './Chat.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sendMessageThunk, setMessageThunk, stopMessageThunk} from "../../redux/chat-reducer.ts";
import {appStateType} from "../../redux/redux-store.ts";

export type chatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const Chat: FC = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: appStateType) => state.chatPage.status)

    useEffect(() => {
        dispatch(setMessageThunk())
        return () => {
            dispatch(stopMessageThunk())
        }
    }, [])

    return (
        <>
            {status === 'error' ? <div>Error. please refresh the page</div> :
                <>
                <Messages/>
                <AddMessageForm/>
                </>
            }
        </>
    )
}


export const Messages: FC<{}> = (props) => {
    const messages = useSelector((state: appStateType) => state.chatPage.messages)
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

const AddMessageForm: FC<{}> = (props) => {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const status = useSelector((state: appStateType) => state.chatPage.status)


    const onSendMessage = () => {
        if (message === '') return
        dispatch(sendMessageThunk(message))
        setMessage('')
    }

    return (
        <div className={styles.wrapperTextarea}>
            <textarea onChange={e => setMessage(e.currentTarget.value)} value={message}></textarea>
            <button onClick={onSendMessage}>send</button>
        </div>
    )
}