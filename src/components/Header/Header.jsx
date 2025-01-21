import React from 'react'
import styles from './Header.module.css'
import logo_website_img from '../../images/logo-website.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo_website_img} className={styles.logo_website} alt='logo-website' />
            <div className={styles.loginWrapper}>
                {
                    props.isAuth != false ? props.login : <NavLink to={'/login'}>Auth</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;