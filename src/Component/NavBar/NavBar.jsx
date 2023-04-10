import './NavBar.css'
import React, { useState } from 'react';
import careerHub from '../../assets/allImages/cH.png'
import menuImg from '../../assets/Icons/menu.svg'
import crossImg from '../../assets/Icons/cross.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [on, setOn] = useState(true);
    const toggle = () => {
        setOn(!on);
    }
    return (
        <div className='font-serif flex  items-center justify-between p-4 w-full max-w-[1290px] pb-24 bg-gradient-to-r from-bgL3 to-bgL2 '>
            <img src={careerHub} alt="" className='w-44 hidden md:block' />
            <button className='relative h-8 w-9  md:hidden border border-bgD1' onClick={toggle}>
                <img src={menuImg} alt="" className={` w-8 absolute  top-0 ${on ? 'block' : 'hidden'}  `} />
                <img src={crossImg} alt="" className={` w-9 absolute top-0 ${on ? 'hidden' : 'block'}   `} />
            </button>
            <div className={`nav-link flex md:flex-row  flex-col absolute ${!on ? 'top-16 left-0' : '-top-96'} md:static`}>
                <Link to='/' className='mx-3 text-textD2 hover:text-bgD1'>Home</Link>
                <Link to='/statistics' className='mx-3 text-textD2 hover:text-bgD1'>Statistics</Link>
                <Link to='/appliedJobs' className='mx-3 text-textD2 hover:text-bgD1'>Applied Jobs</Link>
                <Link to='/blog' className='mx-3 text-textD2 hover:text-bgD1'>Blog</Link>


            </div>
            <button className=" bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold "
            >Star Applying</button>
        </div>
    );
};

export default NavBar;