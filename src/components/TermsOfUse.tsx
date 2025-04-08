import React from 'react';
import {ArrowLeft, Bot} from 'lucide-react';
import {Button} from '../components/ui/Button.tsx';
import {Link} from 'react-router-dom';

export const TermsOfUse: React.FC = () => {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-left space-y-8">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-indigo-50">
                            <Bot className="w-8 h-8 text-indigo-600"/>
                        </div>
                        <div>
                            <h1 className="font-outfit text-3xl font-bold text-gray-900">
                                Terms of Use
                            </h1>
                            <p className="text-gray-500">
                                Last updated: April 8, 2025
                            </p>
                        </div>
                    </div>

                    {/* Introduction */}
                    <div className="prose prose-indigo max-w-none">
                        <p className="text-gray-700 text-lg">
                            Please read these Terms of Use carefully before using your job finder. By accessing or using
                            our service, you agree to be bound by these terms.
                        </p>
                    </div>

                    {/* Terms Section */}
                    <div className="space-y-6">
                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-700">
                                By accessing or using your job finder, you agree to be bound by these Terms of Use and
                                all applicable laws and regulations. If you do not agree with any of these terms, you
                                are prohibited from using our service.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                2. Service Description
                            </h2>
                            <p className="text-gray-700">
                                your job finder is a web application that aggregates job listings from various online
                                sources to help users find relevant job opportunities based on their preferences. We use
                                automated tools to collect publicly available job data from across the internet.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                3. User Accounts and Data
                            </h2>
                            <p className="text-gray-700 mb-2">
                                When you create an account with your job finder, we collect certain personal information
                                to provide you with tailored job recommendations. We are committed to protecting your
                                privacy and handling your data responsibly.
                            </p>
                            <p className="text-gray-700">
                                We only use your data to provide and improve our service. We do not sell your personal
                                information to third parties. For more details, please refer to our Privacy Policy.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                4. Job Listings and Accuracy
                            </h2>
                            <p className="text-gray-700">
                                While we strive to provide accurate and up-to-date job listings, we cannot guarantee the
                                accuracy, completeness, or availability of any job information on our platform. Job
                                listings are collected from third-party sources, and we are not responsible for the
                                content of these listings or the actions of the employers who post them.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                5. Web Scraping Practices
                            </h2>
                            <p className="text-gray-700 mb-2">
                                your job finder collects job data through automated web scraping of publicly available
                                information. We aim to conduct our scraping activities responsibly by:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Respecting robots.txt files and website terms of service</li>
                                <li>Implementing appropriate request rates to minimize server load</li>
                                <li>Properly identifying our scraping activities through user agents</li>
                                <li>Promptly responding to opt-out requests from website owners</li>
                            </ul>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                6. Permitted Use
                            </h2>
                            <p className="text-gray-700 mb-2">
                                You are granted a limited, non-exclusive, non-transferable, and revocable license to
                                access and use your job finder for personal, non-commercial purposes. You may not:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Use the service for any illegal or unauthorized purpose</li>
                                <li>Attempt to probe, scan, or test the vulnerability of our system</li>
                                <li>Use automated tools or bots to access our service (except as expressly permitted)
                                </li>
                                <li>Interfere with or disrupt the integrity or performance of the service</li>
                                <li>Attempt to reverse engineer or access source code of our service</li>
                            </ul>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                7. Intellectual Property
                            </h2>
                            <p className="text-gray-700">
                                The your job finder service, including its code, design, logo, and content created by
                                our team, is owned by us and protected by intellectual property laws. Our service may
                                display content from third parties, including job listings, company logos, and
                                descriptions. This content belongs to its respective owners and is used for
                                informational purposes only.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                8. Disclaimer of Warranties
                            </h2>
                            <p className="text-gray-700">
                                your job finder is provided on an "as is" and "as available" basis. We make no
                                warranties, expressed or implied, regarding the reliability, availability, or accuracy
                                of our service. We do not guarantee that the service will meet your requirements or that
                                it will be error-free, secure, or uninterrupted.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                9. Limitation of Liability
                            </h2>
                            <p className="text-gray-700">
                                In no event shall your job finder, its operators, or affiliates be liable for any
                                indirect, incidental, special, consequential, or punitive damages, including without
                                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
                                from your access to or use of (or inability to access or use) the service.
                            </p>
                        </section>

                        <section className="bg-indigo-50 rounded-xl p-6">
                            <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                                10. Modifications to Terms
                            </h2>
                            <p className="text-gray-700">
                                We reserve the right to modify or replace these Terms of Use at any time. If a revision
                                is material, we will provide at least 30 days' notice prior to any new terms taking
                                effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-gray-100 rounded-xl p-6">
                        <h2 className="font-outfit text-xl font-semibold text-gray-900 mb-3">
                            Contact Us
                        </h2>
                        <p className="text-gray-700">
                            If you have any questions about these Terms of Use, please contact us at support@your job
                            finder.com.
                        </p>
                    </div>

                    {/* Return Button */}
                    <div className="pt-4">
                        <Link to="/">
                            <Button
                                variant="secondary"
                                className="!w-auto flex items-center gap-2"
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
