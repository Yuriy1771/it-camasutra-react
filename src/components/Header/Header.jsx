import React from 'react'
import styles from './Header.module.css'
import logo_website_img from '../../images/logo-website.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo_website_img} className={styles.logo_website} alt='logo-website' />
        </header>
    )
}

export default Header;