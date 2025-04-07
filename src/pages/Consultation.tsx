
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import { Calendar, Clock, Phone, Mail, CheckCircle } from 'lucide-react';

const Consultation = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation - EduExcel Coaching Institute</title>
        <meta 
          name="description" 
          content="Book a free consultation with our expert counselors at EduExcel to discuss your academic goals and find the perfect course for your needs." 
        />
      </Helmet>

      <div className="pt-24 pb-16 bg-brand-50">
        <div className="container-custom">
          <SectionHeading
            title="Free Academic Consultation"
            subtitle="Speak with our expert counselors to chart your path to success"
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Book Your Free Session</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="input-field" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="input-field" 
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="input-field" 
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                  <select id="course" className="input-field" required>
                    <option value="">Select a course</option>
                    <option value="jee">JEE Advanced Preparation</option>
                    <option value="neet">NEET Preparation Course</option>
                    <option value="foundation">Foundation Course (VIII-X)</option>
                    <option value="olympiad">Olympiad Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message (Optional)</label>
                  <textarea 
                    id="message" 
                    className="input-field min-h-[100px]" 
                    placeholder="Any specific requirements or questions?"
                  ></textarea>
                </div>
                
                <div>
                  <Button className="w-full py-6">Schedule Consultation</Button>
                </div>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  {[
                    'Personalized academic assessment',
                    'Course recommendations based on your goals',
                    'Discussion of teaching methodology',
                    'Fee structure and scholarship options',
                    'Q&A with our expert counselors'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-brand-600 mr-3" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-brand-600 mr-3" />
                    <span>consultations@eduexcel.co.in</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-brand-600 mr-3" />
                    <span>Monday to Saturday</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-brand-600 mr-3" />
                    <span>9:00 AM to 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
