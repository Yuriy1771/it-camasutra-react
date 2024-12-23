let store = {
    _callSubscriber() {},
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
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        switch(action.type) {
            case 'ADD_POST':
                let post = {
                    id: 3, postMessage: this._state.profilePage.newTextPost, likesCount: 0, userAvatar: '',
                }
                this._state.profilePage.posts.push(post)
                this._state.profilePage.newTextPost = ''
                this._callSubscriber()
                break
            case 'UPDATE_NEW_TEXT_POST':
                debugger
                this._state.profilePage.newTextPost = action.newText
                this._callSubscriber()
                break
            case 'ADD_MESSAGE':
                let message = {
                    id: 2, message: store._state.dialogsPage.newTextMessage,
                }
                this._state.dialogsPage.messages.push(message)
                this._state.dialogsPage.newTextMessage = ''
                this._callSubscriber()
                break
            case 'UPDATE_NEW_TEXT_MESSAGE':
                this._state.dialogsPage.newTextMessage = action.newText
                this._callSubscriber()
                break
        }
    }
}

export default store