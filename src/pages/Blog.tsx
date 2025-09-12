import React, {useMemo, useState} from 'react';
import {Footer} from '../components/Footer';
import SEO from '../components/SEO';

// Provide structured bilingual content (no markdown) and reuse layout
const content = {
    de: {
        heroTitle: 'Schnell einen Job finden',
        heroLead: 'Pragmatische Strategien, die deine Suche beschleunigen – gestützt durch Studien & einen smarten Hebel: Qualität, Fokus und automatisiertes Monitoring statt endlosem Scrollen.',
        articleTitle: 'Wie finde ich einen Job schnell? Tipps & Tricks',
        intro: 'Um schnell einen Job zu finden, ist eine <strong>strukturierte und proaktive Herangehensweise</strong> entscheidend. Im Schnitt dauert die Suche 3–6 Monate – mit klaren Zielen, konsequentem Tagesrhythmus und intelligenter Automatisierung lässt sich das deutlich verkürzen.',
        tipsHeading: 'Praktische Tipps und Tricks',
        tips: [
            {
                t: '1. Lebenslauf & Bewerbung optimieren',
                b: 'Aktualisiere deinen Lebenslauf regelmäßig und passe ihn <em>jeder</em> Stellenanzeige an. Übernimm Schlüsselwörter aus der Ausschreibung (ATS). Schreibe ein kurzes individuelles Anschreiben mit Motivation + Passung. Begrenze dich auf Relevantes und rahme Lücken über Weiterbildung oder Projekte.',
                f: 'Tipp: Eine klare Fokus-Zeile oben steigert Merkfähigkeit.'
            },
            {
                t: '2. Netzwerken intensiv nutzen',
                b: 'Bis zu 70% der Jobs laufen über Kontakte. Aktiviere Alumni, Ex-Kollegen, Communitys. Pflege dein Profil (LinkedIn / Xing), fordere kurze Informationsgespräche an und folge Zielunternehmen.',
                f: 'Trick: Personalisiert + prägnant schreiben (Mehrwert, Fokus, Call-to-Action).'
            },
            {
                t: '3. Mehrere Kanäle parallel',
                b: 'Nutze Portale (StepStone, Indeed, LinkedIn, BA), Initiativbewerbungen und themennahe Alternativtitel. Stelle Früh-Alerts ein und bewirb dich früh (unter den ersten 100).',
                f: 'Trick: Synonyme & benachbarte Funktionsbereiche testen.'
            },
            {
                t: '4. Ziele & Organisation',
                b: 'Definiere Rolle, Branche, Region, Gehaltsband. Führe ein Board/Sheet für Status & Follow-ups. Plane tägliche Bewerbungs-Slots.',
                f: 'Trick: 5–10 qualitativ gute Bewerbungen pro Tag statt Massen-Streuung.'
            },
            {
                t: '5. Weiterbildung & Aktivität',
                b: 'Kurse (Coursera, Udemy, mein-now.de) schließen Skill-Gaps & zeigen Lernbereitschaft. Projekte oder Ehrenamt halten dich sichtbar & liefern Gesprächsstoff.',
                f: 'Trick: Wöchentlich ein sichtbares Mini-Resultat posten.'
            },
            {
                t: '6. Vorstellungsgespräche',
                b: 'Übe häufige Fragen, sammle 4–6 Impact-Stories (Problem → Aktion → Ergebnis), kleide dich passend & sende eine Dankesnachricht (1 konkrete Referenz auf das Gespräch).',
                f: 'Trick: Reverse-Fragen zeigen Analysefähigkeit & Priorisierung.'
            },
            {
                t: '7. Mit Absagen umgehen',
                b: 'Neutral annehmen, Lernpunkte extrahieren und weiter senden, während du wartest. Momentum ist ein eigenständiger Erfolgsfaktor.',
                f: 'Trick: Standardisiertes Feedback-Template parat halten.'
            },
            {
                t: '8. Energie & Rhythmus',
                b: 'Fokus-Blöcke vormittags für Outbound / Bewerbungen – Nachmittags Lernen & Projekte. Kurze Pausen verhindern kognitive Erosion.',
                f: 'Trick: 2×45 Minuten Deep Work + sichtbare Pipeline (= Dopamin durch Fortschritt).'
            }
        ],
        studiesHeading: 'Was sagen die Studien?',
        studies: [
            {
                t: 'Zielorientierung & Strategien',
                d: 'Eine <strong>lernorientierte Haltung</strong> fördert fokussierte + explorative Suchstrategien → mehr Gespräche, Angebote & bessere Jobqualität. Chaotische (haphazard) Muster reduzieren Chancen. Selbstkontrolle verstärkt positive Effekte – besonders in schwierigen Märkten.'
            },
            {
                t: 'Karriereanpassungsfähigkeit',
                d: 'Hohe Adaptabilität (Planung, Selbstvertrauen) → fokussierte Strategien liefern weniger, aber passendere Angebote (höhere Zufriedenheit & Bindung). Rein explorativ ohne Fokus kann Qualität mindern.'
            },
            {
                t: 'Netzwerken als Hebel',
                d: 'Networking bleibt Top-Kanal: schnellere Einstiege, höherer Fit. Digitale Plattformen erleichtern gezielte Ansprache & erhöhen Trefferquote.'
            },
            {
                t: 'Selbstregulierung & Qualität',
                d: 'Reflexion + emotionale Regulation + klare Messgrößen führen zu besseren Outcomes (Zufriedenheit, geringere Wechselintention). Qualität &gt; Menge.'
            }
        ],
        studiesSummary: 'Zusammenfassend: <strong>Qualitativ hochwertige Bewerbungen + aktive Netzwerke + strukturiertes Monitoring</strong> beschleunigen & verbessern Ergebnisse. Passe Nuancen an Branche & Erfahrungslevel an.',
        checklistHeading: 'Sofort-Checkliste',
        checklist: [
            'Fokus-Zeile + aktualisierter CV', '5–10 qualifizierte Bewerbungen heute', '3 neue Netzwerk-Kontakte aktiviert', 'Alerts sauber konfiguriert', 'Mindestens 1 Lernmodul / Projekt-Slice', '4 Impact-Stories formuliert', 'Monitoring automatisiert'
        ],
        asideTitle: 'Weniger Rauschen. Mehr Momentum.',
        asideBody: 'Manuell 20 Quellen scannen frisst Fokus. Ein schlanker semantischer Monitor, der nur echte, passende Rollen bündelt und dir höchstens eine prägnante E‑Mail pro Tag liefert, schafft kognitive Entlastung. So investierst du Energie dort, wo Rendite entsteht: Gespräche, Vorbereitung, Portfolio.',
        ctaPrimary: 'Profil aktualisieren ↗',
        asideCTA: 'Kostenlos Kriterien schärfen ↗',
        footerNote: 'Bleib konsequent – automatisiere wiederholbare Schritte, sobald sie standardisiert sind. Qualität × System × Entlastung.'
    },
    en: {
        heroTitle: 'Find a Job Fast',
        heroLead: 'Pragmatic strategies backed by research – cut search time with quality, focus and automated monitoring instead of endless scrolling.',
        articleTitle: 'How to Find a Job Fast: Tips & Strategies',
        intro: 'To land a role faster you need a <strong>structured, proactive approach</strong>. Average searches take 3–6 months—clear positioning, daily rhythm and intelligent automation can compress that sharply.',
        tipsHeading: 'Practical Tips & Tactics',
        tips: [
            {
                t: '1. Optimize CV & Application',
                b: 'Keep your CV current and tailor it to <em>each</em> posting. Mirror keywords (ATS). Write a concise, specific cover note (motivation + fit). Limit to the relevant; frame gaps with learning or projects.',
                f: 'Tip: A crisp positioning line at the top improves recall.'
            },
            {
                t: '2. Leverage Networking Deeply',
                b: 'Up to 70% of roles move through contacts. Activate alumni, ex‑colleagues, communities. Maintain LinkedIn / Xing, request short info chats and follow target companies.',
                f: 'Trick: Personal, concise outreach (value, focus, soft CTA).'
            },
            {
                t: '3. Parallel Multi‑Channel Search',
                b: 'Use boards (LinkedIn, Indeed, local agency), targeted speculative outreach and adjacent titles. Set early alerts; apply early (ideally in first 100).',
                f: 'Trick: Test synonyms & adjacent function areas.'
            },
            {
                t: '4. Goals & Organisation',
                b: 'Define role, industry, geography, comp band. Track status + follow‑ups in a sheet/board. Block daily application time.',
                f: 'Trick: 5–10 high‑quality applications per day beats mass blasting.'
            },
            {
                t: '5. Upskilling & Activity',
                b: 'Courses (Coursera, Udemy, local platforms) close gaps & signal growth. Projects or volunteering keep you visible & fuel conversations.',
                f: 'Trick: Ship one visible micro outcome weekly.'
            },
            {
                t: '6. Interview Preparation',
                b: 'Rehearse common questions, prep 4–6 impact stories (Problem → Action → Result), dress context‑appropriate & send a thank‑you with one tailored reference.',
                f: 'Trick: Reverse questions show analysis & priority thinking.'
            },
            {
                t: '7. Handling Rejection',
                b: 'Stay neutral, extract learning, keep sending while waiting. Momentum itself is a success driver.',
                f: 'Trick: Use a small feedback template to lower friction.'
            },
            {
                t: '8. Energy & Cadence',
                b: 'AM deep blocks for outreach / applications – PM learning & projects. Short breaks prevent cognitive erosion.',
                f: 'Trick: 2×45 min deep work + visible pipeline (progress dopamine).'
            }
        ],
        studiesHeading: 'What Research Shows',
        studies: [
            {
                t: 'Goal Orientation & Strategy',
                d: 'A <strong>learning orientation</strong> encourages structured + exploratory tactics → more conversations, offers & better job quality. Chaotic “haphazard” patterns reduce odds. Self‑regulation amplifies positives—especially in tough markets.'
            },
            {
                t: 'Career Adaptability',
                d: 'High adaptability (planning, self‑efficacy) → focused strategies produce fewer but better‑fit offers (higher satisfaction & retention). Pure exploration without focus can dilute quality.'
            },
            {
                t: 'Networking Leverage',
                d: 'Networking remains top channel: faster entry, higher fit. Digital platforms enable targeted reach & raise hit rate.'
            },
            {
                t: 'Self‑Regulation & Quality',
                d: 'Reflection + emotional regulation + clear metrics drive better outcomes (satisfaction, lower turnover intent). Quality &gt; quantity.'
            }
        ],
        studiesSummary: 'In short: <strong>High‑quality tailored applications + active networks + structured monitoring</strong> accelerate and improve outcomes. Adjust nuances by industry and seniority.',
        checklistHeading: 'Instant Checklist',
        checklist: [
            'Positioning line + updated CV', '5–10 qualified applications today', '3 new network contacts activated', 'Alerts tuned & noise reduced', 'At least 1 learning module / project slice', '4 impact stories articulated', 'Monitoring automated'
        ],
        asideTitle: 'Less Noise. More Momentum.',
        asideBody: 'Manual scanning across 20 sources drains focus. A lean semantic monitor that consolidates only real, relevant roles and sends at most one concise email per day frees cognition. You reinvest energy where ROI compounds: conversations, prep, portfolio.',
        ctaPrimary: 'Update profile ↗',
        asideCTA: 'Refine criteria free ↗',
        footerNote: 'Stay consistent—automate repeatable steps once standardized. Quality × System × Leverage.'
    }
};

