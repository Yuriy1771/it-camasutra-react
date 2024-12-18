import React from 'react'
import styles from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'


const Dialogs = (props) => {
    return (
        <div className={styles.message_window}>
            <div className={styles.dialogs}>
                <div className={styles.dialog_item}><NavLink to='/messages/1'>Katy</NavLink></div>
                <div className={styles.dialog_item}><NavLink to='/messages/2'>Artem</NavLink></div>
                <div className={styles.dialog_item}><NavLink to='/messages/3'>Maria</NavLink></div>
                <div className={styles.dialog_item}><NavLink to='/messages/4'>Liza</NavLink></div>
                <div className={styles.dialog_item}><NavLink to='/messages/5'>Michail</NavLink></div>
                <div className={styles.dialog_item}><NavLink to='/messages/6'>Albert</NavLink></div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message_item}>Hello! i am at work now</div>
            </div>
        </div>
    )
}

export default Dialogs