import React from "react";
import './index.scss'


const InterestedIn = () => {
    return (
        <section className="pt-8 pb-12 md:pt-32 md:pb-32 px-4 md:px-0 text-center">
            <h4 className="text-[24px] md:text-[32px] font-bold leading-[36px] md:leading-[40px] mb-12 text-[#3F465D]">
                Interested in Klaim’s solutions <br /> for your organization?
            </h4>
            <a
                href="https://portal.uae.klaim.ai/sign-up"
                className="bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] undefined"
                target="_blank">Get Started Now
            </a>
        </section>
    );
}

export default InterestedIn;