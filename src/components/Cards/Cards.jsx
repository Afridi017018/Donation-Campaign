import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SearchContext } from '../../App';
import Card from '../Card/Card';

const Cards = () => {
    const cardInfo = useLoaderData();
    const {search} = useContext(SearchContext);

    let filter = cardInfo;

    if(search)
    {
        filter = cardInfo.filter((e)=>(
            e.category.toLowerCase() === search.toLowerCase()

        ))
        // console.log(filter)
    }

   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center container mx-auto gap-y-6 my-20'>
            {filter.length > 0 &&
            filter.map((element,i)=>(
                <Card key={i+1} element = {element} id={i} />
            ))
            }
        </div>
    );
};

export default Cards;