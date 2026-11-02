# Genetikon independent browser review

Reviewed 2026-11-02. Read-only review of `http://127.0.0.1:3017/genetikon/` with local Playwright Chromium; no source edits or deployment. This is a technical preview review, not approval of clinical content, translations, former centre operating details, or publication.

## Verdict and resolved finding

No unresolved consequential technical defects remain in the inspected scope after the final rebuild. Clinical content, translations and operating details remain outside this verdict.

### 1. Invalid form focus beneath the sticky mobile header — resolved quality defect

- **Original visible defect:** At `/genetikon/en/contact/`, 390 × 844, dismiss cookies and press **Send request** with the required fields empty. The browser focuses `#name`, but its top is approximately 0 px and bottom 50 px while the sticky header occupies 0–178 px. The focused field is wholly obscured, including after 1.2 seconds. The visitor cannot see the field the browser asks them to correct. Skip-to-main also scrolls the beginning of main beneath the header. At 320 px the wrapped header is taller still.
- **Likely root cause:** The entire wrapped navigation is sticky (`src/components/site-header.tsx`), while native validation/anchor scrolling has no offset for its responsive height. `ContactForm` uses browser required-field validation, which scrolls an invalid field to the viewport top.
- **Concrete correction:** Account for the actual responsive sticky-header height in focus and anchor scrolling, using a matching document scroll offset and/or field scroll margin. Ensure the first invalid input and its label remain visible after submission. A compact mobile header can additionally recover reading space, but is not necessary to solve the focus defect.
- **Fix evidence:** Repeat empty form submission at 390 and 320 px after scrolling to the submit button; focused invalid field and label must sit below the header. Verify skip link and keyboard traversal at desktop/tablet/mobile with ordinary and reduced motion.
- **Original evidence:** `.cache/critic/mobile-invalid-focus-final.png`, `.cache/critic/focus.mjs`, `.cache/critic/mobile-320-reflow.png`.
- **Independent final-build retest:** At 1366/820/390/320 px, empty submit now places the focused required field fully below the sticky header. At 390 px the field starts at 447.875 px, below the 178 px header; at 320 px it starts at 447.75 px, below the 214 px header. The label and native validation prompt are visible. Reduced-motion skip-to-main at 390 px now leaves main at y=178 px, exactly below the header, with no hidden headings/paragraphs. Evidence: `.cache/critic/retest.json`, `390-focus-retest.png`, `320-focus-retest.png`, `mobile-skip-retest.png`.

## Coverage and observed behavior

- At **1366 × 900**, **820 × 900**, and **390 × 900**, traversed the EN home, all three department pages, About, Information Center, International Patients, Contact, Privacy, Cookie Policy, and Terms. Stopped at 700 px intervals throughout each document and recorded visible headings/hidden content, image state and link prefixes. Screenshots include home/contact checkpoints plus six secondary-route checkpoints.
- `/genetikon/` resolves to `/genetikon/en/`. Home language switches EN/TR/RU/KA/AZ stayed under `/genetikon/`; contact switching preserved the route (`/genetikon/tr/contact/`). Internal href inspection across the 33 page/viewport traversals found no prefix escapes.
- No broken loaded images, runtime page exceptions, persistent failed resource responses, horizontal document overflow, never-revealed text, or blank-scroll traps were observed. A transient Terms 404 coincided with a rebuild; direct retest returned the correct Terms title and heading.
- Active navigation changed for Contact and department pages. There is no collapsed navigation menu at tested mobile/tablet widths; links wrap and remain exposed.
- Keyboard tab order includes a visible skip link, brand, navigation, locale choices and primary calls to action. FAQ summaries opened/closed with Enter and displayed focus outlines. Empty form submission was blocked by native required validation; outbound email sending was not performed.
- Cookie consent could be dismissed and reopened from the footer. The initial evidence shows the previous duplicate “Cookie Policy” label; source now says “Cookie settings”, so the duplicate label is not a current finding.
- Reduced-motion emulation on mobile rendered complete main content with no running browser animations and no opacity-hidden headings/paragraphs.
- Axe WCAG 2 A/AA and 2.1 AA checks found no violations on home, contact and stem-cell department at 1366, 390 and 320 px. This does not negate the manually observed obscured focus problem.
- Reflow at 320 px produced no horizontal document overflow in those three pages. Native browser zoom, physical devices, Safari/Firefox and real email/telephone/WhatsApp delivery were not verified.

## Evidence limits

The source was rebuilt during the review; the 33-traversal set is earlier than the final language-path normalization. The final rebuild was independently retested: EN contact → TR contact produced `/genetikon/tr/contact/` with one trailing slash at all four widths, and the renamed Cookie settings button reopened consent at all four widths. The focus and reduced-motion skip-link fix was also independently confirmed, as recorded above. No claim is made that all translated secondary pages were traversed, that clinical claims are verified, or that the closed former centre is operating. Those remain owner/content decisions. Evidence is in `.cache/critic/` (`traversal.json`, `interactions.json`, `accessibility.json`, `final-behaviors.json`, route captures and viewport captures).

