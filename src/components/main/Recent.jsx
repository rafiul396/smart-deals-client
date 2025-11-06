import React from 'react';
import RecentProduct from './products/RecentProduct';
import Container from '../../layout/Container';

const Recent = ({ productsData }) => {
    console.log(productsData);
    
    return (
        <div className='py-10 bg-[#F5F5F5]'>
            <Container>
                <h2 className='text-6xl font-semibold text-center'>Recent <span className='text-color'>Products</span></h2>
                <div className='grid grid-cols-3 gap-4 mt-10 '>
                    {
                        productsData.map(pro => <RecentProduct />)
                    }
                </div>
            </Container>
            <div className='flex justify-center mt-10'>
                <a href='/all-products' className='btn linear-bg text-white font-semibold text-lg py-7 gradient-border rounded-lg'>
                    Show All
                </a>
            </div>
        </div>
    );
};

export default Recent;