import {chatMessageType} from "../pages/Chat/Chat.tsx"
import {Dispatch} from "redux";
import {inferActionsTypes} from "./redux-store.ts";
import {chatAPI} from "../api/chat-api.ts";

let initialState = {
    messages: [] as chatMessageType[],
}

const chatReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case 'chatPage/SET_MESSAGES':
            return stateCopy = {
                ...state,
                messages: [...state.messages, ...action.messages]
            }
        default: return state
    }
}

type actionsType = inferActionsTypes<typeof actions>
export const actions = {
    setMessages: (messages: chatMessageType[]) => ({type: 'chatPage/SET_MESSAGES', messages} as const)
}

let _handlerNewMessage: ((messages: chatMessageType[]) => void) | null = null

const handlerNewMessage = (dispatch: Dispatch) => {
    if (_handlerNewMessage === null) {
        _handlerNewMessage = (messages) => {
            dispatch(actions.setMessages(messages))
        }
    }
    return _handlerNewMessage
}

export const setMessageThunk = () => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.start()
    chatAPI.subscribers(handlerNewMessage(dispatch))
}

export const stopMessageThunk = () => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.unSubscribe(handlerNewMessage(dispatch))
    chatAPI.stop()
}

export const sendMessageThunk = (message: string) => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.sendMessage(message)
}

export default chatReducer