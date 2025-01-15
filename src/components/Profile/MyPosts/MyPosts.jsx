import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostAC, updateNewTextPostAC} from "../../../redux/profileReducer"

const MyPosts = (props) => {
    let componentPosts = props.state.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount} key={post.id}/>
    })
    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (event) => {
        let text = event.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea onChange={onPostChange} value={props.state.newTextPost}/>
                <div className={styles.button}>
                    <button onClick={onAddPost}>add post</button>
                </div>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
};

export default MyPosts