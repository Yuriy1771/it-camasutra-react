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
import {
    getCountUsersOfPage, getCurrentPage,
    getIsDisabledFollow,
    getIsLoader,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/selectors/friendsSelector";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        const {currentPage, countUsersOfPage} = this.props
        this.props.getUsersThunk(currentPage, countUsersOfPage)
    }

    onCurrentPageClick = (pageNumber) => {
        const {countUsersOfPage} = this.props
        this.props.getUsersThunk(pageNumber, countUsersOfPage)
    }

    render() {
        return <>
            {this.props.isLoader ? <Preloader/> : null}
            <Friends users={this.props.users} isDisabledFollow={this.props.isDisabledFollow}
                     onCurrentPageClick={this.onCurrentPageClick} currentPage={this.props.currentPage}
                     followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}
                     totalUsersCount={this.props.totalUsersCount} countUsersOfPage={this.props.countUsersOfPage}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isLoader: getIsLoader(state),
        totalUsersCount: getTotalUsersCount(state),
        countUsersOfPage: getCountUsersOfPage(state),
        users: getUsersSelector(state),
        isDisabledFollow: getIsDisabledFollow(state),
        currentPage: getCurrentPage(state),
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