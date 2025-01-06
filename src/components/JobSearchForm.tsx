import React, { useState } from 'react';
import { Search, Mail, ArrowRight } from 'lucide-react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

export const JobSearchForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you! We will start searching for jobs matching your criteria.');
      setJobTitle('');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100/50 to-white/30 rounded-3xl blur-xl" />
      <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-indigo-500/10 p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="What job are you looking for?"
            icon={Search}
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g. Frontend Developer"
            required
          />
          <Input
            label="Where should we send the job matches?"
            icon={Mail}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
          <Button type="submit" isLoading={isSubmitting}>
            <span>Start Job Search</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          We'll only send you relevant matches. No spam, ever.
        </p>
      </div>
    </div>
  );
}