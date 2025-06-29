import React from "react";
import './index.scss'
import AboutIHero from '../../assets/images/about-us2.png'


const HowWeStarted = () => {
    return (
        <section className="container mx-auto flex flex-col xl:flex-row items-center py-12 md:py-32 px-4">
            <div className="flex-1 mr-0 lg:mr-4">
                <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[130%] text-[#3F465D] mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">How we started</span></h2>
                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">Invex  is the result of a spontaneous coffee meeting.</p>
                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">Cofounders Ghafoor Ahmad and Karim Dakki met for the first time at a coworking space. A casual conversation about their respective careers led to a sudden brainstorm: instead of seeking reimbursement on the provider’s behalf, why not purchase the claim instead?</p>
                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">This conversation birthed our Invex  Kapital concept, which became the foundation for our full range of solutions.</p>
                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-8">After launching, dozens of healthcare providers in the UAE participated in our beta program. More recently, we’ve officially partnered with Dubai Healthcare City to give stakeholders special access to our services.</p>
                <p className="text-[16px] leading-[25px] text-[#3F465D] mb-12">Today, we’re motivated by the profound impact our solutions have had on healthcare providers. So far, our solutions have saved three providers from the brink of bankruptcy and helped many others achieve faster growth and better patient care.</p>
                <div className="py-4">
                    <a href="#" className="bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] undefined">Talk to an Expert</a>
                    </div>
                    </div>
                    <div className="flex-1 flex justify-end mt-12 xl:mt-0 w-full xl:w-auto">
                        <img src={AboutIHero} className="rounded-lg w-full xl:w-auto h-[450px] xl:h-auto object-cover"/></div>
        </section>
    );
}

export default HowWeStarted;