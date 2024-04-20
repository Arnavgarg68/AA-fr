import React, { useState } from 'react'
import './navbars.css'
import logo from './amulya-ayurved-high-resolution-logo-transparent.png'
import menuLogo from './icons8-menu.svg'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [burgermenu, setBurgermenu] = useState(false);
    const navigate = useNavigate();
    
    const handleSideMenu = () => {
        let menunavbar = document.getElementById('navbar-hamburger-menu');
        if (!burgermenu) {
            menunavbar.style.display = 'block';
        }
        else {
            menunavbar.style.display = 'none';
        }
        setBurgermenu(!burgermenu);
    }
    return (
        <div className='navbar-main-body'>
            <div className="navbar-inner-main-body">
                <div className="navbar-logo">
                    <img src={logo} alt="" onClick={()=>navigate("/AA-fr")}/>
                </div>
                <div id="navbar-elements-container">
                    <div className="navbar-container-elements">About us</div>
                    <div className="navbar-container-elements" onClick={()=>navigate('/feedback')}>Feedback</div>
                    <div className="navbar-container-elements navbar-support">Support us</div>
                </div>
                <div className="navbar-hamburger">
                    <div className="navbar-hamburger-logo" onClick={handleSideMenu}>
                        <img src={menuLogo} alt="" />
                        
                    </div>
                </div>
            </div>
            <div id="navbar-hamburger-menu">
                <div className="navbar-hamburger-menu-items">About us</div>
                <div className="navbar-hamburger-menu-items" onClick={()=>navigate('/feedback')}>Feedback</div>
                <div className="navbar-hamburger-menu-items">Support us</div>
            </div>
        </div>
    )
}

// components for a navbar
// Site logo
// About us
// Support us
// Feedback