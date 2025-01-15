const ADD_POST = 'ADD_POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST'

let initialState = {
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
    ],
    newTextPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return  {
                ...state,
                posts: [{id: 3, postMessage: state.newTextPost}, ...state.posts],
                newTextPost: '',
            }
        case UPDATE_NEW_TEXT_POST:
            return {
                ...state,
                newTextPost: action.newText,
            }
        default: return state
    }
}

export const addPostAC = () => ({type: ADD_POST,})
export const updateNewTextPostAC = (text) => ({type: UPDATE_NEW_TEXT_POST, newText: text,})

export default profileReducer