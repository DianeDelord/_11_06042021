import React from 'react';
import { useState, useEffect } from 'react';
import FetchData from '../utils/FetchData';
import { Link } from 'react-router-dom';


const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        FetchData.get('datas-kasa.json')
          .then(logements => {
            setData(logements);
            console.log(logements)
          })
      }, []);

    return (
        <div className='locCard'>
            
            {data && (
          <section className='rental_card'>
            {data.map((e) => (
                <Link key={e.id} to={`/rental/${e.id}`} className='card_block'>
                    <h3 className='card_title'> {e.title} </h3>
                    <img src={e.cover} />
                </Link>            
            ))}
          </section>
        )}

        </div>
    );
};

export default Card;