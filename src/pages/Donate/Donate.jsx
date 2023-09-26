import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const Donate = () => {
    const [cardDetails, setCardDetails] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();
    const data = useLoaderData();

    useEffect(() => {
        setCardDetails(data[id]);
    }, [id, data]);

    const handleDonate = () => {

        const newId = JSON.parse(localStorage.getItem("ids")) || [];

        if (!newId.find((e) => e.id === id)) {
            newId.push({ id: id })
            localStorage.setItem("ids", JSON.stringify(newId));
        }

        Swal.fire(
            'Donation successful!',
            '',
            'success'
        ).then((result) => {

            if (result.isConfirmed) {
                navigate("/donation")
            }
        })

    }


    return (
        <>
            {cardDetails ?
                <div className='container px-5 lg:px-0 lg:mx-auto mb-20'>
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


                :

                navigate('/error')

            }
        </>
    );
};

export default Donate;
