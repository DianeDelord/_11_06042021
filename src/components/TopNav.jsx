import React from 'react';
import kasaLogo from "../visuels/kasa-logo.svg"
import { Link } from 'react-router-dom'


const TopNav = () => {
    return (
        <nav className="TopNav">
            <div className='navMenu'>
            <img src={kasaLogo} alt="Kaza logo" className="" />
            <ul className="">
                 <li className="">
                <Link to="/">Accueil</Link>
                </li>
                <li className="">
                <Link to="/Apropos">A Propos</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default TopNav;