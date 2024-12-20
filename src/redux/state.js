import {rerenderTree} from "../render";

let state = {
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
}

export let addPost = () => {
    let post = {
        id: 3, postMessage: state.profilePage.newTextPost, likesCount: 0, userAvatar: '',
    }
    state.profilePage.posts.push(post)
    state.profilePage.newTextPost = ''
    rerenderTree(state)
}

export let updateNewTextPost = (newText) => {
    state.profilePage.newTextPost = newText
    rerenderTree(state)
}

export let addMessage = () => {
    let message = {
        id: 2, message: state.dialogsPage.newTextMessage,
    }
    state.dialogsPage.messages.push(message)
    state.dialogsPage.newTextMessage = ''
    rerenderTree(state)
}

export let updateNewTextMessage = (newText) => {
    state.dialogsPage.newTextMessage = newText
    rerenderTree(state)
}

export default state