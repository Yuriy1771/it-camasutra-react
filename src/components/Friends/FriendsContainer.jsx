import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/friendsReducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.countUsersOfPage}`)
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.countUsersOfPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users state={this.props.state} follow={this.props.follow} unfollow={this.props.unfollow}
                      setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                      onCurrentPageClick={this.onCurrentPageClick}/>
    }
}

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
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount)),
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIContainer)

export default FriendsContainer
