import {chatMessageType} from "../pages/Chat/Chat.tsx"
import {Dispatch} from "redux";
import {inferActionsTypes} from "./redux-store.ts";
import {chatAPI, statusType} from "../api/chat-api.ts";

let initialState = {
    messages: [] as chatMessageType[],
    status: 'pending' as statusType
}

const chatReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case 'chatPage/SET_MESSAGES':
            return stateCopy = {...state, messages: [...state.messages, ...action.messages]}
        case 'chatPage/STATUS_CHANGED':
            return stateCopy = {...state, status: action.status,}
        default:
            return state
    }
}

type actionsType = inferActionsTypes<typeof actions>
export const actions = {
    setMessages: (messages: chatMessageType[]) => ({type: 'chatPage/SET_MESSAGES', messages} as const),
    statusChanged: (status: statusType) => ({type: 'STATUS_CHANGED', status}),
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
let _statusChangedHandler: ((status: statusType) => void) | null = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const setMessageThunk = () => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.start()
    chatAPI.subscribers('message-received', handlerNewMessage(dispatch))
    chatAPI.subscribers('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessageThunk = () => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.unSubscribe('message-received', handlerNewMessage(dispatch))
    chatAPI.unSubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessageThunk = (message: string) => async (dispatch: Dispatch<actionsType>) => {
    chatAPI.sendMessage(message)
}

export default chatReducer