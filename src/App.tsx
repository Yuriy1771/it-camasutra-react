import React, {lazy} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar.tsx'
import News from './components/News/News.tsx'
import Music from './components/Music/Music.tsx'
import Settings from "./components/Settings/Settings.tsx";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer.tsx";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import {WithSuspense} from "./components/hoc/WithSuspense.jsx";
const DialogsContainer = WithSuspense(lazy(() => import('./components/Dialogs/DialogsContainer.tsx')))
const FriendsPage = WithSuspense(lazy(() => import('./components/Friends/FriendsContainer.tsx')))
const Login = WithSuspense(lazy(() => import('./components/Login/Login.tsx')))

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
                    <Route path='/friends/*' element={<FriendsPage/>}/>
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