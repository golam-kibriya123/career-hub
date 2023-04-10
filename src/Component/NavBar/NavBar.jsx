import './NavBar.css'
import React from 'react';
import mg from '../../assets/allImages/cH.png'

const NavBar = () => {
    return (
        <div className=''>
            <img src={mg} alt="" />
            <h1 className='text-bgD1'>this is header</h1>
        </div>
    );
};

export default NavBar;