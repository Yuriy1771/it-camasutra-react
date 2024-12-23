import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let componentPosts = props.state.profilePage.posts.map((post) => {
        return <Post message={post.postMessage} likes_count={post.likesCount}/>
    })
    let newPostRef = React.createRef()
    let addPost = () => {
        props.dispatch({type: 'ADD_POST'})
        // props.updateNewTextPost('')
    }

    let onPostChange = () => {
        let text = newPostRef.current.value
        props.dispatch({type : 'UPDATE_NEW_TEXT_POST', newText: text})
    }

    return (
        <div className={styles.myPosts}>
            write post:
            <div className={styles.posts}>
                <textarea onChange={onPostChange} ref={newPostRef} value={props.state.profilePage.newTextPost}/>
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