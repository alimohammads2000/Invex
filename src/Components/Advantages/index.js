import React from "react";
import './index.scss'
import hero1 from '../../assets/images/advantage1.svg'
import hero2 from '../../assets/images/advantage2.svg'
import hero3 from '../../assets/images/advantage3.svg'



const Advantages = () => {
    return (
        <section className="bg-linear py-8 md:py-16 px-4">
            <div className="flex flex-wrap items-center justify-center">
                <div
                    className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
                    <img src={hero1} className="mb-4"/>
                        <p className="text-base md:text-lg font-semibold leading-6">Responsive</p>
                        <p className="text-base md:text-lg font-semibold leading-6">Support</p>
                </div>
                <div
                    className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56 mx-2 md:mx-4 my-2 md:my-0">
                    <img src={hero2} className="mb-4"/>
                        <p className="text-base md:text-lg font-semibold leading-6">Fast</p>
                        <p className="text-base md:text-lg font-semibold leading-6">Onboarding</p>
                </div>
                <div
                    className="px-2 md:px-6 py-4 text-white border-[3px] rounded-lg flex flex-col items-center justify-center w-56">
                    <img src={hero3} className="mb-4"/>
                        <p className="text-base md:text-lg font-semibold leading-6 text-center">Advanced Data</p>
                        <p className="text-base md:text-lg font-semibold leading-6">Security</p>
                </div>
            </div>
        </section>
    );
}

export default Advantages;