const lanes = [
  {
    id: "official-frame",
    title: "Official Frame",
    status: "Planned",
    lead: "Use the volume page and status page as the boundary anchor before building any source queue.",
    actions: ["Record current FRUS status", "Separate published facts from inferred chapter needs"]
  },
  {
    id: "usia-state",
    title: "USIA-State Reorganization",
    status: "Institutional",
    lead: "Track USIA, the Under Secretary for Public Diplomacy and Public Affairs, IIP, ECA, and State transition files.",
    actions: ["Pull USIA and Evelyn Lieberman batches", "Keep core organization policy in Volumes II-III"]
  },
  {
    id: "broadcasting",
    title: "International Broadcasting",
    status: "Program",
    lead: "VOA, RFE/RL, Radio Marti, BBG, and PDD-68 show operational public diplomacy and information strategy.",
    actions: ["Start with VOA and International Broadcasting batches", "Flag audience-impact evidence"]
  },
  {
    id: "public-line",
    title: "Presidential Public Line",
    status: "Message",
    lead: "Speechwriter, public papers, press guidance, and NSC clearance trails explain how foreign-policy arguments became public.",
    actions: ["Pull speechwriter files", "Pair public statements with internal memoranda"]
  },
  {
    id: "culture-exchanges",
    title: "Culture and Exchanges",
    status: "Program",
    lead: "Culture, exchange, and visitor programs document public diplomacy beyond crisis messaging.",
    actions: ["Review Culture and Diplomacy conference files", "Look for exchange-program decision records"]
  },
  {
    id: "regional-campaigns",
    title: "Regional Campaigns",
    status: "Boundary",
    lead: "Kosovo, Serbia, Northern Ireland, Cuba, China, Africa, and counterterrorism can supply public diplomacy documents while policy decisions stay in adjacent volumes.",
    actions: ["Capture public-diplomacy records only", "Route policy substance to regional desks"]
  },
  {
    id: "audience-reaction",
    title: "Audience and Media Reaction",
    status: "Evidence",
    lead: "Foreign media reaction, polling, audience research, embassy reporting, and public affairs cables test whether a message had foreign-policy significance.",
    actions: ["Search RG 59 and State archive", "Prioritize records with foreign audience evidence"]
  },
  {
    id: "source-notes",
    title: "Source-Note Readiness",
    status: "Editorial",
    lead: "Every candidate needs repository, collection, series, file unit, and release facts before it becomes a volume-ready item.",
    actions: ["Keep item IDs in tracking fields", "Draft provenance only after file-level review"]
  }
];