export const Blog: React.FC = () => {
    const autoLang = useMemo<'de' | 'en'>(() => (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en'), []);
    const [lang, setLang] = useState<'de' | 'en'>(autoLang);
    const c = content[lang];
    const firstCol = c.tips.slice(0, 4);
    const secondCol = c.tips.slice(4);
    return (
        <main className="soft-ui min-h-screen flex flex-col" lang={lang}>
            <SEO
                title={lang === 'de' ? `${c.heroTitle} — Your Job Finder` : `${c.heroTitle} — Your Job Finder`}
                description={lang === 'de' ? c.heroLead : c.heroLead}
                url={`https://yourjobfinder.website/blog`}
                image={`https://yourjobfinder.website/src/assets/J-Puzzle-180.png`}
                keywords={`job search, job tips, job finder, career, your job finder`}
            />
            {/* Hero */}
            <section className="relative border-b border-gray-300/60 dot-grid-bg overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-24">
                    <div className="max-w-4xl animate-fade-in-up">
                        <h1 className="heading-xl text-gray-900">{c.heroTitle}</h1>
                        <p className="mt-8 subcopy max-w-2xl" dangerouslySetInnerHTML={{__html: c.heroLead}}/>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="/" className="minimal-btn text-xs px-6 py-2">{c.ctaPrimary}</a>
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-gray-500">
                                <button onClick={() => setLang('de')}
                                        className={`px-3 py-1 rounded-full border text-[11px] ${lang === 'de' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-400/60 hover:border-gray-600'}`}>DE
                                </button>
                                <button onClick={() => setLang('en')}
                                        className={`px-3 py-1 rounded-full border text-[11px] ${lang === 'en' ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-400/60 hover:border-gray-600'}`}>EN
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Article */}
            <div className="relative w-full -mt-16 pb-24">
                <div className="max-w-6xl mx-auto px-6">
                    <article className="panel p-8 md:p-14 space-y-14" aria-labelledby="article-title">
                        <header className="space-y-6">
                            <h2 id="article-title"
                                className="font-outfit text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-gray-900">{c.articleTitle}</h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl"
                               dangerouslySetInnerHTML={{__html: c.intro}}/>
                        </header>
                        {/* Tips */}
                        <section className="space-y-6" aria-labelledby="sec-tipps">
                            <h3 id="sec-tipps"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{c.tipsHeading}</h3>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-5">
                                    {firstCol.map(item => (
                                        <div key={item.t}>
                                            <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">{item.t}</h4>
                                            <p className="text-sm md:text-base leading-relaxed text-gray-700"
                                               dangerouslySetInnerHTML={{__html: item.b}}/>
                                            <p className="text-xs text-gray-500 mt-2">{item.f}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-5">
                                    {secondCol.map(item => (
                                        <div key={item.t}>
                                            <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">{item.t}</h4>
                                            <p className="text-sm md:text-base leading-relaxed text-gray-700"
                                               dangerouslySetInnerHTML={{__html: item.b}}/>
                                            <p className="text-xs text-gray-500 mt-2">{item.f}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        {/* Studies */}
                        <section className="space-y-6" aria-labelledby="sec-studies">
                            <h3 id="sec-studies"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{c.studiesHeading}</h3>
                            <div className="space-y-8">
                                {c.studies.map(s => (
                                    <div key={s.t}
                                         className="rounded-xl border border-gray-300/70 bg-white p-6 space-y-3">
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600">{s.t}</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700"
                                           dangerouslySetInnerHTML={{__html: s.d}}/>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-gray-700"
                               dangerouslySetInnerHTML={{__html: c.studiesSummary}}/>
                        </section>
                        {/* Checklist */}
                        <section className="space-y-6" aria-labelledby="sec-checklist">
                            <h3 id="sec-checklist"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">{c.checklistHeading}</h3>
                            <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
                                {c.checklist.map(item => (
                                    <li key={item}
                                        className="flex items-start gap-3 text-sm md:text-base text-gray-700"><span
                                        className="mt-1 inline-block w-2 h-2 rounded-full bg-gray-900"/> {item}</li>
                                ))}
                            </ul>
                        </section>
                        {/* Aside */}
                        <aside className="mt-4 p-7 rounded-2xl bg-gray-900 text-white space-y-4"
                               aria-label="Automation note">
                            <h3 className="text-lg font-medium">{c.asideTitle}</h3>
                            <p className="text-sm leading-relaxed text-gray-200"
                               dangerouslySetInnerHTML={{__html: c.asideBody}}/>
                            <a href="/"
                               className="inline-flex rounded-full bg-white text-gray-900 text-xs font-medium px-6 py-2 hover:bg-gray-100 transition">{c.asideCTA}</a>
                        </aside>
                        <footer className="pt-8 border-t border-gray-200/70">
                            <p className="text-sm text-gray-600">{c.footerNote}</p>
                        </footer>
                    </article>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export default Blog;
