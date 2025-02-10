import React, {FC} from "react"
import {useSelector} from "react-redux"
import Friends from "./Friends.tsx"
import Preloader from "../other/Preloader/Preloader.tsx"
import {getIsLoader} from "../../redux/selectors/friendsSelector.ts"

type friendsType = {}

const FriendsPage:FC<friendsType> = (props) => {
    const isLoader =  useSelector(getIsLoader)
    return (
        <>
            {isLoader ? <Preloader/> : null}
            <Friends />
        </>
    )
}

export default FriendsPage