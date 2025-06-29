import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import './index.scss'
import VideoBanner from '../../assets/Klaim_Explainer_video_v4.mp4';
import Vector from '../../assets/images/vector.svg'
import Banner from '../../assets/images/dhcc2-1.png'
import BannerImage from '../../assets/images/bussiness.jpg'
import {initializeAOS} from '../../Aos';




const HeroBanner = () => {
    useEffect(()=>{
        initializeAOS();
    }, []);
    return (

        <section className="pt-[74px] pb-[50px]">
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="h-[380px] lg:h-auto">
                        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0">
                            <div data-aos="fade-left"
                                className="flex flex-col items-start justify-center px-4 pt-16 sm:pt-0 md:pt-0 h-[320px] md:h-[420px] lg:h-auto">
                                {/* <img src={Banner} />
                                <h3 className="text-lg font-semibold leading-6 text-[#6135FB]">OFFICIAL PARTNERS</h3> */}
                                <h1
                                    className="text-[#3F465D] text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[2.75rem] md:leading-[3rem] xl:leading-[4.375rem] tracking-tighter mt-8 mb-7">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6] ml-0 lg:ml-3 xl:ml-3 2xl:ml-0               
                                        ">Empowering Your Business with
                                    </span>
                                    <br className="block lg:hidden xl:hidden 2xl:block" /> Seamless Cash Flow Solutions
                                </h1>
                                <div className="flex items-center">
                                    {/* <a href="/contact"
                                    className="bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] undefined">Talk
                                    to an expert</a> */}
                                    <Link to='/contact' className="cta">Get Started Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z-[99]"  data-aos="fade-right">
                        {/* <video src={VideoBanner} controls className="w-full p-2 z-[9999]"></video> */}
                        <img className="w-full" src={BannerImage} />
                    </div>
                </div>
            </div>     
        </section >

    );
}

export default HeroBanner;