
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Mock data for recent enrollments with Indian names
const recentEnrollments = [
  { name: 'Rahul Sharma', course: 'JEE Advanced Batch' },
  { name: 'Priya Patel', course: 'NEET Preparation Course' },
  { name: 'Arjun Singh', course: 'Foundation Course - Grade 10' },
  { name: 'Kavita Desai', course: 'Olympiad Training Program' },
  { name: 'Aditya Kumar', course: 'Physics Mastery Course' },
  { name: 'Anjali Verma', course: 'Chemistry Intensive Batch' },
];

const EnrollmentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentEnrollment, setCurrentEnrollment] = useState(recentEnrollments[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Show popup after initial delay
    const initialTimer = setTimeout(() => {
      showPopup();
    }, 12000); // 12 seconds

    // Setup interval for showing popup periodically
    const intervalTimer = setInterval(() => {
      showPopup();
    }, 60000); // 60 seconds (reduced frequency)

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const showPopup = () => {
    // Randomly select a new enrollment
    const newIndex = Math.floor(Math.random() * recentEnrollments.length);
    setIndex(newIndex);
    setCurrentEnrollment(recentEnrollments[newIndex]);
    
    // Show popup
    setIsVisible(true);
    
    // Hide popup after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 max-w-xs bg-white rounded-lg shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <div className="p-4 pr-10 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
        <div className="flex items-center">
          <div className="mr-3 bg-brand-100 rounded-full p-2">
            <span className="text-2xl">🎉</span>
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {currentEnrollment.name}
            </p>
            <p className="text-sm text-gray-600">
              just enrolled in <span className="font-medium text-brand-600">{currentEnrollment.course}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPopup;
