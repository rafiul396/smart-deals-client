import React from 'react';
import Hero from '../../components/header/hero/Hero';
import Recent from '../../components/main/Recent';
import Container from '../Container';
import { useLoaderData } from 'react-router';

const Home = () => {
    const productsData = useLoaderData();
    return (
        <div>
            <Hero />
            <Recent productsData={productsData} />
        </div>
    );
};

export default Home;