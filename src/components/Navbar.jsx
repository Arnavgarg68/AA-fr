import React, { useState } from 'react'
import './navbars.css'
import logo from './amulya-ayurved-high-resolution-logo-transparent.png'
import menuLogo from './icons8-menu.svg'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const [burgermenu, setBurgermenu] = useState(false);
    const [br,setbr] = useState(false);
    const navigate = useNavigate();
    
    const handleSideMenu = () => {
        // let menunavbar = document.getElementById('navbar-hamburger-menu');
        if (!burgermenu) {
            // menunavbar.style.display = 'block';
            setbr(false)
        }
        else {
            // menunavbar.style.display = 'none';
            setbr(true)
        }
        setBurgermenu(!burgermenu);
    }
    return (
        <div className='navbar-main-body'>
            <div className="navbar-inner-main-body">
                <div className="navbar-logo">
                    {/* <img src={logo} alt="" onClick={()=>navigate("/AA-fr")}/> */}
                    <img src={logo} alt="" onClick={()=>navigate("/")}/>
                </div>
                <div id="navbar-elements-container">
                    <div className="navbar-container-elements">
                    <a href="tel:7417099103" style={{color:"black",textDecoration:"none",marginTop:"15px"}}>Contact us</a>
                    </div>
                    <div className="navbar-container-elements" onClick={()=>navigate('/feedback')}>Feedback</div>
                    <div className="navbar-container-elements navbar-support">
                    <a href="https://www.instagram.com/amulya.ayurved?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{color:"white",textDecoration:"none",marginTop:"15px"}} target="_blank" rel="noreferrer">Support us</a>
                    </div>
                </div>
                <div className="navbar-hamburger">
                    <div className="navbar-hamburger-logo" onClick={handleSideMenu}>
                        <img src={menuLogo} alt="" />
                        
                    </div>
                </div>
            </div>
            
            {
                br&&(<div id="navbar-hamburger-menu">
                <div className="navbar-hamburger-menu-items">
                <a href="tel:7417099103" style={{color:"black",textDecoration:"none",marginTop:"15px"}} onClick={()=>setbr(!br)}>Contact us</a>
                </div>
                <div className="navbar-hamburger-menu-items" onClick={()=>{navigate('/feedback');setbr(!br)}}>Feedback</div>
                <div className="navbar-hamburger-menu-items"><a rel="noreferrer" href="https://www.instagram.com/amulya.ayurved?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{color:"black",textDecoration:"none",marginTop:"15px"}} target="_blank" onClick={()=>setbr(!br)}>Support us</a></div>
            </div>)
            }
            
        </div>
    )
}

// components for a navbar
// Site logo
// About us
// Support us
// Feedback