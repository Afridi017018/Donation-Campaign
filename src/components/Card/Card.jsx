import React from 'react';

const Card = () => {
    return (
        <div className='bg-fuchsia-200 inline-block rounded-t-md rounded-b-md'>
            <div>
                <img className='h-52 w-72 rounded-t-md' src="https://img.freepik.com/premium-photo/donation-box-with-winter-clothes-old-wooden-background_104376-1951.jpg?w=740" alt="" />
            </div>
            <div>
                <div className='m-2'>
                    <p className=' bg-fuchsia-400 text-fuchsia-900 inline font-semibold px-1 rounded-sm'>Health</p>
                </div>
                <div className='m-2'>
                    <h3 className='text-xl font-semibold text-green-900 inline'>Clean Water</h3>
                </div>
            </div>
        </div>
    );
};

export default Card;