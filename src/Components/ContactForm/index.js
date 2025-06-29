import React from "react";
import './index.scss'
import globe from '../../assets/images/globe-sm.svg';
import Phone from '../../assets/images/phone.svg';
import Email from '../../assets/images/email-sm.svg';
import address from '../../assets/images/address.svg';


const ContactForm = () => {
    return (
        <section className="pt-[75px]">
            <div className="container mx-auto pt-12 pb-12 md:pt-20 md:pb-32 px-4">
                <h2 className="text-4xl md:text-6xl font-semibold leading-[44px] leading-[70px] mb-4 md:mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">Connect With
                        Us
                    </span>
                </h2>
                <p className="text-[16px] md:text-[22px] leading-[30px] leading-9 text-[#3F465D] mb-8 md:mb-12">Thank you for your
                    interest. Please leave your contact details below, <br />and one of our experts will be in touch
                    shortly. <br /> We look forward to connecting with you!</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                    <div className="bg-white rounded-lg pl-0">
                        <p className="text-[18px] leading-[25px] text-[#3F465D] mb-5 font-bold ">
                            <span className="flex items-center mb-3">
                                <img src={Phone} className="w-full max-w-[24px] mr-2" />  Phone:
                            </span>
                            <a href="tel:+923390039359" className="font-normal block">
                                +92 339 0039359
                            </a>
                        </p>
                        <p className="text-[18px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            <span className="flex items-center mb-3">
                                <img src={globe} className="w-full max-w-[24px] mr-2" />  Website:
                            </span>
                            <a href="mailto:info@invexflow.com" className="font-normal block">
                                www.invexflow.com
                            </a>
                        </p>
                        <p className="text-[18px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            <span className="flex items-center mb-3">
                                <img src={Email} className="w-full max-w-[24px] mr-2" />  Email:
                            </span>
                            <span className="font-normal block">
                                info@invexflow.com
                            </span>
                        </p>
                        <p className="text-[18px] leading-[25px] text-[#3F465D] mb-5 font-bold">
                            <span className="flex items-center mb-3">
                                <img src={address} className="w-full max-w-[24px] mr-2" /> Address:
                            </span>
                            <span className="font-normal block">
                                D-124, Federal B Area, Block -5, Karachi,
                                Pakistan
                            </span>
                        </p>
                    </div>
                    <div className="h-full px-12 py-6 rounded-lg col-span-2 ml-0 lg:ml-24 xl:ml-48 contact-bg">
                        <div className="h-[400px] lg:h-[450px] flex flex-col items-start justify-end"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;