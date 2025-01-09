import React from 'react';
import {AlertCircle, ArrowLeft, Bot, Mail, MessageCircle} from 'lucide-react';
import {Button} from '../components/ui/Button.tsx';
import {Link} from 'react-router-dom';

export const UnsubscribeError: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center space-y-8">
                    {/* Logo */}
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-red-50 mb-2">
                        <Bot className="w-8 h-8 text-red-600"/>
                    </div>

                    {/* Error Icon */}
                    <div className="flex justify-center">
                        <div className="p-3 rounded-full bg-red-100">
                            <AlertCircle className="w-8 h-8 text-red-600"/>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4">
                        <h1 className="font-outfit text-3xl font-bold text-gray-900">
                            Unsubscribe Failed
                        </h1>
                        <p className="text-gray-600 text-lg">
                            We encountered an issue while trying to unsubscribe your email address.
                        </p>
                    </div>

                    {/* Error Details */}
                    <div className="bg-red-50 rounded-xl p-6 space-y-4">
                        <Mail className="w-6 h-6 text-red-600 mx-auto mb-2"/>
                        <div className="space-y-4">
                            <p className="text-gray-700 font-medium">
                                Here are a few things you can try:
                            </p>
                            <ul className="text-gray-600 text-left space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="font-medium">1.</span>
                                    <span>Check if you're using the same email address you subscribed with</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-medium">2.</span>
                                    <span>Try clicking the unsubscribe link from your email again</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="font-medium">3.</span>
                                    <span>Contact our support team for immediate assistance</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Support Options */}
                    <div className="space-y-6 pt-4">
                        <div className="space-y-4">
                            <h2 className="font-outfit text-lg font-semibold text-gray-900">
                                Need Help?
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:your.job.finder.app@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5"/>
                                    <span>Contact Support</span>
                                </a>
                            </div>
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

                    {/* Footer Note */}
                    <p className="text-sm text-gray-500 pt-4">
                        If you continue experiencing issues, please email us at{' '}
                        <a href="mailto:your.job.finder.app@gmail.com"
                           className="text-red-600 hover:text-red-700 font-medium">
                            support
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
};