import { Link, useLoaderData } from "react-router-dom";
import "./JobDetails.css"
import React from 'react';
import dollar from '../../assets/Icons/dollar.png'
import phone from '../../assets/Icons/phone.png'
import mail from '../../assets/Icons/mail.png'
import address from '../../assets/Icons/locatio.png'
import job from '../../assets/Icons/date.png'


const JobDetails = () => {
    const data = useLoaderData();
    const { vacancy_position, educational_requirements, email, experiences, phone_number, responsibilities, salary, location, id } = data;

    const addedData = [];
    console.log(addedData)
    const storedData = () => {
        const presentData = JSON.stringify(data);
        const previousData = localStorage.getItem(data)
        const newData = presentData + previousData;
        addedData.push(newData);

        localStorage.setItem('data', addedData);
        console.log(storedData.length)

    }
    return (

        <div className="flex items-center justify-around">
            <div>
                <h1 className="text-textD1 font-extrabold">Job Responsibility :<span className="text-textD2 font-semibold text-sm"> {responsibilities}</span></h1>
                <h1 className="text-textD1 font-extrabold my-6 leading-8">Educational Requirement:
                    <br /><span className="text-textD2 font-semibold text-sm "> {educational_requirements}</span></h1>
                <h1 className="text-textD2 font-semibold text-sm"><span> {experiences}</span> in this field</h1>
            </div>

            <div>
                <div className="bg-gradient-to-r from-bgD2 to-bgL2 p-7">
                    <div className="mb-8">
                        <h1 className="text-textD1 text-2xl font-bold border-b pb-4 border-bgD1 mb-6">Job Details</h1>
                        <p className="text-textD4 font-bold text-xl my-4 flex items-center "><img src={dollar} alt="" className="w-5 h-5 mr-2" />Salary : <span className="text-textD2 text-sm font-semibold ml-2">{salary} (Per Month)</span></p>
                        <p className="text-textD4 font-bold text-xl my-4 flex items-center"><img src={job} alt="" className="w-5 h-5 mr-2" /> Job Title :  <span className="text-textD2 text-sm font-semibold ml-2">{vacancy_position}</span></p>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-textD1 text-2xl font-bold border-b pb-4 border-bgD1 mb-6">Contact Information</h1>
                        <p className="text-textD4 font-bold text-xl my-4 flex items-center"><img src={phone} alt="" className="w-5 h-5 mr-2" /> Phone: <span className="text-textD2 text-sm font-semibold ml-2">{phone_number}</span></p>
                        <p className="text-textD4 font-bold text-xl my-4 flex items-center"><img src={mail} alt="" className="w-5 h-5 mr-2" /> Email: <span className="text-textD2 text-sm font-semibold ml-2">{email}</span></p>
                        <p className="text-textD4 font-bold text-xl my-4 flex items-center"><img src={address} alt="" className="w-5 h-5 mr-2" /> Address: <span className="text-textD2 text-sm font-semibold ml-2">{location}</span></p>
                    </div>
                </div>
                <button className=" bg-gradient-to-l to-bgL1 from-bgD1 w-full md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-6 " onClick={storedData} > Apply Now </button>
            </div>
        </div>


    );
};

export default JobDetails;
