import React from 'react';
import {ArrowLeft, Bot, Mail, MessageCircle} from 'lucide-react';
import {Button} from '../components/ui/Button.tsx';

export const Unsubscribe: React.FC = () => {
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
                            You've Been Unsubscribed
                        </h1>
                        <p className="text-gray-600 text-lg">
                            We're sorry to see you go! Your email has been successfully removed from our job alerts.
                        </p>
                    </div>

                    {/* Confirmation Details */}
                    <div className="bg-indigo-50 rounded-xl p-6 space-y-2">
                        <Mail className="w-6 h-6 text-indigo-600 mx-auto mb-2"/>
                        <p className="text-gray-600">
                            You will no longer receive job matching emails from Your job Finder.
                        </p>
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
                                    className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5"/>
                                    <span>Contact Support</span>
                                </a>
                                {/*<a*/}
                                {/*  href="/faq"*/}
                                {/*  className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"*/}
                                {/*>*/}
                                {/*  <ExternalLink className="w-5 h-5" />*/}
                                {/*  <span>Visit FAQ</span>*/}
                                {/*</a>*/}
                            </div>
                        </div>

                        {/* Return Button */}
                        <div className="pt-4">
                            <Button
                                variant="secondary"
                                onClick={() => window.location.href = '/'}
                                className="!w-auto mx-auto"
                            >
                                <ArrowLeft className="w-4 h-4"/>
                                <span>Return to Homepage</span>
                            </Button>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="text-sm text-gray-500 pt-4">
                        Changed your mind? You can always{' '}
                        <a href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
                            add job search again
                        </a>
                        {' '}to receive job matches.
                    </p>
                </div>
            </div>
        </main>
    );
};