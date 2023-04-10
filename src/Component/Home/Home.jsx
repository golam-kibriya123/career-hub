import { Outlet } from "react-router-dom";
import "./Home.css"
import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col justify-between h-[800px]">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;