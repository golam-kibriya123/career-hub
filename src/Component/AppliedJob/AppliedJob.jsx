import "./AppliedJob.css"
import React from 'react';
import lo from '../../assets/Icons/locatio.png'
import dollar from '../../assets/Icons/dollar.png'
import { Link } from "react-router-dom";
const AppliedJob = ({ data }) => {

    const { logo, salary, location, company_name, vacancy_position, id, types } = data;
    return (
        <div className="my-6 border md:p-6 py-2 flex md:flex-row flex-col items-center justify-between ">
           
            <div className="md:w-56 md:h-56 border flex items-center justify-center bg-[#F4F4F4] mr-8">
                <img src={logo} alt="" />
            </div>

            <div className="mr-auto mt-3 md:mt-0">
                <h1 className="text-textD4 font-extrabold text-2xl">{vacancy_position}</h1>
                <p className="text-textD3 font-bold text-xl mt-2">{company_name}</p>
                <div className="flex text-bgD1 font-extrabold my-6 ">
                    {types.map(type => <p className="border border-bgD1 p-1 md:py-2 md:px-4 rounded-md mr-3">{type}</p>)}
                </div>
                <div className="flex text-textD3 md:text-xl text-sm items-center">
                    <p className="flex items-center md:mr-6 mr-2"><img src={lo} alt="" className="w-5 h-5 p-0.5 border border-textD3 rounded-full mr-2" /> {location}</p>
                    <p className="flex items-center"><img src={dollar} alt="" className="w-5 h-5 p-0.5 border border-textD3 rounded-full mr-2" /> Salary:{salary}</p>
                </div>
            </div>
            <Link to={`/details/${id}`}><button className=" bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-6 "  > View Details
            </button></Link>

        </div>
    );
};

export default AppliedJob;