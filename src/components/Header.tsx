import React from 'react';
import {Bot} from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center space-y-6">
      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-indigo-100 shadow-lg shadow-indigo-500/10 mb-2">
        <Bot className="w-8 h-8 text-indigo-600" />
      </div>
      <h1 className="font-outfit text-5xl md:text-6xl font-black tracking-tight">
        <span className="inline-block animate-text bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600 bg-[200%_auto] bg-clip-text text-transparent">
          Our Bot Finds the Jobs,
        </span>
        <br />
        <span className="text-gray-900">You Check Your Emails</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Our bot finds jobs that match your criteria and emails them to you every day.
          Dont need to search for jobs anymore!
      </p>
    </div>
  );
}