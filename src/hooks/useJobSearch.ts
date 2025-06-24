import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export interface FormData {
    position: string;
    jobType: string;
    location: string;
    email: string;
}

export interface FormErrors {
    position?: string;
    jobType?: string;
    location?: string;
    email?: string;
}

export interface Suggestion {
    id: string;
    text: string;
}

export const useJobSearch = () => {
    const [formData, setFormData] = useState<FormData>({
        position: '',
        jobType: '',
        location: '',
        email: '',
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
        position: false,
        jobType: false,
        location: false,
        email: false,
    });
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionsRef = useRef<HTMLDivElement>(null);

    const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API;
    if (!TOMTOM_API_KEY) {
        console.error('VITE_TOMTOM_API environment variable is not set');
    }

    // Validation rules
    const validateField = (field: keyof FormData, value: string): string | undefined => {
        switch (field) {
            case 'position':
                if (!value.trim()) return 'Job title is required';
                if (/^\d+$/.test(value)) return 'Job title cannot contain only numbers';
                if (value.length < 2) return 'Job title must be at least 2 characters';
                if (value.length > 100) return 'Job title must be less than 100 characters';
                return undefined;

            case 'jobType':
                if (!value) return 'Please select a job type';
                return undefined;

            case 'location':
                if (!value.trim()) return 'Location is required';
                if (/^\d+$/.test(value)) return 'Location cannot contain only numbers';
                if (value.length < 2) return 'Location must be at least 2 characters';
                if (value.length > 100) return 'Location must be less than 100 characters';
                return undefined;

            case 'email':
                if (!value.trim()) return 'Email is required';
                // RFC 5322 compliant email regex
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return undefined;

            default:
                return undefined;
        }
    };

    // Validate all fields
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
                isValid = false;
            }
        });

        setFormErrors(newErrors);
        return isValid;
    };

    // Mark field as touched when it loses focus
    const handleBlur = (field: keyof FormData) => () => {
        setTouched(prev => ({...prev, [field]: true}));

        // Validate the field when it loses focus
        const error = validateField(field, formData[field]);
        setFormErrors(prev => ({
            ...prev,
            [field]: error
        }));
    };

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

    // Auto-hide the success popup after 5 seconds
    useEffect(() => {
        if (showSuccessPopup) {
            const timer = setTimeout(() => {
                setShowSuccessPopup(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showSuccessPopup]);

    // Auto-hide the error popup after 5 seconds
    useEffect(() => {
        if (showErrorPopup) {
            const timer = setTimeout(() => {
                setShowErrorPopup(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showErrorPopup]);

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
                `&language=en-US` +
                `&entityType=Municipality,Country`
            );

            if (!response.ok) throw new Error('Failed to fetch suggestions');

            const data = await response.json();
            const formattedSuggestions = data.results
                .filter((result: any) => result.address && result.address.municipality) // Ensure we have valid city data
                .map((result: any) => {
                    // Construct a readable address string
                    const municipality = result.address.municipality;
                    const country = result.address.country;

                    let text = municipality;
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

        // Prevent input if it's only numbers
        if (/^\d+$/.test(value) && value.length > 0) {
            // Update error but don't update the field value
            setFormErrors(prev => ({
                ...prev,
                location: 'Location cannot contain only numbers'
            }));
            return;
        }

        setFormData(prev => ({...prev, location: value}));

        // Clear error if field is valid
        const error = validateField('location', value);
        setFormErrors(prev => ({
            ...prev,
            location: touched.location ? error : undefined
        }));

        debouncedFetchSuggestions(value);
    };

    const handleSuggestionClick = (suggestion: Suggestion) => {
        setFormData(prev => ({...prev, location: suggestion.text}));
        setShowSuggestions(false);

        // Clear location error when selecting a valid suggestion
        setFormErrors(prev => ({
            ...prev,
            location: undefined
        }));

        // Mark as touched
        setTouched(prev => ({...prev, location: true}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all fields as touched
        setTouched({
            position: true,
            jobType: true,
            location: true,
            email: true
        });

        // Validate all fields before submission
        if (!validateForm()) {
            return; // Don't submit if validation fails
        }

        setIsSubmitting(true);
        setError(null);
        setSuccess(null);
        setShowSuccessPopup(false);
        setShowErrorPopup(false);

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
            setShowSuccessPopup(true);

            // Reset form
            setFormData({position: '', jobType: '', location: '', email: ''});
            setFormErrors({});
            setTouched({
                position: false,
                jobType: false,
                location: false,
                email: false
            });
        } catch (err) {
            console.error(err);
            setError('An unexpected error occurred, please try again.');
            setShowErrorPopup(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const value = e.target.value;

        // Special validation for position field to prevent numbers-only input
        if (field === 'position' && /^\d+$/.test(value) && value.length > 0) {
            // Update error but don't update the field value
            setFormErrors(prev => ({
                ...prev,
                position: 'Job title cannot contain only numbers'
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Validate on change if the field has been touched
        if (touched[field]) {
            const error = validateField(field, value);
            setFormErrors(prev => ({
                ...prev,
                [field]: error
            }));
        }
    };

    return {
        formData,
        formErrors,
        isSubmitting,
        error,
        success,
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
    };
};
