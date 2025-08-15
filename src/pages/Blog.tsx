import React from 'react';
import {Footer} from '../components/Footer';

export const Blog: React.FC = () => {
    return (
        <main className="soft-ui min-h-screen flex flex-col">
            {/* Hero */}
            <section className="relative border-b border-gray-300/60 dot-grid-bg overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-24">
                    <div className="max-w-4xl animate-fade-in-up">
                        <h1 className="heading-xl text-gray-900">Schnell einen Job finden</h1>
                        <p className="mt-8 subcopy max-w-2xl">Pragmatische Strategien, die deine Suche beschleunigen –
                            gestützt durch Studien & einen smarten Hebel: Qualität, Fokus und automatisiertes Monitoring
                            statt endlosem Scrollen.</p>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <a href="/" className="minimal-btn text-xs px-6 py-2">Profil aktualisieren ↗</a>
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
                                className="font-outfit text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-gray-900">Wie
                                finde ich einen Job schnell? Tipps & Tricks</h2>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl">Um schnell einen
                                Job zu finden, ist eine <strong>strukturierte und proaktive
                                    Herangehensweise</strong> entscheidend. Im Schnitt dauert die Suche 3–6 Monate – mit
                                klaren Zielen, konsequentem Tagesrhythmus und intelligenter Automatisierung lässt sich
                                das deutlich verkürzen.</p>
                        </header>

                        <section className="space-y-6" aria-labelledby="sec-tipps">
                            <h3 id="sec-tipps"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Praktische
                                Tipps und Tricks</h3>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-5">
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">1.
                                            Lebenslauf & Bewerbung optimieren</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Aktualisiere
                                            deinen Lebenslauf regelmäßig und passe ihn <em>jeder</em> Stellenanzeige an.
                                            Übernimm Schlüsselwörter aus der Ausschreibung (ATS). Schreibe ein kurzes
                                            individuelles Anschreiben mit Motivation + Passung. Begrenze dich auf
                                            Relevantes und rahme Lücken über Weiterbildung oder Projekte.</p>
                                        <p className="text-xs text-gray-500 mt-2">Tipp: Eine klare Fokus-Zeile oben
                                            steigert Merkfähigkeit.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">2.
                                            Netzwerken intensiv nutzen</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Bis zu 70% der
                                            Jobs laufen über Kontakte. Aktiviere Alumni, Ex-Kollegen, Communitys. Pflege
                                            dein Profil (LinkedIn / Xing), fordere kurze Informationsgespräche an und
                                            folge Zielunternehmen.</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: Personalisiert + prägnant
                                            schreiben (Mehrwert, Fokus, Call-to-Action).</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">3.
                                            Mehrere Kanäle parallel</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Nutze Portale
                                            (StepStone, Indeed, LinkedIn, BA), Initiativbewerbungen und themennahe
                                            Alternativtitel. Stelle Früh-Alerts ein und bewirb dich früh (unter den
                                            ersten 100).</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: Synonyme & benachbarte
                                            Funktionsbereiche testen.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">4.
                                            Ziele & Organisation</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Definiere
                                            Rolle, Branche, Region, Gehaltsband. Führe ein Board/Sheet für Status &
                                            Follow-ups. Plane tägliche Bewerbungs-Slots.</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: 5–10 qualitativ gute
                                            Bewerbungen pro Tag statt Massen-Streuung.</p>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">5.
                                            Weiterbildung & Aktivität</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Kurse
                                            (Coursera, Udemy, mein-now.de) schließen Skill-Gaps & zeigen
                                            Lernbereitschaft. Projekte oder Ehrenamt halten dich sichtbar & liefern
                                            Gesprächsstoff.</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: Wöchentlich ein sichtbares
                                            Mini-Resultat posten.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">6.
                                            Vorstellungsgespräche</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Übe häufige
                                            Fragen, sammle 4–6 Impact-Stories (Problem → Aktion → Ergebnis), kleide dich
                                            passend & sende eine Dankesnachricht (1 konkrete Referenz auf das
                                            Gespräch).</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: Reverse-Fragen zeigen
                                            Analysefähigkeit & Priorisierung.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">7.
                                            Mit Absagen umgehen</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Neutral
                                            annehmen, Lernpunkte extrahieren und weiter senden, während du wartest.
                                            Momentum ist ein eigenständiger Erfolgsfaktor.</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: Standardisiertes
                                            Feedback-Template parat halten.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600 mb-2">8.
                                            Energie & Rhythmus</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-700">Fokus-Blöcke
                                            vormittags für Outbound / Bewerbungen – Nachmittags Lernen & Projekte. Kurze
                                            Pausen verhindern kognitive Erosion.</p>
                                        <p className="text-xs text-gray-500 mt-2">Trick: 2×45 Minuten Deep Work +
                                            sichtbare Pipeline (= Dopamin durch Fortschritt).</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6" aria-labelledby="sec-studien">
                            <h3 id="sec-studien"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Was
                                sagen die Studien?</h3>
                            <div className="space-y-8">
                                <div className="rounded-xl border border-gray-300/70 bg-white p-6 space-y-3">
                                    <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600">Zielorientierung
                                        & Strategien</h4>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-700">Eine <strong>lernorientierte
                                        Haltung</strong> fördert fokussierte + explorative Suchstrategien → mehr
                                        Gespräche, Angebote & bessere Jobqualität. Chaotische (haphazard) Muster
                                        reduzieren Chancen. Selbstkontrolle verstärkt positive Effekte – besonders in
                                        schwierigen Märkten.</p>
                                </div>
                                <div className="rounded-xl border border-gray-300/70 bg-white p-6 space-y-3">
                                    <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600">Karriereanpassungsfähigkeit</h4>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-700">Hohe Adaptabilität
                                        (Planung, Selbstvertrauen) → fokussierte Strategien liefern weniger, aber
                                        passendere Angebote (höhere Zufriedenheit & Bindung). Rein explorativ ohne Fokus
                                        kann Qualität mindern.</p>
                                </div>
                                <div className="rounded-xl border border-gray-300/70 bg-white p-6 space-y-3">
                                    <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600">Netzwerken
                                        als Hebel</h4>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-700">Networking bleibt
                                        Top-Kanal: schnellere Einstiege, höherer Fit. Digitale Plattformen erleichtern
                                        gezielte Ansprache & erhöhen Trefferquote.</p>
                                </div>
                                <div className="rounded-xl border border-gray-300/70 bg-white p-6 space-y-3">
                                    <h4 className="text-sm font-medium tracking-wide uppercase text-gray-600">Selbstregulierung
                                        & Qualität</h4>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-700">Reflexion +
                                        emotionale Regulation + klare Messgrößen führen zu besseren Outcomes
                                        (Zufriedenheit, geringere Wechselintention). Qualität &gt; Menge.</p>
                                </div>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed text-gray-700">Zusammenfassend: <strong>Qualitativ
                                hochwertige Bewerbungen + aktive Netzwerke + strukturiertes
                                Monitoring</strong> beschleunigen & verbessern Ergebnisse. Passe Nuancen an Branche &
                                Erfahrungslevel an.</p>
                        </section>

                        <section className="space-y-6" aria-labelledby="sec-checklist">
                            <h3 id="sec-checklist"
                                className="font-outfit text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Sofort-Checkliste</h3>
                            <ul className="grid md:grid-cols-2 gap-4 list-none p-0 m-0">
                                {[
                                    'Fokus-Zeile + aktualisierter CV',
                                    '5–10 qualifizierte Bewerbungen heute',
                                    '3 neue Netzwerk-Kontakte aktiviert',
                                    'Alerts sauber konfiguriert',
                                    'Mindestens 1 Lernmodul / Projekt-Slice',
                                    '4 Impact-Stories formuliert',
                                    'Monitoring automatisiert'
                                ].map(item => (
                                    <li key={item}
                                        className="flex items-start gap-3 text-sm md:text-base text-gray-700"><span
                                        className="mt-1 inline-block w-2 h-2 rounded-full bg-gray-900"/> {item}</li>
                                ))}
                            </ul>
                        </section>

                        <aside className="mt-4 p-7 rounded-2xl bg-gray-900 text-white space-y-4"
                               aria-label="Hinweis zur Automatisierung">
                            <h3 className="text-lg font-medium">Weniger Rauschen. Mehr Momentum.</h3>
                            <p className="text-sm leading-relaxed text-gray-200">Manuell 20 Quellen scannen frisst
                                Fokus. Ein schlanker semantischer Monitor, der nur echte, passende Rollen bündelt und
                                dir höchstens eine prägnante E‑Mail pro Tag liefert, schafft kognitive Entlastung. So
                                investierst du Energie dort, wo Rendite entsteht: Gespräche, Vorbereitung,
                                Portfolio.</p>
                            <a href="/"
                               className="inline-flex rounded-full bg-white text-gray-900 text-xs font-medium px-6 py-2 hover:bg-gray-100 transition">Kostenlos
                                Kriterien schärfen ↗</a>
                        </aside>

                        <footer className="pt-8 border-t border-gray-200/70">
                            <p className="text-sm text-gray-600">Bleib konsequent – automatisiere wiederholbare
                                Schritte, sobald sie standardisiert sind. Qualität × System × Entlastung.</p>
                        </footer>
                    </article>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export default Blog;
