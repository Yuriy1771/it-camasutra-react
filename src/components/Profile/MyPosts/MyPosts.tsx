import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post.tsx'
import AddPostForm from "./addPostForm.jsx";
import {reduxForm} from "redux-form";
import {FC} from "react";
import {postsType} from "../../../types/types";

type propsType = {addPost:(text:string) => void, posts: postsType}
const AddPostFormRedux = reduxForm({form: 'newTextPost'})(AddPostForm)

const MyPosts:FC<propsType> = React.memo(({addPost, posts}) => {
    let componentPosts = posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount} key={post.id}/>
    })

    const onSubmit = (formData):void => {
        addPost(formData.newTextPost)
    }
    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <AddPostFormRedux onSubmit={onSubmit}/>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
});

export default MyPosts