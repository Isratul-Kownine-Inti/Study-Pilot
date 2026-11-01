import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut ;