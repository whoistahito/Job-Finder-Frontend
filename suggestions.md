- Skill input UX: inline auto-suggest (AI inferred next likely hard skill), frequency heatmap (subtle background tone)
  showing market demand, drag to reorder skill priority weight.
- AI assist: one-click "Infer skills from pasted CV / LinkedIn URL" (client sends text → server extracts canonical tech
  stack).
- Dynamic caps: show remaining skill slots as small fading counters (10 → 0) inside field edge instead of separate text.
- Smart grouping: cluster synonymous skills (e.g. js ↔ JavaScript) and prompt merge to reduce noise.
- Education field: AI normalization (e.g. converts informal "comp sci bachelors" → "BSc Computer Science").
- Confidence badges: after entry, display tiny model-derived relevance chips (High / Medium) user can dismiss (no
  lock-in).
- Privacy reassurance: inline micro-line under email field: "Processed locally until submit" with hover modal
  explaining.
- Progressive disclosure: hide Education until at least 1 skill entered; reveal with smooth height auto animation.
- Motion refinement: token add = scale 0.9→1 & slight shadow bloom 120ms; removal = shrink + fade 100ms (respect reduced
  motion).
- Accessibility: add aria-live polite region announcing added/removed tokens; ensure button remove label uses
  visually-hidden text.
- Error strategy: defer validation until blur or submit; show aggregate "Need at least 1 core skill" above group, not
  per token.
- Mobile ergonomics: convert token input to multi-line expanding area with Enter → token, comma support, and scroll
  locking while suggestions open.
- Suggestions sourcing: hybrid static + trending roles feed (daily cached) so user sees role-aligned suggested skills
  first.
- AI explanation transparency: tiny "Why these suggestions?" popover with plain-language attribution & opt-out toggle.
- Logo extension (career + AI): stylized node path terminating in upward arrow encapsulated by a soft shield outline;
  animate node traversal on hover.
- Onboarding shortcut: "Paste job ad you liked" → extract implied skills & role → prefill form with checkboxes to
  confirm.
- Data minimization: show strikethrough for optional fields left blank, reinforcing minimal required info philosophy.
- Favicon adaptation: when unread match exists, inner dot pulses once (no loop) on page load only.
- Analytics hygiene: local event buffering + differential privacy noise on skill frequency aggregation before sending.