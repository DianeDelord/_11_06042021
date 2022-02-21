import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import FetchService from '../utils/FetchService';


const HomeContainer = () => {
    const [data, setData] = useState([]);

console.log(data)
    useEffect(() => {
        FetchService.get('data-kasa.json')
          .then(logements => {
            setData(logements);
          })
      }, []);

    return (
        <div className='homecontainer'>
            <Card />
        </div>
    );
};

export default HomeContainer;