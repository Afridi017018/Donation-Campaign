import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card/Card';

const Cards = () => {
    const cardInfo = useLoaderData();
    //  console.log(cardInfo)
    return (
        <div className='grid grid-cols-4 place-items-center container mx-auto gap-y-6 my-20'>
            {cardInfo.length > 0 &&
            cardInfo.map((element,i)=>(
                <Card key={i+1} element = {element} />
            ))
            }
        </div>
    );
};

export default Cards;