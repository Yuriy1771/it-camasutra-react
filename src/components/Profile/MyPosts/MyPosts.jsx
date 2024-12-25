import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostAC, updateNewTextPostAC} from "../../../redux/profileReducer"

const MyPosts = (props) => {
    let componentPosts = props.state.profilePage.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount}/>
    })
    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = (event) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewTextPostAC(text))
    }

    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea onChange={onPostChange} value={props.state.profilePage.newTextPost}/>
                <div className={styles.button}>
                    <button onClick={addPost}>add post</button>
                </div>
                <span>My posts:</span>
                {componentPosts}
            </div>
        </div>
    )
};

export default MyPosts