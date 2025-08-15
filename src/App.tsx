import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {JobSearchForm} from './components/JobSearchForm';
import {Unsubscribe} from "./pages/Unsubscribe.tsx";
import {UnsubscribeError} from "./pages/UnsubscribeError.tsx";
import {UnsubscribeHandler} from "./pages/UnsubscribeHandler.tsx";
import {ContactUs} from "./components/ContactUs.tsx";
import {TermsOfUse} from "./components/TermsOfUse.tsx";
import Blog from './pages/Blog';

function App() {
    return (
        <Routes>
            <Route path="/" element={<JobSearchForm/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/unsubscribe/process" element={<UnsubscribeHandler/>}/>
            <Route path="/unsubscribe" element={<Unsubscribe/>}/>
            <Route path="/unsubscribe/error" element={<UnsubscribeError/>}/>
            <Route path="/terms" element={<TermsOfUse/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
    );
}

export default App;