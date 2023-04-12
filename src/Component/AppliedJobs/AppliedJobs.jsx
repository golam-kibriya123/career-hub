import AppliedJob from "../AppliedJob/AppliedJob";
import "./AppliedJobs.css"
import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            fetch('fakeData.json')
                .then(res => res.json())
                .then(data => setData(data))
        }, []

    );
    const getData = localStorage.getItem("shopping-cart");
    let genders = JSON.parse(getData)
    const newArray = []

    for (let key in genders) {

        const result = data.find(({ id }) => id == key);
        if (result) {

            newArray.push(result)

        }

    }
    return (
        <div className=" mt-32 max-w-[1320px] w-10/12 mx-auto relative">

            {
                newArray.map(n => <AppliedJob data={n} key={n.id}></AppliedJob>)
            }

        </div>
    );
};

export default AppliedJobs;