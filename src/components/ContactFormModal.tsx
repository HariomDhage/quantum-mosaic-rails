import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Mail, FileText } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    challenges: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent('XOS Pioneer Program Application');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Title: ${formData.title}

Execution Challenges:
${formData.challenges}
    `);
    
    window.open(`mailto:deepak@quantummosaic.com?subject=${subject}&body=${body}`, '_blank');
    onClose();
  };

  const handleScheduleMeeting = () => {
    window.open('mailto:deepak@quantummosaic.com?subject=Schedule%20Meeting%20-%20XOS%20Pioneer%20Program', '_blank');
  };

  const handleQuickEmail = () => {
    window.open('mailto:deepak@quantummosaic.com?subject=Quick%20Question%20-%20XOS%20Pioneer%20Program', '_blank');
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.title && formData.challenges;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary mb-2">
            Start Your 90-Day Value Multiplier Pilot
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            See how your best judgment performs at scale risk-free.
          </p>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button
              variant="outline"
              onClick={handleScheduleMeeting}
              className="flex items-center justify-center space-x-2 h-12"
            >
              <Calendar className="h-4 w-4" />
              <span>Schedule Meeting</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleQuickEmail}
              className="flex items-center justify-center space-x-2 h-12"
            >
              <Mail className="h-4 w-4" />
              <span>Send Quick Email</span>
            </Button>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span className="text-sm">Or fill out the form</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your firm name"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Your role"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges">Tell us about your execution challenges *</Label>
              <Textarea
                id="challenges"
                name="challenges"
                placeholder="What workflows keep you up at night? What manual processes would you like to automate?"
                value={formData.challenges}
                onChange={handleInputChange}
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!isFormValid}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Start Pilot
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;