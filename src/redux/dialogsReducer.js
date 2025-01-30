const ADD_MESSAGE = 'dialogs/ADD_MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, message: action.messageText}],
            }
        default: return state
    }
}

export const addMessageAC = (messageText) => ({type: ADD_MESSAGE,messageText})

export default dialogsReducer