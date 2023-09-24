import React from 'react';

const Banner = () => {
    return (
        <div className='bg-blue-300 h-[480px] flex items-center justify-center'>
            <div className=''>
            <div>
                <h1 className='text-4xl font-bold'>I Grow By Helping People In Need</h1>
            </div>
            <div>
             <div className='text-center mt-10' >
                <input className="w-72 h-10 rounded-l-md px-2 border border-gray-400 border-r-0" placeholder='Search here...' type="text" />
                <button className='h-10 w-20 rounded-r-md bg-orange-500 text-white border border-gray-400 border-l-0'>Search</button>
             </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;