
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '@/components/common/SectionHeading';
import CTASection from '@/components/common/CTASection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const topRankers = [
  {
    id: 1,
    name: 'Aditya Sharma',
    rank: 'JEE Advanced AIR 28',
    year: '2023',
    testimonial: 'The structured approach and continuous support from EduExcel faculty helped me achieve my dream rank.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sneha Patel',
    rank: 'NEET AIR 75',
    year: '2023',
    testimonial: 'I owe my success to the rigorous training and personalized attention provided by EduExcel.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    rank: 'JEE Main AIR 120',
    year: '2023',
    testimonial: 'The problem-solving techniques and exam strategies taught at EduExcel made all the difference.',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    name: 'Priya Singh',
    rank: 'NEET AIR 210',
    year: '2023',
    testimonial: 'EduExcel\'s focus on conceptual clarity and application-based learning helped me excel in NEET.',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];

const successStats = [
  { label: 'Top 100 in JEE Advanced', count: '25+', year: '2023' },
  { label: 'Top 100 in NEET', count: '30+', year: '2023' },
  { label: 'Students admitted to IITs', count: '100+', year: '2023' },
  { label: 'Students admitted to Medical Colleges', count: '150+', year: '2023' },
];

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    position: 'JEE Advanced AIR 156',
    content: 'The faculty at EduExcel is exceptional. Their approach to problem-solving and conceptual clarity helped me tackle even the most challenging questions in JEE Advanced.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 2,
    name: 'Nisha Gupta',
    position: 'NEET AIR 340',
    content: 'I joined EduExcel after struggling with biology concepts. Their systematic approach and detailed explanations transformed my understanding and boosted my confidence.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    position: 'JEE Main AIR 450',
    content: 'The regular mock tests and performance analysis at EduExcel helped me identify my weak areas and work on them strategically. This was crucial for my success.',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 4,
    name: 'Kavita Sharma',
    position: 'Parent of NEET qualifier',
    content: 'As a parent, I appreciated the regular updates and counseling sessions provided by EduExcel. They cared about my child\'s overall development, not just academic success.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 5,
    name: 'Rohit Patel',
    position: 'JEE Advanced AIR 560',
    content: 'The study material provided by EduExcel was comprehensive and well-structured. It covered all topics in depth and included plenty of practice questions.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
];

const Results = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex + 1) % Math.ceil(testimonials.length / 2)
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      (prevIndex - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2)
    );
  };

  return (
    <>
      <Helmet>
        <title>Results & Achievements - EduExcel Coaching Institute</title>
        <meta name="description" content="Discover EduExcel's track record of success with top rankers in JEE, NEET and other competitive exams. Read testimonials from our successful students." />
      </Helmet>

      <main>
        <div className="bg-purple-700 py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">Results & Achievements</h1>
            <p className="text-white/90 text-center text-lg max-w-2xl mx-auto">
              Our track record of success speaks for itself. Discover the achievements of our students.
            </p>
          </div>
        </div>

        {/* Top Rankers Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading 
              title="Our Top Rankers" 
              subtitle="Meet the brilliant minds who achieved top ranks in various competitive exams under our guidance."
              centered={true}
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topRankers.map(ranker => (
                <div 
                  key={ranker.id} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 p-6 text-center"
                >
                  <div className="mb-4 w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-purple-100">
                    <img 
                      src={ranker.image} 
                      alt={ranker.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{ranker.name}</h3>
                  <div className="text-purple-600 font-medium mb-1">{ranker.rank}</div>
                  <div className="text-gray-500 text-sm mb-3">Batch of {ranker.year}</div>
                  <p className="text-gray-600 italic">{ranker.testimonial}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {successStats.map((stat, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.count}</div>
                  <div className="text-gray-700">{stat.label}</div>
                  <div className="text-gray-500 text-sm">{stat.year}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-purple-700 text-white">
                  <h2 className="text-3xl font-bold mb-6">Our Success Metrics</h2>
                  <p className="mb-8">Over the years, EduExcel has established itself as a premier coaching institute with a consistent track record of producing top rankers.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="bg-white/10 rounded-full p-3 mr-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold">95%</div>
                        <div className="text-white/80">Success rate in competitive exams</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white/10 rounded-full p-3 mr-4">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold">85%</div>
                        <div className="text-white/80">Students show significant improvement</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-white/10 rounded-full p-3 mr-4">
                        <span className="text-2xl">🎓</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold">500+</div>
                        <div className="text-white/80">Students in top colleges annually</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Students celebrating success" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-white text-center px-6">
                      <div className="text-4xl font-bold mb-2">15+</div>
                      <div className="text-xl">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading 
              title="Student Testimonials" 
              subtitle="What our students say about their journey with EduExcel."
              centered={true}
            />
            
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.slice(index * 2, index * 2 + 2).map(testimonial => (
                          <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                            <div className="flex items-center mb-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full mr-4"
                              />
                              <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <p className="text-purple-600 text-sm">{testimonial.position}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 mb-4">{testimonial.content}</p>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === currentTestimonialIndex ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonials page ${index + 1}`}
                  />
                ))}
                
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
};

export default Results;
