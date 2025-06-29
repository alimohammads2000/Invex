import React from "react";
import HeroBanner from "./Components/HeroBanner/index";
import TrustedBy from "./Components/TrustedBy/index";
import CashFlow from './Components/CashFlow/index';
import GoodNews from './Components/GoodNews/index';
import ClaimPayment from './Components/ClaimPayment/index';
import CompanyAwards from './Components/CompanyAwards/index';
import Steps from './Components/Steps/index';
import Achievement from './Components/Achivement/index';
import ImageText from './Components/ImageWIthText/index';
import ConventionalFinance from './Components/ConventionalFinance/index';
import MultiStep from './Components/MultiStep/index';
import Slider from './Components/SliderSection/index';
import FAQ from './Components/FAQ/index';
import Advantages from './Components/Advantages/index';
import GrowBussines from "./Components/GrowYourBussiness/index";




const About = () => {
        return (
                <>
                        <HeroBanner />
                        <Steps />
                        <GrowBussines />
                        {/* <TrustedBy /> */}
                        {/* <CashFlow /> */}
                        {/* <GoodNews /> */}
                        {/* <ClaimPayment /> */}
                        {/* <Achievement /> */}
                        {/* <CompanyAwards /> */}
                        {/* <Slider /> */}
                        {/* <ConventionalFinance /> */}
                        {/* <MultiStep /> */}
                        {/* <Advantages /> */}
                        {/* <ImageText /> */}
                        {/* <FAQ /> */}
                </>
        );
}

export default About;