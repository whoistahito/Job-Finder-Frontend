import React from 'react';
import {X} from 'lucide-react';

interface SuccessPopupProps {
    show: boolean;
    onClose: () => void;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({show, onClose}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
            <div
                className="animate-bounce-in bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 p-0.5 rounded-3xl shadow-xl shadow-neon-pink/30 max-w-md w-full mx-4">
                <div className="relative bg-white rounded-[calc(1.5rem-1px)] px-6 py-8">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20}/>
                    </button>
                    <div className="text-center space-y-4">
                        <div className="text-6xl animate-bounce">
                            🎉
                        </div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                            Congratulations!
                        </h2>
                        <p className="text-gray-600">
                            Your job search request has been submitted successfully. We'll send you matching job
                            opportunities to your email soon!
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-4 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
