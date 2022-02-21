import React from 'react';
import Header from '../components/Header'
import BandeauCatchphrase from '../components/BandeauCatchphrase';
import HomeContainer from '../components/HomeContainer';

const Home = () => {

    return (
        <div>
            <Header />
        <BandeauCatchphrase />
        <HomeContainer />
    </div>
    );
};

export default Home;