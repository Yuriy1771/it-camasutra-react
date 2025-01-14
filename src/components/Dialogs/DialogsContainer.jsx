import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const updateNewTextMessage = (text) => {
        props.store.dispatch(updateNewTextMessageAC(text))
    }

    return (<Dialogs addMessage={addMessage} updateNewTextMessage={updateNewTextMessage} state={props.store.getState().dialogsPage}/>)
}

export default DialogsContainer