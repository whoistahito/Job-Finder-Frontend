import React from 'react';
import {MapPin} from 'lucide-react';
import {Input} from './Input';
import {Suggestion} from '../../hooks/useJobSearch';

interface LocationInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    suggestions: Suggestion[];
    showSuggestions: boolean;
    suggestionsRef: React.RefObject<HTMLDivElement>;
    onSuggestionClick: (suggestion: Suggestion) => void;
    error?: string;
    variant?: 'default' | 'minimal';
}

export const LocationInput: React.FC<LocationInputProps> = ({
                                                                value,
                                                                onChange,
                                                                onBlur,
                                                                suggestions,
                                                                showSuggestions,
                                                                suggestionsRef,
                                                                onSuggestionClick,
                                                                error,
                                                                variant = 'default'
                                                            }) => {
    return (
        <div className="relative">
            <Input
                label="Location"
                icon={variant === 'default' ? MapPin : undefined}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="e.g. Berlin, Germany"
                required
                error={error}
                variant={variant}
            />
            {showSuggestions && suggestions.length > 0 && (
                <div
                    ref={suggestionsRef}
                    className={
                        variant === 'minimal'
                            ? 'absolute z-10 mt-2 w-full rounded-xl border border-gray-300 bg-white shadow-md overflow-hidden'
                            : 'absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto'
                    }
                >
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion.id}
                            className={
                                variant === 'minimal'
                                    ? 'px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer'
                                    : 'px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm'
                            }
                            onClick={() => onSuggestionClick(suggestion)}
                        >
                            {suggestion.text}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
