import "./Job.css";
import React from 'react';
import dollar from '../../assets/Icons/dolar.svg'
import lo from '../../assets/Icons/Location.png'
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { vacancy_position, logo, company_name, salary, location, id } = job;

    return (
        <div className="border w-full  md:w-[570px]  mx-auto rounded-md p-10 text-start">
            <div className="h-12">
                <img src={logo} alt="" className="w-28" />
            </div>
            <h1 className="text-textD4 text-2xl font-bold mt-8 mb-2">{vacancy_position}</h1>
            <h1 className="text-textD2 text-xl">{company_name}</h1>
            <div className="flex text-bgD1 font-extrabold my-6
            ">
                <button className="border border-bgD1 py-2 px-4 rounded-md ">Remote</button>
                <button className="border border-bgD1 py-2 px-4 rounded-md ms-4">Full Time</button>
            </div>
            <div className="flex text-textD3 text-xl items-center">
                <p className="flex items-center mr-6"><img src={lo} alt="" className="w-5 h-5 p-0.5 border border-textD3 rounded-full mr-2" /> {location}</p>
                <p className="flex items-center"><img src={dollar} alt="" className="w-5 h-5 p-0.5 border border-textD3 rounded-full mr-2" /> Salary:{salary}</p>
            </div>

            <button className=" bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-6 "  >View Details</button>
        </div>
    );
};

export default Job;