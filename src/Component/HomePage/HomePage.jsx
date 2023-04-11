
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
    return (
        <div className="max-w-[1320px] w-full font-serif ">
            <Header></Header>
            <JobList jobs={jobs}></JobList>
            <JobFeatured jobs={jobs}></JobFeatured>
        </div>
    );
};

export default HomePage;