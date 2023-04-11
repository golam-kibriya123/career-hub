import Job from "../job/job";
import "./JobFeatured.css"
import React from 'react';

const JobFeatured = ({ jobs }) => {
    return (
        <div className="mt-32 text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4">Featured Jobs</h1>
            <p className="text-textD2 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="jobs md:columns-2 columns-1 px-4 space-y-8 ">
                {jobs.map(job => <Job job={job} key={job.id}></Job>)}
            </div>
            <button className=" bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-10"
            >Star Applying</button>
        </div>
    );
};

export default JobFeatured;