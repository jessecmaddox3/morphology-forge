# Design notes

> **TL;DR:** The game asks learners to build, infer and question word structure. It keeps its original football programme theme and adaptive practice model, with explicit help, readable feedback and recoverable saves.

## Teaching and pacing

The core interaction is generative work rather than a root-definition flashcard deck. Tier 1 uses transparent English bases; tier 2 introduces bound roots; tier 3 emphasizes ambiguity and false friends. These are editorial groupings, not measured grade levels. Some tier 3 questions contain familiar parts in an unfamiliar combination.

Three placement rounds prefer build questions at the exact probe tier, using inference or relation cards where that tier has no builds. Only unassisted correct answers establish the highest cleared tier. Assisted answers can finish placement while leaving the ceiling low. Correct/answered statistics include assistance, but mastery requires an unassisted build and inference of the same root. The placement ceiling is not a promise that easier practice disappears.

After placement, a rolling window of six unassisted results adapts the ceiling. Accuracy above 90% raises one level; below 60% lowers one level, within 1–3. A miss also provides one immediately easier question. The original 85% target describes a design intention, not a validated learning claim. Easy practice can contribute to the window; this is a simple heuristic rather than a psychometric model. The window now survives reloads.

Build rounds allow one unscored retry. Completed rounds score once. A hint is available immediately and after 45 seconds without progress. It explains structure and shows a family, filtering out the target itself. Correct answers can advance after 2 seconds, but manual mode keeps feedback until Next. The new question receives focus and scrolls into view. Switching learners or restoring another snapshot cancels old question timers.

## Content and theme

All original targets remain. The three unrelated warm-up roots are now separate; new inference questions and a heat-root build make every root reachable through both mastery routes. The theme remains an understated match-day programme: green accents, a scoreboard, football language and large chips. Literal instructions sit beside the theme labels. Teaching corrections and dictionary references are in [content notes](content.md).

## Storage and recovery

The shared storage/cloud components derive from the MIT Math Workshop 1.0.0 engine. The game uses its own database `morphology-forge-morphology-v1`, game identifier `morphology`, and curriculum `roots-17-v1`. No personal source backend, identity cache or saved state is included.

IndexedDB atomically creates profiles and snapshots. Serialized local writes compare a revision before saving; competing tabs preserve the losing attempt instead of overwriting. Unavailable storage uses a visibly temporary in-memory store. A failed write freezes further play and offers export of the unsaved copy. Future-format data is retained for raw export while other learners remain usable.

Normalization allows known roots/items, bounded counters, valid tiers and expected shapes. Object keys are canonicalized, so database JSONB key order does not turn an identical snapshot into a failed acknowledgment. Import validates app, game, curriculum and version, then creates a fresh local identity. Authentication and cloud bindings do not enter backups.

The optional cloud path uses adult email OTP, owner-scoped rows, composite ownership foreign keys and revision compare-and-swap. A durable outbox keeps a write ID and original owner/backend binding across reloads. A lost response can be reconciled without applying the same write twice. Conflicting cloud versions require an explicit choice and keep a recovery copy. Reloads end the in-memory authentication session; pending saves resume only under their original account. Hosted startup does not fetch configuration or the SDK before explicit opt-in.
