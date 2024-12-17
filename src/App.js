import './App.css';
import logo_website_img from './images/logo-website.png'
import user_shapka_img from './images/user_shapka.jpeg'
import avatar_user_img from './images/avatar_user.jpg'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src={logo_website_img} className='logo-website' alt='logo-website' />
      </header>
      <nav className="nav">
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
          <a href='#'>Messages</a>
        </div>
        <div>
          <a href='#'>News</a>
        </div>
        <div>
          <a href='#'>Music</a>
        </div>
        <div>
          <a href='#'>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src={user_shapka_img} className='user-shapka' alt='shapka user' />
        </div>
        <div>
          img
        </div>
        <div>
          my posts
          <div>
            new post
          </div>
          <div>
            posts
            <div>post 1</div>
            <div>post 1</div>
            <div>post 1</div>
            <div>post 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