const sources = [
  {
    id: "frus-v14",
    title: "FRUS 1993-2000, Volume XIV, Public Diplomacy",
    repository: "Office of the Historian",
    lane: "Official Frame",
    priority: "first",
    period: "1993-2000",
    status: "Planned",
    url: "https://history.state.gov/historicaldocuments/frus1993-00v14",
    coverage:
      "Official volume placeholder. It states that the current status of the volume is planned.",
    useFor: "Volume title, official citation target, and status language.",
    trackingNote:
      "Use this as the public-facing spine until the published table of contents exists."
  },
  {
    id: "frus-status",
    title: "Status of the Foreign Relations Series",
    repository: "Office of the Historian",
    lane: "Official Frame",
    priority: "first",
    period: "Series-wide",
    status: "Reference",
    url: "https://history.state.gov/historicaldocuments/status-of-the-series",
    coverage:
      "Series status page listing Volume XIV under the planned 1993-2000 volumes.",
    useFor: "Current production status and adjacent-volume comparison.",
    trackingNote:
      "Recheck before publication claims; status pages change."
  },
  {
    id: "clinton-public-diplomacy",
    title: "FOIA 2006-0200-F - Public Diplomacy",
    repository: "Clinton Digital Library",
    lane: "Official Frame",
    priority: "first",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14560",
    coverage:
      "Clinton Library public diplomacy batch with records that can seed the initial document-candidate register.",
    useFor: "Core batch pull, people list, and first-pass source-note examples.",
    trackingNote:
      "Verify folder-level provenance from the PDFs or item metadata before drafting final notes."
  },
  {
    id: "pdd-68",
    title: "FOIA 2006-0207-F - PDD-68 - Concerning International Public Information",
    repository: "Clinton Digital Library",
    lane: "International Broadcasting",
    priority: "first",
    period: "1999",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14495",
    coverage:
      "Presidential decision directive material concerning international public information.",
    useFor: "Policy architecture for international information work and public diplomacy coordination.",
    trackingNote:
      "Treat as a core policy file; compare with State and NSC implementation records."
  },
  {
    id: "clinton-usia",
    title: "FOIA 2006-0208-F - United States Information Agency",
    repository: "Clinton Digital Library",
    lane: "USIA-State Reorganization",
    priority: "first",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14474",
    coverage:
      "USIA-specific Clinton Library batch for institutional, policy, and transition evidence.",
    useFor: "USIA baseline, transition records, and names for authority control.",
    trackingNote:
      "Separate USIA organization evidence from public diplomacy policy evidence."
  },
  {
    id: "lieberman-uspd",
    title: "FOIA 2006-0199-F - Evelyn Lieberman as Under Secretary for Public Diplomacy, 1999-2001",
    repository: "Clinton Digital Library",
    lane: "USIA-State Reorganization",
    priority: "first",
    period: "1999-2001",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14490",
    coverage:
      "Files associated with Evelyn Lieberman during the transition into State public diplomacy leadership.",
    useFor: "Late-Clinton institutional transition, early public diplomacy leadership, and program continuity.",
    trackingNote:
      "Watch the 2001 edge; include only Clinton-period records unless transition context is essential."
  },
  {
    id: "voa",
    title: "FOIA 2006-0165-F - Voice of America",
    repository: "Clinton Digital Library",
    lane: "International Broadcasting",
    priority: "first",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14542",
    coverage:
      "Voice of America batch for broadcasting, public communication, and foreign audience records.",
    useFor: "Broadcasting chapter candidates and program-evidence cross-checks.",
    trackingNote:
      "Look for policy-level decisions rather than routine programming records."
  },
  {
    id: "international-broadcasting",
    title: "FOIA 2006-0202-F - International Broadcasting/Board for International Broadcasting",
    repository: "Clinton Digital Library",
    lane: "International Broadcasting",
    priority: "first",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14493",
    coverage:
      "International broadcasting and board-related records for governance, policy, and program oversight.",
    useFor: "Board and broadcast governance records, especially when tied to foreign-policy crises.",
    trackingNote:
      "Crosswalk with VOA, RFE/RL, Radio Marti, and PDD-68."
  },
  {
    id: "rfe-rl",
    title: "FOIA 2006-0203-F - Radio Free Europe/Radio Liberty",
    repository: "Clinton Digital Library",
    lane: "International Broadcasting",
    priority: "second",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14473",
    coverage:
      "RFE/RL batch for post-Cold War broadcasting questions, regional audiences, and institutional governance.",
    useFor: "Broadcast policy candidates and Europe/Russia boundary checks.",
    trackingNote:
      "Route substantive Russia or Europe policy decisions to those volumes."
  },
  {
    id: "radio-marti",
    title: "FOIA 2006-0204-F - Radio Marti",
    repository: "Clinton Digital Library",
    lane: "Regional Campaigns",
    priority: "second",
    period: "1993-2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14494",
    coverage:
      "Radio Marti batch for Cuba-facing broadcasting, public diplomacy, and policy boundary questions.",
    useFor: "Cuba public diplomacy candidates and broadcasting governance.",
    trackingNote:
      "Do not pull Cuba policy substance unless the document turns on public diplomacy."
  },
  {
    id: "culture-diplomacy",
    title: "FOIA 2006-0201-F - White House Conference on Culture and Diplomacy",
    repository: "Clinton Digital Library",
    lane: "Culture and Exchanges",
    priority: "second",
    period: "2000",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14492",
    coverage:
      "Culture and diplomacy conference material that can broaden the volume beyond crisis-response messaging.",
    useFor: "Cultural diplomacy, exchange framing, and public diplomacy strategy.",
    trackingNote:
      "Prefer records with policy approval, interagency coordination, or international audience design."
  },
  {
    id: "ring-around-serbia",
    title: "FOIA 2006-0206-F - Ring Around Serbia",
    repository: "Clinton Digital Library",
    lane: "Regional Campaigns",
    priority: "second",
    period: "1990s",
    status: "Released batch",
    url: "https://clinton.presidentiallibraries.us/items/show/14544",
    coverage:
      "A Balkans-facing public diplomacy lead that may capture information operations around Serbia.",
    useFor: "Kosovo/Serbia public diplomacy candidates and boundary testing against Balkans volumes.",
    trackingNote:
      "Treat as public diplomacy only when the document is about audience strategy or information work."
  },
  {
    id: "speechwriters",
    title: "Clinton Speechwriter FOIA Batches",
    repository: "Clinton Digital Library",
    lane: "Presidential Public Line",
    priority: "first",
    period: "1993-2000",
    status: "Released batches",
    url: "https://clinton.presidentiallibraries.us/items/show/14572",
    coverage:
      "Speechwriter files such as Carolyn Curiel, Michael Waldman, David Shipley, Lowell Weiss, Ted Widmer, Heather Hurlburt, and Paul Orzulak.",
    useFor: "Public-line drafting trails, foreign-policy argument, and speech clearance leads.",
    trackingNote:
      "Use public papers to identify candidate speeches, then pull speechwriter records for drafts and clearance."
  },
  {
    id: "state-public-diplomacy-archive",
    title: "Department of State Archive - Public Diplomacy",
    repository: "Department of State",
    lane: "Audience and Media Reaction",
    priority: "context",
    period: "1997-2001",
    status: "Archived web",
    url: "https://1997-2001.state.gov/global/pd/",
    coverage:
      "Archived State public diplomacy web material from the late Clinton period.",
    useFor: "Public-facing program names, offices, and terminology to use in archival searches.",
    trackingNote:
      "Use as context and terminology; prefer archival records for final documentary selections."
  },
  {
    id: "rg306",
    title: "NARA Record Group 306 - Records of the U.S. Information Agency",
    repository: "National Archives",
    lane: "USIA-State Reorganization",
    priority: "first",
    period: "1953-1999",
    status: "Record group guide",
    url: "https://www.archives.gov/research/guide-fed-records/groups/306.html",
    coverage:
      "National Archives guide to USIA records, essential for locating agency-level public diplomacy records.",
    useFor: "Record-group routing, series names, and pull-slip planning.",
    trackingNote:
      "Catalog URLs and NAIDs stay in tracking fields until file-level source notes are verified."
  },
  {
    id: "rg59",
    title: "NARA Record Group 59 - General Records of the Department of State",
    repository: "National Archives",
    lane: "Audience and Media Reaction",
    priority: "first",
    period: "1789-present",
    status: "Record group guide",
    url: "https://www.archives.gov/research/guide-fed-records/groups/059.html",
    coverage:
      "State Department record group guide for cables, public affairs, embassy reporting, and policy files.",
    useFor: "State public affairs, embassy reaction, and foreign audience evidence.",
    trackingNote:
      "Expect public diplomacy evidence to be distributed across regional and functional State records."
  },
  {
    id: "public-papers",
    title: "Public Papers of the Presidents - William J. Clinton",
    repository: "GovInfo",
    lane: "Presidential Public Line",
    priority: "context",
    period: "1993-2001",
    status: "Published record",
    url: "https://www.govinfo.gov/app/collection/ppp",
    coverage:
      "Official public statements, remarks, exchanges, and messages for Clinton administration public-line checks.",
    useFor: "Speech targets, chronology pivots, and public/private comparison.",
    trackingNote:
      "Published remarks are a starting point; the volume needs internal records behind them."
  },
  {
    id: "reform-act",
    title: "Foreign Affairs Reform and Restructuring Act of 1998",
    repository: "Congress.gov",
    lane: "USIA-State Reorganization",
    priority: "context",
    period: "1998",
    status: "Statutory context",
    url: "https://www.congress.gov/105/plaws/publ277/PLAW-105publ277.pdf",
    coverage:
      "Statutory background for the reorganization that folded USIA functions into State.",
    useFor: "Date controls, institutional boundary notes, and organization-volume crosswalk.",
    trackingNote:
      "Use for context; final document selections should come from executive-branch records."
  }
];

