import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../DonationCard/DonationCard';

const DonationCards = () => {

    const [isSlice, setIsSlice] = useState(true)

    const allCards = useLoaderData();

    const getDonateInfo = JSON.parse(localStorage.getItem("ids")) || [];

    const cartInfo = getDonateInfo.map((e, i) => {
        // allCards.find(obj => obj.id == i) !== undefined
        return allCards[e.id];

    })

    // if(isSlice)
    // {

    // }

    // const test = allCards.filter((_, index) => getDonateInfo.includes({id: index}))

    // console.log(cartInfo)

    return (
        <>
            <div className='mt-10 mb-20'>
                <div className='grid grid-cols-2 gap-5'>

                    {
                        (cartInfo.length > 0 && isSlice) &&

                        cartInfo.slice(0, 4).map((element, i) => (
                            <DonationCard key={i + 1} element={element} />
                        ))


                    }

                    {
                        (cartInfo.length > 0 && !isSlice) &&

                        cartInfo.map((element, i) => (
                            <DonationCard key={i + 1} element={element} />
                        ))


                    }


                </div>

                {
                    cartInfo.length > 4 &&
                    <div className='text-center mt-10'>
                        {isSlice &&
                            <button className='text-white bg-green-700 px-5 py-2 rounded-md' onClick={() => setIsSlice(false)}>See All</button>
                        }
                    </div>
                }

            </div>

            <div>
                {
                    cartInfo.length === 0 &&
                    <div className='h-[500px] w-full flex justify-center items-center text-gray-500 text-4xl font-bold'>
                        Empty List !
                    </div>
                }
            </div>


        </>
    );
};

export default DonationCards;