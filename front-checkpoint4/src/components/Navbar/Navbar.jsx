import React from 'react';
import Logo from '../../Assets/logo.png'
import Title from '../../Assets/Legends_of_Runeterra_logo.png'
import './Navbar.css';



 export default function Navbar() {

    return(
        <div className="navbar-container">
            <img className="logo" src={Logo} />
            <img className="runeterra" src={Title} />

        </div>
    );
 }