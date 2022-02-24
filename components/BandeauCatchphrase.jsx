import React from 'react';
import backgroundPicture from "../visuels/eric-muhr-unsplash.jpg"

const BandeauCatchphrase = () => {
    return (
            <div className='navPicture'>
                <img src={backgroundPicture} alt="paysage de falaise sous la brume" className='background-picture' />
                <h1 className='catchphrase'>Chez vous, partout et ailleurs</h1>
            </div>
    );
};

export default BandeauCatchphrase;