import { Outlet } from "react-router-dom";
import "./Home.css"
import React from 'react';
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import NavBar from "../NavBar/NavBar";

const Home = () => {

    return (
        <div className="flex flex-col 
    h-[800px] max-w-[1920px]">


            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;