import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
import {JobSearchForm} from './components/JobSearchForm';
import {Unsubscribe} from "./pages/Unsubscribe.tsx";
import {UnsubscribeError} from "./pages/UnsubscribeError.tsx";

function App() {
  return (
      <Routes>
          <Route
              path="/"
              element={
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16">
        <Header />
        <JobSearchForm />
      </div>
    </main>
              }
          />
          <Route path="/unsubscribe" element={<Unsubscribe/>}/>
          <Route path="/unsubscribeError" element={<UnsubscribeError/>}/>
      </Routes>
  );
}

export default App;