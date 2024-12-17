import React from 'react'
import user_shapka_img from '../images/user_shapka.jpeg'
import user_avatar_img from '../images/avatar_user.jpg'

const Profile = () => {
    return (
        <div className="content">
        <div>
          <img src={user_shapka_img} className='user-shapka' alt='shapka user' />
        </div>
        <div>
          <img src={user_avatar_img} className='user-avatar' alt='user avatar' />
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
    )
}

export default Profile