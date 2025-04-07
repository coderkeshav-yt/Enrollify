
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Success Journey?</h2>
            <p className="text-white/90 text-lg max-w-2xl">
              Join thousands of students who have transformed their academic careers with EduExcel's expert guidance and proven methodology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/courses">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
