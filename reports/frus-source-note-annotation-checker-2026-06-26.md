# FRUS Source Note Annotation Checker Rerun

Run date: June 26, 2026

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
    "summary": "The checker rerun reviewed all 18 candidate source notes. Safe mechanical fixes were applied to restore parent source-family order before NSC series names and to make withdrawal-sheet language less informal. No remaining safe direct-edit findings were found. Final publication-level classification and handling language remains evidence-gated pending document-image review."
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
        "Draft source note retains FOIA case and withdrawal-sheet P-code sentence.",
        "Final FRUS-style source note may reserve classification and handling prose for markings verified on the document image."
      ],
      "provisional_handling": "Retain P-code sentence as draft compiler-facing restriction metadata; verify against document images before final selection.",
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
      "comment_text": "Treat Clinton Library withdrawal-sheet P codes as restriction metadata, not classification markings, until document images support final classification and handling language."
    }
  ]
}
```

Summary: The rerun found no remaining chronological source-note errors after the safe mechanical fixes. The main residual risk is evidence-gated: final FRUS publication notes should verify classification and handling from the document images, while the current page keeps the P-code language as draft compiler-facing restriction metadata.
