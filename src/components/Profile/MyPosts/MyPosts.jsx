import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let componentPosts = props.state.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount}/>
    })
    let newPostRef = React.createRef()
    let addPost = () => {
        props.addPost()
        // props.updateNewTextPost('')
    }

    let onPostChange = () => {
        let text = newPostRef.current.value
        props.updateNewTextPost(text)
    }

    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea onChange={onPostChange} ref={newPostRef} value={props.state.newTextPost}/>
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