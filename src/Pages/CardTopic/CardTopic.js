import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

const CardTopic = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(response => response.json())
            .then(result => {
                if (result.status) {
                    setData(result.data);
                } else {
                    console.log('Error: Unable to fetch data');
                }
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className=''>
            <div className='text-center  p-16'>
                <h2 className='text-2xl font-bold text-emerald-600'> All Topics</h2>
            </div>
            <div className='grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {data.map(cardData => (
                    <Card
                        key={cardData.id}
                        data={cardData}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardTopic;
