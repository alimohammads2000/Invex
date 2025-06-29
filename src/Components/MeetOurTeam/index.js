import React from "react";
import './index.scss'
import linkedinAbout from '../../assets/images/aboutLinkedin.svg'
import profileImage from '../../assets/images/about-us-eli.png'
import profileImage1 from '../../assets/images/about-us-majed.png'
import profileImage2 from '../../assets/images/about-us-abdulah.png'
import profileImage3 from '../../assets/images/about-us-karim.png'
import profileImage4 from '../../assets/images/about-us-ghafoor.png'



const WhatWeDo = () => {
    return (
        <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-8"><span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">Meet our team</span>
                </h2>
                <h4 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">Cofounders</h4>
                <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4 mb-12 md:mb-16">
                    <div className="px-8 py-7 bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center">
                            <img src={profileImage3} className="w-[129px]" />
                            <div className="ml-0 md:ml-8">
                                <h5
                                    className="text-[24px] md:text-[32px] text-[#3F465D] font-bold leading-[36px] md:leading-[40px] mt-2 md:mt-0">
                                    Karim Dakki</h5>
                                <p className="text-[14px] md:text-[16px] leading-[25px] text-[#3F465D] mb-2">Chief Executive Officer
                                </p><a href="https://www.linkedin.com/in/karimdakki/" target="_blank"><img
                                    src={linkedinAbout} /></a>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[25px] text-[#3F465D]">Karim Dakki is an instinctive leader with a stellar
                            15-year track record in highly demanding private equity and technology management environments. He
                            previously cofounded a Myanmar-based telecom company valued at 700 million USD and has delivered
                            outstanding results as an acting CFO in multiple organizations. Karim’s relentless commitment to
                            excellence has been a driving force in Klaim’s impressive growth.</p>
                    </div>
                    <div className="px-8 py-7 bg-white rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center"><img
                            src={profileImage4} className="w-[129px]" />
                            <div className="ml-0 md:ml-8">
                                <h5
                                    className="text-[24px] md:text-[32px] text-[#3F465D] font-bold leading-[36px] md:leading-[40px] mt-2 md:mt-0">
                                    Ghafoor Ahmad</h5>
                                <p className="text-[14px] md:text-[16px] leading-[25px] text-[#3F465D] mb-2">Chief Revenue Officer
                                </p><a href="https://www.linkedin.com/in/ghafoor-ahmad-7b98a3164/" target="_blank"><img
                                    src={linkedinAbout}/></a>
                            </div>
                        </div>
                        <p className="text-[16px] leading-[25px] text-[#3F465D]">Ghafoor Ahmad is a highly accomplished executive,
                            visionary leader, and serial entrepreneur. He has delivered extraordinary results in sales and
                            leadership roles throughout his 17-year career. Ghafoor also founded AGA Medical Billing Services,
                            one of the UAE’s leading revenue cycle management companies. His exceptional leadership skills have
                            played a pivotal role in Klaim’s rapid growth and market disruption.</p>
                    </div>
                </div>
                <h4 className="text-[32px] text-[#3F465D] font-bold leading-[40px]">Board of Directors</h4>
                <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className="px-8 py-7 bg-white rounded-lg flex flex-col shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center"><img
                            src={profileImage} />
                            <div className="ml-0 md:ml-8">
                                <h5
                                    className="text-[24px] md:text-[32px] text-[#3F465D] font-bold leading-[36px] md:leading-[40px] mt-2 md:mt-0">
                                    Eli A. Chedid</h5>
                                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-2">CARE for Hospital Planning &amp;
                                    Equipping</p><a href="https://www.linkedin.com/in/eli-chedid-9594b110/" target="_blank"><img
                                        src={linkedinAbout} className="block md:hidden" /></a>
                            </div>
                        </div>
                        <div className="flex-1 mb-0 md:mb-4">
                            <p className="text-[16px] leading-[25px] text-[#3F465D]">Eli A. Chedid is a successful entrepreneur with
                                40 years of experience in business development, sales, and operations in the healthcare
                                industry. His extensive knowledge comes from a broad range of corporate managerial involvement,
                                including strategic planning and execution, industry positioning, and building awareness among
                                leading US and international healthcare companies.</p>
                        </div>
                        <div><a href="https://www.linkedin.com/in/eli-chedid-9594b110/" target="_blank"><img
                            src={linkedinAbout} className="hidden md:block" /></a></div>
                    </div>
                    <div className="px-8 py-7 bg-white rounded-lg flex flex-col shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center"><img
                           src={profileImage2} />
                            <div className="ml-0 md:ml-8">
                                <h5
                                    className="text-[24px] md:text-[32px] text-[#3F465D] font-bold leading-[36px] md:leading-[40px] mt-2 md:mt-0">
                                    Abdullah A. AlOthaim</h5>
                                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-2">Chief Executive Officer at Mad'a
                                    Investment Company</p><a href="https://www.linkedin.com/in/abdullahalothaim/"
                                        target="_blank"><img src={linkedinAbout} className="block md:hidden" /></a>
                            </div>
                        </div>
                        <div className="flex-1 mb-0 md:mb-4">
                            <p className="text-[16px] leading-[25px] text-[#3F465D]">Abdullah A. AlOthaim is the founder and CEO of
                                Mad’a Investment Company, a venture capital and private equity firm headquartered in Riyadh,
                                Saudi Arabia. During his career, he has achieved successful investments in many growth capital
                                companies.</p>
                        </div>
                        <div><a href="https://www.linkedin.com/in/abdullahalothaim/" target="_blank"><img
                            src={linkedinAbout} className="hidden md:block" /></a></div>
                    </div>
                    <div className="px-8 py-7 bg-white rounded-lg flex flex-col shadow-[0_0_16px_0_rgba(0,0,0,0.05)]">
                        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center"><img
                           src={profileImage1} />
                            <div className="ml-0 md:ml-8">
                                <h5
                                    className="text-[24px] md:text-[32px] text-[#3F465D] font-bold leading-[36px] md:leading-[40px] mt-2 md:mt-0">
                                    Dr. Majed AlAmeel</h5>
                                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-2">Director of Health Solutions at Elm
                                    Company</p><a href="https://www.linkedin.com/in/malameel/" target="_blank"><img
                                        src={linkedinAbout} className="block md:hidden" /></a>
                            </div>
                        </div>
                        <div className="flex-1 mb-0 md:mb-4">
                            <p className="text-[16px] leading-[25px] text-[#3F465D]">Dr. Majed AlAmeel leads his firm’s efforts to
                                support healthcare organizations in the development of digital health and integrated information
                                strategies and implementations. His specialties include business development, financial growth,
                                relationship management, product development, and digital health.</p>
                        </div>
                        <div><a href="https://www.linkedin.com/in/malameel/" target="_blank"><img
                            src={linkedinAbout} className="hidden md:block" /></a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;