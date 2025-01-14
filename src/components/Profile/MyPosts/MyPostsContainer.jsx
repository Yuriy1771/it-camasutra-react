import React from 'react'
import MyPosts from "./MyPosts";
import {addPostAC, updateNewTextPostAC} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {
    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewTextPostAC(text))
    }
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    return (
        <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} state={props.store.getState().profilePage}/>
    )
}

export default MyPostsContainer