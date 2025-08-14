import React, {useEffect, useRef} from 'react';
import {Input} from './ui/Input';
import {Button} from './ui/Button';
import {Select} from './ui/Select';
import {SuccessPopup} from './ui/SuccessPopup';
import {ErrorPopup} from './ui/ErrorPopup';
import {LocationInput} from './ui/LocationInput';
import {useJobSearch} from '../hooks/useJobSearch';

export const JobSearchForm: React.FC = () => {
  const {
    formData,
    formErrors,
    isSubmitting,
    error,
    showSuccessPopup,
    setShowSuccessPopup,
    showErrorPopup,
    setShowErrorPopup,
    suggestions,
    showSuggestions,
    suggestionsRef,
    navigate,
    handleLocationInput,
    handleSuggestionClick,
    handleSubmit,
    handleInputChange,
    handleBlur,
    touched
  } = useJobSearch();

    const stackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!stackRef.current) return;
        const cards = Array.from(stackRef.current.querySelectorAll('.stack-card')) as HTMLElement[];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    el.classList.add('is-active');
                } else {
                    el.classList.remove('is-active');
                }
            });
        }, {threshold: 0.55});
        cards.forEach(c => observer.observe(c));
        return () => observer.disconnect();
    }, []);

  return (
      <main className="min-h-screen flex flex-col soft-ui">
        {/* Success Popup */}
        <SuccessPopup
            show={showSuccessPopup}
            onClose={() => setShowSuccessPopup(false)}
        />
        {/* Error Popup */}
        <ErrorPopup
            show={showErrorPopup}
            onClose={() => setShowErrorPopup(false)}
            error={error}
            onContactSupport={() => navigate('/contact')}
        />
          {/* Hero Section */}
          <section className="relative border-b border-gray-300/60 dot-grid-bg overflow-hidden">
              <div className="dot-cluster"/>
              <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 md:pb-40">
                  <div className="max-w-4xl animate-fade-in-up">
                      <h1 className="heading-xl text-gray-900">Let us find your job</h1>
                      <p className="mt-10 subcopy max-w-2xl">Tell us your skills, the role and location you want. We
                          send at most one precise email only when a job fits.</p>
                      <div className="mt-12 flex flex-wrap gap-4">
                          <button onClick={() => {
                              const el = document.getElementById('subscription-form');
                              if (el) el.scrollIntoView({behavior: 'smooth'});
                          }} className="minimal-btn">
                              <span className="text-xs">↗</span> Get matches
                          </button>
                          <a href="#how" className="link-quiet">
                              <span>How it works</span>
                              <span className="arrow">↗</span>
                          </a>
                      </div>
                  </div>
          </div>
          </section>
          {/* Form Section */}
          <div className="relative w-full -mt-20 md:-mt-28 pb-20" id="subscription-form">
              <div className="max-w-6xl mx-auto px-6">
                  <div className="panel p-10 md:p-14">
                      <form onSubmit={handleSubmit} className="form-grid">
                          <div className="md:col-span-1">
                              <Input label="Role" variant="minimal" type="text" value={formData.position}
                                     onChange={handleInputChange('position')} onBlur={handleBlur('position')}
                                     placeholder="Frontend Developer" required
                                     error={touched.position ? formErrors.position : undefined}/>
                          </div>
                          <div className="md:col-span-1">
                              <Select label="Job Type" variant="minimal" value={formData.jobType}
                                      onChange={handleInputChange('jobType')} onBlur={handleBlur('jobType')} required
                                      error={touched.jobType ? formErrors.jobType : undefined}
                                      options={[{value: '', label: 'Select job type'}, {
                                          value: 'full-time',
                                          label: 'Full Time'
                                      }, {value: 'part-time', label: 'Part Time'}, {
                                          value: 'working-student',
                                          label: 'Working Student'
                                      }, {value: 'internship', label: 'Internship'}]}/>
                          </div>
                          <div className="md:col-span-1">
                              <LocationInput variant="minimal" value={formData.location} onChange={handleLocationInput}
                                             onBlur={handleBlur('location')} suggestions={suggestions}
                                             showSuggestions={showSuggestions} suggestionsRef={suggestionsRef}
                                             onSuggestionClick={handleSuggestionClick}
                                             error={touched.location ? formErrors.location : undefined}/>
                          </div>
                          <div className="md:col-span-1">
                              <Input label="Email" variant="minimal" type="email" value={formData.email}
                                     onChange={handleInputChange('email')} onBlur={handleBlur('email')}
                                     placeholder="you@domain.com" required
                                     error={touched.email ? formErrors.email : undefined}/>
                          </div>
                          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-6 pt-4">
                              <Button type="submit" isLoading={isSubmitting}
                                      className="rounded-full !w-auto minimal-btn bg-gray-900 hover:bg-black px-10 py-3">
                                  Start monitoring
                              </Button>
                              <p className="text-xs text-gray-500">One concise email per day at most—only if a match
                                  exists.</p>
                          </div>
              </form>
                  </div>
                  <div id="how" className="mt-28 space-y-12">
                      {/* Scroll stack cards */}
                      <div ref={stackRef} className="stack-wrapper">
                          <div className="stack-spacer">
                              <article className="stack-card" style={{'--i': 1} as React.CSSProperties}>
                                  <h2>How it works</h2>
                                  <div className="stack-line"/>
                                  <div className="stack-grid">
                              {[
                                  {t: 'Define', d: 'Tell us the role & boundaries that matter.'},
                                  {t: 'Monitor', d: 'We continuously watch credible sources.'},
                                  {t: 'Filter', d: 'Noise & weak matches are removed upstream.'},
                                  {t: 'Deliver', d: 'Only a concise email when a real fit appears.'},
                              ].map(s => (
                                  <div key={s.t} className="stack-grid-item">
                                      <h3>{s.t}</h3>
                                      <p>{s.d}</p>
                                  </div>
                              ))}
                                  </div>
                              </article>
                              <article className="stack-card" style={{'--i': 2} as React.CSSProperties}>
                                  <h2>Why us</h2>
                                  <div className="stack-line"/>
                                  <div className="stack-benefits">
                                      {[
                                          {
                                              title: 'Your Privacy Matters',
                                              desc: 'Your data stays private. We never sell or rent your personal information.'
                                          },
                                          {
                                              title: 'AI‑Powered Matching',
                                              desc: 'Semantics > keywords: We look at job titles and requirements to find a job that fits.'
                                          },
                                          {
                                              title: 'Daily Email Updates',
                                              desc: 'At most one clean email per day, No Spam or Ads.'
                                          },
                                          {
                                              title: 'Easy Unsubscribe',
                                              desc: 'Instant one-click unsubscribe in every email. Without any Questions.'
                                          },
                                      ].map((b, i) => (
                                          <div key={b.title} className="stack-benefit">
                                              <div className="stack-badge">{String(i + 1).padStart(2, '0')}</div>
                                              <div>
                                                  <h3>{b.title}</h3>
                                                  <p>{b.desc}</p>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </article>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* Footer */}
          <footer className="mt-auto text-center text-gray-500 py-10 border-t border-gray-300 bg-[#f5f4f8]">
              <p className="text-sm">&copy; {new Date().getFullYear()} Your Job Finder</p>
              <div className="flex justify-center space-x-5 mt-3 text-sm">
                  <a href="/contact" className="hover:text-gray-700">Contact</a>
                  <a href="/terms" className="hover:text-gray-700">Terms</a>
          </div>
        </footer>
      </main>
  );
};
