import React, { useState } from "react";
import './index.scss';

const faqData = [
    {
        question: "What is Invex ?",
        answer: "Invex  is an award-winning fintech company based in UAE. Since 2019, we’ve been revolutionizing the healthcare industry by giving providers access to the working capital they need to grow faster and serve patients better. Our solutions are already trusted by more than 100 healthcare providers, and so far we’ve accelerated 1.3 million invoices and paid out 270 million AED in purchased invoices (as part of our Invex  Kapital solution). Our team is ready to connect with you, answer your questions, and help you decide on next steps."
    },
    {
        question: "How will you protect my data?",
        answer: "We use secure, encrypted communication and follow industry-standard protocols to protect your sensitive data. Your privacy and trust are our top priorities."
    },
    {
        question: "Do you require long-term commitment?",
        answer: "No, there are no long-term commitments required. You have the flexibility to choose the terms that suit your needs best."
    },
    {
        question: "How much does it cost to get a claim purchase proposal with Invex Kapital?",
        answer: "Getting a claim purchase proposal is free of charge. You can contact our team to get a proposal tailored to your healthcare practice."
    },
    {
        question: "How much do the individual tools cost?",
        answer: "Our pricing depends on your usage and package. Reach out to our team to receive a personalized quote based on your needs."
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <section className="container mx-auto py-12 md:py-32 px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[70px] mb-4 md:mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">FAQs</span>
            </h2>
            <div className="space-y-2 md:space-y-4 px-0 xl:px-28">
                {faqData.map((faq, index) => (
                    <div key={index} className="bg-[#F5F7FB] pl-7 pr-3 py-4 md:pl-8 md:pr-4 md:py-6 rounded-lg">
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAccordion(index)}>
                            <h2 className="text-[16px] md:text-[28px] leading-[24px] md:leading-9 font-semibold md:font-normal">
                                {faq.question}
                            </h2>
                            <span className={`transform transition-transform p-4 ${openIndex === index ? 'rotate-180' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <path d="M8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM7 1L7 17L9 17L9 1L7 1Z" fill="#3F465D"></path>
                                </svg>
                            </span>
                        </div>
                        {openIndex === index && (
                            <div className="mt-4 text-[#3F465D] text-sm md:text-base leading-[25px]">
                                <p className="faqDropdown">
                                    <span>
                                        {faq.answer}
                                        <a href="/contact"> Click here</a> to send us a message now.
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
