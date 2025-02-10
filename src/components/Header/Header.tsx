import React, {FC, useEffect} from 'react'
import styles from './Header.module.css'
import logo_website_img from '../../assets/images/logo.png'
import avatar from '../../assets/images/user_avatar.jpeg'
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../redux/redux-store";
import {logoutThunk, setAuthUserDataThunk} from "../../redux/authReducer.ts";

type propsType = {}

const Header:FC<propsType> = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAuthUserDataThunk())
    },[])

    const isAuth = useSelector((state:appStateType) => state.auth.isAuth)

    const login = useSelector((state:appStateType) => state.auth.login)

    const onLogout = ():void => {
        dispatch(logoutThunk())
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