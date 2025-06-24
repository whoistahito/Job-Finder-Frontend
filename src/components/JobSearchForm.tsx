import React from 'react';
import {Mail, Search} from 'lucide-react';
import {Features} from "./Features.tsx";
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Select} from './ui/Select';
import {SVG} from "./ui/SVG.tsx";
import {SuccessPopup} from './ui/SuccessPopup';
import {ErrorPopup} from './ui/ErrorPopup';
import {LocationInput} from './ui/LocationInput';
import {useJobSearch} from '../hooks/useJobSearch';

export const JobSearchForm: React.FC = () => {
  const {
    formData,
    formErrors,
    isSubmitting,
    error,
    showSuccessPopup,
    setShowSuccessPopup,
    showErrorPopup,
    setShowErrorPopup,
    suggestions,
    showSuggestions,
    suggestionsRef,
    navigate,
    handleLocationInput,
    handleSuggestionClick,
    handleSubmit,
    handleInputChange,
    handleBlur,
    touched
  } = useJobSearch();

  return (
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        {/* Success Popup */}
        <SuccessPopup
            show={showSuccessPopup}
            onClose={() => setShowSuccessPopup(false)}
        />

        {/* Error Popup */}
        <ErrorPopup
            show={showErrorPopup}
            onClose={() => setShowErrorPopup(false)}
            error={error}
            onContactSupport={() => navigate('/contact')}
        />

        <div
            className="pointer-events-none absolute inset-x-0 top-0 w-full h-[30vh] text-muted-foreground/20 opacity-50">
          <SVG/>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16">
          <div className="text-center space-y-6">
            <h1 className="font-outfit text-5xl md:text-6xl font-black tracking-tight">
            <span
                className="inline-block animate-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-[200%_auto] bg-clip-text text-transparent">
              Our Bot Finds the Jobs,
            </span>
              <br/>
              <span className="text-gray-900">You Check Your Emails</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'll send you job matches based on your preferences. No need to search for jobs anymore.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-neon-bg/80 rounded-3xl blur-xl"/>
            <div
                className="relative bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-neon-pink/10 p-8 md:p-10 border border-neon-pink/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                    label="What job are you looking for?"
                    icon={Search}
                    type="text"
                    value={formData.position}
                    onChange={handleInputChange('position')}
                    onBlur={handleBlur('position')}
                    placeholder="e.g. Frontend Developer"
                    required
                    error={touched.position ? formErrors.position : undefined}
                />
                <Select
                    label="Job Type"
                    icon={null}
                    value={formData.jobType}
                    onChange={handleInputChange('jobType')}
                    onBlur={handleBlur('jobType')}
                    required
                    error={touched.jobType ? formErrors.jobType : undefined}
                    options={[
                      {value: '', label: 'Select job type'},
                      {value: 'full-time', label: 'Full Time'},
                      {value: 'part-time', label: 'Part Time'},
                      {value: 'working-student', label: 'Working Student'},
                      {value: 'internship', label: 'Internship'},
                    ]}
                />
                <LocationInput
                    value={formData.location}
                    onChange={handleLocationInput}
                    onBlur={handleBlur('location')}
                    suggestions={suggestions}
                    showSuggestions={showSuggestions}
                    suggestionsRef={suggestionsRef}
                    onSuggestionClick={handleSuggestionClick}
                    error={touched.location ? formErrors.location : undefined}
                />
                <Input
                    label="Where should we send the job matches?"
                    icon={Mail}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    onBlur={handleBlur('email')}
                    placeholder="your@email.com"
                    required
                    error={touched.email ? formErrors.email : undefined}
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
          <Features/>
        </div>
        <footer className="text-center text-gray-500 py-4">
          <p>&copy; {new Date().getFullYear()} Your Job Finder. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/contact" className="hover:text-gray-700">Contact Us</a>
            <a href="/terms" className="hover:text-gray-700">Terms of Use</a>
          </div>
        </footer>
      </main>
  );
};
