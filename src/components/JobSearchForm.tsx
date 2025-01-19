import React, {useState} from 'react';
import {Mail, MapPin, Search} from 'lucide-react';
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Select} from './ui/Select';

interface FormData {
  jobTitle: string;
  jobType: string;
  location: string;
  email: string;
}

export const JobSearchForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: '',
    jobType: '',
    location: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('https://api.yourjobfinder.website/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit job search, please try again.');
      }

      setSuccess('Thank you! We will start searching for jobs matching your criteria.');
      setFormData({jobTitle: '', jobType: '', location: '', email: ''});
    } catch (err) {
      setError('An unexpected error occurred, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData) => (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-neon-bg/80 rounded-3xl blur-xl"/>
      <div
          className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-neon-pink/10 p-8 md:p-10 border border-neon-pink/10"
      >
        {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
              {error}
            </div>
        )}
        {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-600">
              {success}
            </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="What job are you looking for?"
            icon={Search}
            type="text"
            value={formData.jobTitle}
            onChange={handleInputChange('jobTitle')}
            placeholder="e.g. Frontend Developer"
            required
          />
          <Select
              label="Job Type"
              icon={null}
              value={formData.jobType}
              onChange={handleInputChange('jobType')}
              required
              options={[
                {value: '', label: 'Select job type'},
                {value: 'full-time', label: 'Full Time'},
                {value: 'part-time', label: 'Part Time'},
                {value: 'working-student', label: 'Working Student'},
                {value: 'internship', label: 'Internship'},
              ]}
          />
          <Input
              label="Location"
              icon={MapPin}
              type="text"
              value={formData.location}
              onChange={handleInputChange('location')}
              placeholder="e.g. Berlin, Germany"
              required
          />
          <Input
            label="Where should we send the job matches?"
            icon={Mail}
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
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
};