const sourcePdfUrls = {
  "international-broadcasting": "https://clinton.presidentiallibraries.us/files/original/3d0a84d88524cc2e1adfcefc85ecbf1e.pdf",
  "clinton-usia": "https://clinton.presidentiallibraries.us/files/original/b9e2b7973ee113f8d5f3cdf84c1fa7e9.pdf",
  "radio-marti": "https://clinton.presidentiallibraries.us/files/original/4d91d87456fb83a20ea4e474a27cbd26.pdf",
  "pdd-68": "https://clinton.presidentiallibraries.us/files/original/bc06e6707c229a6666fde88ab3859dcc.pdf",
  "ring-around-serbia": "https://clinton.presidentiallibraries.us/files/original/0db918e8527efeae2cbc77abda19e3ed.pdf",
  "rfe-rl": "https://clinton.presidentiallibraries.us/files/original/d441919ee80b70a6b5f75c9b8ef4af2e.pdf",
  "lieberman-uspd": "https://clinton.presidentiallibraries.us/files/original/5d5391f5d5709bdb1a78ac4f254bcd91.pdf",
  "culture-diplomacy": "https://clinton.presidentiallibraries.us/files/original/ec416cb531de47cee397b81857c868f0.pdf"
};

const documentCandidates = [
  {
    date: "1993-05-14",
    title: "Memorandum From Robert B. Morley of the National Security Council Staff to the President's Assistant for National Security Affairs (Lake)",
    sourceId: "radio-marti",
    sourcePages: "54-59",
    documentPages: "55-59",
    provenancePage: "54",
    estimatedPages: 6,
    posture: "Boundary candidate",
    why:
      "Pairs NSC clearance with a presidential public line on Cuba; include only if the editorial point is audience strategy rather than Cuba policy itself."
  },
  {
    date: "1993-07-23",
    title: "Memorandum From Gordon Adams and Richard Clarke to Leon Panetta, Anthony Lake, and Howard Paster",
    sourceId: "international-broadcasting",
    sourcePages: "79-82",
    documentPages: "80-82",
    provenancePage: "79",
    estimatedPages: 4,
    posture: "High-value candidate",
    why:
      "Shows senior review of broadcasting consolidation, journalistic independence, BBG control, and presidential foreign-policy control."
  },
  {
    date: "1993-09-18",
    title: "Electronic Message From Jeremy D. Rosner of the National Security Council Staff to Nancy Soderberg and Others",
    sourceId: "international-broadcasting",
    sourcePages: "65, 67-68",
    documentPages: "67-68",
    provenancePage: "65",
    estimatedPages: 3,
    posture: "Broadcasting candidate",
    why:
      "Early NSC email on radio reorganization and broadcast policy; useful for opening the Clinton-era broadcasting lane."
  },
  {
    date: "1994-06-24",
    title: "Memorandum From the Director of the Office of Management and Budget (Panetta) to the President's Assistant for National Security Affairs (Lake)",
    sourceId: "international-broadcasting",
    sourcePages: "29-35",
    documentPages: "30-35",
    provenancePage: "29",
    estimatedPages: 7,
    posture: "High-value candidate",
    why:
      "Documents the budget and policy stakes behind moving Radio Free Europe/Radio Liberty to Prague."
  },
  {
    date: "1995-01-10",
    title: "Electronic Message From John E. Lennon to Morton H. Halperin",
    sourceId: "clinton-usia",
    sourcePages: "223, 225-229",
    documentPages: "225-229",
    provenancePage: "223",
    estimatedPages: 6,
    posture: "High-value candidate",
    why:
      "Compact briefing on USIA functions, international broadcasting, posts, exchanges, and how public diplomacy fit the reorganization debate."
  },
  {
    date: "1995-02-14",
    title: "Memorandum From the Director of the United States Information Agency (Duffey) to Morton H. Halperin of the National Security Council Staff",
    sourceId: "clinton-usia",
    sourcePages: "60, 67-70",
    documentPages: "67-70",
    provenancePage: "60",
    estimatedPages: 5,
    posture: "High-value candidate",
    why:
      "Identifies public diplomacy campaigns, target audiences, and areas where USIA could support urgent foreign-policy objectives."
  },
  {
    date: "1995-03-25",
    title: "Memorandum From Morton H. Halperin of the National Security Council Staff to Gordon Adams, William Wise, and Pamela Johnson",
    sourceId: "clinton-usia",
    sourcePages: "1-10",
    documentPages: "2-10",
    provenancePage: "1",
    estimatedPages: 10,
    posture: "Anchor candidate",
    why:
      "Core State/USIA reorganization record, with public affairs and public diplomacy coordination, wireless file, Smith-Mundt, and staffing proposals."
  },
  {
    date: "1996-04-22",
    title: "Electronic Message From William K. Davis to Edwin L. Atlas and Others",
    sourceId: "radio-marti",
    sourcePages: "51-53",
    documentPages: "52-53",
    provenancePage: "51",
    estimatedPages: 3,
    posture: "Broadcasting candidate",
    why:
      "Operational public diplomacy issue with Cuba-broadcasting governance implications; keep policy substance in the Cuba volume if that dominates."
  },
  {
    date: "1996-11-26",
    title: "Memorandum From Janie Fritzman to the Director of the United States Information Agency (Duffey)",
    sourceId: "clinton-usia",
    sourcePages: "82-85",
    documentPages: "83-85",
    provenancePage: "82",
    estimatedPages: 4,
    posture: "Context candidate",
    why:
      "Useful if the volume needs a concrete institutional transition record tied to USIA operations and the International Broadcasting Bureau."
  },
  {
    date: "1998-07-07",
    title: "Electronic Message From Eric P. Schwartz to Robert Malley",
    sourceId: "pdd-68",
    sourcePages: "13-15",
    documentPages: "14-15",
    provenancePage: "13",
    estimatedPages: 3,
    posture: "PDD-68 candidate",
    why:
      "Captures NSC staff exchange over international public information before the final PDD-68 package."
  },
  {
    date: "1998-09-25",
    title: "Memorandum From Thomas C. Adams of the Department of State to Robert S. Gelbard",
    sourceId: "pdd-68",
    sourcePages: "4-6",
    documentPages: "5-6",
    provenancePage: "4",
    estimatedPages: 3,
    posture: "Boundary candidate",
    why:
      "A Balkans-facing information-program record; include only if the public diplomacy mechanism is the point."
  },
  {
    date: "1998-12-01",
    title: "Electronic Message From James E. Baker to Charles A. Allen and Others",
    sourceId: "pdd-68",
    sourcePages: "9-12",
    documentPages: "11-12",
    provenancePage: "9",
    estimatedPages: 4,
    posture: "Anchor lead",
    why:
      "The withdrawal sheet identifies a larger IPI/PDD package, including memoranda to the Vice President and President; visible pages should be checked against the full redaction map."
  },
  {
    date: "1999-09-24",
    title: "Electronic Message From Mara E. Rudman to Tina S. Kaidanow and Others",
    sourceId: "ring-around-serbia",
    sourcePages: "39, 41-49",
    documentPages: "41-49",
    provenancePage: "39",
    estimatedPages: 10,
    posture: "Boundary candidate",
    why:
      "Shows speech clearance and public-line drafting around Serbian democracy assistance and objective-information broadcasting."
  },
  {
    date: "1999-11-04",
    title: "Telegram From the U.S. Office Pristina to the Department of State",
    sourceId: "ring-around-serbia",
    sourcePages: "2, 18-22",
    documentPages: "18-22",
    provenancePage: "2",
    estimatedPages: 6,
    posture: "Regional candidate",
    why:
      "A public-television implementation cable with clear public diplomacy value, but it needs a Balkans-volume boundary check."
  },
  {
    date: "2000-01-10",
    title: "Telegram From the Department of State to All Diplomatic and Consular Posts",
    sourceId: "lieberman-uspd",
    sourcePages: "51, 53-57",
    documentPages: "53-57",
    provenancePage: "51",
    estimatedPages: 6,
    posture: "Anchor candidate",
    why:
      "Under Secretary-level guidance on the post-USIA public diplomacy mission, resources, exchanges, culture, training, and State integration."
  },
  {
    date: "2000-03-10",
    title: "Telegram From the Embassy in Ukraine to the Department of State",
    sourceId: "lieberman-uspd",
    sourcePages: "51, 59-61",
    documentPages: "59-61",
    provenancePage: "51",
    estimatedPages: 4,
    posture: "Regional candidate",
    why:
      "Shows how the new public diplomacy apparatus translated policy goals into country-program needs after the USIA-State transition."
  },
  {
    date: "2000-05-29",
    title: "Electronic Message From Andrew S. Weiss to Mark C. Medish",
    sourceId: "rfe-rl",
    sourcePages: "1-6",
    documentPages: "2-6",
    provenancePage: "1",
    estimatedPages: 6,
    posture: "Broadcasting candidate",
    why:
      "Useful for media freedom, Russia boundary review, and senior-level handling of RFE/RL programming questions."
  },
  {
    date: "2000-11-15",
    title: "Electronic Message From Brian E. Carlson to Antony J. Blinken and Others",
    sourceId: "culture-diplomacy",
    sourcePages: "58-66",
    documentPages: "59-66",
    provenancePage: "58",
    estimatedPages: 9,
    posture: "Culture candidate",
    why:
      "Late-Clinton cultural diplomacy record with explicit public diplomacy framing, foreign participants, and Secretary-level integration language."
  }
];

