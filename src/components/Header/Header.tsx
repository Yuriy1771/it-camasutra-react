import React, {FC} from 'react'
import styles from './Header.module.css'
import logo_website_img from '../../assets/images/logo.png'
import avatar from '../../assets/images/user_avatar.jpeg'
import {NavLink} from "react-router-dom"

type propsType = {logoutThunk: () => void, login: string, isAuth: boolean}
const Header:FC<propsType> = ({logoutThunk, login, isAuth}) => {

    const onLogout = ():void => {
        logoutThunk()
    }

    return (
        <header className={styles.header}>
            <img src={logo_website_img} className={styles.logo_website} alt='logo-website' />
            <div className={styles.loginWrapper}>
                <div className={styles.loginUserHeader}>
                {
                    isAuth !== false
                        ? <div>{login}<div><button className={styles.logout} onClick={onLogout}>log out</button></div></div>
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