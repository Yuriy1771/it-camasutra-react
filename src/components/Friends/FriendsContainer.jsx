import React from "react";
import styles from './Friends.module.css'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setPreloader,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/friendsReducer";
import axios from "axios";
import Friends from "./Friends";
import Preloader from "../other/Preloader";

class FriendsAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.countUsersOfPage}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onCurrentPageClick = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.countUsersOfPage}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
            })
    }

    render() {
        return <>
            {this.props.state.isLoader ? <Preloader/> : null}
            <Friends state={this.props.state} follow={this.props.follow} unfollow={this.props.unfollow}
                     setCurrentPage={this.props.setCurrentPage} setTotalUsersCount={this.props.setTotalUsersCount}
                     onCurrentPageClick={this.onCurrentPageClick} />
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
