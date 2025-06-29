import React from "react";
import './index.scss'
import Award1 from '../../assets/images/Award1.png';
import Award2 from '../../assets/images/Award2.png'
import Award3 from '../../assets/images/Award3.png'
import Award4 from '../../assets/images/Award4.png'
import Award5 from '../../assets/images/Award5.png'
import Award6 from '../../assets/images/Award6.png'
import Hero from '../../assets/images/hero5.png'



const CompanyAwards = () => {
    return (
        <section className="bg-linear pt-8 pb-8 px-4 md:px-0 md:pt-8 md:pb-16">
            <div className="container mx-auto text-white text-center">
                <h3 className="text-[20px] md:text-[28px] leading-[30px] leading-9 font-bold mb-4 md:mb-8">Award winning company</h3>
                <div className="grid grid-cols-4 xl:grid-cols-7 gap-4">
                    <div className="flex items-center justify-center">
                        <img src={Award1} alt="awards" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Award3} alt="awards" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Hero} alt="awards" />
                    </div><div className="flex items-center justify-center">
                        <img src={Award2} alt="awards" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Award4} alt="awards" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Award5} alt="awards" />
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Award6} alt="awards" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyAwards;