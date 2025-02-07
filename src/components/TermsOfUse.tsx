import React from 'react';
import {ArrowLeft, Bot} from 'lucide-react';
import {Button} from '../components/ui/Button.tsx';
import {Link} from 'react-router-dom';

export const TermsOfUse: React.FC = () => {
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
                            Terms of Use
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Please read these Terms of Use carefully before using Your Job Finder.
                        </p>
                    </div>

                    {/* Terms */}
                    <div className="bg-indigo-50 rounded-xl p-6 space-y-4 text-left">
                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700">
                            By accessing and using Your Job Finder, you agree to be bound by these Terms of Use and all
                            applicable laws and regulations.
                            If you do not agree with any of these terms, you are prohibited from using or accessing this
                            site.
                        </p>

                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            2. Use License
                        </h2>
                        <p className="text-gray-700">
                            Permission is granted to a limited, non-exclusive, non-transferable, and revocable license
                            to access and use the service for personal, non-commercial purposes only.
                            - You may not use the service for any illegal or unauthorized purpose.
                        </p>

                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            3. Data Usage
                        </h2>
                        <p className="text-gray-700">
                            We do not use your data for any purposes. Your privacy is important to us.
                        </p>

                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            4. Disclaimer
                        </h2>
                        <p className="text-gray-700">
                            The materials on Your Job Finder's website are provided on an 'as is' basis.
                            Your Job Finder makes no warranties, expressed or implied, and hereby disclaims and negates
                            all other warranties
                            including, without limitation, implied warranties or conditions of merchantability,
                            fitness for a particular purpose, or non-infringement of intellectual property or other
                            violation of rights.
                        </p>

                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            5. Limitations
                        </h2>
                        <p className="text-gray-700">
                            In no event shall Your Job Finder or its suppliers be liable for any damages (including,
                            without limitation, damages for loss of data or profit, or due to business interruption)
                            arising out of the use
                            or inability to use the materials on Your Job Finder's website, even if Your Job Finder or a
                            Your Job Finder authorized representative has been notified orally or in writing of the
                            possibility of such damage.
                        </p>

                        <h2 className="font-outfit text-xl font-semibold text-gray-900">
                            6. Bots and Scraping
                        </h2>
                        <p className="text-gray-700">
                            The use of bots or automated systems to access or use Your Job Finder is strictly
                            prohibited.
                            We utilize public data and scrape the internet to find job opportunities for our users.
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
