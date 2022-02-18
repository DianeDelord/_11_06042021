import React from 'react';
import kasaLogo from "../visuels/kasa-logo.svg"

const TopNav = () => {
    return (
        <nav className="TopNav">
            <div className='navMenu'>
            <img src={kasaLogo} alt="Kaza logo" className="" />
            <ul className="">
                <li className="">
                    <a>Accueil</a>
                </li>
                <li className="">
                    <a>A Propos</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default TopNav;