import React, {FC} from 'react'
import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type propsType = {id: number, name: string}

const DialogItem:FC<propsType> = ({id, name}) => {
    const path:string = '/messages/' + id
    return (
        <div>
            <div className={styles.dialog_item}><NavLink to={path}>{name}</NavLink></div>
        </div>
    )
}

export default DialogItem