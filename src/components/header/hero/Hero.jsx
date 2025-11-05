import React from 'react';
import leftImg from '../../../assets/bg-hero-left.png'
import rightImg from '../../../assets/bg-hero-right.png'
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-[#FFE6FD] to-[#E0F8F5] h-fit text-[#001931]'>
            <div className='flex justify-between items-center'>
                <img src={leftImg} alt="" />
                <div className='space-y-4'>
                    <h1 className='text-7xl text-center font-bold'>
                        Deal Your <span className='text-color'>Products</span> <br /> In A <span className='text-color'>Smart</span> Way !
                    </h1>
                    <p className='text-[#627382] text-xl'>
                        SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
                    </p>

                    <div className="join w-full justify-center">
                        <div className='w-1/2'>
                            <label className="input validator join-item w-full rounded-l-full outline-none">
                                <input className='outline-none' type="text" placeholder="Search For Products, Categoriees..." required />
                            </label>
                        </div>
                        <button className="btn btn-neutral join-item linear-bg border-none rounded-r-full text-xl outline-none">
                            <FaSearch />
                        </button>
                    </div>
                    <div className='text-center space-x-3'>
                        <button className='btn linear-bg text-white font-semibold text-lg py-6 border-[#632EE3] '>
                            Watch All Products
                        </button>
                        <button className='btn font-semibold text-lg py-6 border border-[#632EE3] text-[#632EE3]'>
                            Post an Product
                        </button>
                    </div>
                </div>
                <img src={rightImg} alt="" />
            </div>
        </section>
    );
};

export default Hero;