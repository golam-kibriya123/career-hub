import './NavBar.css'
import React from 'react';
import careerHub from '../../assets/allImages/cH.png'
import menuImg from '../../assets/Icons/menu.svg'
import crossImg from '../../assets/Icons/cross.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='font-serif flex  items-center justify-between p-4 di'>
            <img src={careerHub} alt="" className='w-44 hidden md:block' />
            <img src={menuImg} alt="" className='md:hidden w-8' />
            <img src={crossImg} alt="" className='md:hidden w-9' />
            <div className="nav-link flex md:flex-row  flex-col">
                <Link to='/' className='mx-3 text-textD2 hover:text-bgD1'>Home</Link>
                <Link to='/statistics' className='mx-3 text-textD2 hover:text-bgD1'>Statistics</Link>
                <Link to='/appliedJobs' className='mx-3 text-textD2 hover:text-bgD1'>Applied Jobs</Link>
                <Link to='/blog' className='mx-3 text-textD2 hover:text-bgD1'>Blog</Link>
                <Link to='/blog' className='mx-3 text-textD2 hover:text-bgD1'>Blog</Link>

            </div>
            <button className=" bg-gradient-to-l to-bgL1 from-bgD1 py-4 px-5 rounded-lg  text-textL1 text-xl font-extrabold "
            >Star Applying</button>
        </div>
    );
};

export default NavBar;