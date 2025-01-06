import React from 'react';
import { Header } from './components/Header';
import { JobSearchForm } from './components/JobSearchForm';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16">
        <Header />
        <JobSearchForm />
      </div>
    </main>
  );
}

export default App;