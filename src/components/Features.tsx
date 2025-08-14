import React from 'react';
import {Brain, Clock, Shield, XCircle} from 'lucide-react';

export const Features: React.FC = () => {
    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                    {icon: Shield, title: 'Privacy First', desc: 'We never sell or share your data.'},
                    {icon: Brain, title: 'Smart Matching', desc: 'We parse roles to surface high-fit leads.'},
                    {icon: Clock, title: 'Timely Updates', desc: 'Fresh opportunities delivered promptly.'},
                    {icon: XCircle, title: 'One‑Click Opt Out', desc: 'Stop emails instantly—no friction.'}
                ].map(({icon: Icon, title, desc}) => (
                    <div key={title}
                         className="group surface-card p-5 h-full transition-all duration-300 hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 flex flex-col">
                        <div
                            className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-brand-50 to-white text-brand-600 mb-4 ring-1 ring-brand-100 group-hover:from-brand-100 group-hover:to-white">
                            <Icon className="w-5 h-5"/>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1 text-sm tracking-tight">{title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed flex-1">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};