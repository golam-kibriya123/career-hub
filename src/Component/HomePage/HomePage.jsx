
import "./HomePage.css"
import React from 'react';
import headerImg from '../../assets/allImages/header.png'
import JobList from "../JobList/JobList";

const HomePage = () => {
    return (
        <div className="max-w-[1320px] w-full font-serif ">
            <header className="flex flex-col-reverse md:flex-row items-center px-3 bg-gradient-to-r from-bgL3 to-bgL2 ">

                <div className=" md:w-1/2">
                    <h1 className="font-extrabold md:text-5xl text-4xl md:leading-tight">One Step <br /> Closer To Your <br /> <span className="text-bgD1"> Dream Job</span></h1>
                    <p className="text-textD2 my-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="md:py-5 md:px-6 py-3 px-4 bg-gradient-to-r from-bgL1 to-bgD1 rounded-lg text-textL1 font-bold ">Get Started</button>
                </div>
                <div className="px-4  md:w-1/2">
                    <img src={headerImg} alt="" className="w-full  " />
                </div>
            </header>
            <JobList></JobList>
        </div>
    );
};

export default HomePage;