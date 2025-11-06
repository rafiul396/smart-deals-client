import React from 'react';
import Header from '../components/header/Header';
import Hero from '../components/header/hero/Hero';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router';
import Container from './Container';

const Root = () => {
    return (
        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
};

export default Root;