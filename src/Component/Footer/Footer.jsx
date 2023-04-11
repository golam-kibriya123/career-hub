import "./Footer.css"
import React from 'react';
import groupImg from '../../assets/Icons/group.png'

const Footer = () => {
    return (
        <div className="bg-black text-textL1 mt-32 md:py-32 py-5">
            <div className="max-w-[1320px]  flex md:flex-row flex-col items-center justify-center ">
                <div className="flex flex-col   md:w-[20%] w-1/2  md:mx-5   h-48 ">
                    <h1 className="text-3xl mb-4">CareerHub</h1>
                    <p className="text-textD3 mb-4">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={groupImg} alt="" className="w-32" />
                </div>
                <div className="md:w-[19%] w-1/2  md:mx-5 my-5  h-48">
                    <h1 className="text-3xl mb-4">Company</h1>
                    <ul className="text-textD3">About Us
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>

                </div>
                <div className="md:w-[19%] w-1/2  md:mx-5 my-5  h-48">
                    <h1 className="text-3xl mb-4">Product</h1>
                    <ul className="text-textD3">
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>

                </div>
                <div className="md:w-[19%] w-1/2  md:mx-5 my-5  h-48">
                    <h1 className="text-3xl mb-4">Support</h1>
                    <ul className="text-textD3">Help Desk
                        <li>Sales</li>
                        <li>  Become a Partner </li>
                        <li>Developers</li>
                    </ul>

                </div>
                <div className="md:w-[19%] w-1/2  md:mx-5 my-5  h-48">
                    <h1 className="text-3xl mb-4">Contact</h1>
                    <ul className="text-textD3">
                        <li> 524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>

                </div>
            </div>
            <div className="w-[98%] mx-auto my-12 h-px bg-textD3" ></div>

            <div className="flex justify-between text-xs text-textD2  mx-8">
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>

        </div>
    );
};

export default Footer;