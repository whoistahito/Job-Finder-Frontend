import React from 'react';
import {X} from 'lucide-react';

interface ErrorPopupProps {
    show: boolean;
    onClose: () => void;
    error: string | null;
    onContactSupport: () => void;
}

export const ErrorPopup: React.FC<ErrorPopupProps> = ({
                                                          show,
                                                          onClose,
                                                          error,
                                                          onContactSupport
                                                      }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="animate-fade-in-up w-full max-w-sm mx-4">
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={18}/>
                    </button>
                    <div className="text-center space-y-4">
                        <div
                            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-100">
                            <span className="text-2xl">!</span>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Submission Failed
                        </h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {error || 'An unexpected error occurred. Please try again.'}
                        </p>
                        <div className="flex justify-center gap-3 pt-2">
                            <button
                                onClick={onClose}
                                className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            >
                                Try Again
                            </button>
                            <button
                                onClick={onContactSupport}
                                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                            >
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
