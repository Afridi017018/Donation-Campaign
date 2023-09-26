import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    const navigate = useNavigate();

    return (
        <div className='text-4xl font-bold text-gray-500 h-screen flex flex-col justify-center items-center'>
        <h5>{error.status} !</h5>
        <h5>Page {error.statusText}</h5>
        <button className='py-2 px-4 m-2 bg-red-600 text-white rounded-md cursor-pointer text-base font-medium' onClick={()=>navigate("/")}>Go Home</button>
        </div>
    );
};

export default Error;