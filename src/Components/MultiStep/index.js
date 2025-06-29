import React from "react";
import './index.scss'


const MultiStep = () => {
    return (
        <section className="container mx-auto py-12 md:py-32 px-4" id="what-to-expect">
            <h2 className="text-3xl md:text-5xl font-semibold leading-[130%] text-[#3F465D]">
                < span className="bg-clip-text text-transparent leading-[130%] bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">What to
                    expect</span>
            </h2>
            <div className="hidden md:grid grid-cols-4 mt-12">
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#6135fb] to-[#5f3ff7] w-[6.5rem]">
                        <p className="text-white text-[2.625rem] font-bold mx-[0.5rem] xl:mx-0">01</p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#5f3ff7] to-[#5767e6] w-full"></div>
                </div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#5767e6] to-[#5572e1] w-[5.6rem]">
                        <p className="text-white text-[2.625rem] font-bold mx-[0.5rem] xl:mx-0">02</p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#5572e1] to-[#4d99d0] w-full">
                    </div>
                </div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#4d99d0] to-[#4ba4cc] w-[5.6rem]">
                        <p className="text-white text-[2.625rem] font-bold mx-[0.5rem] xl:mx-0">03</p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-[#4ba4cc] to-[#43ccbb] w-full">
                    </div>
                </div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-r from-[#43ccbb] to-[#41d8b6] w-[5.6rem]">
                        <p className="text-white text-[2.625rem] font-bold mx-[0.5rem] xl:mx-0">04</p>
                    </div>
                </div>
            </div>
            <div className="block md:hidden mt-4 mb-16 grid grid-cols-1">
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#6138fa] to-[#5b52ef] w-[5rem]">
                        <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">01</p>
                    </div>
                    <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4"><span className="font-semibold">Express Your
                        Interest:</span><br /> Simply let us know you're keen to collaborate</p>
                </div>
                <div className="h-[4rem] w-1 bg-gradient-to-b from-[#5b52ef] to-[#5764e7] ml-10"></div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#5764e7] to-[#537ddc] w-[5rem]">
                        <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">02</p>
                    </div>
                    <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4"><span className="font-semibold">Receive a
                        No-Cost Proposal:</span><br /> We'll provide you with a complimentary Claim Purchase Proposal</p>
                </div>
                <div className="h-[4rem] w-1 bg-gradient-to-b from-[#537ddc] to-[#5090d5] ml-10"></div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#5090d5] to-[#4aa9ca] w-[5rem]">
                        <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">03</p>
                    </div>
                    <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4"><span className="font-semibold">Quick
                        Onboarding:</span><br /> Join our network in as few as 5 days.</p>
                </div>
                <div className="h-[4rem] w-1 bg-gradient-to-b from-[#4aa9ca] to-[#46bbc2] ml-10"></div>
                <div className="flex items-center">
                    <div
                        className="px-4 py-3 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#46bbc2] to-[#42d4b7] w-[5rem]">
                        <p className="text-white text-[2.625rem] font-bold leading-[3.4125rem]">04</p>
                    </div>
                    <p className="text-[1.125rem] leading-[1.625rem] text-[#3F465D] ml-4"><span className="font-semibold">Experience
                        Speedy Payments:</span><br /> Enjoy the benefits of 24-hour claim payments</p>
                </div>
            </div>
            <div className="hidden md:grid grid-cols-4 mt-[1.06rem]">
                <div className="pr-6 lg:pr-24">
                    <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">Let us know you’re interested</p>
                </div>
                <div className="pr-6 lg:pr-24">
                    <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">Get a no-cost Claim Purchase Proposal</p>
                </div>
                <div className="pr-6 lg:pr-24">
                    <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">Onboard with us in as little as 5 days</p>
                </div>
                <div className="pr-6 lg:pr-24">
                    <p className="text-[1.375rem] leading-[1.875rem] text-[#3F465D]">
                        Start getting 24-hour claim payments</p>
                </div>
            </div>
        </section>
    );
}

export default MultiStep;