
import React, { useState, useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

const LiveCounter = () => {
  const [count, setCount] = useState(126);
  const [displayCount, setDisplayCount] = useState(126);
  const prevCountRef = useRef(126);

  useEffect(() => {
    // Simulate random fluctuations in user count
    const interval = setInterval(() => {
      // Random number between -2 and +4
      const change = Math.floor(Math.random() * 7) - 2;
      
      // Ensure count doesn't go below 100
      setCount((prevCount) => Math.max(100, prevCount + change));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;
    
    // Animate the counter
    let startTime: number;
    const duration = 1500; // 1.5 seconds
    
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(prevCount + progress * (count - prevCount));
      
      setDisplayCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [count]);

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 inline-flex items-center shadow-sm">
      <div className="mr-2 bg-green-500 rounded-full p-1">
        <Users size={16} className="text-white" />
      </div>
      <div className="flex items-center">
        <span className="animate-pulse mr-1 h-2 w-2 bg-green-500 rounded-full"></span>
        <span className="text-sm font-medium">
          <span className="text-green-500">{displayCount}</span> students online now
        </span>
      </div>
    </div>
  );
};

export default LiveCounter;
