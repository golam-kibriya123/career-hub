import './NavBar.css'
import React from 'react';
import careerHub from '../../assets/allImages/cH.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=''>
            <img src={careerHub} alt="" />
            <div className="nav-link">
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/appliedJobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>

            </div>
            <h1 className='text-bgD1'>this is header</h1>
        </div>
    );
};

export default NavBar;