const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 2, message: state.newTextMessage,
            }
            state.messages.push(message)
            state.newTextMessage = ''
            break
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newTextMessage = action.newText
            break
        default: return state
    }
    return state
}

export const addMessageAC = () => ({type: ADD_MESSAGE,})
export const updateNewTextMessageAC = (text) => ({type: UPDATE_NEW_TEXT_MESSAGE, newText: text,})

export default dialogsReducer