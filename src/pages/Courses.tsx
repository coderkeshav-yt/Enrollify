
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/common/CTASection';
import { Button } from '@/components/ui/button';
import { Check, Filter } from 'lucide-react';
import EnrollmentModal from '@/components/courses/EnrollmentModal';

const coursesData = [
  {
    id: 1,
    title: 'JEE Advanced Preparation',
    category: 'engineering',
    description: 'Comprehensive preparation for JEE Advanced with focus on problem-solving and conceptual clarity.',
    duration: '1 Year',
    fee: '₹120,000',
    features: [
      'Expert faculty from IITs', 
      'Comprehensive study material', 
      'Regular mock tests', 
      'Doubt clearing sessions',
      'Performance analytics',
      'Online test series'
    ],
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 2,
    title: 'JEE Main Preparation',
    category: 'engineering',
    description: 'Focused preparation for JEE Main exam with strategic approach to maximize score.',
    duration: '1 Year',
    fee: '₹90,000',
    features: [
      'Specialized faculty', 
      'Topic-wise study material', 
      'Weekly mock tests', 
      'Doubt resolution sessions',
      'Performance tracking',
      'Stress management guidance'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'NEET Preparation Course',
    category: 'medical',
    description: 'Specialized coaching for NEET aspirants covering Biology, Physics, and Chemistry in depth.',
    duration: '1 Year',
    fee: '₹110,000',
    features: [
      'Faculty from medical colleges', 
      'Practical sessions', 
      'Regular tests', 
      'Personalized mentoring',
      'Online resources',
      'Medical entrance guidance'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    title: 'Foundation Course (VIII-X)',
    category: 'foundation',
    description: 'Early preparation for competitive exams while focusing on school curriculum for grades 8-10.',
    duration: '2 Years',
    fee: '₹80,000/year',
    features: [
      'Balanced approach', 
      'School syllabus coverage', 
      'Competitive exam foundation', 
      'Olympiad training',
      'Critical thinking development',
      'Academic counseling'
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1122&q=80',
  },
  {
    id: 5,
    title: 'Crash Course - JEE/NEET',
    category: 'crash',
    description: 'Intensive short-term program for last-minute preparation and revision.',
    duration: '3 Months',
    fee: '₹45,000',
    features: [
      'Intensive revision', 
      'Important topics focus', 
      'Daily mock tests', 
      'Problem-solving sessions',
      'Exam strategy sessions',
      'Time management training'
    ],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 6,
    title: 'Online JEE/NEET Program',
    category: 'online',
    description: 'Flexible online learning program with live classes and recorded sessions for self-paced learning.',
    duration: 'Flexible',
    fee: '₹70,000',
    features: [
      'Live online classes', 
      'Recorded lectures', 
      'Digital study material', 
      'Virtual doubt sessions',
      '24/7 doubt resolution',
      'Mobile app access'
    ],
    image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'engineering', name: 'Engineering Entrance' },
  { id: 'medical', name: 'Medical Entrance' },
  { id: 'foundation', name: 'Foundation Courses' },
  { id: 'crash', name: 'Crash Courses' },
  { id: 'online', name: 'Online Programs' },
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCourses = activeCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeCategory);

  const handleEnrollClick = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Courses & Plans - EduExcel Coaching Institute</title>
        <meta name="description" content="Explore EduExcel's comprehensive range of courses for JEE, NEET and other competitive exams. Find the perfect program to achieve your academic goals." />
      </Helmet>

      <main>
        <div className="bg-purple-600 py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">Courses & Plans</h1>
            <p className="text-white/90 text-center text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of courses designed to help you excel in competitive exams.
            </p>
          </div>
        </div>

        <div className="section-padding">
          <div className="container-custom">
            {/* Filter bar for mobile */}
            <div className="md:hidden mb-6">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-between"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Courses
                </span>
                <span>{activeCategory === 'all' ? 'All Courses' : categories.find(c => c.id === activeCategory)?.name}</span>
              </Button>
              
              {isFilterOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md p-2 border animate-fade-in">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-purple-50 text-purple-600 font-medium' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Desktop filters */}
            <div className="hidden md:flex space-x-2 mb-10">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Courses grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div 
                  key={course.id} 
                  id={`course-${course.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-sm bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
                        {categories.find(c => c.id === course.category)?.name}
                      </span>
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        Duration: {course.duration}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Fee: <span className="text-purple-600">{course.fee}</span></h3>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
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
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No courses found for this category. Please select a different category.</p>
              </div>
            )}
          </div>
        </div>

        <CTASection />
      </main>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <EnrollmentModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          course={selectedCourse} 
        />
      )}
    </>
  );
};

export default Courses;
