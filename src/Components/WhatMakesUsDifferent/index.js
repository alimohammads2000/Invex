import React from "react";
import './index.scss'
import AboutIHero from '../../assets/images/imageAbout.jpg'
import AboutIHero1 from '../../assets/images/visionmission.jpg'


const WhatMakeUsDifferent = () => {
    return (
        <>
            <section className="container mx-auto flex flex-col xl:flex-row items-center pt-12 md:pt-32 px-4">

                <div data-aos="zoom-out-up" className="flex-1 mr-0 lg:mr-4">
                    <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                            What Makes Us Different
                        </span>
                    </h2>

                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
                        <b> Dual-Sector Focus:</b> Where others specialize narrowly, we’ve built domain capabilities across
                        healthcare and automobile repair—both of which face parallel challenges in receivables-based cash flows.
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
                        <b>Tech-Enabled Risk Intelligence:</b> Leveraging AI, predictive analytics, and proprietary data models, we assess
                        invoice validity, payer reliability, and sectoral behavior before committing capital.
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">
                        <b>Speed + Compliance:</b> Our fully digital onboarding, claim validation, and funding process ensure compliance with local regulatory frameworks
                        while delivering same-week liquidity.
                    </p>
                    {/* <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">After launching, dozens of healthcare providers in the UAE participated in our beta program. More recently, we’ve officially partnered with Dubai Healthcare City to give stakeholders special access to our services.</p>
           <p className="text-[16px] leading-[25px] text-[#3F465D] mb-12">Today, we’re motivated by the profound impact our solutions have had on healthcare providers. So far, our solutions have saved three providers from the brink of bankruptcy and helped many others achieve faster growth and better patient care.</p> 
           <div className="py-4">
               <a href="#" className="bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] undefined">Talk to an Expert</a>
           </div>*/}
                    <h4 className="text-[#3F465D] text-xl font-semibold leading-[44px] xl:leading-[30px] tracking-tighter mt-2">
                        Our Ecosystem
                    </h4>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mt-5 mb-3">We collaborate with a growing network of:</p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal"> Hospitals and Clinics</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">Fleet Operators and Vehicle Insurers</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">OEM and Independent Garages</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">Insurance Companiess</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">Local Financial Institutions</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">Regulatory Bodies and Compliance Experts</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D]">By aligning incentives across all stakeholders, Invex does more than finance
                        invoices—it stabilizes service delivery, improves operational predictability,
                        and fuels sectoral growth.
                    </p>
                </div>
                <div data-aos="zoom-out-down" className="flex-1 flex justify-end mt-12 xl:mt-0 w-full xl:w-auto">
                    <img src={AboutIHero} alt="image1" className="rounded-lg w-full xl:w-auto h-[450px] xl:h-auto object-cover" />
                </div>
            </section>
            <section className="container mx-auto flex flex-col xl:flex-row items-center pb-12 md:pb-32 pt-16 px-4">
                <div data-aos="zoom-out-right" className="flex-1 flex justify-start mt-12 xl:mt-0 w-full xl:w-auto order-2 lg:order-1">
                    <img src={AboutIHero1} alt="image2" className="rounded-lg w-full xl:w-auto h-[450px] xl:h-auto object-cover" />
                </div>
                <div data-aos="zoom-out-left" className="flex-1 mr-0 lg:ml-4 order-1 lg:order-2">
                    <h4 className="text-[#3F465D] text-3xl font-semibold leading-[30px] xl:leading-[30px] tracking-tighter">
                        Our Vision
                    </h4>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 mt-3">
                        To build a more inclusive financial ecosystem where no healthcare provider, garage owner, or service technician
                        has to pause operations because of delayed payments. At Invex, we envision a Pakistan where liquidity reaches
                        the last mile, powering dignity, resilience, and growth across underserved sectors.
                    </p>
                    <h4 className="text-[#3F465D] text-3xl font-semibold leading-[30px] xl:leading-[30px] tracking-tighter mt-4">
                        Our Mission
                    </h4>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mt-3">
                        To ease financial burdens for the people and businesses who keep our essential services running.
                        By turning delayed payments into instant working capital, we empower hospitals, clinics, and repair
                        professionals to operate without disruption—strengthening the sectors that quietly sustain our economy
                        and society.
                    </p>
                </div>
            </section>
        </>
    );
}

export default WhatMakeUsDifferent;