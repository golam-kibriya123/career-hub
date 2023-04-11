import Job from "../Job/Job";
import "./JobFeatured.css"
import React, { useState } from 'react';

const JobFeatured = ({ jobs ,newJobs}) => {
    const [sliceJObs, setSliceJobs] = useState(true)
    const seeAll = () => { setSliceJobs(!sliceJObs) };
    return (
        <div className="mt-32 text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl mb-4">Featured Jobs</h1>
            <p className="text-textD2 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="jobs md:columns-2 columns-1 px-4 space-y-8 ">
                {sliceJObs ? newJobs.map(job => <Job job={job} key={job.id}></Job>) : jobs.map(job => <Job job={job} key={job.id}></Job>)}
            </div>

            <button className={`bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-10 ${sliceJObs ? '' : 'hidden'}`}
                onClick={seeAll} >See All Jobs</button>
            <button className={`bg-gradient-to-l to-bgL1 from-bgD1 md:py-4 md:px-5 py-3 px-4 text-sm  rounded-lg  text-textL1 md:text-xl font-extrabold mt-10 ${sliceJObs ? 'hidden' : ''}`}
                onClick={seeAll} >See Less</button>
        </div>
    );
};

export default JobFeatured;