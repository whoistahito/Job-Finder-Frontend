import React from 'react';
import {X} from 'lucide-react';

interface SuccessPopupProps {
    show: boolean;
    onClose: () => void;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({show, onClose}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm animate-fade-in-up">
                <div className="surface-card relative p-7 md:p-8">
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute top-3.5 right-3.5 inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-white/70 transition"
                    >
                        <X size={16}/>
                    </button>
                    <div className="text-center space-y-5">
                        <div
                            className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 text-brand-600 shadow-sm">
                            <span className="text-2xl leading-none">✓</span>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold tracking-tight text-gray-900">Subscription
                                Confirmed</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">We will start sending you curated job
                                matches. You can unsubscribe at any time.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="pill-btn bg-gray-900 text-white hover:bg-black transition-colors px-5 py-2.5 rounded-full text-sm font-medium"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
