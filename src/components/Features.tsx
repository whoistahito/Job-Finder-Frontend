import React from 'react';
import {Brain, Clock, XCircle} from 'lucide-react';

export const Features: React.FC = () => {
    return (
        <div className="mt-8 flex justify-center">
            <div className="flex flex-col md:flex-row items-center">
                <div
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-neon-pink/10 shadow-sm mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex-1">
                    <div className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-50 mb-2">
                        <Clock className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="font-semibold text-gray-700">Daily Email Updates</h3>
                    <p className="text-gray-600 text-sm">Receive job matches as they are published on a daily basis.</p>
                </div>
                <div
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-neon-pink/10 shadow-sm mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex-1">
                    <div className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-50 mb-2">
                        <Brain className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="font-semibold text-gray-700">AI-Powered Matching</h3>
                    <p className="text-gray-600 text-sm">Our bot analyzes job titles and descriptions to find the best
                        match.</p>
                </div>
                <div
                    className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-neon-pink/10 shadow-sm w-full md:w-auto flex-1">
                    <div className="inline-flex items-center justify-center p-2 rounded-xl bg-blue-50 mb-2">
                        <XCircle className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="font-semibold text-gray-700">Easy Unsubscribe</h3>
                    <p className="text-gray-600 text-sm">Unsubscribe with a single click, no hassle.</p>
                </div>
            </div>
        </div>
    );
};
