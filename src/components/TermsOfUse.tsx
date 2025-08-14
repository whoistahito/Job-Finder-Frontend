import React from 'react';
import {Bot} from 'lucide-react';
import {Button} from './ui/Button';
import {Link} from 'react-router-dom';

export const TermsOfUse: React.FC = () => {
    return (
        <main className="page-shell">
            <div className="page-container">
                <div className="flat-section space-y-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div
                                className="h-14 w-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex items-center justify-center shadow-sm">
                                <Bot className="w-7 h-7 text-brand-600"/>
                            </div>
                            <div>
                                <h1 className="font-outfit text-3xl font-semibold tracking-tight text-gray-900">Terms of
                                    Use
                                </h1>
                                <p className="text-gray-500 text-sm mt-1">
                                    Last updated: April 8, 2025
                                </p>
                            </div>
                        </div>
                        <Link to="/">
                            <Button variant="secondary" className="!w-auto rounded-full px-6">Return</Button>
                        </Link>
                    </div>
                    {/* Unified stacked sections */}
                    <div className="stacked-sections">
                        <div className="item space-y-3">
                            <h2 className="item-title">Overview</h2>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                                Please read these Terms of Use carefully before using Your Job Finder. By accessing or
                                using our
                                service, you agree to be bound by these terms.
                            </p>
                        </div>
                        {[
                            {
                                title: '1. Acceptance of Terms',
                                body: 'By accessing or using Your Job Finder you agree to be bound by these Terms of Use and all applicable laws. If you do not agree, you are prohibited from using the service.'
                            },
                            {
                                title: '2. Service Description',
                                body: 'Your Job Finder aggregates job listings to help users discover relevant opportunities. Automated tooling collects publicly available data.'
                            },
                            {
                                title: '3. User Data',
                                body: 'We collect only necessary information to provide tailored matches. We do not sell personal data. See our privacy policy for details.'
                            },
                            {
                                title: '4. Listing Accuracy',
                                body: 'We strive for accuracy but cannot guarantee completeness or availability of third‑party listings or employer actions.'
                            },
                            {
                                title: '5. Responsible Collection',
                                body: 'We respect robots.txt, apply rate limits, identify our agents, and honor removal requests from site owners.'
                            },
                            {
                                title: '6. Permitted Use',
                                body: 'A limited, personal, non‑transferable license is granted. Prohibited: unlawful use, abuse of infrastructure, automated abuse, reverse engineering.'
                            },
                            {
                                title: '7. Intellectual Property',
                                body: 'Platform code, design and original content are owned by us. Third‑party logos and listings belong to their owners.'
                            },
                            {
                                title: '8. No Warranties',
                                body: 'Service is provided “as is” without warranties of any kind regarding reliability, availability or fitness.'
                            },
                            {
                                title: '9. Limitation of Liability',
                                body: 'We are not liable for indirect, incidental, consequential or punitive damages arising from use or inability to use the service.'
                            },
                            {
                                title: '10. Changes',
                                body: 'We may modify terms; material changes will include advance notice. Continued use after changes constitutes acceptance.'
                            },
                            {
                                title: 'Contact',
                                body: 'Questions about these terms? Email your.job.finder.app@gmail.com.'
                            },
                        ].map(s => (
                            <div key={s.title} className="item space-y-2">
                                <h3 className="item-title">{s.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed max-w-3xl">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
