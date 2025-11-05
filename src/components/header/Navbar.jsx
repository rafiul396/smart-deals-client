import React from 'react';
import { NavLink } from 'react-router';
import profile from '../../assets/thumb-profile.png'

const Navbar = () => {
    const menus = <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">All Products</NavLink></li>
            <li><NavLink to="/myproducts">My Products</NavLink></li>
            <li><NavLink to="/mybids">My Bids</NavLink></li>
            <li><NavLink to="/createproducts">Create Product</NavLink></li>
        </>
    
    return (
        <div className="navbar inter">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {menus}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-3xl">Smart<span className='text-color'>Deals</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-medium">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-[43px] h-[43px]' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Navbar;