
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - EduExcel Coaching Institute</title>
        <meta name="description" content="EduExcel's privacy policy - how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="bg-purple-600 py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Privacy Policy</h1>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Privacy Policy"
              subtitle="Last Updated: January 15, 2025"
              alignment="left"
            />

            <div className="space-y-8 mt-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-700">
                  At EduExcel, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you 
                  visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Identity Data includes first name, last name, username or similar identifier.</li>
                  <li>Contact Data includes billing address, email address and telephone numbers.</li>
                  <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
                  <li>Usage Data includes information about how you use our website, products and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To register you as a new student or parent.</li>
                  <li>To process and deliver your selected courses or services.</li>
                  <li>To manage our relationship with you.</li>
                  <li>To improve our website, products/services, marketing or customer relationships.</li>
                  <li>To recommend products or services that may be of interest to you.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-700">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors and other third 
                  parties who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4">
                  <p className="text-gray-700">Email: info@eduexcel.com</p>
                  <p className="text-gray-700">Phone: +123 456 7890</p>
                  <p className="text-gray-700">Address: 123 Education Street, Academic City, 10001</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
