import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewTextPost={props.updateNewTextPost}/>
                        }/>
                        <Route path='/messages/*' element={<Dialogs
                            state={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateNewTextMessage={props.updateNewTextMessage}
                        />}
                        />
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>/
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
