import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../App';


const Banner = () => {

    const [searchText, setSearchText] = useState("");
    const { setSearch } = useContext(SearchContext)

    const handleSearch = () => {
        setSearch(searchText);
    }

    return (
        <div className='h-[480px] flex items-center justify-center relative'>
            <img className='absolute h-full w-full object-fill opacity-10' src="https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155300.jpg?size=626&ext=jpg" alt="" />
            <div className='z-10'>
                <div>
                    <h1 className='text-4xl font-bold text-center'>My Growth Is Fueled By Assisting Those In Need</h1>
                </div>
                <div>
                    <div className='text-center mt-10' >
                        <input className="w-72 h-10 rounded-l-md px-2 border border-gray-400 border-r-0" placeholder='Search here...' type="text" onChange={(e) => setSearchText(e.target.value)} />
                        <button className='h-10 w-20 rounded-r-md bg-orange-500 text-white border border-gray-400 border-l-0' onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;