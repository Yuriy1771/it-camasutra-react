import React from 'react'
import logo_website_img from '../images/logo-website.png'

const Header = () => {
    return (
        <header className="header">
            <img src={logo_website_img} className='logo-website' alt='logo-website' />
        </header>
    )
}

export default Header;