
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import EnrollmentModal from '@/components/courses/EnrollmentModal';

const featuredCourses = [
  {
    id: 1,
    title: 'JEE Advanced Preparation',
    description: 'Comprehensive preparation for JEE Advanced with focus on problem-solving and conceptual clarity.',
    duration: '1 Year',
    fee: '₹120,000',
    features: ['Live Classes', 'Study Material', 'Mock Tests', 'Doubt Resolution'],
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 2,
    title: 'NEET Preparation Course',
    description: 'Specialized coaching for NEET aspirants covering Biology, Physics, and Chemistry in depth.',
    duration: '1 Year',
    fee: '₹110,000',
    features: ['Expert Faculty', 'Practical Sessions', 'Regular Tests', 'Performance Analysis'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Foundation Course (VIII-X)',
    description: 'Early preparation for competitive exams while focusing on school curriculum for grades 8-10.',
    duration: '2 Years',
    fee: '₹80,000',
    features: ['Balanced Approach', 'School Syllabus', 'Competitive Prep', 'Olympiad Training'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80',
  },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<null | typeof featuredCourses[0]>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = (course: typeof featuredCourses[0]) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionHeading 
          title="Featured Courses" 
          subtitle="Our specialized programs designed to help students excel in competitive exams."
          centered={true}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Duration: {course.duration}
                  </span>
                </div>
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 h-5 w-5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full"
                  onClick={() => handleEnrollClick(course)}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="outline" className="group">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <EnrollmentModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          course={selectedCourse} 
        />
      )}
    </section>
  );
};

export default CoursesSection;
