import React from 'react'
import styles from './MessageItem.module.css'

const MessageItem = (props) => {
    // let newMessageRef = React.createRef()

    // let addMessage = () => {
    //     props.addMessage()
    // }
    //
    // let onChangeText = () => {
    //     let textMessage = newMessageRef.current.value
    //     props.updateNewTextMessage(textMessage)
    // }
    return (
        <div className={styles.messagesWindow}>
            {/*<div className={styles.message_item}>*/}
                {props.message}
            {/*</div>*/}
            {/*<div className={styles.blockSendMessage}>*/}
            {/*    <textarea onChange={onChangeText} ref={newMessageRef} value={props.state.newTextMessage}></textarea>*/}
            {/*    <button onClick={addMessage}>send</button>*/}
            {/*</div>*/}
        </div>
    )
}

export default MessageItem