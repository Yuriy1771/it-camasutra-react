const ADD_MESSAGE = 'dialogs/ADD_MESSAGE'

type dialogsType = {id: number, name: string }

type messagesType = {id: number, message: string}

export type initialStateType = typeof initialState

let initialState:initialStateType = {
    messages: [
        {id: 1, message: 'Hello! i am at work now'},
    ] as messagesType[],
    dialogs: [
        {id: 1, name: 'Yuliana',},
        {id: 2, name: 'Adam',},
        {id: 3, name: 'Mom',},
        {id: 4, name: 'Tolya',},
        {id: 5, name: 'Sveta',},
        {id: 6, name: 'Tanya',},
        {id: 7, name: 'Sasha',},
        {id: 8, name: 'Dad'},
    ] as dialogsType[],
}

const dialogsReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: action.messageText}],
            }
        default: return state
    }
}
type addMessageACType = {type: typeof ADD_MESSAGE, messageText:string}
export const addMessageAC = (messageText:string):addMessageACType => ({type: ADD_MESSAGE, messageText})

export default dialogsReducer