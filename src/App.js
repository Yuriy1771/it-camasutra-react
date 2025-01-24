import './App.css';
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/messages/*' element={<DialogsContainer/>}/>
                        <Route path='/friends/*' element={<FriendsContainer/>}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                        <Route path='/login/*' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
