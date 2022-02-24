import React from 'react';
import kasaLogo from "../visuels/kasa-logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="TopNav">
            <div className='navMenu'>
            <img src={kasaLogo} alt="Kaza logo" className="navMenu_logo" />
            <ul className="navMenu_ul">
                 <li className="navMenu_li">
                 <Link to="/" > Accueil</Link>
                </li>
                <li className="navMenu_li">
                <Link to="/apropos" > A Propos</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Header;