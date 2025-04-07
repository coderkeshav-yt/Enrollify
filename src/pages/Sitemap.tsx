
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Courses & Plans', path: '/courses' },
        { name: 'Results & Achievements', path: '/results' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Free Consultation', path: '/consultation' },
      ]
    },
    {
      title: 'Course Categories',
      links: [
        { name: 'JEE Preparation', path: '/courses?category=engineering' },
        { name: 'NEET Coaching', path: '/courses?category=medical' },
        { name: 'Foundation Courses', path: '/courses?category=foundation' },
        { name: 'Online Programs', path: '/courses?category=online' },
        { name: 'Crash Courses', path: '/courses?category=crash' },
      ]
    },
    {
      title: 'Legal Information',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
      ]
    },
    {
      title: 'Contact Information',
      links: [
        { name: 'info@eduexcel.com', path: 'mailto:info@eduexcel.com', isExternal: true },
        { name: '+123 456 7890', path: 'tel:+1234567890', isExternal: true },
        { name: '123 Education Street, Academic City, 10001', path: 'https://maps.google.com/?q=123+Education+Street,+Academic+City,+10001', isExternal: true },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - EduExcel Coaching Institute</title>
        <meta name="description" content="Browse all pages on the EduExcel website - find exactly what you're looking for." />
      </Helmet>

      <div className="bg-purple-600 py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">Sitemap</h1>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Complete Site Navigation"
              subtitle="Find all pages available on our website"
              alignment="center"
            />

            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h2 className="text-xl font-bold mb-4 text-purple-600">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="text-gray-700">
                        {link.isExternal ? (
                          <a 
                            href={link.path} 
                            className="flex items-center hover:text-purple-600 transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {link.name} <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                        ) : (
                          <Link to={link.path} className="hover:text-purple-600 transition-colors">
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;
