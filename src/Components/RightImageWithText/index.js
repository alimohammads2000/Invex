import React, {useEffect} from "react";
import './index.scss'
import AboutImage from '../../assets/images/about-hero.png'
import AboutImage1 from '../../assets/images/bg-image.jpg'
import {initializeAOS} from '../../Aos';

const ImageText = () => {
    useEffect(()=>{
        initializeAOS();
    }, []);
    return (
        <section className="pt-[70px]">
            <div className="flex flex-col h-full">
                <div className="flex-1 flex flex-col lg:flex-row">
                    <div
                        className="flex-1 block lg:hidden flex flex-col items-start justify-center xl:px-0 px-4 pt-4 md:pt-0 md:mt-8 mb-8">
                        <h1
                            className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] xl:leading-[70px] tracking-tighter">
                            About us
                        </h1>
                        <h4 className="text-[#3F465D] text-2xl  font-semibold leading-[44px] xl:leading-[70px] tracking-tighter mt-4">
                            "Empowering Your Business with Seamless Cash Flow Solutions"
                        </h4>
                        <p
                            className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-2">
                            InvexFlow Pvt Ltd is an innovative fintech company
                            dedicated to revolutionizing invoice financing for
                            businesses, particularly in the SMEs, Healthcare and
                            Automobile sectors.
                        </p>
                        <p
                            className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-2">
                            "INVEX" inspired by the innovation of global pioneers in receivables financing, we’ve tailored a localized, tech-first approach that directly addresses structural delays in invoice settlements. Our platform enables healthcare and automobile sectors to unlock capital tied up in verified receivables—instantly, transparently, and without red tape.
                        </p>
                        <h4 className="text-[#3F465D] text-2xl  font-semibold leading-[44px] xl:leading-[70px] tracking-tighter mt-4">
                            Why Invex Exists
                        </h4>
                        <p
                            className="text-[14px] md:text-base leading-[1.5625rem] md:tracking-[0.04rem] text-[#3F465D] pr-0 sm:pr-32 md:pr-28 xl:pr-36 my-4 md:my-2">
                            Delays in invoices reimbursements and corporate settlement cycles can stretch to 90–120 days. These delays choke liquidity for providers who must continue offering services, buying supplies, and paying staff. We have built Invex to close this gap—bringing together technology, credit underwriting, and sector expertise into one powerful platform.
                        </p>
                    </div>
                    <div className="flex-1 block lg:hidden">
                        <img src={AboutImage1}
                            className="h-[250px] w-full sm:h-[500px] object-cover" />
                    </div>
                    <div className="flex-1 hidden lg:block overflow-hidden bg-image "
                    >
                        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 h-full">
                            <div data-aos="fade-up" className="flex flex-col items-start justify-center px-4 md:px-0 lg:pl-4 pt-16 md:pt-0 lg:my-36">
                                <h1
                                    className="text-[#3F465D] text-4xl md:text-6xl font-semibold leading-[44px] md:leading-[3.75rem] xl:leading-[4.375rem] -tracking-[0.1124rem]">
                                    About us
                                </h1>
                                <h4 className="text-[#3F465D] text-2xl font-semibold leading-[44px] md:leading-[2.75rem] xl:leading-[2.375rem] -tracking-[0.1124rem] mt-4">
                                    "Empowering Your Business with Seamless Cash Flow Solutions"
                                </h4>
                                <p
                                    className="text-[14px] md:text-base leading-[1.5625rem] text-[#000000] mr-0 lg:pr-[150px] xl:pr-0 my-4 md:my-7 md:mb-2 xl:mt-2">
                                    InvexFlow Pvt Ltd is an innovative fintech company
                                    dedicated to revolutionizing invoice financing for
                                    businesses, particularly in the SMEs, Healthcare and
                                    Automobile sectors.
                                </p>
                                <p
                                    className="text-[14px] md:text-base leading-[1.5625rem] text-[#000000] mr-0 lg:pr-[150px] xl:pr-0  my-4 md:my-7 md:mb-2">
                                    "INVEX" inspired by the innovation of global pioneers in receivables financing, we’ve tailored a localized, tech-first approach that directly addresses structural delays in invoice settlements. Our platform enables healthcare and automobile sectors to unlock capital tied up in verified receivables—instantly, transparently, and without red tape.

                                </p>
                                <h4 className="text-[#3F465D] text-2xl font-semibold leading-[44px] md:leading-[2.75rem] xl:leading-[2.375rem] -tracking-[0.1124rem] mt-4">
                                    Why Invex Exists
                                </h4>
                                <p
                                    className="text-[14px] md:text-base leading-[1.5625rem] text-[#000000] mr-0 lg:pr-[150px] xl:pr-0 my-4 md:my-7 md:mb-2 xl:mt-2">
                                    Delays in invoices reimbursements and corporate settlement cycles can stretch to 90–120 days. These delays choke liquidity for providers who must continue offering services, buying supplies, and paying staff. We have built Invex to close this gap—bringing together technology, credit underwriting, and sector expertise into one powerful platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageText;