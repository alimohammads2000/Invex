import React from "react";
import './index.scss'
import hero1 from '../../assets/images/hero1.png'
import hero2 from '../../assets/images/hero2.png'
import hero3 from '../../assets/images/hero3.png'
import hero4 from '../../assets/images/hero4.png'
import hero5 from '../../assets/images/hero5.png'
import hero6 from '../../assets/images/hero6.png'
import hero7 from '../../assets/images/hero7.png'
import hero8 from '../../assets/images/hero8.png'


const LogoBrand = () => {
    return (
        <div
            className="bg-linear px-8 md:px-16 py-8 2xl:py-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 lg:gap-x-8 xl:gap-x-16 gap-y-8 items-center">
            <a href="https://gulfnews.com/business/corporate-news/dubai-healthcare-city-and-klaim-join-forces-to-help-healthcare-providers-manage-insurance-claims-and-cashflow-1.1680255597674"
                target="_blank" className="flex items-center justify-center">
                <img src={hero1}
                    className="h-[30px] object-contain" />
            </a>
            <a
                href="https://www.wamda.com/2022/11/klaim-raises-5-million-seed-round-knuru-capital" target="_blank"
                className="flex items-center justify-center">
                <img src={hero2}
                    className="h-[30px] object-contain" />
            </a>
            <a
                href="https://www.khaleejtimes.com/business/alkhair-capital-launches-100m-islamic-healthcare-fund-in-dubai"
                target="_blank" className="flex items-center justify-center">
                <img src={hero3}
                    className="h-[30px] object-contain" />
            </a>
            <a href="https://magnitt.com/news/klaim-seed-funding-52561"
                target="_blank" className="flex items-center justify-center">
                <img src={hero4}
                    className="h-[30px] object-contain" />
            </a>
            <a
                href="https://www.entrepreneur.com/en-ae/growth-strategies/startup-spotlight-uae-based-healthcare-fintech-klaim/443598"
                target="_blank" className="flex items-center justify-center">
                <img src={hero5}
                    className="h-[30px] object-contain" />
            </a>
            <a href="https://www.arabnews.com/tags/klaim"
                target="_blank" className="flex items-center justify-center">
                <img src={hero6}
                    className="h-[30px] object-contain" />
            </a>
            <a
                href="https://www.thenationalnews.com/business/economy/2023/09/04/dubais-alkhair-capital-launches-100m-fund-for-heathtech-investments/"
                target="_blank" className="flex items-center justify-center">
                <img src={hero7}
                    className="h-[30px] object-contain" />
            </a>
            <a
                href="https://www.arabianbusiness.com/startup/468250-sat-medical-fintech-klaim-closes-pre-series-funding-round"
                target="_blank" className="flex items-center justify-center">
                <img src={hero8}
                    className="h-[30px] object-contain" />
            </a>
        </div>
    );
}

export default LogoBrand;