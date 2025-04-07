
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import LiveCounter from '@/components/common/LiveCounter';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Award, Users } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;
    
    const animateOnLoad = () => {
      const children = heroElement.querySelectorAll('.animate-on-load');
      children.forEach((child, index) => {
        setTimeout(() => {
          (child as HTMLElement).style.opacity = '1';
          (child as HTMLElement).style.transform = 'translateY(0)';
        }, 200 * index);
      });
    };
    
    animateOnLoad();
  }, []);

  return (
    <div ref={heroRef} className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 opacity-95"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-scale"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-scale" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse-scale" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-block animate-on-load opacity-0 transform translate-y-4 transition-all duration-500">
              <LiveCounter />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '0.2s'}}>
              Unlock Your <span className="text-gradient-hero relative">
                Academic Potential
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '0.4s'}}>
              Join the coaching institute that has produced top rankers in JEE, NEET and other competitive exams consistently for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '0.6s'}}>
              <Link to="/courses">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/consultation">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 bg-purple-500/80 backdrop-blur-sm hover:bg-purple-500 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="relative animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '0.8s'}}>
              <div className="absolute -inset-1.5 bg-purple-500/20 rounded-lg blur-xl"></div>
              <img 
                src="/lovable-uploads/7315560d-f93a-440e-94e3-648a6e3aa914.png"
                alt="Classroom with students and teacher" 
                className="rounded-lg shadow-2xl object-cover h-[500px] w-full relative transition-all duration-700 hover:shadow-purple-500/30 hover:scale-[1.01]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '1s'}}>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Top Results</p>
                    <p className="text-gray-600">95% success rate</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-on-load opacity-0 transform translate-y-4 transition-all duration-500" style={{transitionDelay: '1.2s'}}>
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Expert Faculty</p>
                    <p className="text-gray-600">IIT & AIIMS alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Straight bottom line instead of wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
    </div>
  );
};

export default HeroSection;
