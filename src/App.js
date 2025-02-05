import React, {lazy, Suspense} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import {Navigate, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import {WithSuspense} from "./components/hoc/WithSuspense";
const DialogsContainer = WithSuspense(lazy(() => import('./components/Dialogs/DialogsContainer')))
const FriendsContainer = WithSuspense(lazy(() => import('./components/Friends/FriendsContainer.tsx')))
const Login = WithSuspense(lazy(() => import('./components/Login/Login')))

const App = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app_wrapper_content'>
                <Routes>
                    <Route path='/' element={<Navigate to={'/profile'}/>}/>
                    <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                    <Route path='/messages/*' element={<DialogsContainer/>}/>
                    <Route path='/friends/*' element={<FriendsContainer pageTitle={'samurai'}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                    <Route path='/login/*' element={<Login/>}/>
                    <Route path='*' element={<div>404 NOT FOUND</div>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
