import React, { useEffect, useState } from 'react';
import './Navbar.css'
import logo from './assets/netflix-logo.svg.png';
import avatar from './assets/Netflix-avatar.png';
import './Navbar.css'



function Navbar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img 
            className='nav-logo'
            src={logo}
            alt='Netflix logo'

        />
        <img 
            className='nav-avatar'
            src={avatar}
            alt='Netflix logo'

        />
    </div>
  )
}

export default Navbar