import React, {useEffect} from "react";
import './index.scss'
import AboutIHero from '../../assets/images/newimage1.jpg';
import AboutIHero1 from '../../assets/images/newImage.jpg';
import {initializeAOS} from '../../Aos';

const WhatWeDo = () => {
    useEffect(()=>{
        initializeAOS();
    }, []);
    return (
        <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 items-start">
                <div data-aos="fade-right">
                    <img src={AboutIHero} className="hidden xl:block w-full max-w-[650px]" alt="AboutIHero" />
                    <div className="hidden xl:block">
                        <h4 className="text-[#3F465D] text-xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter mt-2">
                            Our Platform Offers:
                        </h4>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Invoice Discounting for Approved Claims
                            <span className="font-normal block">
                                We purchase validated invoices—whether from insurers, corporates,
                                or government institutions—and disburse funds directly to the service
                                provider, with payment collected from the original payer when due.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Digital Risk Assessment & Reconciliation
                            <span className="font-normal block">
                                Using AI and real-time integrations, we verify invoice authenticity,
                                detect discrepancies, and ensure traceable reconciliations—reducing
                                fraud risk and improving credit confidence.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 End-to-End Visibility for Stakeholders
                            <span className="font-normal block">
                                From submission to settlement, all parties—including service providers,
                                funders, and payers—have access to a secure, real-time dashboard that
                                tracks invoice status, disbursement, and collection timelines.
                            </span>
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-4 md:mb-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                            What we do
                        </span>
                    </h2>
                    <p className="text-[18px] font-bold leading-[25px] text-[#3F465D] mb-2">
                        We unlock trapped capital and turn verified invoices into instant working capital.
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-4">
                        Invex bridges the cash flow gap between service delivery and payment realization. We provide tech-enabled invoice
                        discounting solutions that convert approved receivables into immediate liquidity—allowing businesses to fund operations,
                        invest in growth, and reduce dependency on traditional credit channels.
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-4">
                        In sectors like SME's healthcare and automobile , delayed payments are more than a nuisance—they’re an existential risk.
                        Despite regulatory mandates in global market requiring invoices settlement within 45 days, industry reality tells a
                        different story: the actual cycle—from invoice submission preparation to disbursement—can stretch 60 to 90 days or more.
                        On average, 90% of healthcare & Automobile companies are settled after 120 days, straining operational cash flow and impairing service continuity.
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-4">
                        At Invex, we step in to restore balance. By converting approved, pending invoices into liquid capital within 24 hours, we enable service providers to regain control over their finances and refocus on what matters — quality service delivery.
                    </p>

                    <div className="block xl:hidden">
                        <h4 className="text-[#3F465D] text-xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter mt-2">
                            Our Platform Offers:
                        </h4>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Invoice Discounting for Approved Claims
                            <span className="font-normal block">
                                We purchase validated invoices—whether from insurers, corporates,
                                or government institutions—and disburse funds directly to the service
                                provider, with payment collected from the original payer when due.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Healthcare Receivables Financing
                            <span className="font-normal block">
                                Tailored for hospitals, clinics, diagnostic labs, and specialty
                                providers—our solution plugs into insurance workflows to fund
                                invoices that are approved but delayed.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Automotive Repair Financing
                            <span className="font-normal block">
                                We finance invoices raised by automotive workshops for insurer-verified
                                repairs and fleet operator engagements, enabling smoother workshop operations
                                and faster turnaround times.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 Digital Risk Assessment & Reconciliation
                            <span className="font-normal block">
                                Using AI and real-time integrations, we verify invoice authenticity,
                                detect discrepancies, and ensure traceable reconciliations—reducing
                                fraud risk and improving credit confidence.
                            </span>
                        </p>
                        <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            🔹 End-to-End Visibility for Stakeholders
                            <span className="font-normal block">
                                From submission to settlement, all parties—including service providers,
                                funders, and payers—have access to a secure, real-time dashboard that
                                tracks invoice status, disbursement, and collection timelines.
                            </span>
                        </p>
                    </div>
                    <img src={AboutIHero1} className="hidden xl:block mt-8" alt="AboutIHero" />
                    <h4 className="text-[#3F465D] text-xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter mt-2">
                         Dynamic dashboard for real-time reporting 
                    </h4>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">24-Hour Access to funds locked in pending receivables</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">90+ Days of Liquidity Gained vs. conventional settlement cycles</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">Zero Collateral Required, zero disruption to your ongoing operations</span>
                    </p>
                    <p className="text-[16px] leading-[25px] text-[#3F465D] mb-5 font-bold relative">
                        <span className="absolute w-[10px] h-[10px] bg-[#000000] rounded-lg left-0 top-2 "></span>
                        <span className="ml-4 font-normal">High-Touch + High-Tech Support designed for sector-specific realities</span>
                    </p>
                </div>
                <img src={AboutIHero} className="block xl:hidden w-full h-[450px] object-cover rounded-lg" alt="AboutIHero" />
            </div>
        </section>
    );
}

export default WhatWeDo;