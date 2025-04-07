
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - EduExcel Coaching Institute</title>
        <meta name="description" content="Terms and conditions for using EduExcel's services and website." />
      </Helmet>

      <div className="bg-purple-600 py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Terms of Service</h1>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Terms of Service"
              subtitle="Last Updated: January 15, 2025"
              alignment="left"
            />

            <div className="space-y-8 mt-10">
              <section>
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing our website at EduExcel, you are agreeing to be bound by these terms of service, 
                  all applicable laws and regulations, and agree that you are responsible for compliance with any 
                  applicable local laws. If you do not agree with any of these terms, you are prohibited from using 
                  or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Use License</h2>
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on EduExcel's website for 
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of 
                  title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Modify or copy the materials;</li>
                  <li>Use the materials for any commercial purpose or for any public display;</li>
                  <li>Attempt to reverse engineer any software contained on EduExcel's website;</li>
                  <li>Remove any copyright or other proprietary notations from the materials;</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Course Registration and Payment</h2>
                <p className="text-gray-700 mb-4">
                  To register for courses, you must provide accurate and complete information. You are responsible for all 
                  activities that occur under your account. You agree to pay all fees or charges to your account based on 
                  EduExcel's fees, charges, and billing terms in effect at the time a fee or charge is due and payable.
                </p>
                <p className="text-gray-700">
                  Payment terms are at the sole discretion of EduExcel. Unless otherwise indicated, all fees are quoted in 
                  Indian Rupees. You agree to provide EduExcel with a valid payment method for payment of all fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
                <p className="text-gray-700 mb-4">
                  All sales are final and no refund will be issued except in the sole discretion of EduExcel. In the case of 
                  special circumstances, such as severe illness or relocation, a written request must be made within 7 days of 
                  the course registration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
