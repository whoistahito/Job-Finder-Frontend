import React from 'react';
import {cn} from '../../utils/cn';
import {LucideIcon} from 'lucide-react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
    label: string;
    icon?: LucideIcon;
    error?: string;
    options: SelectOption[];
    onBlur?: () => void;
}

export const Select: React.FC<SelectProps> = ({
                                                  label,
                                                  icon: Icon,
                                                  error,
                                                  options,
                                                  className,
                                                  onBlur,
                                                  ...props
                                              }) => {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="relative group">
                {Icon && (
                    <div
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 group-focus-within:text-neon-pink">
                        <Icon className="h-[18px] w-[18px] stroke-[2.5px]"/>
                    </div>
                )}
                <select
                    className={cn(
                        "w-full px-4 py-3 rounded-xl border border-gray-200",
                        "bg-white",
                        "transition-all duration-200",
                        "text-gray-900",
                        "focus:outline-none focus:ring-2 focus:ring-neon-pink/20 focus:border-neon-pink",
                        "hover:border-neon-pink/30",
                        Icon && "pl-11",
                        error && "border-red-500 focus:ring-red-500/20 focus:border-red-500",
                        className
                    )}
                    onBlur={onBlur}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