const candidateSourceNotes = {
  "1993-05-14|radio-marti|54":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Records Management, Radio Marti, OA/Box Number 149, 9303402. No classification marking.",
  "1993-07-23|international-broadcasting|79":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Unclassified Records Management System (URMS), Broadcasting, OA/Box Number 1377, 9305485. No classification marking.",
  "1993-09-18|international-broadcasting|65":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, A1-Record (Jan. 1993-Sept. 1994), OA/Box Number 570000, [02/19/1993-06/15/1994]. Unclassified.",
  "1994-06-24|international-broadcasting|29":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Halperin (Democracy/Human Rights), OA/Box Number 436, International Broadcasting-RFE/RL-Move to Prague: RFE/RL-Prague Pre-Decision. No classification marking.",
  "1995-01-10|clinton-usia|223":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, MSMail-Record, September 1994-September 1997, USIA near reorganization, OA/Box Number 590000, [01/06/1995-05/30/1995]. Unclassified.",
  "1995-02-14|clinton-usia|60":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Mort Halperin (Democracy/Human Rights), OA/Box Number 435, REGO: State/USIA (Public Affairs-Public Diplomacy) [2]. No classification marking.",
  "1995-03-25|clinton-usia|1":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Morton Halperin (Democracy/Human Rights), OA/Box Number 435, REGO: State/USIA [U.S. Information Agency] (Public Affairs-Public Diplomacy) [1]. No classification marking.",
  "1996-04-22|radio-marti|51":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, MSMail-Non-Record, September 1994-September 1997, Radio Marti, OA/Box Number 605000, [07/28/1995-04/26/1996]. Unclassified.",
  "1996-11-26|clinton-usia|82":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Matt Lorin (Democracy/Human Rights), OA/Box Number 799, International Broadcasting-Lorin (3). No classification marking.",
  "1998-07-07|pdd-68|13":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, Exchange-Record, September 1997-January 2001, IPI and PDD, OA/Box Number 620000, [06/10/1998-08/03/1998]. Unclassified.",
  "1998-09-25|pdd-68|4":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Jamie Metzl (Multilateral & Humanitarian Affairs), OA/Box Number 1348, Kosovo III [1]. Unclassified.",
  "1998-12-01|pdd-68|9":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, Exchange-Record, September 1997-January 2001, IPI PDD, OA/Box Number 620000, [12/01/1998-12/22/1998]. Unclassified.",
  "1999-09-24|ring-around-serbia|39":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, Exchange-Record, September 1997-January 2001, Ring Around Serbia, OA/Box Number 620000, [09/24/1999-09/01/2000]. Unclassified.",
  "1999-11-04|ring-around-serbia|2":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Cables, January 1999-December 2000, Ring Around Serbia, OA/Box Number 530000, [04/08/1999-12/14/1999]. Unclassified.",
  "2000-01-10|lieberman-uspd|51":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Cables, January 1999-December 2000 [Secretary], OA/Box Number 530000, [12/22/1999-12/08/2000]. Unclassified.",
  "2000-03-10|lieberman-uspd|51":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Cables, January 1999-December 2000 [Secretary], OA/Box Number 530000, [12/22/1999-12/08/2000]. Unclassified.",
  "2000-05-29|rfe-rl|1":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, NSC Emails, Exchange-Non-Record, March 1997-January 2001, RFE, OA/Box Number 630000, [08/02/1999-01/12/2001]. Unclassified.",
  "2000-11-15|culture-diplomacy|58":
    "Source: William J. Clinton Presidential Library, Clinton Presidential Records, National Security Council, Automated Records Management System [Email], NSC 2000/01-2001/01, Conference on Culture and Diplomacy, OA/Box Number 1250000, [11/15/2000-11/28/2000]. No classification marking."
};

