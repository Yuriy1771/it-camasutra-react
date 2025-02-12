import React, {FC} from 'react'
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem.tsx"
import MessageItem from "./MessageItem/MessageItem.tsx"
import AddMessageForm from "./AddMessageForm.tsx";
import {appStateType} from "../../redux/redux-store";
import {useDispatch, useSelector} from "react-redux";

type propsType = {}

const Dialogs:FC<propsType> = (props) => {

    const dialogs = useSelector((state:appStateType) => state.dialogsPage.dialogs)
    const messages = useSelector((state:appStateType) => state.dialogsPage.messages)

    let componentDialogs = dialogs.map((dialog) => {
        return <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}/>

    })

    let componentMessages = messages.map((message) => {
        return <MessageItem message={message.message} key={message.id}/>
    })

    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                {componentDialogs}
            </div>
            <div className={styles.messages}>
                {componentMessages}
                <div className={styles.userInputBlock}>
                   <AddMessageForm />
                </div>
            </div>
        </div>
    )

}

export default Dialogs