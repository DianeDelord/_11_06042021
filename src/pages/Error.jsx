import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Header />
            <div className='error_page_div'>
                <h1 className='error_title'>404</h1>
                <p className='error_message'>Oups, la page que vous demandez n'existe pas.</p>  
                <Link to="/" className="error_back_start">
						Retourner sur la page d’accueil.
					</Link>
            </div>
        </div>
    );
};

export default Error;