const chronology = [
  {
    date: "January 1993",
    title: "Clinton administration begins with USIA still separate",
    detail:
      "Establish the inherited public diplomacy architecture before tracking reform or message campaigns."
  },
  {
    date: "1994-1995",
    title: "Early crisis and peace-process public diplomacy",
    detail:
      "Search Balkans, Haiti, Northern Ireland, and Middle East files for public diplomacy documents that shaped foreign audiences."
  },
  {
    date: "1997",
    title: "Late-Clinton State web archive begins",
    detail:
      "Use archived State public diplomacy terminology to seed searches in State and Clinton Library records."
  },
  {
    date: "1998",
    title: "Foreign Affairs Reform and Restructuring Act",
    detail:
      "Mark the legal framework for USIA-State integration and keep organization records distinct from public diplomacy selections."
  },
  {
    date: "1999",
    title: "PDD-68 and international public information",
    detail:
      "Treat PDD-68 material as a core policy candidate for the information-strategy chapter."
  },
  {
    date: "October 1999",
    title: "USIA functions transfer into State",
    detail:
      "Use USIA and Evelyn Lieberman batches to track transition, continuity, and new public diplomacy leadership."
  },
  {
    date: "2000",
    title: "Culture and diplomacy closeout",
    detail:
      "Conference and speechwriter records can show how the administration framed public diplomacy at the end of the term."
  }
];

const queueItems = [
  {
    title: "Verify official status and volume boundary",
    sourceId: "frus-v14",
    priority: "first",
    why: "The page is a planned-volume placeholder, so the assist page must not imply a published document corpus.",
    steps: ["Save current status-page language", "List adjacent Clinton organization/global/regional volumes"]
  },
  {
    title: "Pull the Public Diplomacy FOIA batch",
    sourceId: "clinton-public-diplomacy",
    priority: "first",
    why: "This is the most direct Clinton Library batch for a first document-candidate register.",
    steps: ["Download item PDFs", "Extract titles, dates, authors, recipients, folders, and release paths"]
  },
  {
    title: "Build the PDD-68 mini-dossier",
    sourceId: "pdd-68",
    priority: "first",
    why: "PDD-68 can anchor the policy architecture for international public information.",
    steps: ["Identify directive, staff papers, implementation memoranda", "Crosswalk with NSC and State records"]
  },
  {
    title: "Map USIA and integration records",
    sourceId: "clinton-usia",
    priority: "first",
    why: "The volume needs USIA records but must avoid becoming an organization-and-management volume.",
    steps: ["Separate public diplomacy decisions from structure-only records", "Capture names for authority control"]
  },
  {
    title: "Sort broadcasting batches by decision value",
    sourceId: "international-broadcasting",
    priority: "first",
    why: "Broadcasting files are high volume; selection should favor policy choices, crises, audiences, and interagency review.",
    steps: ["Review VOA, RFE/RL, Radio Marti, and BBG-related files", "Flag routine programming for exclusion"]
  },
  {
    title: "Pair speeches with internal drafts",
    sourceId: "speechwriters",
    priority: "first",
    why: "Public speeches become FRUS-worthy when drafts, clearances, or strategy memos show foreign-policy intent.",
    steps: ["Use public papers to identify candidate remarks", "Pull corresponding speechwriter folders"]
  }
];

