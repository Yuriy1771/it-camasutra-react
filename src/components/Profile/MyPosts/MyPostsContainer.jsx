import React from 'react'
import MyPosts from "./MyPosts";
import {addPostAC, updateNewTextPostAC} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const updateNewPostText = (text) => {
                    store.dispatch(updateNewTextPostAC(text))
                }
                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                return <MyPosts updateNewPostText={updateNewPostText} addPost={addPost}
                                state={store.getState().profilePage}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer