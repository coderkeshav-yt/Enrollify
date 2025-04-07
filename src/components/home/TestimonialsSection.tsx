
import React, { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aditya Sharma',
    position: 'JEE Advanced AIR 28',
    content: 'EduExcel\'s structured approach and dedicated faculty helped me secure a top rank in JEE. The regular tests and personalized attention made all the difference.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    name: 'Sneha Patel',
    position: 'NEET AIR 75',
    content: 'I\'m grateful to EduExcel for their unwavering support during my NEET preparation. Their comprehensive study material and doubt-clearing sessions were invaluable.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 3,
    name: 'Rahul Verma',
    position: 'JEE Main AIR 120',
    content: 'The faculty at EduExcel are not just teachers but mentors who guide you through the ups and downs of JEE preparation. Their problem-solving techniques are simply outstanding.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    name: 'Priya Singh',
    position: 'NEET AIR 210',
    content: 'EduExcel provided the perfect balance of theory and practical knowledge. The biology sessions, in particular, were extremely helpful for my NEET preparation.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading 
          title="Success Stories" 
          subtitle="Hear from our students who achieved their dreams with our guidance."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-50 rounded-2xl p-8 md:p-10 relative">
                      <Quote className="absolute top-6 left-6 text-brand-200 h-10 w-10 opacity-30" />
                      <div className="relative z-10">
                        <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full mr-4"
                          />
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-brand-600">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-brand-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
