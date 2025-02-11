import React from 'react'
import styles from './FriendsSearchForm.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {filterType} from "../../redux/friendsReducer";

type form = {
    term: string,
}

const FriendsSearchForm = ({onFilterChanged}) => {
    const {
        register,
        formState: {
            isValid,
        },
        handleSubmit,
    } = useForm<form>()

    const onSubmit:SubmitHandler<form> = (data:filterType) => {
        alert(JSON.stringify(data))
        onFilterChanged(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
                <input className={styles.searchInput} placeholder={'search'} {...register('term', {
                    required: 'empty field'

                })}/>
            </div>

                <button className={styles.btnSearch} disabled={!isValid}>search</button>
        </form>
    )
}

export default FriendsSearchForm