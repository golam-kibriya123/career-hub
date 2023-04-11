import List from "../List/List";
import "./JobList.css"
import React, { useEffect, useState } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div className="w-full px-3 text-center mt-32">
            <h1 className="text-textD1 text-4xl font-extrabold">Job Category List</h1>
            <p className="text-textD2 font-medium mt-4 mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className=" lg:columns-4 md:columns-2 columns-1  gap-4  mx-auto text-start">
                {jobs.map(job => <List job={job} key={job.id}></List>)}
            </div>
        </div>

    );
};

export default JobList;