import React from 'react';
import { NavLink } from "react-router-dom";



const Nav = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 h-28">
                <div className="navbar-start z-20">

                    <NavLink to="/" ><img className="w-52" src="/Logo.png" alt="" /></NavLink>
                </div>
                <div className="navbar-end z-20">
                    <ul className="gap-10 menu-horizontal hidden lg:flex font-medium">
                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? " text-red-500 underline font-semibold" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to="/donation" className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? " text-red-500 underline font-semibold" : ""
                        }>Donation</NavLink></li>
                        <li><NavLink to="/statistics" className={({ isActive, isPending }) =>
                            isPending ? "text-black" : isActive ? " text-red-500 underline font-semibold" : ""
                        }>Statistics</NavLink></li>
                    </ul>


                    <div className="dropdown relative">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 shadow rounded-box w-28 right-1 absolute">
                            <li><NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? " text-red-500 font-semibold" : ""
                            }>Home</NavLink></li>
                            <li><NavLink to="/donation" className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? " text-red-500 font-semibold" : ""
                            }>Donation</NavLink></li>
                            <li><NavLink to="/statistics" className={({ isActive, isPending }) =>
                                isPending ? "text-black" : isActive ? " text-red-500 font-semibold" : ""
                            }>Statistics</NavLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;