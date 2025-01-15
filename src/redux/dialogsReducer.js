const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hello! i am at work now'},
    ],
    dialogs: [
        {id: 1, name: 'Yuliana',},
        {id: 2, name: 'Adam',},
        {id: 3, name: 'Mom',},
        {id: 4, name: 'Tolya',},
        {id: 5, name: 'Sveta',},
        {id: 6, name: 'Tanya',},
        {id: 7, name: 'Sasha',},
        {id: 8, name: 'Dad'},
    ],
    newTextMessage: ''
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    stateCopy.messages = [...state.messages]
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 2, message: state.newTextMessage,
            }
            stateCopy.messages.push(message)
            stateCopy.newTextMessage = ''
            break
        case UPDATE_NEW_TEXT_MESSAGE:
            stateCopy.newTextMessage = action.newText
            break
        default: return stateCopy
    }
    return stateCopy
}

export const addMessageAC = () => ({type: ADD_MESSAGE,})
export const updateNewTextMessageAC = (text) => ({type: UPDATE_NEW_TEXT_MESSAGE, newText: text,})

export default dialogsReducer