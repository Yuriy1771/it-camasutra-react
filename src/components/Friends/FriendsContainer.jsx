import {connect} from "react-redux";
import Friends from "./Friends";
import {followAC, setUsersAC, unfollowAC} from "../../redux/friendsReducer";

const mapStateToProps = (state) => {
    return {
        state: state.friendsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer