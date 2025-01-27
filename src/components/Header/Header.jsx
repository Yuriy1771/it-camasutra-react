import React from 'react'
import styles from './Header.module.css'
import logo_website_img from '../../images/logo-website.png'
import avatar from '../../images/user_avatar.jpeg'
import {NavLink} from "react-router-dom"

const Header = (props) => {

    const onLogout = () => {
        props.logoutThunk()
    }

    return (
        <header className={styles.header}>
            <img src={logo_website_img} className={styles.logo_website} alt='logo-website' />
            <div className={styles.loginWrapper}>
                <div className={styles.loginUserHeader}>
                {
                    props.isAuth !== false
                        ? <div>{props.login}<div><button className={styles.logout} onClick={onLogout}>log out</button></div></div>
                        : <NavLink to={'/login'}>Auth</NavLink>
                }
                </div>
                <div className={styles.wrapperAvatar}>
                    <img className={styles.imgUserHeader} src={avatar} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;