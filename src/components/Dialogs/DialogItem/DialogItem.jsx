import React from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    const path = '/messages/' + id
    return (
        <div>
            <div className={styles.dialog_item}><NavLink to={path}>{name}</NavLink></div>
        </div>
    )
}

export default DialogItem