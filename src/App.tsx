import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
import {JobSearchForm} from './components/JobSearchForm';
import {Unsubscribe} from "./pages/Unsubscribe.tsx";
import {UnsubscribeError} from "./pages/UnsubscribeError.tsx";
import {UnsubscribeHandler} from "./pages/UnsubscribeHandler.tsx";
import {Features} from "./components/Features";
import {ContactUs} from "./components/ContactUs.tsx";
import {TermsOfUse} from "./components/TermsOfUse.tsx";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
                        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-12 md:space-y-16">
                            <Header/>
                            <JobSearchForm/>
                            <Features/>
                        </div>
                        <footer className="text-center text-gray-500 py-4">
                            <p>&copy; {new Date().getFullYear()} Your Job Finder. All Rights Reserved.</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <a href="/contact" className="hover:text-gray-700">Contact Us</a>
                                <a href="/terms" className="hover:text-gray-700">Terms of Use</a>
                            </div>
                        </footer>
                    </main>
                }
            />
            <Route path="/unsubscribe/process" element={<UnsubscribeHandler/>}/>
            <Route path="/unsubscribe" element={<Unsubscribe/>}/>
            <Route path="/unsubscribe/error" element={<UnsubscribeError/>}/>
            <Route path="/terms" element={<TermsOfUse/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
    );
}

export default App;