import React, {useState} from 'react';
import {Briefcase, Mail, MapPin, Search} from 'lucide-react';
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Select} from './ui/Select';

export const JobSearchForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you! We will start searching for jobs matching your criteria.');
      setJobTitle('');
      setJobType('');
      setLocation('');
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-neon-bg/80 rounded-3xl blur-xl"/>
      <div
          className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-neon-pink/10 p-8 md:p-10 border border-neon-pink/10">
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
          <Select
              label="Job Type"
              icon={Briefcase}
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
              options={[
                {value: '', label: 'Select job type'},
                {value: 'full-time', label: 'Full Time'},
                {value: 'part-time', label: 'Part Time'},
                {value: 'working-student', label: 'Working Student'},
                {value: 'internship', label: 'Internship'}
              ]}
          />
          <Input
              label="Location"
              icon={MapPin}
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Berlin, Germany"
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
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          We'll only send you relevant matches. No spam, ever.
        </p>
      </div>
    </div>
  );
}