const recipes = [
  {
    title: "Clinton Library public diplomacy sweep",
    target: "Clinton Library",
    query: '"public diplomacy" OR USIA OR "international public information" OR PDD-68 OR "Voice of America"'
  },
  {
    title: "USIA transition",
    target: "Clinton Digital Library",
    query: '"United States Information Agency" "Evelyn Lieberman" "Under Secretary for Public Diplomacy"'
  },
  {
    title: "Broadcasting governance",
    target: "Clinton Digital Library",
    query: '"International Broadcasting" OR "Board for International Broadcasting" OR "Radio Free Europe" OR "Radio Liberty" OR "Radio Marti"'
  },
  {
    title: "Speechwriter foreign-policy line",
    target: "Clinton Digital Library",
    query: 'speechwriter Kosovo NATO China Northern Ireland Cuba Africa "public diplomacy"'
  },
  {
    title: "State audience evidence",
    target: "NARA/State",
    query: '"public affairs" "media reaction" "foreign media" "public diplomacy" "American Embassy" Clinton'
  },
  {
    title: "Volume boundary check",
    target: "FRUS status page",
    query: '"1993-2000" "Public Diplomacy" "Organization and Management" "Global Issues"'
  }
];

const boundaries = [
  {
    title: "Organization and Management, Volumes II-III",
    rule: "Keep structural reform, personnel, and institutional design there unless the document turns on public diplomacy substance.",
    tests: ["Does the record discuss public audiences, messages, programs, or information policy?", "Could it stand without a reorganization chapter?"]
  },
  {
    title: "Regional Policy Volumes",
    rule: "Balkans, Cuba, Northern Ireland, China, Africa, and Russia policy choices belong in regional volumes unless the public diplomacy method is the document's point.",
    tests: ["Is the main action a regional policy decision?", "Is the public diplomacy element only implementation?"]
  },
  {
    title: "Domestic Politics",
    rule: "Campaign, public opinion, and domestic messaging records need foreign-policy audience evidence before inclusion.",
    tests: ["Is the target audience foreign?", "Does an agency or embassy treat the message as diplomacy?"]
  },
  {
    title: "Routine Program Administration",
    rule: "Broadcast schedules, exchange logistics, and conference planning should be excluded unless senior review or policy choice is visible.",
    tests: ["Is there a decision, conflict, clearance, or strategic rationale?", "Does the record explain why the program mattered?"]
  }
];

const sourceNoteSkeleton = `Publication-form Clinton Library source-note order, following published FRUS practice:
Source: repository, presidential records, office or collection, series or staff files, OA/Box or folder trail. Verified classification and handling statement.

Tracking fields outside note prose:
- Public URL or item ID
- NAID or catalog URL
- Local filename or extraction path
- Search query that found the item
- FOIA case number and Clinton Library withdrawal-sheet P-code metadata
- Compiler disposition and boundary rationale

Clinton Library review-PDF rule:
- Extract document-image pages first
- Append the relevant Withdrawal/Redaction Sheet as the final provenance page
- Keep source PDF URL, source pages, document pages, and provenance page in tracking fields
- Verify classification and handling against the document images before selection`;

const sourceRoot = document.querySelector("#source-root");
const sourceSummary = document.querySelector("#source-summary");
const documentsRoot = document.querySelector("#documents-root");
const documentSummary = document.querySelector("#document-summary");
const repositoryFilter = document.querySelector("#repository-filter");
const laneFilter = document.querySelector("#lane-filter");
const priorityFilter = document.querySelector("#priority-filter");
const sourceSearch = document.querySelector("#source-search");

function normalize(value) {
  return String(value || "").toLowerCase();
}

function uniqueValues(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values, allLabel) {
  if (!select) return;
  select.replaceChildren(
    new Option(allLabel, ""),
    ...values.map((value) => new Option(value, value))
  );
}

function sourceText(source) {
  return [
    source.title,
    source.repository,
    source.lane,
    source.priority,
    source.period,
    source.status,
    source.coverage,
    source.useFor,
    source.trackingNote
  ].join(" ");
}

function filteredSources() {
  const query = normalize(sourceSearch?.value);
  const repository = repositoryFilter?.value || "";
  const lane = laneFilter?.value || "";
  const priority = priorityFilter?.value || "";

  return sources.filter((source) => {
    if (repository && source.repository !== repository) return false;
    if (lane && source.lane !== lane) return false;
    if (priority && source.priority !== priority) return false;
    if (query && !normalize(sourceText(source)).includes(query)) return false;
    return true;
  });
}

function createChip(text) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  return chip;
}

function renderStats() {
  document.querySelector("#source-count").textContent = sources.length.toString();
  document.querySelector("#lane-count").textContent = lanes.length.toString();
  document.querySelector("#queue-count").textContent = queueItems.length.toString();
  document.querySelector("#gap-count").textContent = boundaries.length.toString();
}

function renderLanes() {
  const root = document.querySelector("#lanes-root");
  if (!root) return;
  root.replaceChildren(
    ...lanes.map((lane) => {
      const card = document.createElement("article");
      card.className = "lane-card";

      const status = document.createElement("span");
      status.textContent = lane.status;

      const title = document.createElement("h3");
      title.textContent = lane.title;

      const lead = document.createElement("p");
      lead.textContent = lane.lead;

      const list = document.createElement("ul");
      for (const action of lane.actions) {
        const item = document.createElement("li");
        item.textContent = action;
        list.append(item);
      }

      card.append(status, title, lead, list);
      return card;
    })
  );
}

