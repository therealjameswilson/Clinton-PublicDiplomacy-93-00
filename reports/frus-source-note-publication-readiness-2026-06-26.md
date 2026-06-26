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
| 1993-05-14 | Memorandum From Robert B. Morley of the National Security Council Staff to the President's Assistant for National Security Affairs (Lake) | No classification marking. |
| 1993-07-23 | Memorandum From Gordon Adams and Richard Clarke to Leon Panetta, Anthony Lake, and Howard Paster | No classification marking. |
| 1993-09-18 | Electronic Message From Jeremy D. Rosner of the National Security Council Staff to Nancy Soderberg and Others | Unclassified. |
| 1994-06-24 | Memorandum From the Director of the Office of Management and Budget (Panetta) to the President's Assistant for National Security Affairs (Lake) | No classification marking. |
| 1995-01-10 | Electronic Message From John E. Lennon to Morton H. Halperin | Unclassified. |
| 1995-02-14 | Memorandum From the Director of the United States Information Agency (Duffey) to Morton H. Halperin of the National Security Council Staff | No classification marking. |
| 1995-03-25 | Memorandum From Morton H. Halperin of the National Security Council Staff to Gordon Adams, William Wise, and Pamela Johnson | No classification marking. |
| 1996-04-22 | Electronic Message From William K. Davis to Edwin L. Atlas and Others | Unclassified. |
| 1996-11-26 | Memorandum From Janie Fritzman to the Director of the United States Information Agency (Duffey) | No classification marking. |
| 1998-07-07 | Electronic Message From Eric P. Schwartz to Robert Malley | Unclassified. |
| 1998-09-25 | Memorandum From Thomas C. Adams of the Department of State to Robert S. Gelbard | Unclassified. |
| 1998-12-01 | Electronic Message From James E. Baker to Charles A. Allen and Others | Unclassified. |
| 1999-09-24 | Electronic Message From Mara E. Rudman to Tina S. Kaidanow and Others | Unclassified. |
| 1999-11-04 | Telegram From the U.S. Office Pristina to the Department of State | Unclassified. |
| 2000-01-10 | Telegram From the Department of State to All Diplomatic and Consular Posts | Unclassified. |
| 2000-03-10 | Telegram From the Embassy in Ukraine to the Department of State | Unclassified. |
| 2000-05-29 | Electronic Message From Andrew S. Weiss to Mark C. Medish | Unclassified. |
| 2000-11-15 | Electronic Message From Brian E. Carlson to Antony J. Blinken and Others | No classification marking. |

## Final Check

All 18 source notes are now in finished publication-form prose for the website:

- Their document headings use published FRUS-style forms: `Memorandum From...`, `Electronic Message From...`, or `Telegram From...`.
- They begin with `Source:`.
- They use the full Clinton Library source family.
- They include the parent `National Security Council` source family before NSC subseries names.
- They end with a verified classification/no-classification statement.
- They exclude URLs, FOIA case numbers, source PDF filenames, page ranges, and P-code metadata.

Remaining editorial judgment concerns document selection and transcription, not the source-note form displayed on the assist page.
