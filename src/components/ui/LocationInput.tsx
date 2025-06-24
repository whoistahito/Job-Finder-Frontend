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
}

export const LocationInput: React.FC<LocationInputProps> = ({
                                                                value,
                                                                onChange,
                                                                onBlur,
                                                                suggestions,
                                                                showSuggestions,
                                                                suggestionsRef,
                                                                onSuggestionClick,
                                                                error
                                                            }) => {
    return (
        <div className="relative">
            <Input
                label="Location"
                icon={MapPin}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="e.g. Berlin, Germany"
                required
                error={error}
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
