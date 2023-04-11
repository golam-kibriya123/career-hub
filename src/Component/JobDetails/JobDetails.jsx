import { useLoaderData } from "react-router-dom";
import "./JobDetails.css"
import React from 'react';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { vacancy_position, description, educational_requirements, email, experiences, phone_number, responsibilities, salary, location } = data;
    return (
        <div>
            <h1>hello

            </h1>
        </div>
    );
};

export default JobDetails;
