
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/common/CTASection';
import AnimatedTimeline from '@/components/common/AnimatedTimeline';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Director & HOD Physics',
    qualification: 'PhD in Physics, IIT Delhi',
    experience: '20+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    id: 2,
    name: 'Prof. Anita Sharma',
    position: 'HOD Mathematics',
    qualification: 'MSc Mathematics, IIT Bombay',
    experience: '15+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
  {
    id: 3,
    name: 'Dr. Sunil Verma',
    position: 'HOD Chemistry',
    qualification: 'PhD in Chemistry, IISc Bangalore',
    experience: '18+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 4,
    name: 'Dr. Priya Singh',
    position: 'HOD Biology',
    qualification: 'MBBS, MD Physiology',
    experience: '12+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/women/34.jpg',
  },
  {
    id: 5,
    name: 'Prof. Vikram Mehta',
    position: 'Senior Faculty - Physics',
    qualification: 'MSc Physics, Delhi University',
    experience: '10+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    id: 6,
    name: 'Prof. Sneha Patel',
    position: 'Senior Faculty - Mathematics',
    qualification: 'MTech, IIT Kanpur',
    experience: '8+ years of teaching experience',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - EduExcel Coaching Institute</title>
        <meta name="description" content="Learn about EduExcel's journey, our mission, vision and the dedicated faculty who guide our students to success." />
      </Helmet>

      <main>
        <div className="bg-purple-600 py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">About Us</h1>
            <p className="text-white/90 text-center text-lg max-w-2xl mx-auto">
              Discover our journey of transforming students' lives through quality education and guidance.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2008, EduExcel began with a vision to transform the coaching landscape by providing quality education that focuses on conceptual clarity rather than rote learning.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small batch of 30 students has now grown into a premier coaching institute with multiple centers and thousands of successful students. Our journey has been driven by our passion for education and commitment to student success.
                </p>
                <p className="text-gray-700">
                  Today, EduExcel stands as a testament to our founding principles of academic excellence, personalized attention, and innovative teaching methodologies. We continue to evolve and adapt to the changing educational landscape while staying true to our core values.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="EduExcel Campus" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">15+ Years</p>
                      <p className="text-gray-600">of academic excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-20">
              <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-3xl">🔭</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted name in educational coaching by creating an environment where students can discover their potential and transform it into success, not just in exams but in life.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Empowering students with knowledge and skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Creating future leaders in science and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Setting new standards in coaching excellence</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl border border-purple-100">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional educational coaching by combining traditional teaching methods with innovative techniques, ensuring each student receives personalized attention and guidance.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Delivering high-quality education accessible to all</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Nurturing analytical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-gray-700">Providing holistic development beyond academics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline - Using the AnimatedTimeline component */}
        <AnimatedTimeline />

        {/* Faculty Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading 
              title="Meet Our Faculty" 
              subtitle="Our team of experienced educators dedicated to student success."
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyMembers.map(faculty => (
                <div key={faculty.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                    <p className="text-purple-600 font-medium mb-3">{faculty.position}</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">{faculty.qualification}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-700">{faculty.experience}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
};

export default About;
