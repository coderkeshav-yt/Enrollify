
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { count: '15+', value: 15, label: 'Years of Excellence', color: 'bg-purple-600' },
  { count: '50,000+', value: 50000, label: 'Students Trained', color: 'bg-purple-600' },
  { count: '500+', value: 500, label: 'Top Ranks in JEE/NEET', color: 'bg-purple-600' },
  { count: '95%', value: 95, label: 'Success Rate', color: 'bg-purple-600' },
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      
      const durations = [1500, 2500, 2000, 1500]; // Different durations for different stats
      
      stats.forEach((stat, index) => {
        let startTime: number;
        let animationFrameId: number;
        
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / durations[index], 1);
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(progress * stat.value);
            return newCounts;
          });
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(animate);
          
          return () => {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId);
            }
          };
        }, index * 200); // Stagger the animations
      });
    } else if (!inView && isAnimating) {
      setIsAnimating(false);
      setCounts(stats.map(() => 0));
      
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    }
    
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [inView, isAnimating]);

  return (
    <div ref={ref} className="bg-gradient-to-r from-purple-50 to-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-2">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 transition-all duration-500 group-hover:scale-110">
                  {counts[index].toLocaleString()}
                  {stat.count.includes('+') && '+'}
                  {stat.count.includes('%') && '%'}
                </div>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
