import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Mail } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent('Join the XOS Pioneer Program - ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Title: ${formData.title}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.open(`mailto:deepak@q-mosaic-ai.com?subject=${subject}&body=${body}`, '_blank');

    toast({
      title: "Opening Email Client",
      description: "Your default email client should open with your information pre-filled.",
    });

    // Reset form and close dialog
    setFormData({
      name: '',
      email: '',
      company: '',
      title: '',
      message: ''
    });
    setIsSubmitting(false);
    onClose();
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/deepak-q-mosaic-ai/45min', '_blank');
    toast({
      title: "Opening Calendly",
      description: "You can now schedule a meeting directly with Deepak Jha, our Founder, CEO.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Start Your 90 Day Value Multiplier Pilot</DialogTitle>
          <DialogDescription>
            See how your best judgment performs at scale risk-free.
          </DialogDescription>
        </DialogHeader>
        
        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button 
            onClick={handleScheduleMeeting}
            className="flex items-center gap-2 h-12"
            variant="outline"
          >
            <Calendar className="h-4 w-4" />
            Schedule Meeting
          </Button>
          <Button 
            onClick={() => {
              const subject = encodeURIComponent('Join the XOS Pioneer Program');
              const body = encodeURIComponent('Hi, I am interested in joining the Quantum Mosaic Pioneer Program. Please send me more information.');
              window.open(`mailto:deepak@q-mosaic-ai.com?subject=${subject}&body=${body}`, '_blank');
              toast({
                title: "Opening Email Client",
                description: "Your default email client should open with a pre-filled message.",
              });
              onClose();
            }}
            className="flex items-center gap-2 h-12"
            variant="outline"
          >
            <Mail className="h-4 w-4" />
            Send Quick Email
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or fill out the form</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Your firm name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Your role"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Where Could Your Best Judgment Take You? *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Let's explore how to scale it without scaling headcount."
              rows={4}
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Confirm'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;