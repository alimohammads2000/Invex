import React, {useRef} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LeftArrow from '../../assets/images/leftarrow.svg'
import RightArrow from '../../assets/images/rightarrow.svg'
import PlayArrow from '../../assets/images/play.svg'
import Thumbnail1 from '../../assets/images/thumbnail1.png'
import Thumbnail2 from '../../assets/images/thumbnail2.png'
import Thumbnail3 from '../../assets/images/thumbnail3.png'
import Thumbnail4 from '../../assets/images/thumbnail4.png'


const Myslider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
            <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 items-center max-w-none">
                <div>
                    <h2
                        className="text-3xl md:text-5xl font-semibold leading-[120%] leading-[130%] text-[#3F465D] mb-4 md:mb-8">
                        Here’s what our clients <br className="block" /><span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">are
                            saying about us</span></h2>
                    <p className="text-[20px] md:text-[28px] leading-[30px] md:leading-9 text-[#3F465D] mb-8 xl:mb-0">
                        Don’t take our word for it, <br /> we let our clients do the talking.</p>
                </div>
                <div className="w-full">
                    <div className="relative">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="pr-0 md:pr-8 -ml-0 md:-ml-10 rounded-lg" 
                                style="width:100%;display:inline-block">
                                <div className="mx-4 md:mx-0 rounded-lg relative"><img
                                    src={Thumbnail1}
                                    className="rounded-lg" alt="Slider" />
                                    <img src={PlayArrow}
                                        className="absolute top-40 left-1/2 w-14 bg-white rounded-full cursor-pointer" alt="playIcon" />
                                </div>
                            </div>
                            <div className="pr-0 md:pr-8 -ml-0 md:-ml-10 rounded-lg"
                                style="width:100%;display:inline-block">
                                <div className="mx-4 md:mx-0 rounded-lg relative"><img
                                    src={Thumbnail2}
                                    className="rounded-lg" alt="Slider" />
                                    <img src={PlayArrow}
                                        className="absolute top-40 left-1/2 w-14 bg-white rounded-full cursor-pointer" alt="playIcon" />
                                </div>
                            </div>
                            <div className="pr-0 md:pr-8 -ml-0 md:-ml-10 rounded-lg" 
                                style="width:100%;display:inline-block">
                                <div className="mx-4 md:mx-0 rounded-lg relative"><img
                                    src={Thumbnail3}
                                    className="rounded-lg" alt="Slider" />
                                    <img src={PlayArrow}
                                        className="absolute top-40 left-1/2 w-14 bg-white rounded-full cursor-pointer" alt="playIcon" />
                                </div>
                            </div>
                            <div className="pr-0 md:pr-8 -ml-0 md:-ml-10 rounded-lg"
                                style="width:100%;display:inline-block">
                                <div className="mx-4 md:mx-0 rounded-lg relative"><img
                                    src={Thumbnail4}
                                    className="rounded-lg" alt="Slider" />
                                    <img src={PlayArrow}
                                        className="absolute top-40 left-1/2 w-14 bg-white rounded-full cursor-pointer" alt="playIcon" />
                                </div>
                            </div>
                        </Slider>
                        <div
                            className="absolute rounded-l-lg top-0 right-0 bottom-[7px] bg-gradient-to-l from-white via-[rgba(255,255,255,0.7)] to-transparent w-[120px] hidden md:block">
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-end">
                        <a className="mr-4 cursor-pointer" onClick={()=> sliderRef.current.slickPrev()}>
                            <img src={LeftArrow} alt="Slider Arrow" />
                        </a>
                        <a className="cursor-pointer" onClick={()=> sliderRef.current.slickNext()}>
                            <img src={RightArrow} alt="Slider Arrow" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Myslider;