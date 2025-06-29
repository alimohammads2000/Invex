import React, { useEffect } from "react";
import './index.scss'
import grow1 from '../../assets/images/grow1.svg';
import grow2 from '../../assets/images/grow2.svg';
import grow3 from '../../assets/images/grow3.svg';
import grow4 from '../../assets/images/grow4.svg';
import grow5 from '../../assets/images/grow5.svg';
import { initializeAOS } from '../../Aos';


const GrowBussines = () => {
    useEffect(() => {
        initializeAOS();
    }, []);
    return (
        <section className="growSection">
            <div className="container text-center">
                <h2 data-aos="fade-down" className="subTitile mb-5">Grow Your Business With <span className="tealText">INVEX</span></h2>
                <div className="row gy-4">
                    <div className="col-md-6" data-aos="fade-up">
                        <div className="feature-icon">
                            <img src={grow1} alt="Low-Cost Financing" />
                        </div>
                        <h5 className="feature-title">Low-Cost <br />Financing</h5>
                        <p className="feature-text">Affordable loans keep your business running smoothly
                            without breaking the bank.
                        </p>
                    </div>
                    <div className="col-md-6" data-aos="fade-down">
                        <div className="feature-icon">
                            <img src={grow2} alt="No-Recourse Financing" />
                        </div>
                        <h5 className="feature-title">No-Recourse <br />Financing</h5>
                        <p className="feature-text">Get funds without taking on debt <br />liabilities or risks.</p>
                    </div>
                    {/* <div className="col-md-4" data-aos="fade-up">
                        <div className="feature-icon">
                            <img src={grow3} alt="Approved" />
                        </div>
                        <h5 className="feature-title">Government <br /> Approved</h5>
                        <p className="feature-text">Access funding from private and <br />public banks on a licensed platform.</p>
                    </div> */}
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4" data-aos="fade-down">
                        <div className="feature-icon">
                            <img src={grow4} alt="Get Funds in 24 Hours" />
                        </div>
                        <h5 className="feature-title">Get Funds In <br />24 Hours</h5>
                        <p className="feature-text">Quick payments for business growth.</p>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="feature-icon">
                            <img src={grow5} alt="Hassle-Free Digital Onboarding" />
                        </div>
                        <h5 className="feature-title">Hassle-Free <br />Digital Onboarding</h5>
                        <p className="feature-text">No manual paperwork required.</p>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="text-center mt-5" data-aos="fade-up">
                    <a href="#" className="cta">Get In Touch</a>
                </div>
            </div>
        </section>
    );
}

export default GrowBussines;