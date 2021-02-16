import React from 'react';
import Logo from '../../Assets/logo.png'
import './Navbar.css';
import { Link } from 'react-router-dom';



 export default function Navbar() {

    return(
        <div className="navbar-container">
           <a href="#"><img className="logo" src={Logo} /></a>
           <Link to="/" className="nav-links"><h1 className="gallery">Galerie</h1></Link>
        </div>
    );
 }