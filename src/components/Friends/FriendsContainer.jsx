import React from "react";
import {connect} from "react-redux";
import {
    followThunk, getUsersThunk,
    unfollowThunk
} from "../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../other/Preloader/Preloader";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.state.currentPage, this.props.state.countUsersOfPage)
    }

    onCurrentPageClick = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.state.countUsersOfPage)
    }

    render() {
        return <>
            {this.props.state.isLoader ? <Preloader/> : null}
            <Friends state={this.props.state} onCurrentPageClick={this.onCurrentPageClick}
                     followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.friendsPage,
    }
}



export default compose(
    connect(mapStateToProps, {
        //(...) => store.dispatch(follow(...)
        getUsersThunk,
        followThunk,
        unfollowThunk,
    }),
    WithAuthRedirect,
)(FriendsAPIContainer)