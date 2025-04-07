
import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Expert Faculty',
    description: 'Learn from highly qualified faculty members from IITs, AIIMS and other premier institutions.',
    icon: '👨‍🏫'
  },
  {
    title: 'Comprehensive Study Material',
    description: 'Access to meticulously designed study materials covering all topics in detail.',
    icon: '📚'
  },
  {
    title: 'Regular Mock Tests',
    description: 'Frequent tests and assessments to track progress and improve performance.',
    icon: '📝'
  },
  {
    title: 'Doubt Clearing Sessions',
    description: 'One-on-one sessions with faculty to resolve doubts and strengthen weak areas.',
    icon: '🤔'
  },
  {
    title: 'Small Batch Sizes',
    description: 'Limited students per batch ensuring personal attention to each student.',
    icon: '👥'
  },
  {
    title: 'Performance Analytics',
    description: 'Advanced analytics to track progress and identify improvement areas.',
    icon: '📊'
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mx-auto mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose EduExcel?</h2>
          <p className="text-lg text-gray-600">We combine traditional teaching with innovative methodologies to ensure outstanding results.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-50 rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to excel in your academics?</h3>
              <p className="text-gray-600 mb-0 md:max-w-xl">
                Join EduExcel today and take the first step towards academic success. Our expert faculty and proven methods await you.
              </p>
            </div>
            <Link to="/courses">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-8 rounded-md transition-colors duration-200 whitespace-nowrap px-8 py-3 text-lg">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
