import React from "react";
import styles from './Friends.module.css'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setPreloaderAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/friendsReducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../assets/images/preloader.svg'
import Preloader from "../other/Preloader";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.countUsersOfPage}`)
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
                this.props.setPreloader(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPageClick = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.countUsersOfPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
            })
    }

    render() {
        return <>
            {this.props.state.isLoader ? <Preloader /> : null}
            <Users state={this.props.state} follow={this.props.follow} unfollow={this.props.unfollow}
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount)),
        setPreloader: (isLoader) => dispatch(setPreloaderAC(isLoader)),
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIContainer)

export default FriendsContainer
