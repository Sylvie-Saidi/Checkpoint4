import React from 'react';
import Logo from '../../Assets/logo.png'
import './Navbar.css';
import { Link } from 'react-router-dom';
// import Search from '../SearchBar/Search';


 export default function Navbar() {

    return(
        <div className="navbar-container">
           <a href="#"><img className="logo" src={Logo} /></a>
           <Link to="/" className="nav-links"><h1 className="nav-section">Galerie</h1></Link>
           <Link to="/login" className="nav-links"><h1 className="nav-section">Connexion</h1></Link>
           {/* <div>
              <Search />
           </div> */}
        </div>
    );
 }