import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import FetchData from '../utils/FetchData';
import { Link } from 'react-router-dom';


const HomeContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        FetchData.get('datas-kasa.json')
          .then(logements => {
            setData(logements);
            console.log(logements)
          })
      }, []);

    return (
        <div className='homecontainer'>

{data && (
          <section className='home__grid'>
            {data.map((e) => (
              <Link key={e.id} to={`/rental/${e.id}`}>
                <Card title={e.title} imgCover={e.cover} />
              </Link>
            ))}
          </section>
        )}


            <Card />
        </div>
    );
};

export default HomeContainer;