import React from 'react';
import {ArrowLeft, Bot} from 'lucide-react';
import {Button} from './ui/Button';
import {Link} from 'react-router-dom';

export const ContactUs: React.FC = () => {
    return (
        <main className="page-shell">
            <div className="page-container max-w-xl">
                <div className="flat-section text-center space-y-8">
                    <div
                        className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm">
                        <Bot className="w-7 h-7 text-brand-600"/>
                    </div>
                    <div className="space-y-3">
                        <h1 className="font-outfit text-3xl font-semibold tracking-tight text-gray-900">Contact Us</h1>
                        <p className="text-gray-600 text-base leading-relaxed">We'd love to hear from you.</p>
                    </div>
                    <div className="grid gap-4 text-left">
                        <div
                            className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-5 flex flex-col gap-1">
                            <h2 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Email</h2>
                            <p className="text-gray-800 select-all">your.job.finder.app@gmail.com</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <Link to="/">
                            <Button variant="secondary" className="!w-auto mx-auto rounded-full px-6">
                                <ArrowLeft className="w-4 h-4"/>
                                <span>Return</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};
