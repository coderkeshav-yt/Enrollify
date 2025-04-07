
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    id: number;
    title: string;
    fee: string;
  };
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose, course }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    initiatePayment();
  };

  const initiatePayment = () => {
    setIsLoading(true);
    
    // Convert course fee string to amount in paisa (e.g., "₹90,000" to 9000000)
    const amountInPaisa = parseInt(course.fee.replace(/[₹,]/g, '')) * 100;
    
    // Razorpay options
    const options = {
      key: "rzp_live_C7ayx7PaJJkARf", // Your Razorpay Key ID
      amount: amountInPaisa,
      currency: "INR",
      name: "EduExcel",
      description: `Enrollment for ${course.title}`,
      image: "/lovable-uploads/925f750a-fb67-4f2b-aa83-f1896095abbb.png",
      handler: function(response: any) {
        // Handle successful payment
        setIsLoading(false);
        toast({
          title: "Enrollment Successful!",
          description: `Your payment ID is: ${response.razorpay_payment_id}`,
        });
        onClose();
        
        // Store enrollment information in sessionStorage
        const enrollmentData = {
          course: course.title,
          courseId: course.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          paymentId: response.razorpay_payment_id,
          amount: course.fee
        };
        
        sessionStorage.setItem('enrollmentData', JSON.stringify(enrollmentData));
        
        // Redirect to the payment success page
        navigate('/payment-success');
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: "#7c3aed"
      },
      modal: {
        ondismiss: function() {
          setIsLoading(false);
        }
      }
    };

    // Initialize Razorpay
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enroll in {course.title}</DialogTitle>
          <DialogDescription>
            Complete your details to proceed with enrollment. Fee: {course.fee}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Proceed to Payment</>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentModal;
