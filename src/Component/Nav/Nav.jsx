import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Nav.css"
import React from 'react';

const Nav = () => {
    return (
        <nav>
            <NavBar></NavBar>
            <Header></Header>
        </nav>
    );
};

export default Nav;