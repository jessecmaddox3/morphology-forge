# Verification

> **TL;DR:** Checks use authored questions, fictional learners, disposable browser storage and blocked external requests. Cloud tests use a new local stack, never a real household backend. A public release is gated on its exact commit passing all CI jobs.

The core suite retains the original 34 engine/content checks, with regressions for assisted placement, mastery coverage, malformed saves, persistence, bounded exhaustion, exact chip spelling and shuffled answer identity. Storage and transport checks cover atomic profiles, revision conflicts, recovery, interrupted acknowledgments, original account/backend binding and JSON object-key reordering.

`python3 scripts/test-browser.py` exercises the real source controller and engine with fixed authored rounds and a synthetic save contract. It verifies shuffled answer mapping, retained manual feedback, keyboard focus, contextual glosses, the transcript spelling note, family questions and visible questions at doubled text sizes. The geometry check uses reduced motion so the deliberately clipped goal-net animation is not mistaken for clipped teaching text.

`python3 scripts/test-saves-browser.py` runs the actual generated game with real IndexedDB. It answers real questions, reloads, exports and imports actual JSON, switches learners, handles unavailable storage, preserves unreadable future versions, detects competing tabs, recovers failed writes and runs the exact offline HTML. It checks 320, 390, 768 and 1440 pixel widths and nested hosting. Every request outside the isolated local test is blocked. Normal browser profiles and real saved progress are never used.

`scripts/test-cloud-schema.py` passed locally against PostgreSQL 17.10 in a new cluster bound only to a private Unix socket. It checks RLS, forbidden ownership reassignment, cross-owner foreign keys, snapshot bounds, immutable identity, concurrent revisions and isolated deletion. This is not an Auth, REST or email test.

The separate `scripts/test-supabase.py` workflow exercises actual Supabase CLI 2.117.0 Auth, PostgREST, Kong and local Mailpit in a disposable Ubuntu runner. It covers new and returning email-code login, wrong and reused codes, two owners, concurrent updates, conflict choices, lost responses, restore and account/profile switching. Its harness accepts loopback endpoints only. See the repository's Checks run for the exact release commit; passing the local SQL test does not substitute for this job.

Automated browser checks use Chromium. They do not establish behavior on every phone/browser combination, real SMTP delivery, educational efficacy, or the policies of another person's cloud deployment.

Version 1.0.1 guards cloud attachment, conflict choices and intentional learner removal against simultaneous background reads. Deterministic browser regressions use the actual adapter, IndexedDB store and upload loop with a synthetic connection. They verify continued play, the next upload, a fresh learner after removal and the manual-advance setting. Existing databases and backup formats remain compatible.
