import './List.css'
import React from 'react';

const List = ({ job }) => {
    const { vacancy_position, job_available, icon } = job
    return (
        <div className='rounded-md mb-6 w-72 h-56 bg-bgL3  ps-8 pt-8 mx-auto'>
            <div className='bg-bgL2 h-16 w-16 relative rounded-md '> <img src={icon} alt="" className='absolute top-4 left-3 ' /></div>
            <h1 className='font-bold text-textD4 mt-8 mb-2'>{vacancy_position}</h1>
            <p className='text-textD3 '>{job_available} Job Available</p>
        </div>
    );
};

export default List;