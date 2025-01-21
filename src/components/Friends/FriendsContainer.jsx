import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../other/Preloader";
import {usersAPI} from "../../api/api";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        usersAPI.getUsersAPI(this.props.currentPage, this.props.countUsersOfPage).then(data => {
            this.props.setUsers(data.items)
            this.props.setPreloader(false)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onCurrentPageClick = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsersAPI(pageNumber, this.props.state.countUsersOfPage).then(data => {
            this.props.setUsers(data.items)
            this.props.setPreloader(false)
        })
    }

    render() {
        return <>
            {this.props.state.isLoader ? <Preloader/> : null}
            <Friends state={this.props.state} follow={this.props.follow} unfollow={this.props.unfollow}
                     setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                     onCurrentPageClick={this.onCurrentPageClick}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.friendsPage,
    }
}


const FriendsContainer = connect(mapStateToProps, {
    //(...) => store.dispatch(follow(...)
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setPreloader,
})(FriendsAPIContainer)

export default FriendsContainer
