import React, {FC} from 'react'
import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css";

const Preloader:FC = (props) => {
    return (
        <div className={styles.wrapperPreloader}>
            <img src={preloader} className={styles.preloader} alt={'preloader'}/>
        </div>
    )
}

export default Preloader