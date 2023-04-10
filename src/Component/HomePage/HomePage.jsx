import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./HomePage.css"
import React from 'react';

const HomePage = () => {
    return (
        <div className="w-[1290px] flex flex-col items-center justify-center">

            <NavBar></NavBar>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;