function renderSources() {
  if (!sourceRoot || !sourceSummary) return;
  const visible = filteredSources();
  sourceSummary.textContent = `Showing ${visible.length} of ${sources.length} source anchors.`;

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No sources match the current filters.";
    sourceRoot.replaceChildren(empty);
    return;
  }

  sourceRoot.replaceChildren(
    ...visible.map((source) => {
      const card = document.createElement("article");
      card.className = "source-card";

      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = source.repository;

      const title = document.createElement("h3");
      title.textContent = source.title;

      const chips = document.createElement("div");
      chips.className = "chips";
      chips.append(
        createChip(source.lane),
        createChip(source.priority === "first" ? "First pull" : source.priority === "second" ? "Second pass" : "Context"),
        createChip(source.period),
        createChip(source.status)
      );

      const coverage = document.createElement("p");
      coverage.textContent = source.coverage;

      const useFor = document.createElement("p");
      useFor.textContent = `Use for: ${source.useFor}`;

      const tracking = document.createElement("p");
      tracking.textContent = `Tracking note: ${source.trackingNote}`;

      const link = document.createElement("a");
      link.className = "button secondary";
      link.href = source.url;
      link.rel = "noreferrer";
      link.textContent = "Open source";

      card.append(meta, title, chips, coverage, useFor, tracking, link);
      return card;
    })
  );
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function sortedDocumentCandidates() {
  return [...documentCandidates].sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
}

function candidateSourceKey(candidate) {
  return `${candidate.date}|${candidate.sourceId}|${candidate.provenancePage}`;
}

function candidateSourceNote(candidate) {
  return candidateSourceNotes[candidateSourceKey(candidate)] || "Source: Clinton Library source note pending provenance-sheet verification.";
}

function renderDocumentCandidates() {
  if (!documentsRoot || !documentSummary) return;
  const candidates = sortedDocumentCandidates();
  const estimatedPages = candidates.reduce((sum, item) => sum + item.estimatedPages, 0);
  documentSummary.textContent = `${candidates.length} candidates in chronological order; about ${estimatedPages} review-PDF pages if each extract keeps its provenance sheet.`;

  documentsRoot.replaceChildren(
    ...candidates.map((candidate, index) => {
      const source = sourceById(candidate.sourceId);
      const card = document.createElement("article");
      card.className = "document-card";

      const number = document.createElement("div");
      number.className = "document-number";
      number.textContent = String(index + 1).padStart(2, "0");

      const body = document.createElement("div");
      body.className = "document-body";

      const meta = document.createElement("div");
      meta.className = "document-meta";
      meta.append(
        createChip(formatDate(candidate.date)),
        createChip(source?.title || "Clinton Library PDF"),
        createChip(candidate.posture),
        createChip(`${candidate.estimatedPages} pp. est.`)
      );

      const title = document.createElement("h3");
      title.textContent = candidate.title;

      const why = document.createElement("p");
      why.textContent = candidate.why;

      const sourceNote = document.createElement("p");
      sourceNote.className = "document-source-note";
      sourceNote.textContent = candidateSourceNote(candidate);

      const details = document.createElement("dl");
      details.className = "document-details";
      for (const [label, value] of [
        ["Source PDF pages", candidate.sourcePages],
        ["Document pages", candidate.documentPages],
        ["Provenance sheet", candidate.provenancePage],
        ["Review PDF order", `pp. ${candidate.documentPages}, then p. ${candidate.provenancePage}`]
      ]) {
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        row.append(dt, dd);
        details.append(row);
      }

      const actions = document.createElement("div");
      actions.className = "document-actions";
      const itemLink = document.createElement("a");
      itemLink.className = "button secondary";
      itemLink.href = source?.url || "#sources";
      itemLink.rel = "noreferrer";
      itemLink.textContent = "Item page";
      actions.append(itemLink);

      const pdfUrl = sourcePdfUrls[candidate.sourceId];
      if (pdfUrl) {
        const pdfLink = document.createElement("a");
        pdfLink.className = "button secondary";
        pdfLink.href = pdfUrl;
        pdfLink.rel = "noreferrer";
        pdfLink.textContent = "Source PDF";
        actions.append(pdfLink);
      }

      body.append(meta, title, why, sourceNote, details, actions);
      card.append(number, body);
      return card;
    })
  );
}

function renderChronology() {
  const root = document.querySelector("#chronology-root");
  if (!root) return;
  root.replaceChildren(
    ...chronology.map((item) => {
      const row = document.createElement("article");
      row.className = "timeline-item";

      const date = document.createElement("div");
      date.className = "timeline-date";
      date.textContent = item.date;

      const body = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = item.title;
      const detail = document.createElement("p");
      detail.textContent = item.detail;
      body.append(title, detail);

      row.append(date, body);
      return row;
    })
  );
}

function sourceById(id) {
  return sources.find((source) => source.id === id);
}

function renderQueue() {
  const root = document.querySelector("#queue-root");
  if (!root) return;
  root.replaceChildren(
    ...queueItems.map((queue) => {
      const source = sourceById(queue.sourceId);
      const item = document.createElement("article");
      item.className = "queue-item";

      const body = document.createElement("div");
      const meta = document.createElement("div");
      meta.className = "meta";
      meta.textContent = queue.priority === "first" ? "First pull" : "Second pass";

      const title = document.createElement("h3");
      title.textContent = queue.title;

      const why = document.createElement("p");
      why.textContent = queue.why;

      const list = document.createElement("ul");
      for (const step of queue.steps) {
        const li = document.createElement("li");
        li.textContent = step;
        list.append(li);
      }

      body.append(meta, title, why, list);

      const link = document.createElement("a");
      link.className = "button secondary";
      link.href = source?.url || "#sources";
      link.rel = "noreferrer";
      link.textContent = "Open";

      item.append(body, link);
      return item;
    })
  );
}

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
    if (button) {
      const original = button.textContent;
      button.textContent = "Copied";
      button.dataset.copied = "true";
      window.setTimeout(() => {
        button.textContent = original;
        delete button.dataset.copied;
      }, 1300);
    }
  } catch {
    window.prompt("Copy this text", text);
  }
}

