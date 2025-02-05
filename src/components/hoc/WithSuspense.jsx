import React, {Suspense} from 'react'
import Preloader from "../other/Preloader/Preloader.tsx";

export const WithSuspense = (Component) => {
    return (props) => (
        <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    )
}
