import React, { useEffect } from "react";
// import './index.scss';
import { initializeAOS } from './Aos';

const TermsAndConditions = () => {
    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className="bg-[#F5F7FB] py-12 md:py-32 px-4">
            <div className="container mx-auto max-w-4xl" data-aos="fade-up">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#3F465D] mb-8 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
                        Terms & Conditions
                    </span>
                </h2>

                <div className="text-[#3F465D] text-[16px] leading-[28px] space-y-6">
                    <p>Welcome to www.invexflow.com (the “Website”), operated by InvexFlow (Pvt.) Ltd. (“InvexFlow”, “we”, “us”, or “our”). By accessing or using our Website, you agree to comply with and be bound by the following Terms & Conditions (“Terms”). If you do not agree with these Terms, please do not use the Website.</p>

                    <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
                    <p>By using this Website, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement. If you are accessing or using the Website on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.</p>

                    <h3 className="text-xl font-semibold">2. Website Purpose</h3>
                    <p>The Website provides general information about InvexFlow, its services, and its business model, including invoice financing, credit facilitation, partnerships, and digital lending enablement. It does not constitute financial advice, offer, or solicitation of any kind.</p>

                    <h3 className="text-xl font-semibold">3. Use of Website</h3>
                    <p>You agree to use the Website for lawful purposes only. You are prohibited from:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Posting or transmitting any unlawful, harmful, defamatory, or obscene content</li>
                        <li>Attempting to interfere with the Website’s functionality or security</li>
                        <li>Copying, modifying, distributing, or exploiting the Website content without authorization</li>
                        <li>Using bots, crawlers, or scraping tools without our permission</li>
                    </ul>

                    <h3 className="text-xl font-semibold">4. Intellectual Property</h3>
                    <p>All content on this Website—including but not limited to text, graphics, logos, icons, images, videos, software, and trademarks—is the property of InvexFlow or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws.</p>
                    <p>You may not copy, reproduce, republish, upload, or transmit any part of the Website without our express written consent.</p>

                    <h3 className="text-xl font-semibold">5. Third-Party Content and Links</h3>
                    <p>The Website may contain links to third-party websites or services for your convenience. InvexFlow is not responsible for the content, accuracy, or reliability of any third-party resources. Visiting such sites is at your own risk.</p>

                    <h3 className="text-xl font-semibold">6. No Financial Advice</h3>
                    <p>The content provided on this Website is for informational purposes only and should not be construed as legal, financial, or investment advice. Please consult with qualified professionals before making any business, legal, or financial decisions.</p>

                    <h3 className="text-xl font-semibold">7. Privacy</h3>
                    <p>Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Website, you consent to the collection and use of your data as described in the Privacy Policy.</p>

                    <h3 className="text-xl font-semibold">8. Disclaimer of Warranties</h3>
                    <p>The Website and all content, features, and services are provided “as is” and “as available” without any warranties of any kind, whether express or implied. InvexFlow does not guarantee:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>That the Website will be error-free or uninterrupted</li>
                        <li>That defects will be corrected</li>
                        <li>That the Website is free of viruses or harmful components</li>
                    </ul>

                    <h3 className="text-xl font-semibold">9. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, InvexFlow and its directors, employees, affiliates, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>Your access to or use of (or inability to use) the Website</li>
                        <li>Any content or services provided on the Website</li>
                        <li>Any unauthorized access to or use of our servers and data</li>
                    </ul>

                    <h3 className="text-xl font-semibold">10. Indemnification</h3>
                    <p>You agree to indemnify, defend, and hold harmless InvexFlow and its affiliates, officers, employees, and agents from and against any and all claims, damages, liabilities, costs, and expenses arising out of your use of the Website or violation of these Terms.</p>

                    <h3 className="text-xl font-semibold">11. Changes to Terms</h3>
                    <p>InvexFlow reserves the right to modify or update these Terms at any time. Changes will be posted on this page with the updated date. Continued use of the Website after such changes constitutes your acceptance of the revised Terms.</p>

                    <h3 className="text-xl font-semibold">12. Governing Law</h3>
                    <p>These Terms shall be governed by and construed in accordance with the laws of [Pakistan / UAE / Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in [City, Country].</p>

                    <h3 className="text-xl font-semibold">13. Contact Us</h3>
                    <p>For any questions or concerns regarding these Terms, please contact us:</p>
                    <p><strong>InvexFlow (Pvt.) Ltd.<br />
                    Email:</strong> [info@invexflow.com]</p>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
