import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
                {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
            ],
            newTextPost: ''
        },
        dialogsPage: {
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
        },
    },
    getState() {
        return this._state
    }
    ,
    subscribe(observer) {
        this._callSubscriber = observer
    }
    ,
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}

export default store