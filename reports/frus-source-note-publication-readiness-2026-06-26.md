# FRUS Source Note Publication-Readiness Verification

Run date: June 26, 2026

Scope: 18 candidate source notes in the Clinton Public Diplomacy assist page.

Result: publication-form source notes verified.

## Standard Applied

The source notes now follow the published FRUS source-note sequence used for Presidential Library records:

1. Repository.
2. Presidential records collection.
3. Office, source family, series, staff files, or electronic system.
4. OA/Box number and folder/date-range trail.
5. Verified classification or no-classification statement.

FOIA case numbers, source PDF URLs, source page ranges, document page ranges, provenance-sheet pages, and Clinton Library withdrawal-sheet P-code metadata remain tracking/provenance fields outside the source-note prose.

## Verification Method

- Compared the 18 source-note strings in `app.js` against the candidate register.
- Extracted the relevant first document-image page for each candidate from the Clinton Library PDFs in `/tmp/frus-pd-pdfs`.
- Rendered a first-page contact sheet from the Clinton Library PDFs for visual inspection of headers and classification markings.
- Checked each document page for `CLASSIFICATION`, `CLASS:`, `UNCLAS`, `UNCLASSIFIED`, or the absence of a classification marking.
- Removed FOIA/P-code sentences from source-note prose.
- Added `Unclassified.` or `No classification marking.` based on the document image evidence.
- Confirmed no source note contains public URLs, source PDF locators, FOIA case numbers, or withdrawal-sheet P-code language.

## Classification Check

| Date | Candidate | Classification statement in source note |
| --- | --- | --- |
| 1993-05-14 | Robert Morley to Anthony Lake, proposed remarks by the President on Cuba's Independence Day | No classification marking. |
| 1993-07-23 | Gordon Adams and Richard Clarke to Leon Panetta et al., legislative strategy for international broadcasting consolidation | No classification marking. |
| 1993-09-18 | Jeremy Rosner to Nancy Soderberg et al., Radios -- Update | Unclassified. |
| 1994-06-24 | Leon Panetta to Anthony Lake, cost of relocating RFE/RL headquarters to Prague | No classification marking. |
| 1995-01-10 | John Lennon to Morton Halperin, Public Diplomacy-USIA | Unclassified. |
| 1995-02-14 | Joseph Duffey to Morton Halperin, Co-ordinated Public Affairs Campaigns in Foreign Policy | No classification marking. |
| 1995-03-25 | Morton Halperin to Gordon Adams et al., NPR Phase II: Public Affairs/Public Diplomacy-State/USIA | No classification marking. |
| 1996-04-22 | William Davis to Edwin Atlas et al., Radio Marti move to Miami | Unclassified. |
| 1996-11-26 | Janie Fritzman to Director Duffey, removal of USIA employees from the Patrick Henry Building | No classification marking. |
| 1998-07-07 | Eric Schwartz to Robert Malley, International Public Information | Unclassified. |
| 1998-09-25 | Thomas Adams to Robert Gelbard, U.S. Programming for ANEM TV | Unclassified. |
| 1998-12-01 | James Baker email and attached package, IPI PDD Package | Unclassified. |
| 1999-09-24 | Mara Rudman and Tina Kaidanow email thread, requests for Sandy Berger speech and Ring Around Serbia language | Unclassified. |
| 1999-11-04 | U.S. Office Pristina to Secretary of State, moving forward on public television in Kosovo | Unclassified. |
| 2000-01-10 | Public Diplomacy Guidelines | Unclassified. |
| 2000-03-10 | Public Diplomacy in Ukraine and the NIS | Unclassified. |
| 2000-05-29 | Andrew Weiss and Mark Medish email thread, RFE/RL and Babitskiy | Unclassified. |
| 2000-11-15 | Brian Carlson, revised scenario for East Room event on the White House Conference on Culture and Diplomacy | No classification marking. |

## Final Check

All 18 source notes are now in finished publication-form prose for the website:

- They begin with `Source:`.
- They use the full Clinton Library source family.
- They include the parent `National Security Council` source family before NSC subseries names.
- They end with a verified classification/no-classification statement.
- They exclude URLs, FOIA case numbers, source PDF filenames, page ranges, and P-code metadata.

Remaining editorial judgment concerns document selection and transcription, not the source-note form displayed on the assist page.
