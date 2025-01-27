import React from 'react'
import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

const Preloader = (props) => {
    return (
        <div className={styles.wrapperPreloader}>
            <img src={preloader} className={styles.preloader}/>
        </div>
    )
}

export default Preloader