# FRUS 1993-2000 Volume XIV Assist

Static compiler-assist page for:

<https://history.state.gov/historicaldocuments/frus1993-00v14>

The official Office of the Historian page identifies the volume as *Foreign Relations of the United States, 1993-2000, Volume XIV, Public Diplomacy* and notes that its status is planned. This assist page therefore starts with source routes, a chronological potential-document register, pull queues, chronology pivots, search recipes, and boundary controls rather than a finished document-browser table.

The document register follows the Clinton Library PDF pattern used on the other FRUS Assist pages: slice the document-image pages for a review PDF, then append the relevant Clinton Library withdrawal/redaction sheet as the final provenance page. Each candidate also carries a draft FRUS-style source note aligned to the published Bush Library pattern: repository, presidential records, office/series, OA/Box or folder trail, then release and restriction facts.

## Live Site

<https://therealjameswilson.github.io/Clinton-PublicDiplomacy-93-00/>

## Repository

<https://github.com/therealjameswilson/Clinton-PublicDiplomacy-93-00>

## Local Use

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080 --directory Clinton-PublicDiplomacy-93-00
```

Then open:

<http://127.0.0.1:8080/>

## Validation

```bash
node --check app.js
```

The page has no build step and no external runtime dependencies.

## Share Report

For a GitHub-ready summary of what this assist page does and how it was checked, see:

[`reports/frus1993-00v14-public-diplomacy-github-report.md`](reports/frus1993-00v14-public-diplomacy-github-report.md)

For the source-note FRUS Annotation Checker rerun, see:

[`reports/frus-source-note-annotation-checker-2026-06-26.md`](reports/frus-source-note-annotation-checker-2026-06-26.md)

For the final publication-form source-note verification, see:

[`reports/frus-source-note-publication-readiness-2026-06-26.md`](reports/frus-source-note-publication-readiness-2026-06-26.md)
