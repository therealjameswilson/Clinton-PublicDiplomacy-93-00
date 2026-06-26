# FRUS Source Note Annotation Checker Rerun

Run date: June 26, 2026

Update: This checker rerun was followed by the publication-form verification in
[`frus-source-note-publication-readiness-2026-06-26.md`](frus-source-note-publication-readiness-2026-06-26.md).
The current website source notes no longer retain FOIA/P-code sentences in source-note prose; those fields remain tracking/provenance metadata outside the finished note.

Inputs:

- `FRUS Annotation Checker Operator Script.docx`
- `FRUS_Annotation_Checker_ChatGPT_5_4_Agent_2026-06-23.md`
- `app.js` candidate source notes
- Clinton Library withdrawal/redaction-sheet metadata already captured for the candidate register

```json
{
  "document_assessment": {
    "target_volume": "Foreign Relations of the United States, 1993-2000, Volume XIV, Public Diplomacy",
    "target_subseries": "clinton",
    "routing_basis": "Target volume ID frus1993-00v14, Clinton Library source family, and candidate source notes for Clinton-era public diplomacy records.",
    "overall_readiness": "ready_with_low_risk_edits",
    "summary": "The checker rerun reviewed all 18 candidate source notes. Safe mechanical fixes were applied to restore parent source-family order before NSC series names and to make withdrawal-sheet language less informal. This run was superseded by the publication-form verification, which removed FOIA/P-code language from source-note prose and added document-image classification statements."
  },
  "coverage_report": {
    "review_scope": "selected_units",
    "units_reviewed": [
      "18 candidate source notes in chronological order"
    ],
    "units_partially_reviewed": [],
    "units_not_reviewed": [],
    "extraction_or_evidence_limits": [
      "The review used candidate source-note prose and withdrawal/redaction-sheet metadata, not a full publication apparatus sheet.",
      "Final classification and handling markings were not certified from every document image in this pass."
    ],
    "recommended_next_split": "none"
  },
  "chronological_errors": [],
  "style_discrepancy_tally": [
    {
      "id": "D001",
      "category": "source_note",
      "style_question": "Should Clinton Library FOIA withdrawal-sheet P-code restriction metadata remain in final published source-note prose or move fully to tracking/provenance fields?",
      "variants_observed": [
        "Earlier draft source notes retained FOIA case and withdrawal-sheet P-code sentences.",
        "Final publication-form source notes reserve classification and handling prose for markings verified on the document image."
      ],
      "provisional_handling": "Resolved in the publication-readiness pass: keep P-code metadata in tracking/provenance fields, not source-note prose.",
      "representative_units": [
        "All 18 candidate source notes"
      ]
    }
  ],
  "evidence_requests": [
    {
      "id": "E001",
      "evidence_request": "classification_marking",
      "needed_for": "Final publication-level classification and handling clauses in source notes.",
      "requested_material": "Document images for each candidate extract, checked against the appended Clinton Library withdrawal/redaction sheet."
    }
  ],
  "safe_direct_edits": [],
  "comment_only_items": [
    {
      "error_id": "D001",
      "comment_text": "Resolved in the publication-readiness pass: document images now support the classification/no-classification statements, and P codes remain tracking metadata outside source-note prose."
    }
  ]
}
```

Summary: The rerun found no remaining chronological source-note errors after the safe mechanical fixes. This report was later superseded by the publication-readiness pass, which verified classification/no-classification statements from document images and removed FOIA/P-code language from source-note prose.
