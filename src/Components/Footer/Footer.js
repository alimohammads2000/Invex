import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.jpg'
import linkedin from '../../assets/images/linkedin.svg'
import youtube from '../../assets/images/youtube.svg'
import insta from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'
import facebook from '../../assets/images/facebook.svg'
import './Footer.scss'


const Footer = () => {
    return (
        <>
            <footer className="bg-[#151f29] pt-8 pb-8 px-4 md:pt-32 md:pb-10">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center md:gap-5 items-center md:flex-row md:items-start md:items-center md:justify-between">
                        <img src={Logo} className="w-[180px] h-auto" alt="Invex Logo" />
                        <div
                            className="flex flex-col w-full md:w-auto md:grid md:grid-cols-2 gap-3 items-center text-white font-bold leading-[16px] md:leading-4 text-sm md:text-lg tracking-tight mt-8 md:mt-0">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                            <Link to="/terms-conditions">Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className="flex mt-8 xl:mt-16 justify-center md:justify-start"><a href="https://www.linkedin.com/company/Invex -ai/" target="_blank">
                        <img src={linkedin} className="mr-4" /></a>
                        <a href="https://www.youtube.com/channel/UCSFyygyt3hE05B9nGNCqHMA" target="_blank">
                            <img src={youtube} className="mr-4" />
                        </a>
                        <a href="https://www.twitter.com/AiInvex " target="_blank">
                            <img src={twitter} className="mr-4" /></a><a href="https://www.instagram.com/Invex .ai/"
                                target="_blank">
                            <img src={insta} className="mr-4" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100063848329885" target="_blank">
                            <img src={facebook} className="mr-4" />
                        </a>
                    </div>
                    <div className="flex flex-col xl:flex-row items-start xl:items-start justify-end my-8 xl:my-16">
                       
                        <div className="flex justify-end w-full md:w-auto md:grid grid-cols-1 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-12">
                            <div className="text-white text-right text-sm md:text-base leading-[25px] md:leading-none font-normal ">
                                <p className="mb-4 font-bold">Karachi, Pakistan</p>
                                <p className="mb-2"> D-124, Federal B Area, Block -5</p>
                                <p className="mb-2"><a href="mailto:info@invexflow.com">info@invexflow.com</a></p>
                                <p><a href="tel:+923390039359">+92 339 0039359</a></p>
                            </div>
                           
                        </div>
                    </div>
                    <hr className="mb-8 md:mb-16" />
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-4 md:mb-0 flex">
                            <p>Healthcare</p><span className="mx-2">|</span><p>Technology</p><span
                                className="mx-2">|</span><p>Insurance</p>
                        </div>
                        <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-4 md:mb-0 flex"><p>Terms of
                            Service</p><span className="mx-2">|</span><p>Privacy Policy</p></div>
                        <div className="text-white text-sm md:text-base leading-[25px] leading-none mb-2 md:mb-0">
                            <p className="">Copyright © 2025
                                <a href="https://www.Invex .ai/" target="_blank" className="text-reset">Invex  AI</a>
                            </p>
                        </div>
                        <div className="text-white">
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;