import profileReducer, {addPostAC, deletePostAC, setProfileStatus, setUserProfile} from "../profileReducer";

let state = {
    posts: [
        {id: 1, postMessage: 'Hi, how are you?', likesCount: 5, userAvatar: '',},
        {id: 2, postMessage: 'Why doesn\'t my friend answer me?', likesCount: 10, userAvatar: '',},
    ],
    profile: [],
    status: '',
}

it('test: add new post', () => {
    let action = addPostAC('text')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})

it('test: check message on new post', () => {
    let action = addPostAC('text')
    let newState = profileReducer(state, action)
    expect(newState.posts[0].postMessage).toBe("text")
})

it('test: delete post', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})


it('test: delete post if id is incorrect', () => {
    let action = deletePostAC(5)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})

it('test: add new status', () => {
    let action = setProfileStatus('i am a new status')
    let newState = profileReducer(state, action)
    expect(newState.status).toBe('i am a new status')
})

it('test: get profile', () => {
    let action = setUserProfile({profileId: 3, name: 'test'})
    let newState = profileReducer(state, action)
    expect(newState.profile.profileId).toBe(3)
    expect(newState.profile.name).toBe('test')
})
