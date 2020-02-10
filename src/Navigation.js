import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       
         <ul className="navbar">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/galleryAdmin">Gallery Admin</NavLink></li>
         </ul>
       
    );
}

export default Navigation;