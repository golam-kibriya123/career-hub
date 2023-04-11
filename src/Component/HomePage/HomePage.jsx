
import "./HomePage.css"
import React, { useEffect, useState } from 'react';
import JobList from "../JobList/JobList";
import Header from "../Header/Header";
import JobFeatured from "../JobFeatured/JobFeatured";


const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const newJobs = jobs.slice(0, 4);


    return (
        <div className="max-w-[1320px] w-full font-serif ">
            <Header></Header>
            <JobList jobs={newJobs}></JobList>
            <JobFeatured jobs={jobs} newJobs={newJobs} ></JobFeatured>
        </div>
    );
};

export default HomePage;