import './List.css'
import React from 'react';

const List = ({ job }) => {
    const { vacancy_position, job_available, icon } = job
    return (
        <div className='bg-yellow-300 mb-6 w-full h-56'>
            <img src={icon} alt="" />
            <h1>{vacancy_position}</h1>
            <p>{job_available}</p>
        </div>
    );
};

export default List;