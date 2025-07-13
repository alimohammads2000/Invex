import React, { useEffect } from "react";
// import './index.scss';
import {initializeAOS} from './Aos';

const PrivacyPolicy = () => {
    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
            <div className="container mx-auto max-w-4xl" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#3F465D] mb-8 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                        Privacy Policy
                    </span>
                </h2>

                <div className="text-[#3F465D] text-[16px] leading-[28px] space-y-6">
                    <p><strong>At InvexFlow (Pvt.) Ltd.</strong> ("InvexFlow", "we", "our", or "us"), your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website [www.invexflow.com] (the “Website”) and use our services.</p>
                    <p>By using our Website, you consent to the terms of this Privacy Policy.</p>

                    <h3 className="text-xl font-semibold">1. Information We Collect</h3>
                    <p>We collect two types of information:</p>

                    <p><strong>a. Personal Information</strong><br />
                    Information that identifies you personally, such as:<br />
                    - Full name<br />
                    - Email address<br />
                    - Phone number<br />
                    - Business information (e.g., company name, invoice details)<br />
                    - Financial information (when relevant to financing services)<br />
                    - National ID or registration numbers (where required for verification)
                    </p>

                    <p><strong>b. Non-Personal Information</strong><br />
                    Information that does not directly identify you, including:<br />
                    - Browser type and version<br />
                    - Device information<br />
                    - IP address<br />
                    - Pages visited on our Website<br />
                    - Date and time of access<br />
                    - Cookies and usage data
                    </p>

                    <h3 className="text-xl font-semibold">2. How We Use Your Information</h3>
                    <p>We use the information collected to:<br />
                    - Provide and improve our services<br />
                    - Respond to your inquiries and support needs<br />
                    - Process applications for invoice financing<br />
                    - Verify identity and prevent fraud<br />
                    - Communicate updates and relevant information<br />
                    - Analyze Website usage and performance<br />
                    - Comply with legal obligations
                    </p>

                    <h3 className="text-xl font-semibold">3. Sharing of Information</h3>
                    <p>We may share your information with:<br />
                    - Banks and financial institutions (for financing purposes)<br />
                    - Insurance companies (for invoice validation and verification)<br />
                    - Third-party service providers (e.g., IT and payment processors)<br />
                    - Regulatory and legal authorities, if required under law<br />
                    - Business partners with whom we collaborate to provide our services (subject to NDA and due diligence)
                    </p>
                    <p>We do not sell your personal information to third parties.</p>

                    <h3 className="text-xl font-semibold">4. Data Security</h3>
                    <p>We implement industry-standard measures to safeguard your personal information, including:<br />
                    - Secure server infrastructure<br />
                    - Data encryption<br />
                    - Access control protocols<br />
                    - Regular security audits and monitoring
                    </p>
                    <p>However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

                    <h3 className="text-xl font-semibold">5. Cookies</h3>
                    <p>We use cookies to enhance your browsing experience, analyze site traffic, and improve our services. You may choose to disable cookies through your browser settings, but this may limit certain functionalities on the Website.</p>

                    <h3 className="text-xl font-semibold">6. Your Rights</h3>
                    <p>Depending on your jurisdiction, you may have the right to:<br />
                    - Access your personal information<br />
                    - Request correction or deletion of your information<br />
                    - Object to processing or request restriction<br />
                    - Withdraw consent at any time<br />
                    - Lodge a complaint with a data protection authority
                    </p>
                    <p>To exercise any of these rights, contact us at [privacy@invexflow.com].</p>

                    <h3 className="text-xl font-semibold">7. Third-Party Links</h3>
                    <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read their privacy policies before providing any personal information.</p>

                    <h3 className="text-xl font-semibold">8. Children’s Privacy</h3>
                    <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal data, we will delete it promptly.</p>

                    <h3 className="text-xl font-semibold">9. Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of the Website after any such changes constitutes your acceptance of the revised policy.</p>

                    <h3 className="text-xl font-semibold">10. Contact Us</h3>
                    <p>If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at:<br />
                    <strong>InvexFlow (Pvt.) Ltd.<br />
                    Email:</strong> [info@invexflow.com]
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
