import React from 'react';
import Logo from '../../Assets/logo.png'
import './Navbar.css';



 export default function Navbar() {

    return(
        <div className="navbar-container">
            <img className="logo" src={Logo} />

        </div>
    );
 }