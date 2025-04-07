
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Copy, ArrowLeft } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface EnrollmentData {
  course: string;
  courseId: number;
  name: string;
  email: string;
  phone: string;
  paymentId: string;
  amount: string;
}

const PaymentSuccess = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [enrollmentData, setEnrollmentData] = useState<EnrollmentData | null>(null);
  const [copied, setCopied] = useState(false);
  
  // Mock batch links based on course ID
  const getBatchLink = (courseId: number) => {
    const batchLinks: {[key: number]: string} = {
      1: 'https://meet.google.com/edu-excel-jee-advanced',
      2: 'https://meet.google.com/edu-excel-jee-mains',
      3: 'https://meet.google.com/edu-excel-neet',
      4: 'https://meet.google.com/edu-excel-foundation',
      5: 'https://meet.google.com/edu-excel-olympiad'
    };
    
    return batchLinks[courseId] || 'https://eduexcel.online/batches';
  };
  
  useEffect(() => {
    // Retrieve enrollment data from session storage
    const storedData = sessionStorage.getItem('enrollmentData');
    
    if (storedData) {
      setEnrollmentData(JSON.parse(storedData));
    } else {
      // If no enrollment data found, redirect to home
      navigate('/');
    }
  }, [navigate]);
  
  const copyToClipboard = () => {
    if (!enrollmentData) return;
    
    const batchLink = getBatchLink(enrollmentData.courseId);
    navigator.clipboard.writeText(batchLink);
    setCopied(true);
    
    toast({
      title: "Link Copied!",
      description: "The batch link has been copied to your clipboard.",
    });
    
    setTimeout(() => setCopied(false), 2000);
  };
  
  if (!enrollmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner h-12 w-12 border-4 border-t-4 border-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading enrollment details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Enrollment Successful | EduExcel</title>
        <meta name="description" content="Your enrollment has been confirmed. Access your batch details here." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center">
                  <Check className="h-10 w-10 text-purple-600" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Enrollment Successful!
              </h1>
              <p className="text-center text-gray-600 mb-8">
                Congratulations! You are now enrolled in our {enrollmentData.course} course.
              </p>
              
              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-purple-800">Your Batch Details</h2>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Course</p>
                    <p className="font-medium">{enrollmentData.course}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Payment ID</p>
                    <p className="font-medium">{enrollmentData.paymentId}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Amount Paid</p>
                    <p className="font-medium">{enrollmentData.amount}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Your Batch Link</p>
                    <div className="mt-1 flex">
                      <div className="flex-grow bg-white px-4 py-2 rounded-l-md border border-r-0 border-gray-300 truncate">
                        {getBatchLink(enrollmentData.courseId)}
                      </div>
                      <button
                        onClick={copyToClipboard}
                        className="bg-purple-600 text-white px-3 rounded-r-md hover:bg-purple-700 transition-colors"
                      >
                        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 mb-8 border border-green-100">
                <h3 className="text-lg font-semibold mb-2 text-green-800">What's Next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Join your first online class using the batch link above.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>You'll receive course materials on your email within 24 hours.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Our support team will call you shortly to guide you through the onboarding process.</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="mx-auto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
