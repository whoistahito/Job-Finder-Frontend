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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
            <div
                className="animate-bounce-in bg-gradient-to-r from-red-500 via-red-600 to-red-500 p-0.5 rounded-3xl shadow-xl shadow-red-500/30 max-w-md w-full mx-4">
                <div className="relative bg-white rounded-[calc(1.5rem-1px)] px-6 py-8">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20}/>
                    </button>
                    <div className="text-center space-y-4">
                        <div className="text-6xl animate-pulse">
                            🤔
                        </div>
                        <h2 className="text-2xl font-bold text-red-600">
                            Something went wrong
                        </h2>
                        <p className="text-gray-600">
                            {error || 'An unexpected error occurred. Please try again later.'}
                        </p>
                        <div className="flex justify-center space-x-3">
                            <button
                                onClick={onClose}
                                className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:opacity-90 transition-opacity"
                            >
                                Try again
                            </button>
                            <button
                                onClick={onContactSupport}
                                className="mt-4 px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
                            >
                                Contact support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
