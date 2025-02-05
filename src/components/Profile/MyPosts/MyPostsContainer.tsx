import MyPosts from "./MyPosts.tsx";
import {connect} from "react-redux";
import {addPostAC} from "../../../redux/profileReducer.ts";
import {postsType} from "../../../types/types";
import {appStateType} from "../../../redux/redux-store";

type mapStatePropsType = {posts: postsType}
type mapDispatchPropsType = {addPost: (postText:string) => void}

let mapStateToProps = (state):mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch):mapDispatchPropsType => {
    return {
        addPost: (postText):void => {
            dispatch(addPostAC(postText))
        },
    }
}

const MyPostsContainer = connect<mapStatePropsType, mapDispatchPropsType, appStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer