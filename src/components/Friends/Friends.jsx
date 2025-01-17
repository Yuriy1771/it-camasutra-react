import React from 'react'
import styles from './Friends.module.css'
import user_avatar from '../../assets/images/user_avatar.png'
import axios from "axios";

class Friends extends React.Component {
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
        let pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.countUsersOfPage)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {this.props.state.users.map((user) => <div className={styles.userBlock} key={user.id}>
                    <div className={styles.avatarAndIsFollowBlock}>
                        <div>
                            <div><img className={styles.userAvatar} src={user.photos.small != null
                                ? user.photos.small
                                : user_avatar} alt="img"/></div>
                        </div>
                        <div className={styles.isFollowBtn}>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.follow(user.id)
                                }} className={styles.unfollow}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }} className={styles.follow}>follow</button>}
                        </div>
                    </div>
                    <div className={styles.userNameBlock}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={styles.userLocation}>
                        <div>Russia</div>
                        <div>Kazan</div>
                    </div>
                </div>)}
                <div className={styles.pagination}>
                    {pages.map((page) => <div onClick={() => this.onCurrentPageClick(page)}
                                               className={this.props.state.currentPage === page ? styles.selectedPage : styles.numberPage}>{page}</div>)}
                </div>
            </div>
        )
    }
}

export default Friends