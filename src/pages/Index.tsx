
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CoursesSection from '@/components/home/CoursesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/common/CTASection';
import EnrollmentPopup from '@/components/common/EnrollmentPopup';
import AnimatedTimeline from '@/components/common/AnimatedTimeline';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>EduExcel - Premier Coaching Institute for JEE & NEET</title>
        <meta 
          name="description" 
          content="EduExcel is a leading coaching institute for JEE, NEET and other competitive exams with a track record of producing top rankers consistently." 
        />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CoursesSection />
      <AnimatedTimeline />
      <TestimonialsSection />
      <CTASection />
      <EnrollmentPopup />
    </>
  );
};

export default Index;
