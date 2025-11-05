import React from 'react';
import Navbar from './Navbar';
import Container from '../../layout/Container';

const Header = () => {
    return (
        <header>
            <Container>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;