import "./Error.css"
import React from 'react';
import eImg from '../../assets/allImages/error.jpg'

const Error = () => {
    return (
        <div >
            <div className="relative z-0"> <img src={eImg} alt="" className="mx-auto rounded-lg " /></div>
            <h1 className="absolute left-36 md:left-96 top-44 z-10  text-2xl font-extrabold text-textL1">Page Not Founded</h1>
        </div>
    );
};

export default Error;