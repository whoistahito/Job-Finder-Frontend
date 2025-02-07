import React from 'react';
import {ArrowLeft, Bot} from 'lucide-react';
import {Button} from '../components/ui/Button.tsx';
import {Link} from 'react-router-dom';

export const ContactUs: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-8">
                    {/* Logo */}
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 mb-2">
                        <Bot className="w-8 h-8 text-indigo-600"/>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4">
                        <h1 className="font-outfit text-3xl font-bold text-gray-900">
                            Contact Us
                        </h1>
                        <p className="text-gray-600 text-lg">
                            We'd love to hear from you!
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-indigo-50 rounded-xl p-6 space-y-4 text-left">
                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            Contact Information
                        </h2>
                        <p className="text-gray-700">
                            Email: your.job.finder.app@gmail.com
                        </p>
                    </div>

                    {/* Return Button */}
                    <div className="pt-4">
                        <Link to="/">
                            <Button
                                variant="secondary"
                                className="!w-auto mx-auto"
                            >
                                <ArrowLeft className="w-4 h-4"/>
                                <span>Return to Homepage</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};
