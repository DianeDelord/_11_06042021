import React from 'react';
import backgroundPicture from '../visuels/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'

const Bandeau = () => {
    return (
        <div>
              <div className='navPicture'>
                <img src={backgroundPicture} alt="paysage de cimes de montagnes" className='background-picture' />
                <h1 className='catchphrase'></h1>
            </div>
        </div>
    );
};

export default Bandeau;