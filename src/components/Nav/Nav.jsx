import React from 'react';

const Nav = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 lg:justify-between justify-center items-center h-28 container mx-auto'>
            <div>
                <img className="w-52" src="/Logo.png" alt="" />
            </div>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>Donation</li>
                <li>Statistics</li>
            </ul>
        </div>
    );
};

export default Nav;