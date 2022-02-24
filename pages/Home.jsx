import React from 'react';
import BandeauCatchphrase from '../components/BandeauCatchphrase';
import Card from '../components/Card';

const Home = () => {

    return (
        <div>
        <BandeauCatchphrase />
        <section className='home__grid'>
          <Card />
          </section>
    </div>
    );
};

export default Home;