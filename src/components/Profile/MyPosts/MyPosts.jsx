import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import AddPostForm from "./addPostForm";
import {reduxForm} from "redux-form";

const AddPostFormRedux = reduxForm({form: 'newTextPost'})(AddPostForm)

const MyPosts = React.memo((props) => {
    console.log('render')
    let componentPosts = props.state.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount} key={post.id}/>
    })

    const onSubmit = (formData) => {
        props.addPost(formData.newTextPost)
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