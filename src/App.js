import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/messages' element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