function renderRecipes() {
  const root = document.querySelector("#recipes-root");
  if (!root) return;
  root.replaceChildren(
    ...recipes.map((recipe) => {
      const card = document.createElement("article");
      card.className = "recipe-card";

      const title = document.createElement("h3");
      title.textContent = recipe.title;

      const target = document.createElement("p");
      target.textContent = `Target: ${recipe.target}`;

      const code = document.createElement("code");
      code.textContent = recipe.query;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "Copy query";
      button.addEventListener("click", () => copyText(recipe.query, button));

      card.append(title, target, code, button);
      return card;
    })
  );
}

function renderBoundaries() {
  const root = document.querySelector("#boundaries-root");
  if (!root) return;
  root.replaceChildren(
    ...boundaries.map((boundary) => {
      const card = document.createElement("article");
      card.className = "boundary-card";

      const label = document.createElement("span");
      label.textContent = "Boundary check";

      const title = document.createElement("h3");
      title.textContent = boundary.title;

      const rule = document.createElement("p");
      rule.textContent = boundary.rule;

      const list = document.createElement("ul");
      for (const test of boundary.tests) {
        const item = document.createElement("li");
        item.textContent = test;
        list.append(item);
      }

      card.append(label, title, rule, list);
      return card;
    })
  );
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function downloadSourcesCsv() {
  const fields = ["id", "title", "repository", "lane", "priority", "period", "status", "url", "coverage", "useFor", "trackingNote"];
  const rows = [fields.join(",")];
  for (const source of filteredSources()) {
    rows.push(fields.map((field) => csvEscape(source[field])).join(","));
  }
  const blob = new Blob([`${rows.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "frus-1993-2000-v14-public-diplomacy-sources.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadDocumentsCsv() {
  const fields = [
    "date",
    "title",
    "source",
    "itemUrl",
    "sourcePdfUrl",
    "sourcePages",
    "documentPages",
    "provenancePage",
    "sourceNote",
    "estimatedPages",
    "posture",
    "why"
  ];
  const rows = [fields.join(",")];
  for (const candidate of sortedDocumentCandidates()) {
    const source = sourceById(candidate.sourceId);
    const row = {
      ...candidate,
      source: source?.title || candidate.sourceId,
      itemUrl: source?.url || "",
      sourcePdfUrl: sourcePdfUrls[candidate.sourceId] || "",
      sourceNote: candidateSourceNote(candidate)
    };
    rows.push(fields.map((field) => csvEscape(row[field])).join(","));
  }
  const blob = new Blob([`${rows.join("\n")}\n`], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "frus-1993-2000-v14-public-diplomacy-document-candidates.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function compilerHandoffText() {
  const firstPull = queueItems.map((item, index) => `${index + 1}. ${item.title}`).join("\n");
  const topDocuments = sortedDocumentCandidates()
    .slice(0, 10)
    .map((item, index) => `${index + 1}. ${formatDate(item.date)} - ${item.title} (${item.estimatedPages} pp. est.; source pp. ${item.sourcePages}; append provenance p. ${item.provenancePage})`)
    .join("\n");
  return [
    "FRUS 1993-2000, Volume XIV: Public Diplomacy",
    "Assist page: " + new URL(".", window.location.href).href,
    "Official volume: https://history.state.gov/historicaldocuments/frus1993-00v14",
    "Official status: Planned, per the Office of the Historian status page.",
    "",
    "Start order:",
    firstPull,
    "",
    "Potential document candidates:",
    topDocuments,
    "",
    "PDF extraction rule: slice the document pages first, then append the listed Clinton Library Withdrawal/Redaction Sheet as the final page of the review PDF.",
    "",
    "Review rule: keep the page source-first. Item IDs and URLs are tracking fields; finished source notes need repository, collection, series, file unit, classification, and release facts.",
    "",
    "Boundary rule: public diplomacy records can touch regional and functional crises, but policy decisions belong in the adjacent FRUS volume unless audience strategy or information policy is the document's point."
  ].join("\n");
}

function bindControls() {
  fillSelect(repositoryFilter, uniqueValues(sources, "repository"), "All repositories");
  fillSelect(laneFilter, uniqueValues(sources, "lane"), "All lanes");

  for (const control of [sourceSearch, repositoryFilter, laneFilter, priorityFilter]) {
    control?.addEventListener("input", renderSources);
    control?.addEventListener("change", renderSources);
  }

  document.querySelector("#clear-filters")?.addEventListener("click", () => {
    if (sourceSearch) sourceSearch.value = "";
    if (repositoryFilter) repositoryFilter.value = "";
    if (laneFilter) laneFilter.value = "";
    if (priorityFilter) priorityFilter.value = "";
    renderSources();
  });

  document.querySelector("#download-sources")?.addEventListener("click", downloadSourcesCsv);
  document.querySelector("#download-documents")?.addEventListener("click", downloadDocumentsCsv);

  document.querySelector("#source-note-skeleton").textContent = sourceNoteSkeleton;
  document.querySelector("#copy-source-note")?.addEventListener("click", (event) => {
    copyText(sourceNoteSkeleton, event.currentTarget);
  });

  document.querySelector("[data-compiler-handoff]")?.addEventListener("click", (event) => {
    copyText(compilerHandoffText(), event.currentTarget);
  });
}

function init() {
  renderStats();
  renderLanes();
  bindControls();
  renderSources();
  renderDocumentCandidates();
  renderChronology();
  renderQueue();
  renderRecipes();
  renderBoundaries();
}

init();
