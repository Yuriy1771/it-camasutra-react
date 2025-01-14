import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageAC, updateNewTextMessageAC} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMessage = () => {
                    store.dispatch(addMessageAC())
                }

                const updateNewTextMessage = (text) => {
                    store.dispatch(updateNewTextMessageAC(text))
                }

                return <Dialogs addMessage={addMessage} updateNewTextMessage={updateNewTextMessage}
                                state={store.getState().dialogsPage}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer