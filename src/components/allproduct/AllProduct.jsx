import React from 'react';
import RecentProduct from '../main/products/RecentProduct';
import Container from '../../layout/Container';
import { useLoaderData } from 'react-router';

const AllProduct = () => {
    const productsData = useLoaderData();
    console.log(productsData);
    
    return (
        <div className='py-10 bg-[#F5F5F5]'>
            <Container>
                    <h2 className='text-6xl font-semibold text-center'>All <span className='text-color'>Products</span></h2>
                <div className='grid grid-cols-3 gap-4 mt-10 '>
                    {
                        productsData.map(pro => <RecentProduct pro={pro} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AllProduct;