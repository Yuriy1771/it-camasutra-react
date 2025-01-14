import React from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/messages/' + props.id
    return (
        <div>
            <div className={styles.dialog_item}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
}

export default DialogItem