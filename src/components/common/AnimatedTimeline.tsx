
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2008',
    title: 'EduExcel Founded',
    description: 'Started with a small batch of 30 students focusing on JEE preparation.'
  },
  {
    year: '2010',
    title: 'First Batch Results',
    description: 'Our first batch achieved remarkable results with 80% selection rate in IITs.'
  },
  {
    year: '2012',
    title: 'NEET Division Launched',
    description: 'Expanded our offerings to include specialized coaching for medical entrance exams.'
  },
  {
    year: '2015',
    title: 'New Campus',
    description: 'Moved to a state-of-the-art campus with modern facilities and digital classrooms.'
  },
  {
    year: '2018',
    title: 'Online Learning Platform',
    description: 'Launched our online learning platform to reach students across India.'
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    description: 'Successfully transitioned all courses to online format with enhanced digital resources.'
  },
  {
    year: '2023',
    title: 'Top Coaching Institute',
    description: 'Recognized as one of the top coaching institutes in India with consistent results.'
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Planning to expand our services internationally and launch advanced research programs.'
  }
];

const AnimatedTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineEl = timelineRef.current;
      const timelineRect = timelineEl.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how far down the timeline we've scrolled (0 to 1)
      let progress = 0;
      
      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        progress = Math.min(1, Math.max(0, 
          (windowHeight - timelineTop) / (timelineHeight + windowHeight * 0.5)
        ));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <div ref={ref} className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-800">Our Journey</h2>
        
        <div className="relative" ref={timelineRef}>
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 z-0"></div>
          
          {/* Active line that grows as user scrolls */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-600 z-10"
            style={{ height: `${scrollProgress * 100}%`, transition: 'height 0.1s ease-out' }}
          ></div>
          
          {/* Timeline elements with improved spacing and visibility */}
          <div className="relative">
            {timelineEvents.map((event, index) => {
              // Calculate when this item should become visible based on scroll progress
              const itemVisibilityThreshold = index / (timelineEvents.length - 1);
              const isVisible = scrollProgress >= itemVisibilityThreshold;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className="mb-24 flex items-center" // Increased vertical spacing between items
                >
                  {/* Left side content */}
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'pr-16' : ''}`}>
                    {isLeft && (
                      <div 
                        className={`transition-all duration-1000 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
                        }`}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100 inline-block">
                          <span className="text-sm font-semibold text-purple-600">{event.year}</span>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Circle marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
                    <div className={`w-12 h-12 rounded-full bg-purple-600 z-20 shadow-md flex items-center justify-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}>
                      <span className="text-white font-bold">{event.year.substring(2)}</span>
                    </div>
                  </div>
                  
                  {/* Right side content */}
                  <div className={`w-full md:w-1/2 ${!isLeft ? 'md:pl-16' : ''}`}>
                    {/* Mobile view (all items) and desktop right side view */}
                    {(!isLeft || window.innerWidth < 768) && (
                      <div 
                        className={`md:inline-block transition-all duration-1000 ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : !isLeft
                              ? 'opacity-0 translate-x-24'
                              : 'opacity-0 -translate-x-24'
                        }`}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
                          <span className="text-sm font-semibold text-purple-600 block md:hidden">{event.year}</span>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
