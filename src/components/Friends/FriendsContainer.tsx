import React from "react";
import {connect} from "react-redux";
import {
    followThunk, getUsersThunk,
    unfollowThunk
} from "../../redux/friendsReducer.ts";
import Friends from "./Friends.tsx";
import Preloader from "../other/Preloader/Preloader.tsx";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect.jsx";
import {compose} from "redux";
import {
    getCountUsersOfPage, getCurrentPage,
    getIsDisabledFollow,
    getIsLoader,
    getTotalUsersCount,
    getUsersSelector
} from "../../redux/selectors/friendsSelector.ts";
import {usersType} from "../../types/types";
import {appStateType} from "../../redux/redux-store";

type mapStatePropsType = {
    currentPage: number, countUsersOfPage: number, isLoader: boolean, users: usersType[],
    isDisabledFollow: number[], totalUsersCount: number
}
type mapDispatchPropsType = {
    getUsersThunk: (currentPage: number, countUsersOfPage: number) => void,
    unfollowThunk: (id:number) => void,
    followThunk: (id:number) => void,
}
type ownPropsType = { pageTitle: string }

type propsType = mapStatePropsType & mapDispatchPropsType & ownPropsType

//@ts-ignore
class FriendsAPIContainer extends React.Component<propsType> {
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
            <h2>{this.props.pageTitle}</h2>
            {this.props.isLoader ? <Preloader/> : null}
            <Friends users={this.props.users} isDisabledFollow={this.props.isDisabledFollow}
                     onCurrentPageClick={this.onCurrentPageClick} currentPage={this.props.currentPage}
                     followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}
                     totalUsersCount={this.props.totalUsersCount} countUsersOfPage={this.props.countUsersOfPage}
            />
        </>
    }
}

const mapStateToProps = (state: appStateType):mapStatePropsType => {
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
    connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
        //(...) => store.dispatch(follow(...)
        getUsersThunk,
        followThunk,
        unfollowThunk,
    }),
    WithAuthRedirect,
)(FriendsAPIContainer)