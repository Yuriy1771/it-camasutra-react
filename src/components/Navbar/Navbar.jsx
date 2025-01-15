import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from 'react-router-dom'


const Navbar = () => {

    const ActiveLink = ({isActive}) => isActive ? styles.active : styles.item.a;

    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/profile' className={ActiveLink}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/messages' className={ActiveLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/friends' className={ActiveLink}>Friends</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/news' className={ActiveLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/music' className={ActiveLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/settings' className={ActiveLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar