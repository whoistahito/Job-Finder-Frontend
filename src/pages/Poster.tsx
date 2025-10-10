import {useMemo, useRef, useState} from 'react';
import {toPng} from 'html-to-image';
import profilePic from '../assets/qr-code-lack.svg';

/**
 * Poster / Flyer preview and export page
 * - Uses the site's soft UI and dot grid aesthetic to stay on brand
 * - Shows a fixed-ratio artboard (portrait) you can export as PNG in common sizes
 */
const SIZES = [
    {key: 'social', label: 'Social Portrait (1080×1350)', w: 1080, h: 1350},
    {key: 'letter150', label: 'A5-ish Web (1240×1754)', w: 1240, h: 1754},
    {key: 'a4print', label: 'A4 Print (2480×3508)', w: 2480, h: 3508},
] as const;

export default function Poster() {
    const [sizeKey, setSizeKey] = useState<typeof SIZES[number]['key']>('social');
    const selected = useMemo(() => SIZES.find(s => s.key === sizeKey)!, [sizeKey]);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [isExporting, setIsExporting] = useState(false);
    const [imgReady, setImgReady] = useState(false);

    const exportPng = async () => {
        if (!nodeRef.current) return;
        if (!imgReady) {
            alert('Image is still loading. Please wait a moment and try again.');
            return;
        }
        setIsExporting(true);
        try {
            const dataUrl = await toPng(nodeRef.current, {
                cacheBust: true,
                pixelRatio: 1,
                width: selected.w,
                height: selected.h,
                backgroundColor: '#ffffff',
                skipFonts: true,
                style: {width: `${selected.w}px`, height: `${selected.h}px`, backgroundColor: '#ffffff'},
                onClone: (cloned: HTMLElement) => {
                    const doc = cloned.ownerDocument;
                    if (!doc) return;
                    const style = doc.createElement('style');
                    style.textContent = `*{font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif !important;}`;
                    doc.head.appendChild(style);
                    // Remove cross-origin font links if any leaked into the clone
                    doc.querySelectorAll('link[rel="stylesheet"]').forEach((lnk) => {
                        if (lnk.href.includes('fonts.googleapis.com')) lnk.parentElement?.removeChild(lnk);
                    });
                },
            } as any);
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = `jobfinder-poster-${selected.w}x${selected.h}.png`;
            a.click();
        } catch (e) {
            console.error('html-to-image export error:', e);
            alert('Export failed. Try Social size first and ensure images are loaded. Check the console for details.');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <main className="min-h-screen soft-ui px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-outfit font-semibold tracking-tight text-gray-900">Poster
                            / Flyer</h1>
                        <p className="text-sm text-gray-600 mt-2">Live preview on the left. Choose a size and export as
                            PNG.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <label className="text-xs uppercase tracking-wide text-gray-500">Size</label>
                        <select
                            className="border border-gray-300 rounded-full px-4 py-2 text-sm bg-white"
                            value={sizeKey}
                            onChange={(e) => setSizeKey(e.target.value as any)}
                        >
                            {SIZES.map(s => (
                                <option key={s.key} value={s.key}>{s.label}</option>
                            ))}
                        </select>
                        <button onClick={exportPng} disabled={isExporting || !imgReady}
                                className="rounded-full bg-gray-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-black disabled:opacity-60">
                            {isExporting ? 'Exporting…' : (!imgReady ? 'Loading image…' : 'Export PNG')}
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
                    {/* Artboard preview */}
                    <div className="w-full overflow-auto rounded-xl border border-gray-300/70 bg-white p-4">
                        <div
                            ref={nodeRef}
                            style={{
                                width: selected.w,
                                height: selected.h,
                                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif'
                            }}
                            className="relative mx-auto rounded-[28px] overflow-hidden"
                        >
                            {/* Background layers (safe for html-to-image) */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: [
                                        // subtle dot pattern (no masking)
                                        'radial-gradient(rgba(169,166,181,0.35) 0.8px, transparent 0.8px)',
                                        // brand soft glows
                                        'radial-gradient(circle at 22% 18%, rgba(99,102,241,.22), transparent 62%)',
                                        'radial-gradient(circle at 80% 70%, rgba(56,189,248,.18), transparent 70%)',
                                        // base
                                        'linear-gradient(180deg, #ffffff, #f7f7fb)'
                                    ].join(', '),
                                    backgroundSize: '14px 14px, auto, auto, auto',
                                }}
                            />

                            {/* Content */}
                            <div className="relative h-full p-[clamp(28px,4vw,48px)] flex flex-col">
                                {/* Header Row */}
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="h-14 w-14 rounded-2xl bg-white/70 ring-1 ring-white/70 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center">
                                            <span className="text-xl font-bold text-brand-600">J</span>
                                        </div>
                                        <div className="leading-tight">
                                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">Your Job
                                                Finder</p>
                                            <p className="text-sm text-gray-700">Autopilot job monitoring</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[11px] uppercase tracking-wider text-gray-500">yourjobfinder.website</p>
                                    </div>
                                </div>

                                {/* Hero */}
                                <div
                                    className="mt-[clamp(16px,2vw,24px)] flex-1 grid grid-cols-12 gap-[clamp(16px,2.2vw,26px)] items-center">
                                    <div className="col-span-7 flex flex-col gap-4">
                                        <h2 className="font-semibold tracking-[-0.02em] leading-[0.95] text-gray-900"
                                            style={{fontSize: 'clamp(44px,6.2vw,96px)'}}>
                                            Job search on autopilot
                                        </h2>
                                        <p className="text-gray-700 text-[clamp(14px,1.3vw,18px)] leading-relaxed max-w-[38ch]">
                                            Tell us your ideal role, skills and location. We scan sources continuously
                                            and email you only
                                            when a real match appears. No spam. Ever.
                                        </p>
                                        <div className="mt-2 grid grid-cols-2 gap-2 max-w-md">
                                            {["Define", "Monitor", "Filter", "Notify"].map((k, i) => (
                                                <div key={k}
                                                     className="flex items-center gap-2 rounded-xl bg-white/75 border border-gray-300/70 px-3 py-2">
                                                    <div
                                                        className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] font-medium">{String(i + 1).padStart(2, '0')}</div>
                                                    <span className="text-sm text-gray-800">{k}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Profile image */}
                                    <div className="col-span-5 flex items-center justify-center">
                                        <div className="relative">
                                            <div
                                                className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-brand-400/35 via-cyan-400/30 to-transparent blur-xl"/>
                                            <img src={profilePic} alt="Profile" onLoad={() => setImgReady(true)}
                                                 onError={() => setImgReady(false)}
                                                 className="relative rounded-[28px] w-full h-auto max-h-[520px] object-cover shadow-[0_18px_48px_-12px_rgba(0,0,0,0.25)] border border-white"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer strip */}
                                <div className="mt-[clamp(14px,2vw,28px)]">
                                    <div
                                        className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
                                    <div className="pt-3 flex items-center justify-between text-[12px] text-gray-600">
                                        <span>Privacy first · Zero spam · One‑click unsubscribe</span>
                                        <span>Scan • Match • Deliver</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notes / tips */}
                    <div className="space-y-4">
                        <div className="panel p-5">
                            <h3 className="text-sm font-medium text-gray-800">Tips</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1">
                                <li>Use Social Portrait for Instagram; A4 for printing (export may take a few
                                    seconds).
                                </li>
                                <li>You can tweak heading, copy, and badges directly in this file later.</li>
                                <li>Profile photo comes from src/assets/profile-pic.png.</li>
                            </ul>
                        </div>
                        <div className="text-xs text-gray-500">© 2025 Your Job Finder – Educational project</div>
                    </div>
                </div>
            </div>
        </main>
    );
}
