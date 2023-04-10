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
        <div className="w-full md:columns-4 columns-2 bg-orange-300 gap-4">
            {jobs.map(job => <List job={job} key={job.id}></List>)}
        </div>
    );
};

export default JobList;