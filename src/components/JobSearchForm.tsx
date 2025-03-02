import React, {useEffect, useRef, useState} from 'react';
import {Mail, MapPin, Search} from 'lucide-react';
import {Features} from "./Features.tsx";
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Select} from './ui/Select';
import {SVG} from "./ui/SVG.tsx";

interface FormData {
  position: string;
  jobType: string;
  location: string;
  email: string;
}

interface Suggestion {
    id: string;
    text: string;
}

export const JobSearchForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    position: '',
    jobType: '',
    location: '',
    email: '',
  });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionsRef = useRef<HTMLDivElement>(null);

    const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API;
    if (!TOMTOM_API_KEY) {
        console.error('VITE_TOMTOM_API environment variable is not set');
    }

    useEffect(() => {
        // Close suggestions when clicking outside
        const handleClickOutside = (event: MouseEvent) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchSuggestions = async (query: string) => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await fetch(
                `https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json?` +
                `key=${TOMTOM_API_KEY}` +
                `&typeahead=true` +
                `&limit=4` +
                `&entityType=Municipality,MunicipalitySubdivision,CountrySubdivision` // Include more location types
            );

            if (!response.ok) throw new Error('Failed to fetch suggestions');

            const data = await response.json();
            const formattedSuggestions = data.results
                .filter((result: any) => result.address && result.address.municipality) // Ensure we have valid city data
                .map((result: any) => {
                    // Construct a readable address string
                    const municipality = result.address.municipality;
                    const region = result.address.countrySubdivision;
                    const country = result.address.country;

                    let text = municipality;
                    if (region && region !== municipality) {
                        text += `, ${region}`;
                    }
                    if (country) {
                        text += `, ${country}`;
                    }

                    return {
                        id: result.id,
                        text: text
                    };
                })
                .filter((suggestion: Suggestion, index: number, self: Suggestion[]) =>
                    // Remove duplicates
                    index === self.findIndex((s) => s.text === suggestion.text)
                );

            setSuggestions(formattedSuggestions);
            setShowSuggestions(true);
        } catch (err) {
            console.error('Error fetching suggestions:', err);
            setSuggestions([]);
        }
    };

    // Debounce function to limit API calls
    const debounce = (func: Function, wait: number) => {
        let timeout: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

    const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData(prev => ({...prev, location: value}));
        debouncedFetchSuggestions(value);
    };

    const handleSuggestionClick = (suggestion: Suggestion) => {
        setFormData(prev => ({...prev, location: suggestion.text}));
        setShowSuggestions(false);
    };

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
      setFormData({position: '', jobType: '', location: '', email: ''});
    } catch (err) {
      console.error(err);
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
        <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 w-full h-[30vh]  text-muted-foreground/20 opacity-50">
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
                                value={formData.position}
                                onChange={handleInputChange('position')}
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
                            <div className="relative">
                                <Input
                                    label="Location"
                                    icon={MapPin}
                                    type="text"
                                    value={formData.location}
                                    onChange={handleLocationInput}
                                    placeholder="e.g. Berlin, Germany"
                                    required
                                />
                                {showSuggestions && suggestions.length > 0 && (
                                    <div
                                        ref={suggestionsRef}
                                        className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
                                    >
                                        {suggestions.map((suggestion) => (
                                            <div
                                                key={suggestion.id}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                {suggestion.text}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
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