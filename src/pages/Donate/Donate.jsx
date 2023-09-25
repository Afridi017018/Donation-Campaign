import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

const Donate = () => {
    const [cardDetails, setCardDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch("/fakeData.json")
            .then((res) => res.json())
            .then((data) => setCardDetails(data[id]));
    }, [id]);

    const handleDonate = ()=>{

        const newId = JSON.parse(localStorage.getItem("ids")) || [];

        newId.push({id: id})
        
        localStorage.setItem("ids", JSON.stringify(newId));

    }


    return (
        <>
            {cardDetails && (
                <div className='container mx-auto mb-20'>
                    <div className='h-[400px] lg:h-[550px] my-10 relative'>
                        <img className='h-full w-full rounded-md' src={cardDetails.pic} alt="" />
                        <div className={`bg-black bg-opacity-50 rounded-b-md absolute w-full h-28 bottom-0 flex items-center px-10`}>
                            <button className={`text-lg text-white font-medium px-4 py-2 rounded`} style={{ backgroundColor: cardDetails.textBtnColor }} onClick={handleDonate}>
                                Donate ${cardDetails.price}
                            </button>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>{cardDetails.title}</h1>
                        <p className='my-5 text-sm text-gray-500'>{cardDetails.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Donate;
