import { Outlet } from "react-router-dom";
import "./Home.css"
import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;