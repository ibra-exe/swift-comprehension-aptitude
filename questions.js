/* ============================================================================
 * QUESTION BANK  -  Saville "Swift Comprehension" Aptitude practice
 * ============================================================================
 *
 * HOW THIS FILE WORKS
 * -------------------
 * `QUESTIONS` is a flat array of question objects. Each object is ONE screen in
 * the app. You can add as many as you like without touching app.js - the app
 * reads everything from here.
 *
 * COMMON FIELDS (every question)
 *   id          string   Unique id, e.g. "num-13". Used internally only.
 *   section     string   "verbal" | "numerical" | "error"
 *   topic       string   Fine-grained tag, used to flag your weakest areas:
 *                          numerical: "percentage-change" | "average" |
 *                                     "share" | "forward-percentage" | "ratio"
 *                          verbal:    "verbal"
 *                          error:     "error-checking"
 *   stimulus    object   The thing you read (shape depends on section, below).
 *   question    string   The question / statement text.
 *   options     string[] The selectable answers.
 *   answer      string   MUST exactly equal one of `options`.
 *   explanation string   Shown in review. Use real line breaks ("\n") for
 *                        numerical working - they are preserved on screen.
 *
 * STIMULUS SHAPES
 *   verbal:     { passage: "…long text…" }
 *   numerical:  { table: { title, note?, columns: [..], rows: [[..],[..]] } }
 *   error:      { recordTitle, fields: [ { label, original, copied } ] }
 *
 * OPTIONS / KEYBOARD CONVENTIONS
 *   verbal:  options are ALWAYS ["True","False","Cannot Say"]  (keys T/F/C or 1/2/3)
 *   error:   options are ALWAYS ["Correct","Error"]            (keys C/E or 1/2)
 *   numerical: exactly 4 options                               (keys 1/2/3/4)
 *
 * TIP: Verbal statements and numerical questions can share one stimulus - just
 * copy the same `stimulus` block onto each question. Consecutive questions that
 * share an identical passage/table will be presented as a set.
 * ========================================================================== */

const QUESTIONS = [

  /* ====================================================================== */
  /* VERBAL REASONING                                                        */
  /* True / False / Cannot Say - judged ONLY on the passage.                 */
  /* ====================================================================== */

  // ---- Passage 1: Hybrid working ----------------------------------------
  {
    id: "verb-01",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "Meridian Consulting introduced a hybrid working policy in 2022, requiring staff to attend the office on at least two days each week. The policy was initially trialled with the marketing department before being rolled out company-wide. Internal surveys conducted six months after the full rollout showed that 68% of employees reported higher job satisfaction, although the report noted that productivity metrics remained broadly unchanged. Senior management has stated that the policy will be reviewed annually."
    },
    question: "Meridian Consulting requires staff to attend the office at least twice a week.",
    options: ["True", "False", "Cannot Say"],
    answer: "True",
    explanation:
      "The passage states the policy requires staff to attend the office on \"at least two days each week\" and that it was rolled out company-wide. This directly supports the statement."
  },
  {
    id: "verb-02",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "Meridian Consulting introduced a hybrid working policy in 2022, requiring staff to attend the office on at least two days each week. The policy was initially trialled with the marketing department before being rolled out company-wide. Internal surveys conducted six months after the full rollout showed that 68% of employees reported higher job satisfaction, although the report noted that productivity metrics remained broadly unchanged. Senior management has stated that the policy will be reviewed annually."
    },
    question: "The hybrid policy was first trialled in the sales department.",
    options: ["True", "False", "Cannot Say"],
    answer: "False",
    explanation:
      "The passage says the policy was \"initially trialled with the marketing department\", not sales. The statement contradicts the text, so it is False."
  },
  {
    id: "verb-03",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "Meridian Consulting introduced a hybrid working policy in 2022, requiring staff to attend the office on at least two days each week. The policy was initially trialled with the marketing department before being rolled out company-wide. Internal surveys conducted six months after the full rollout showed that 68% of employees reported higher job satisfaction, although the report noted that productivity metrics remained broadly unchanged. Senior management has stated that the policy will be reviewed annually."
    },
    question: "After the rollout, productivity rose noticeably.",
    options: ["True", "False", "Cannot Say"],
    answer: "False",
    explanation:
      "The report \"noted that productivity metrics remained broadly unchanged\". Claiming productivity rose noticeably contradicts the passage, so it is False. (Note: it was job satisfaction, not productivity, that improved.)"
  },
  {
    id: "verb-04",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "Meridian Consulting introduced a hybrid working policy in 2022, requiring staff to attend the office on at least two days each week. The policy was initially trialled with the marketing department before being rolled out company-wide. Internal surveys conducted six months after the full rollout showed that 68% of employees reported higher job satisfaction, although the report noted that productivity metrics remained broadly unchanged. Senior management has stated that the policy will be reviewed annually."
    },
    question: "Meridian Consulting plans to extend the policy to its overseas offices.",
    options: ["True", "False", "Cannot Say"],
    answer: "Cannot Say",
    explanation:
      "The passage never mentions overseas offices or any plan to extend the policy geographically. There is no textual basis to confirm or deny this - so the answer is Cannot Say."
  },

  // ---- Passage 2: GreenLeaf Logistics -----------------------------------
  {
    id: "verb-05",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "GreenLeaf Logistics reported revenue of £4.2 million in the last financial year, an increase on the previous year. The company attributed much of its growth to a new contract with a national supermarket chain. Despite the rise in revenue, operating costs also grew, driven largely by higher fuel prices. The board has approved a plan to invest in a fleet of electric vehicles, expecting to reduce fuel expenditure over the next five years."
    },
    question: "GreenLeaf Logistics earned more revenue last year than in the previous year.",
    options: ["True", "False", "Cannot Say"],
    answer: "True",
    explanation:
      "The passage states revenue of £4.2 million was \"an increase on the previous year\". This directly supports the statement, so it is True."
  },
  {
    id: "verb-06",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "GreenLeaf Logistics reported revenue of £4.2 million in the last financial year, an increase on the previous year. The company attributed much of its growth to a new contract with a national supermarket chain. Despite the rise in revenue, operating costs also grew, driven largely by higher fuel prices. The board has approved a plan to invest in a fleet of electric vehicles, expecting to reduce fuel expenditure over the next five years."
    },
    question: "The new supermarket contract was the only reason for the company's growth.",
    options: ["True", "False", "Cannot Say"],
    answer: "False",
    explanation:
      "The passage says the company attributed \"much of its growth\" to the contract - \"much of\" implies other contributing factors. Claiming it was the ONLY reason overstates the text, so it is False."
  },
  {
    id: "verb-07",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "GreenLeaf Logistics reported revenue of £4.2 million in the last financial year, an increase on the previous year. The company attributed much of its growth to a new contract with a national supermarket chain. Despite the rise in revenue, operating costs also grew, driven largely by higher fuel prices. The board has approved a plan to invest in a fleet of electric vehicles, expecting to reduce fuel expenditure over the next five years."
    },
    question: "Higher fuel prices contributed to rising operating costs.",
    options: ["True", "False", "Cannot Say"],
    answer: "True",
    explanation:
      "The passage states operating costs \"grew, driven largely by higher fuel prices\". This directly supports the statement, so it is True."
  },
  {
    id: "verb-08",
    section: "verbal",
    topic: "verbal",
    stimulus: {
      passage:
        "GreenLeaf Logistics reported revenue of £4.2 million in the last financial year, an increase on the previous year. The company attributed much of its growth to a new contract with a national supermarket chain. Despite the rise in revenue, operating costs also grew, driven largely by higher fuel prices. The board has approved a plan to invest in a fleet of electric vehicles, expecting to reduce fuel expenditure over the next five years."
    },
    question: "GreenLeaf Logistics operates in more than one country.",
    options: ["True", "False", "Cannot Say"],
    answer: "Cannot Say",
    explanation:
      "The passage gives no information about where GreenLeaf operates geographically. It cannot be confirmed or denied from the text - so the answer is Cannot Say. (The reference to a 'national' supermarket chain describes the customer, not GreenLeaf's own footprint.)"
  },

  /* ====================================================================== */
  /* NUMERICAL REASONING                                                     */
  /* Calculator allowed. Each explanation shows full working.                */
  /* ====================================================================== */

  // ---- Table A: Departmental spend --------------------------------------
  // Shared stimulus for num-01 .. num-05
  // columns: Department, Q1, Q2, Q3, Q4   (values in £000s)
  {
    id: "num-01",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Departmental Spend (£000s)",
        note: "All figures in thousands of pounds.",
        columns: ["Department", "Q1", "Q2", "Q3", "Q4"],
        rows: [
          ["Marketing", "120", "138", "132", "150"],
          ["Sales", "200", "210", "231", "240"],
          ["IT", "90", "99", "108", "120"],
          ["HR", "60", "63", "66", "72"],
          ["Operations", "150", "144", "162", "180"]
        ]
      }
    },
    question: "By what percentage did Marketing spend change from Q1 to Q2?",
    options: ["15%", "18%", "13%", "12.5%"],
    answer: "15%",
    explanation:
      "Identify the cells:\n  Marketing Q1 = £120k, Q2 = £138k\n\nFormula for percentage change:\n  (new − original) ÷ original × 100\n\nCalculation:\n  (138 − 120) ÷ 120 × 100\n  = 18 ÷ 120 × 100\n  = 0.15 × 100\n  = 15%\n\nTrap: dividing by the NEW value (18 ÷ 138 = 13%) is the classic mistake. Always divide by the ORIGINAL."
  },
  {
    id: "num-02",
    section: "numerical",
    topic: "average",
    stimulus: {
      table: {
        title: "Departmental Spend (£000s)",
        note: "All figures in thousands of pounds.",
        columns: ["Department", "Q1", "Q2", "Q3", "Q4"],
        rows: [
          ["Marketing", "120", "138", "132", "150"],
          ["Sales", "200", "210", "231", "240"],
          ["IT", "90", "99", "108", "120"],
          ["HR", "60", "63", "66", "72"],
          ["Operations", "150", "144", "162", "180"]
        ]
      }
    },
    question: "What was the average (mean) quarterly Sales spend across the four quarters?",
    options: ["£220,250", "£220,000", "£293,667", "£176,200"],
    answer: "£220,250",
    explanation:
      "Identify the cells:\n  Sales Q1–Q4 = 200, 210, 231, 240 (£000s)\n\nFormula for the mean:\n  sum of values ÷ number of values\n\nCalculation:\n  200 + 210 + 231 + 240 = 881\n  881 ÷ 4 = 220.25 (£000s)\n  = £220,250\n\nRemember the figures are in thousands, so 220.25 × 1000 = £220,250."
  },
  {
    id: "num-03",
    section: "numerical",
    topic: "share",
    stimulus: {
      table: {
        title: "Departmental Spend (£000s)",
        note: "All figures in thousands of pounds.",
        columns: ["Department", "Q1", "Q2", "Q3", "Q4"],
        rows: [
          ["Marketing", "120", "138", "132", "150"],
          ["Sales", "200", "210", "231", "240"],
          ["IT", "90", "99", "108", "120"],
          ["HR", "60", "63", "66", "72"],
          ["Operations", "150", "144", "162", "180"]
        ]
      }
    },
    question: "In Q4, what share of total departmental spend did IT account for?",
    options: ["15.7%", "16.7%", "12.0%", "18.9%"],
    answer: "15.7%",
    explanation:
      "Identify the cells (all Q4 figures):\n  Marketing 150, Sales 240, IT 120, HR 72, Operations 180\n\nFormula for share of whole:\n  part ÷ total × 100\n\nCalculation:\n  Total Q4 = 150 + 240 + 120 + 72 + 180 = 762\n  IT share = 120 ÷ 762 × 100\n  = 0.1575 × 100\n  = 15.7% (to 1 d.p.)"
  },
  {
    id: "num-04",
    section: "numerical",
    topic: "ratio",
    stimulus: {
      table: {
        title: "Departmental Spend (£000s)",
        note: "All figures in thousands of pounds.",
        columns: ["Department", "Q1", "Q2", "Q3", "Q4"],
        rows: [
          ["Marketing", "120", "138", "132", "150"],
          ["Sales", "200", "210", "231", "240"],
          ["IT", "90", "99", "108", "120"],
          ["HR", "60", "63", "66", "72"],
          ["Operations", "150", "144", "162", "180"]
        ]
      }
    },
    question: "What is the ratio of HR spend to Marketing spend in Q1, in simplest form?",
    options: ["1:2", "2:1", "1:3", "3:5"],
    answer: "1:2",
    explanation:
      "Identify the cells:\n  HR Q1 = 60, Marketing Q1 = 120\n\nWrite the ratio:\n  60 : 120\n\nSimplify by dividing both sides by the highest common factor (60):\n  60 ÷ 60 : 120 ÷ 60\n  = 1 : 2\n\nOrder matters: HR is named first, so HR : Marketing = 1 : 2 (not 2 : 1)."
  },
  {
    id: "num-05",
    section: "numerical",
    topic: "forward-percentage",
    stimulus: {
      table: {
        title: "Departmental Spend (£000s)",
        note: "All figures in thousands of pounds.",
        columns: ["Department", "Q1", "Q2", "Q3", "Q4"],
        rows: [
          ["Marketing", "120", "138", "132", "150"],
          ["Sales", "200", "210", "231", "240"],
          ["IT", "90", "99", "108", "120"],
          ["HR", "60", "63", "66", "72"],
          ["Operations", "150", "144", "162", "180"]
        ]
      }
    },
    question: "If Operations spend is forecast to rise by 12% from its Q4 level, what is the forecast figure?",
    options: ["£201,600", "£199,600", "£158,400", "£216,000"],
    answer: "£201,600",
    explanation:
      "Identify the cell:\n  Operations Q4 = £180k\n\nFormula for a forward percentage increase:\n  original × (1 + rate)\n\nCalculation:\n  180 × (1 + 0.12)\n  = 180 × 1.12\n  = 201.6 (£000s)\n  = £201,600\n\nTrap: subtracting 12% (180 × 0.88 = 158.4 → £158,400) applies the change in the wrong direction."
  },

  // ---- Table B: Software licensing --------------------------------------
  // columns: Tool, Users, Cost per User (£/yr)
  {
    id: "num-06",
    section: "numerical",
    topic: "share",
    stimulus: {
      table: {
        title: "Annual Software Licensing",
        note: "Annual cost per tool = Users × Cost per User.",
        columns: ["Tool", "Users", "Cost per User (£/yr)"],
        rows: [
          ["CRM", "150", "240"],
          ["Design Suite", "40", "600"],
          ["Analytics", "25", "480"],
          ["Comms", "320", "90"],
          ["Security", "200", "150"]
        ]
      }
    },
    question: "What share of total annual licensing cost does the CRM tool represent?",
    options: ["27.5%", "30.0%", "24.0%", "36.0%"],
    answer: "27.5%",
    explanation:
      "Step 1 – annual cost per tool (Users × Cost per User):\n  CRM          150 × 240 = £36,000\n  Design Suite  40 × 600 = £24,000\n  Analytics     25 × 480 = £12,000\n  Comms        320 ×  90 = £28,800\n  Security     200 × 150 = £30,000\n\nStep 2 – total:\n  36,000 + 24,000 + 12,000 + 28,800 + 30,000 = £130,800\n\nStep 3 – share of whole (part ÷ total × 100):\n  36,000 ÷ 130,800 × 100 = 27.5%"
  },
  {
    id: "num-07",
    section: "numerical",
    topic: "ratio",
    stimulus: {
      table: {
        title: "Annual Software Licensing",
        note: "Annual cost per tool = Users × Cost per User.",
        columns: ["Tool", "Users", "Cost per User (£/yr)"],
        rows: [
          ["CRM", "150", "240"],
          ["Design Suite", "40", "600"],
          ["Analytics", "25", "480"],
          ["Comms", "320", "90"],
          ["Security", "200", "150"]
        ]
      }
    },
    question: "What is the ratio of Design Suite users to Analytics users, in simplest form?",
    options: ["8:5", "5:8", "8:3", "2:1"],
    answer: "8:5",
    explanation:
      "Identify the cells:\n  Design Suite users = 40, Analytics users = 25\n\nWrite the ratio:\n  40 : 25\n\nSimplify by dividing both sides by the highest common factor (5):\n  40 ÷ 5 : 25 ÷ 5\n  = 8 : 5\n\nOrder matters: Design Suite is named first, so the answer is 8 : 5."
  },
  {
    id: "num-08",
    section: "numerical",
    topic: "forward-percentage",
    stimulus: {
      table: {
        title: "Annual Software Licensing",
        note: "Annual cost per tool = Users × Cost per User.",
        columns: ["Tool", "Users", "Cost per User (£/yr)"],
        rows: [
          ["CRM", "150", "240"],
          ["Design Suite", "40", "600"],
          ["Analytics", "25", "480"],
          ["Comms", "320", "90"],
          ["Security", "200", "150"]
        ]
      }
    },
    question: "After a renegotiation, the Security licence cost is cut by 15%. What is the new annual cost?",
    options: ["£25,500", "£34,500", "£25,000", "£4,500"],
    answer: "£25,500",
    explanation:
      "Step 1 – current Security cost (Users × Cost per User):\n  200 × 150 = £30,000\n\nStep 2 – apply a forward 15% decrease:\n  original × (1 − rate)\n  30,000 × (1 − 0.15)\n  = 30,000 × 0.85\n  = £25,500\n\nTrap: £4,500 is just the 15% reduction amount (30,000 × 0.15), not the new total. The question asks for the new cost."
  },

  // ---- Table C: Project timelines ---------------------------------------
  // columns: Project, Planned Days, Actual Days, Team Size
  {
    id: "num-09",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Project Delivery Summary",
        columns: ["Project", "Planned Days", "Actual Days", "Team Size"],
        rows: [
          ["Apollo", "60", "72", "8"],
          ["Boreas", "45", "40", "5"],
          ["Cronus", "90", "99", "12"],
          ["Delos", "30", "36", "4"]
        ]
      }
    },
    question: "By what percentage did Apollo overrun its planned duration?",
    options: ["20%", "16.7%", "12%", "18%"],
    answer: "20%",
    explanation:
      "Identify the cells:\n  Apollo planned = 60 days, actual = 72 days\n\nFormula for percentage change:\n  (actual − planned) ÷ planned × 100\n\nCalculation:\n  (72 − 60) ÷ 60 × 100\n  = 12 ÷ 60 × 100\n  = 20%\n\nTrap: dividing by the actual value (12 ÷ 72 = 16.7%) uses the wrong base. % change is always relative to the ORIGINAL (planned)."
  },
  {
    id: "num-10",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Project Delivery Summary",
        columns: ["Project", "Planned Days", "Actual Days", "Team Size"],
        rows: [
          ["Apollo", "60", "72", "8"],
          ["Boreas", "45", "40", "5"],
          ["Cronus", "90", "99", "12"],
          ["Delos", "30", "36", "4"]
        ]
      }
    },
    question: "Boreas finished ahead of plan. By approximately what percentage was it under its planned duration?",
    options: ["11% under", "12.5% under", "5% under", "11% over"],
    answer: "11% under",
    explanation:
      "Identify the cells:\n  Boreas planned = 45 days, actual = 40 days\n\nFormula for percentage change:\n  (actual − planned) ÷ planned × 100\n\nCalculation:\n  (40 − 45) ÷ 45 × 100\n  = −5 ÷ 45 × 100\n  = −11.1%\n\nThe negative sign means it came in UNDER plan, so ≈ 11% under. Trap: 12.5% comes from dividing by 40 (the new value) instead of 45."
  },
  {
    id: "num-11",
    section: "numerical",
    topic: "average",
    stimulus: {
      table: {
        title: "Project Delivery Summary",
        columns: ["Project", "Planned Days", "Actual Days", "Team Size"],
        rows: [
          ["Apollo", "60", "72", "8"],
          ["Boreas", "45", "40", "5"],
          ["Cronus", "90", "99", "12"],
          ["Delos", "30", "36", "4"]
        ]
      }
    },
    question: "What is the average (mean) team size across the four projects?",
    options: ["7.25", "7", "29", "6.5"],
    answer: "7.25",
    explanation:
      "Identify the cells:\n  Team sizes = 8, 5, 12, 4\n\nFormula for the mean:\n  sum of values ÷ number of values\n\nCalculation:\n  8 + 5 + 12 + 4 = 29\n  29 ÷ 4 = 7.25\n\nTrap: 29 is the total, not the average. Always divide by the count (4)."
  },
  {
    id: "num-12",
    section: "numerical",
    topic: "forward-percentage",
    stimulus: {
      table: {
        title: "Project Delivery Summary",
        columns: ["Project", "Planned Days", "Actual Days", "Team Size"],
        rows: [
          ["Apollo", "60", "72", "8"],
          ["Boreas", "45", "40", "5"],
          ["Cronus", "90", "99", "12"],
          ["Delos", "30", "36", "4"]
        ]
      }
    },
    question: "A follow-on phase for Cronus is expected to take 10% longer than its actual duration. How many days is that?",
    options: ["108.9 days", "110 days", "89.1 days", "108 days"],
    answer: "108.9 days",
    explanation:
      "Identify the cell:\n  Cronus actual = 99 days\n\nFormula for a forward percentage increase:\n  original × (1 + rate)\n\nCalculation:\n  99 × (1 + 0.10)\n  = 99 × 1.10\n  = 108.9 days\n\nTrap: 89.1 days (99 × 0.90) applies a 10% DECREASE. The phase is expected to take longer, so multiply by 1.10."
  },

  /* ====================================================================== */
  /* LOGICAL REASONING / ERROR CHECKING                                     */
  /* Compare an original record to a copied one; mark Correct or Error.      */
  /* Error types seeded: transposed digits, single wrong character,         */
  /* transposed letters.                                                    */
  /* ====================================================================== */

  {
    id: "err-01",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Supplier Invoice",
      fields: [
        { label: "Invoice No", original: "INV-48217", copied: "INV-48217" },
        { label: "Supplier", original: "Harper & Co", copied: "Harper & Co" },
        { label: "Amount", original: "£3,420.50", copied: "£3,420.50" },
        { label: "Due Date", original: "14/03/2024", copied: "14/03/2024" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "Every field matches the original exactly:\n  Invoice No, Supplier, Amount and Due Date are all identical.\nThis copy is Correct."
  },
  {
    id: "err-02",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Employee Record",
      fields: [
        { label: "Employee ID", original: "700493", copied: "700943" },
        { label: "Name", original: "Priya Nair", copied: "Priya Nair" },
        { label: "Department", original: "Finance", copied: "Finance" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Employee ID (transposed digits):\n  Original: 7004 9 3\n  Copied:  7009 4 3\nThe '9' and '4' have swapped places (...493 vs ...943). This is Error."
  },
  {
    id: "err-03",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Contact Card",
      fields: [
        { label: "Name", original: "James Thompson", copied: "James Thompson" },
        { label: "Email", original: "j.thompson@meridian.co.uk", copied: "j.thomspon@meridian.co.uk" },
        { label: "Phone", original: "020 7946 0521", copied: "020 7946 0521" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Email (transposed letters):\n  Original: j.thom-ps-on@...\n  Copied:  j.thom-sp-on@...\nThe 'p' and 's' have swapped (thompson vs thomspon). This is Error."
  },
  {
    id: "err-04",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Bank Detail",
      fields: [
        { label: "Account", original: "8841-2207", copied: "8841-2207" },
        { label: "Sort Code", original: "20-45-19", copied: "20-45-19" },
        { label: "Balance", original: "£12,640.00", copied: "£12,640.00" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "All three fields - Account, Sort Code and Balance - match the original exactly. This copy is Correct."
  },
  {
    id: "err-05",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Product Listing",
      fields: [
        { label: "SKU", original: "QX-9043-T", copied: "QX-9043-T" },
        { label: "Name", original: "Ergonomic Chair", copied: "Ergonomic Chair" },
        { label: "Unit Price", original: "£149.99", copied: "£149.99" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "SKU, Name and Unit Price all match the original character-for-character. This copy is Correct."
  },
  {
    id: "err-06",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Customer Contact",
      fields: [
        { label: "Name", original: "Sofia Marchetti", copied: "Sofia Marchetti" },
        { label: "Phone", original: "020 7946 0521", copied: "020 7946 0251" },
        { label: "City", original: "Manchester", copied: "Manchester" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Phone number (transposed digits):\n  Original: 020 7946 0 5 21\n  Copied:  020 7946 0 2 51\nThe '5' and '2' after the space have swapped (0521 vs 0251). This is Error."
  },
  {
    id: "err-07",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Project Allocation",
      fields: [
        { label: "Project", original: "Apollo", copied: "Apollo" },
        { label: "Lead", original: "Catherine Bell", copied: "Catherine Bell" },
        { label: "Budget", original: "£85,000", copied: "£85,000" },
        { label: "Start", original: "07/11/2023", copied: "07/11/2023" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "Project, Lead, Budget and Start date all match the original exactly. This copy is Correct."
  },
  {
    id: "err-08",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Payment Record",
      fields: [
        { label: "Reference", original: "PAY-3318", copied: "PAY-3318" },
        { label: "Payee", original: "Nordic Supplies Ltd", copied: "Nordic Supplies Ltd" },
        { label: "Amount", original: "£1,250,000", copied: "£1,520,000" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Amount (transposed digits):\n  Original: £1, 2 5 0,000\n  Copied:  £1, 5 2 0,000\nThe '2' and '5' have swapped - changing the value by a quarter of a million pounds. This is Error."
  },
  {
    id: "err-09",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Staff Directory",
      fields: [
        { label: "Name", original: "Aleksander Nowak", copied: "Aleksandar Nowak" },
        { label: "Role", original: "Analyst", copied: "Analyst" },
        { label: "Extension", original: "4471", copied: "4471" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Name (single wrong character):\n  Original: Aleksand-e-r\n  Copied:  Aleksand-a-r\nThe 'e' has been replaced with an 'a' (Aleksander vs Aleksandar). This is Error."
  },
  {
    id: "err-10",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Asset Tag",
      fields: [
        { label: "Asset ID", original: "LAP-00731", copied: "LAP-00731" },
        { label: "Model", original: "Latitude 7440", copied: "Latitude 7440" },
        { label: "Assigned To", original: "H. Okafor", copied: "H. Okafor" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "Asset ID, Model and Assigned To all match the original exactly. This copy is Correct."
  },
  {
    id: "err-11",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Project Code",
      fields: [
        { label: "Reference", original: "PRJ-DELOS-0042", copied: "PRJ-DELOS-0024" },
        { label: "Owner", original: "Cronus Team", copied: "Cronus Team" },
        { label: "Status", original: "Active", copied: "Active" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Error",
    explanation:
      "Error in the Reference (transposed digits):\n  Original: PRJ-DELOS-00 4 2\n  Copied:  PRJ-DELOS-00 2 4\nThe final '4' and '2' have swapped (0042 vs 0024). This is Error."
  },
  {
    id: "err-12",
    section: "error",
    topic: "error-checking",
    stimulus: {
      recordTitle: "Licence Summary",
      fields: [
        { label: "Tool", original: "Analytics Pro", copied: "Analytics Pro" },
        { label: "Seats", original: "25", copied: "25" },
        { label: "Annual Cost", original: "£12,000", copied: "£12,000" },
        { label: "Renewal", original: "30/06/2024", copied: "30/06/2024" }
      ]
    },
    question: "Does the copied record exactly match the original?",
    options: ["Correct", "Error"],
    answer: "Correct",
    explanation:
      "Tool, Seats, Annual Cost and Renewal date all match the original exactly. This copy is Correct."
  },

  /* ======================================================================
   * REAL-STYLE QUESTIONS (modelled on the official Swift Comprehension)
   * ----------------------------------------------------------------------
   * These demonstrate the additional question styles the real test uses.
   * EXTRA SCHEMA used below (the app supports both old and new shapes):
   *
   *   Verbal can use ANY options (not just True/False/Cannot Say):
   *     - synonym-in-context: 4 word options
   *     - detail:             4 phrase options
   *     - True/False/"Not possible to say on the basis of the passage"
   *
   *   Numerical stimulus can be a CHART instead of a table:
   *     stimulus: { chart: { type:"pie", title, total, unit?,
   *                          data:[ { label, percent } ] } }
   *     Calculation questions typically have 5 options; chart judgments
   *     use True / False / Not possible to say.
   *
   *   Checking can be MULTI-SELECT (answer is an ARRAY). The original is a
   *   table (often with a coding key); a single re-entered row is checked
   *   against it, and the user selects every field that contains an error:
   *     stimulus: { check: { title, columns, rows, codingKey?, entryLabel?,
   *                          entry:[ ...values aligned to columns ] } }
   *     options: ["The entire item is correct",
   *               "There is an error in the <Column>", ...]
   *     answer:  ["There is an error in the <Column>", ...]  // [] of errors,
   *              or ["The entire item is correct"]
   * ==================================================================== */

  /* ---- Verbal: Passage A (Remote onboarding) ---------------------------- */
  {
    id: "verb-09",
    section: "verbal",
    topic: "verbal-synonym",
    stimulus: {
      passage:
        "Several organisations have redesigned their onboarding process so that new employees can complete much of it remotely. A typical remote onboarding programme provides digital copies of company policies, a series of recorded training modules, and scheduled video calls with a designated mentor. Advocates argue that this approach shortens the time taken to reach full productivity and reduces the administrative burden on HR teams. Critics, however, caution that remote onboarding can leave new starters feeling isolated, and that it relies heavily on employees having a reliable internet connection at home."
    },
    question: "Which one of the following would best replace 'designated' while keeping the meaning of the passage?",
    options: ["assigned", "removed", "optional", "senior"],
    answer: "assigned",
    explanation:
      "In the passage a 'designated mentor' is one who has been formally allocated to the new starter. 'Assigned' carries the same meaning. 'Removed' and 'optional' change the sense entirely, and 'senior' adds a meaning (seniority) the passage does not state."
  },
  {
    id: "verb-10",
    section: "verbal",
    topic: "verbal-detail",
    stimulus: {
      passage:
        "Several organisations have redesigned their onboarding process so that new employees can complete much of it remotely. A typical remote onboarding programme provides digital copies of company policies, a series of recorded training modules, and scheduled video calls with a designated mentor. Advocates argue that this approach shortens the time taken to reach full productivity and reduces the administrative burden on HR teams. Critics, however, caution that remote onboarding can leave new starters feeling isolated, and that it relies heavily on employees having a reliable internet connection at home."
    },
    question: "Which one of the following is NOT listed as part of a typical remote onboarding programme?",
    options: [
      "Digital copies of company policies",
      "Recorded training modules",
      "Scheduled video calls with a mentor",
      "A printed welcome pack"
    ],
    answer: "A printed welcome pack",
    explanation:
      "The passage lists three components: digital copies of company policies, recorded training modules, and scheduled video calls with a designated mentor. A printed welcome pack is never mentioned, so it is the correct answer to a 'NOT listed' question."
  },
  {
    id: "verb-11",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "Several organisations have redesigned their onboarding process so that new employees can complete much of it remotely. A typical remote onboarding programme provides digital copies of company policies, a series of recorded training modules, and scheduled video calls with a designated mentor. Advocates argue that this approach shortens the time taken to reach full productivity and reduces the administrative burden on HR teams. Critics, however, caution that remote onboarding can leave new starters feeling isolated, and that it relies heavily on employees having a reliable internet connection at home."
    },
    question: "Supporters say remote onboarding reduces the administrative burden on HR teams.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The passage states that advocates argue the approach 'reduces the administrative burden on HR teams'. The statement reports exactly that, so it is True on the basis of the passage."
  },
  {
    id: "verb-12",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "Several organisations have redesigned their onboarding process so that new employees can complete much of it remotely. A typical remote onboarding programme provides digital copies of company policies, a series of recorded training modules, and scheduled video calls with a designated mentor. Advocates argue that this approach shortens the time taken to reach full productivity and reduces the administrative burden on HR teams. Critics, however, caution that remote onboarding can leave new starters feeling isolated, and that it relies heavily on employees having a reliable internet connection at home."
    },
    question: "Most employees prefer remote onboarding to onboarding in an office.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "Not possible to say on the basis of the passage",
    explanation:
      "The passage gives arguments for and against remote onboarding but never reports any measure of employee preference between remote and office onboarding. There is no basis to judge the statement, so the answer is Not possible to say."
  },

  /* ---- Verbal: Passage B (Office energy use) ---------------------------- */
  {
    id: "verb-13",
    section: "verbal",
    topic: "verbal-synonym",
    stimulus: {
      passage:
        "Rising energy prices have prompted many firms to review how their offices consume electricity. One mid-sized company found that lighting and heating together accounted for the majority of its energy bill. After installing motion-activated lighting and improving the insulation of the building, the company reported a noticeable fall in consumption over the following winter. The facilities manager noted that the upfront cost of the changes was recovered within two years through lower bills."
    },
    question: "Which one of the following would best replace 'noticeable' while keeping the meaning of the passage?",
    options: ["significant", "slight", "temporary", "unexpected"],
    answer: "significant",
    explanation:
      "A 'noticeable fall' is one large enough to be clearly observed. 'Significant' preserves that sense. 'Slight' means the opposite, while 'temporary' and 'unexpected' introduce ideas (duration, surprise) the passage does not support."
  },
  {
    id: "verb-14",
    section: "verbal",
    topic: "verbal-detail",
    stimulus: {
      passage:
        "Rising energy prices have prompted many firms to review how their offices consume electricity. One mid-sized company found that lighting and heating together accounted for the majority of its energy bill. After installing motion-activated lighting and improving the insulation of the building, the company reported a noticeable fall in consumption over the following winter. The facilities manager noted that the upfront cost of the changes was recovered within two years through lower bills."
    },
    question: "Which one of the following changes did the company actually make?",
    options: [
      "Installed motion-activated lighting",
      "Fitted solar panels",
      "Replaced all the windows",
      "Switched energy supplier"
    ],
    answer: "Installed motion-activated lighting",
    explanation:
      "The passage states the company installed motion-activated lighting and improved the building's insulation. Solar panels, replacing windows and switching supplier are not mentioned, so only the lighting option is supported."
  },
  {
    id: "verb-15",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "Rising energy prices have prompted many firms to review how their offices consume electricity. One mid-sized company found that lighting and heating together accounted for the majority of its energy bill. After installing motion-activated lighting and improving the insulation of the building, the company reported a noticeable fall in consumption over the following winter. The facilities manager noted that the upfront cost of the changes was recovered within two years through lower bills."
    },
    question: "The cost of the changes was recovered within two years.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The facilities manager noted that 'the upfront cost of the changes was recovered within two years through lower bills'. The statement matches this directly, so it is True."
  },
  {
    id: "verb-16",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "Rising energy prices have prompted many firms to review how their offices consume electricity. One mid-sized company found that lighting and heating together accounted for the majority of its energy bill. After installing motion-activated lighting and improving the insulation of the building, the company reported a noticeable fall in consumption over the following winter. The facilities manager noted that the upfront cost of the changes was recovered within two years through lower bills."
    },
    question: "This company's energy bill is now the lowest in its industry.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "Not possible to say on the basis of the passage",
    explanation:
      "The passage describes a fall in this company's own consumption but makes no comparison with other companies in the industry. Without that comparison the claim cannot be judged, so the answer is Not possible to say."
  },

  /* ---- Numerical: pie chart (Departmental headcount) -------------------- */
  {
    id: "num-13",
    section: "numerical",
    topic: "read-off",
    stimulus: {
      chart: {
        type: "pie",
        title: "Departmental Headcount",
        total: 400,
        unit: "employees",
        data: [
          { label: "Engineering", percent: 35 },
          { label: "Sales", percent: 20 },
          { label: "Support", percent: 18 },
          { label: "Marketing", percent: 15 },
          { label: "Finance", percent: 12 }
        ]
      }
    },
    question: "Which department has the second-largest headcount?",
    options: ["Engineering", "Sales", "Support", "Marketing", "Finance"],
    answer: "Sales",
    explanation:
      "Read the percentages from the chart and rank them:\n  Engineering 35% (largest)\n  Sales 20% (second)\n  Support 18%, Marketing 15%, Finance 12%\n\nThe second-largest slice is Sales at 20%."
  },
  {
    id: "num-14",
    section: "numerical",
    topic: "share",
    stimulus: {
      chart: {
        type: "pie",
        title: "Departmental Headcount",
        total: 400,
        unit: "employees",
        data: [
          { label: "Engineering", percent: 35 },
          { label: "Sales", percent: 20 },
          { label: "Support", percent: 18 },
          { label: "Marketing", percent: 15 },
          { label: "Finance", percent: 12 }
        ]
      }
    },
    question: "How many employees work in Support?",
    options: ["18", "36", "72", "90", "180"],
    answer: "72",
    explanation:
      "Identify the value:\n  Support = 18% of the total of 400 employees\n\nFormula for a part of the whole:\n  percent ÷ 100 × total\n\nCalculation:\n  18 ÷ 100 × 400\n  = 0.18 × 400\n  = 72 employees\n\nTrap: '18' is just the percentage, not the number of people. Always apply it to the total (400)."
  },
  {
    id: "num-15",
    section: "numerical",
    topic: "ratio",
    stimulus: {
      chart: {
        type: "pie",
        title: "Departmental Headcount",
        total: 400,
        unit: "employees",
        data: [
          { label: "Engineering", percent: 35 },
          { label: "Sales", percent: 20 },
          { label: "Support", percent: 18 },
          { label: "Marketing", percent: 15 },
          { label: "Finance", percent: 12 }
        ]
      }
    },
    question: "What is the ratio of Marketing headcount to Finance headcount, in its simplest form?",
    options: ["5:4", "4:5", "3:2", "5:3", "6:5"],
    answer: "5:4",
    explanation:
      "Identify the values (the percentages are enough since both share the same total):\n  Marketing 15%, Finance 12%\n\nWrite the ratio and simplify:\n  15 : 12\n  divide both sides by 3\n  = 5 : 4\n\nOrder matters: Marketing is named first, so the answer is 5 : 4."
  },
  {
    id: "num-16",
    section: "numerical",
    topic: "numerical-inference",
    stimulus: {
      chart: {
        type: "pie",
        title: "Departmental Headcount",
        total: 400,
        unit: "employees",
        data: [
          { label: "Engineering", percent: 35 },
          { label: "Sales", percent: 20 },
          { label: "Support", percent: 18 },
          { label: "Marketing", percent: 15 },
          { label: "Finance", percent: 12 }
        ]
      }
    },
    question: "More than half of all employees work in either Engineering or Sales.",
    options: ["True", "False", "Not possible to say"],
    answer: "True",
    explanation:
      "Add the two relevant slices:\n  Engineering 35% + Sales 20% = 55%\n\n55% is more than half (50%), so the statement is True. (In headcount terms that is 140 + 80 = 220 of the 400 employees.)"
  },

  /* ---- Numerical: table with 5 options ---------------------------------- */
  {
    id: "num-17",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Software Spend by Team (£000s)",
        columns: ["Team", "2023", "2024"],
        rows: [
          ["Product", "80", "96"],
          ["Data", "50", "65"],
          ["Operations", "40", "38"],
          ["Sales", "60", "72"]
        ]
      }
    },
    question: "By what percentage did the Product team's spend change from 2023 to 2024?",
    options: ["16.7%", "17%", "20%", "25%", "80%"],
    answer: "20%",
    explanation:
      "Identify the cells:\n  Product 2023 = £80k, 2024 = £96k\n\nFormula for percentage change:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (96 - 80) ÷ 80 × 100\n  = 16 ÷ 80 × 100\n  = 20%\n\nTrap: dividing by the new value (16 ÷ 96 = 16.7%) uses the wrong base."
  },
  {
    id: "num-18",
    section: "numerical",
    topic: "average",
    stimulus: {
      table: {
        title: "Software Spend by Team (£000s)",
        columns: ["Team", "2023", "2024"],
        rows: [
          ["Product", "80", "96"],
          ["Data", "50", "65"],
          ["Operations", "40", "38"],
          ["Sales", "60", "72"]
        ]
      }
    },
    question: "What was the average (mean) 2024 spend across the four teams?",
    options: ["£54,200", "£67,000", "£67,750", "£90,333", "£271,000"],
    answer: "£67,750",
    explanation:
      "Identify the cells:\n  2024 spend = 96, 65, 38, 72 (£000s)\n\nFormula for the mean:\n  sum of values ÷ number of values\n\nCalculation:\n  96 + 65 + 38 + 72 = 271\n  271 ÷ 4 = 67.75 (£000s)\n  = £67,750\n\nTrap: £271,000 is the total, not the average."
  },

  /* ---- Checking: multi-select with coding key --------------------------- */
  {
    id: "chk-01",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Fleet Vehicle Log",
        columns: ["Driver", "Vehicle Reg", "Type", "Service Date"],
        rows: [
          ["Adam Price", "KP19 RTX", "S", "04/03"],
          ["Bola Adeyemi", "LM20 WGC", "V", "11/06"],
          ["Chen Wei", "NR21 BHT", "E", "22/09"],
          ["Dana Olsen", "GT18 KLM", "S", "30/01"]
        ],
        codingKey: "S = Saloon    V = Van    E = Electric",
        entryLabel: "Re-entered record",
        entry: ["Chen Wei", "NR21 BHT", "Electric", "22/09"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Driver",
      "There is an error in the Vehicle Reg",
      "There is an error in the Type",
      "There is an error in the Service Date"
    ],
    answer: ["The entire item is correct"],
    explanation:
      "Find the matching original row (Chen Wei) and compare each field:\n  Driver: Chen Wei = Chen Wei  (correct)\n  Vehicle Reg: NR21 BHT = NR21 BHT  (correct)\n  Type: code E = Electric, re-entered 'Electric'  (correct)\n  Service Date: 22/09 = 22/09  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-02",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Fleet Vehicle Log",
        columns: ["Driver", "Vehicle Reg", "Type", "Service Date"],
        rows: [
          ["Adam Price", "KP19 RTX", "S", "04/03"],
          ["Bola Adeyemi", "LM20 WGC", "V", "11/06"],
          ["Chen Wei", "NR21 BHT", "E", "22/09"],
          ["Dana Olsen", "GT18 KLM", "S", "30/01"]
        ],
        codingKey: "S = Saloon    V = Van    E = Electric",
        entryLabel: "Re-entered record",
        entry: ["Bola Adeyemi", "LM20 WGC", "Van", "11/09"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Driver",
      "There is an error in the Vehicle Reg",
      "There is an error in the Type",
      "There is an error in the Service Date"
    ],
    answer: ["There is an error in the Service Date"],
    explanation:
      "Matching original row (Bola Adeyemi):\n  Driver: Bola Adeyemi  (correct)\n  Vehicle Reg: LM20 WGC  (correct)\n  Type: code V = Van, re-entered 'Van'  (correct)\n  Service Date: original 11/06, re-entered 11/09  (ERROR - the month is wrong)\nOnly the Service Date contains an error."
  },
  {
    id: "chk-03",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Fleet Vehicle Log",
        columns: ["Driver", "Vehicle Reg", "Type", "Service Date"],
        rows: [
          ["Adam Price", "KP19 RTX", "S", "04/03"],
          ["Bola Adeyemi", "LM20 WGC", "V", "11/06"],
          ["Chen Wei", "NR21 BHT", "E", "22/09"],
          ["Dana Olsen", "GT18 KLM", "S", "30/01"]
        ],
        codingKey: "S = Saloon    V = Van    E = Electric",
        entryLabel: "Re-entered record",
        entry: ["Adam Pryce", "KP19 RTX", "Saloon", "04/08"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Driver",
      "There is an error in the Vehicle Reg",
      "There is an error in the Type",
      "There is an error in the Service Date"
    ],
    answer: [
      "There is an error in the Driver",
      "There is an error in the Service Date"
    ],
    explanation:
      "Matching original row (Adam Price):\n  Driver: original 'Adam Price', re-entered 'Adam Pryce'  (ERROR - surname misspelt)\n  Vehicle Reg: KP19 RTX  (correct)\n  Type: code S = Saloon, re-entered 'Saloon'  (correct)\n  Service Date: original 04/03, re-entered 04/08  (ERROR - the month is wrong)\nThere are two errors: the Driver and the Service Date."
  },
  {
    id: "chk-04",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Fleet Vehicle Log",
        columns: ["Driver", "Vehicle Reg", "Type", "Service Date"],
        rows: [
          ["Adam Price", "KP19 RTX", "S", "04/03"],
          ["Bola Adeyemi", "LM20 WGC", "V", "11/06"],
          ["Chen Wei", "NR21 BHT", "E", "22/09"],
          ["Dana Olsen", "GT18 KLM", "S", "30/01"]
        ],
        codingKey: "S = Saloon    V = Van    E = Electric",
        entryLabel: "Re-entered record",
        entry: ["Dana Olsen", "GT18 KLN", "Van", "30/01"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Driver",
      "There is an error in the Vehicle Reg",
      "There is an error in the Type",
      "There is an error in the Service Date"
    ],
    answer: [
      "There is an error in the Vehicle Reg",
      "There is an error in the Type"
    ],
    explanation:
      "Matching original row (Dana Olsen):\n  Driver: Dana Olsen  (correct)\n  Vehicle Reg: original 'GT18 KLM', re-entered 'GT18 KLN'  (ERROR - last letter changed)\n  Type: code S = Saloon, but re-entered 'Van'  (ERROR - wrong vehicle type after decoding)\n  Service Date: 30/01  (correct)\nThere are two errors: the Vehicle Reg and the Type."
  },

  /* ======================================================================
   * EXPANDED BANK (original content, modelled on the real test's formats)
   * ==================================================================== */

  /* ---- Verbal: Passage C (Flexible hours) ------------------------------- */
  {
    id: "verb-17",
    section: "verbal",
    topic: "verbal-synonym",
    stimulus: {
      passage:
        "A growing number of employers now offer flexible working hours, allowing staff to choose their own start and finish times within agreed limits. Supporters of the arrangement point to improved morale and a reduction in commuting during peak periods. The company in this case introduced flexible hours for its head-office staff only, leaving shift-based roles in its warehouses unchanged. A review after twelve months found that unplanned absences had fallen, though the report stressed that this finding could not be attributed to the new policy alone."
    },
    question: "Which one of the following would best replace 'stressed' while keeping the meaning of the passage?",
    options: ["emphasised", "doubted", "ignored", "repeated"],
    answer: "emphasised",
    explanation:
      "Here 'stressed' means the report made a point of highlighting something. 'Emphasised' carries that meaning. 'Doubted' and 'ignored' reverse it, and 'repeated' adds an idea the passage does not state."
  },
  {
    id: "verb-18",
    section: "verbal",
    topic: "verbal-detail",
    stimulus: {
      passage:
        "A growing number of employers now offer flexible working hours, allowing staff to choose their own start and finish times within agreed limits. Supporters of the arrangement point to improved morale and a reduction in commuting during peak periods. The company in this case introduced flexible hours for its head-office staff only, leaving shift-based roles in its warehouses unchanged. A review after twelve months found that unplanned absences had fallen, though the report stressed that this finding could not be attributed to the new policy alone."
    },
    question: "For which group did this company introduce flexible hours?",
    options: ["Head-office staff only", "Warehouse shift workers", "All employees", "Temporary staff"],
    answer: "Head-office staff only",
    explanation:
      "The passage states flexible hours were introduced 'for its head-office staff only, leaving shift-based roles in its warehouses unchanged'. Only the head-office option is supported."
  },
  {
    id: "verb-19",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "A growing number of employers now offer flexible working hours, allowing staff to choose their own start and finish times within agreed limits. Supporters of the arrangement point to improved morale and a reduction in commuting during peak periods. The company in this case introduced flexible hours for its head-office staff only, leaving shift-based roles in its warehouses unchanged. A review after twelve months found that unplanned absences had fallen, though the report stressed that this finding could not be attributed to the new policy alone."
    },
    question: "Unplanned absences fell during the twelve-month review period.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The review 'found that unplanned absences had fallen', which directly supports the statement, so it is True."
  },
  {
    id: "verb-20",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "A growing number of employers now offer flexible working hours, allowing staff to choose their own start and finish times within agreed limits. Supporters of the arrangement point to improved morale and a reduction in commuting during peak periods. The company in this case introduced flexible hours for its head-office staff only, leaving shift-based roles in its warehouses unchanged. A review after twelve months found that unplanned absences had fallen, though the report stressed that this finding could not be attributed to the new policy alone."
    },
    question: "The flexible-hours policy was the main cause of the fall in absences.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "Not possible to say on the basis of the passage",
    explanation:
      "The report stressed the fall 'could not be attributed to the new policy alone'. That means the cause is uncertain, so we cannot say the policy was the main cause. The answer is Not possible to say."
  },

  /* ---- Verbal: Passage D (Customer feedback) ---------------------------- */
  {
    id: "verb-21",
    section: "verbal",
    topic: "verbal-synonym",
    stimulus: {
      passage:
        "After receiving complaints about slow responses, a retailer replaced its email-only support with a combined system offering live chat, telephone and email. Customers using live chat reported the highest satisfaction, largely because queries were resolved in a single conversation. Telephone support remained popular with older customers. The retailer noted that the new system increased staffing costs, but argued that the improvement in customer retention more than offset this expense."
    },
    question: "Which one of the following would best replace 'offset' while keeping the meaning of the passage?",
    options: ["counterbalanced", "increased", "delayed", "recorded"],
    answer: "counterbalanced",
    explanation:
      "To 'offset' an expense means to balance it out with a gain. 'Counterbalanced' preserves that meaning. The other options change the sense entirely."
  },
  {
    id: "verb-22",
    section: "verbal",
    topic: "verbal-detail",
    stimulus: {
      passage:
        "After receiving complaints about slow responses, a retailer replaced its email-only support with a combined system offering live chat, telephone and email. Customers using live chat reported the highest satisfaction, largely because queries were resolved in a single conversation. Telephone support remained popular with older customers. The retailer noted that the new system increased staffing costs, but argued that the improvement in customer retention more than offset this expense."
    },
    question: "Which support channel did the retailer use before the change?",
    options: ["Email only", "Live chat only", "Telephone only", "Social media only"],
    answer: "Email only",
    explanation:
      "The passage says the retailer 'replaced its email-only support' with the new combined system, so before the change it used email only."
  },
  {
    id: "verb-23",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "After receiving complaints about slow responses, a retailer replaced its email-only support with a combined system offering live chat, telephone and email. Customers using live chat reported the highest satisfaction, largely because queries were resolved in a single conversation. Telephone support remained popular with older customers. The retailer noted that the new system increased staffing costs, but argued that the improvement in customer retention more than offset this expense."
    },
    question: "The new support system increased the retailer's staffing costs.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The retailer 'noted that the new system increased staffing costs', which directly supports the statement, so it is True."
  },
  {
    id: "verb-24",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "After receiving complaints about slow responses, a retailer replaced its email-only support with a combined system offering live chat, telephone and email. Customers using live chat reported the highest satisfaction, largely because queries were resolved in a single conversation. Telephone support remained popular with older customers. The retailer noted that the new system increased staffing costs, but argued that the improvement in customer retention more than offset this expense."
    },
    question: "Live chat is the cheapest of the three channels to operate.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "Not possible to say on the basis of the passage",
    explanation:
      "The passage discusses satisfaction and overall staffing costs but gives no per-channel running cost. There is no basis to compare the channels' costs, so the answer is Not possible to say."
  },

  /* ---- Verbal: Passage E (Apprenticeship scheme) ------------------------ */
  {
    id: "verb-25",
    section: "verbal",
    topic: "verbal-synonym",
    stimulus: {
      passage:
        "A manufacturing firm launched an apprenticeship scheme to address a shortage of skilled technicians. Apprentices spend four days a week on the factory floor and one day at a local college. The firm covers all college fees and pays a training wage that rises each year of the programme. Of the first group of apprentices, the large majority completed the scheme and were offered permanent roles. Managers credit the scheme with reducing the firm's reliance on agency staff."
    },
    question: "Which one of the following would best replace 'reliance' while keeping the meaning of the passage?",
    options: ["dependence", "distrust", "payment", "demand"],
    answer: "dependence",
    explanation:
      "'Reliance' on agency staff means depending on them. 'Dependence' keeps this meaning exactly; the other options do not."
  },
  {
    id: "verb-26",
    section: "verbal",
    topic: "verbal-detail",
    stimulus: {
      passage:
        "A manufacturing firm launched an apprenticeship scheme to address a shortage of skilled technicians. Apprentices spend four days a week on the factory floor and one day at a local college. The firm covers all college fees and pays a training wage that rises each year of the programme. Of the first group of apprentices, the large majority completed the scheme and were offered permanent roles. Managers credit the scheme with reducing the firm's reliance on agency staff."
    },
    question: "How is the apprentices' week split?",
    options: [
      "Four days on the factory floor and one day at college",
      "Three days on the factory floor and two days at college",
      "Five days on the factory floor",
      "Two days on the factory floor and three days at college"
    ],
    answer: "Four days on the factory floor and one day at college",
    explanation:
      "The passage states apprentices 'spend four days a week on the factory floor and one day at a local college'."
  },
  {
    id: "verb-27",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "A manufacturing firm launched an apprenticeship scheme to address a shortage of skilled technicians. Apprentices spend four days a week on the factory floor and one day at a local college. The firm covers all college fees and pays a training wage that rises each year of the programme. Of the first group of apprentices, the large majority completed the scheme and were offered permanent roles. Managers credit the scheme with reducing the firm's reliance on agency staff."
    },
    question: "The firm pays the apprentices' college fees.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The passage states 'The firm covers all college fees', which directly supports the statement, so it is True."
  },
  {
    id: "verb-28",
    section: "verbal",
    topic: "verbal-inference",
    stimulus: {
      passage:
        "A manufacturing firm launched an apprenticeship scheme to address a shortage of skilled technicians. Apprentices spend four days a week on the factory floor and one day at a local college. The firm covers all college fees and pays a training wage that rises each year of the programme. Of the first group of apprentices, the large majority completed the scheme and were offered permanent roles. Managers credit the scheme with reducing the firm's reliance on agency staff."
    },
    question: "Most of the first group of apprentices completed the scheme.",
    options: [
      "True on the basis of the passage",
      "False on the basis of the passage",
      "Not possible to say on the basis of the passage"
    ],
    answer: "True on the basis of the passage",
    explanation:
      "The passage states 'the large majority completed the scheme'. A large majority is most of them, so the statement is True."
  },

  /* ---- Numerical: bar chart (Units sold by region) ---------------------- */
  {
    id: "num-19",
    section: "numerical",
    topic: "read-off",
    stimulus: {
      chart: {
        type: "bar",
        title: "Units Sold by Region",
        unit: "units (this quarter)",
        data: [
          { label: "North", value: 320 },
          { label: "South", value: 240 },
          { label: "East", value: 180 },
          { label: "West", value: 260 }
        ]
      }
    },
    question: "Which region sold the fewest units this quarter?",
    options: ["North", "South", "East", "West"],
    answer: "East",
    explanation:
      "Compare the bar heights / values:\n  North 320, South 240, East 180, West 260\nThe shortest bar is East at 180 units."
  },
  {
    id: "num-20",
    section: "numerical",
    topic: "share",
    stimulus: {
      chart: {
        type: "bar",
        title: "Units Sold by Region",
        unit: "units (this quarter)",
        data: [
          { label: "North", value: 320 },
          { label: "South", value: 240 },
          { label: "East", value: 180 },
          { label: "West", value: 260 }
        ]
      }
    },
    question: "What percentage of total units were sold in the North?",
    options: ["24%", "26%", "30%", "32%", "36%"],
    answer: "32%",
    explanation:
      "Step 1 - total units:\n  320 + 240 + 180 + 260 = 1000\n\nStep 2 - North as a share of the whole (part / total x 100):\n  320 / 1000 x 100\n  = 32%"
  },
  {
    id: "num-21",
    section: "numerical",
    topic: "ratio",
    stimulus: {
      chart: {
        type: "bar",
        title: "Units Sold by Region",
        unit: "units (this quarter)",
        data: [
          { label: "North", value: 320 },
          { label: "South", value: 240 },
          { label: "East", value: 180 },
          { label: "West", value: 260 }
        ]
      }
    },
    question: "What is the ratio of South units to West units, in its simplest form?",
    options: ["12:13", "13:12", "6:5", "4:5", "5:6"],
    answer: "12:13",
    explanation:
      "Identify the values:\n  South 240, West 260\n\nWrite the ratio and simplify:\n  240 : 260\n  divide both sides by 20\n  = 12 : 13\n\nOrder matters: South is named first, so the answer is 12 : 13."
  },
  {
    id: "num-22",
    section: "numerical",
    topic: "forward-percentage",
    stimulus: {
      chart: {
        type: "bar",
        title: "Units Sold by Region",
        unit: "units (this quarter)",
        data: [
          { label: "North", value: 320 },
          { label: "South", value: 240 },
          { label: "East", value: 180 },
          { label: "West", value: 260 }
        ]
      }
    },
    question: "If North sales rise by 15% next quarter, how many units would that be?",
    options: ["272", "335", "352", "368", "384"],
    answer: "368",
    explanation:
      "Identify the value:\n  North = 320 units\n\nFormula for a forward percentage increase:\n  original x (1 + rate)\n\nCalculation:\n  320 x 1.15\n  = 368 units\n\nTrap: 272 is a 15% decrease (320 x 0.85), the wrong direction."
  },

  /* ---- Numerical: table (Monthly operating expenses) -------------------- */
  {
    id: "num-23",
    section: "numerical",
    topic: "average",
    stimulus: {
      table: {
        title: "Monthly Operating Expenses (£)",
        columns: ["Category", "Amount"],
        rows: [
          ["Rent", "4,200"],
          ["Salaries", "18,600"],
          ["Utilities", "1,450"],
          ["Supplies", "980"],
          ["Marketing", "2,770"]
        ]
      }
    },
    question: "What is the average (mean) spend across the five expense categories?",
    options: ["£5,200", "£5,600", "£6,000", "£14,000", "£28,000"],
    answer: "£5,600",
    explanation:
      "Identify the values:\n  4,200 + 18,600 + 1,450 + 980 + 2,770 = £28,000\n\nFormula for the mean:\n  total ÷ number of categories\n\nCalculation:\n  28,000 ÷ 5 = £5,600\n\nTrap: £28,000 is the total, not the average."
  },
  {
    id: "num-24",
    section: "numerical",
    topic: "share",
    stimulus: {
      table: {
        title: "Monthly Operating Expenses (£)",
        columns: ["Category", "Amount"],
        rows: [
          ["Rent", "4,200"],
          ["Salaries", "18,600"],
          ["Utilities", "1,450"],
          ["Supplies", "980"],
          ["Marketing", "2,770"]
        ]
      }
    },
    question: "What percentage of total expenses is spent on Rent?",
    options: ["10%", "12%", "15%", "18%", "21%"],
    answer: "15%",
    explanation:
      "Step 1 - total expenses:\n  4,200 + 18,600 + 1,450 + 980 + 2,770 = £28,000\n\nStep 2 - Rent as a share of the whole (part / total x 100):\n  4,200 / 28,000 x 100\n  = 15%"
  },
  {
    id: "num-25",
    section: "numerical",
    topic: "share",
    stimulus: {
      table: {
        title: "Monthly Operating Expenses (£)",
        columns: ["Category", "Amount"],
        rows: [
          ["Rent", "4,200"],
          ["Salaries", "18,600"],
          ["Utilities", "1,450"],
          ["Supplies", "980"],
          ["Marketing", "2,770"]
        ]
      }
    },
    question: "Approximately what fraction of total expenses goes on Salaries?",
    options: ["One-third", "One-half", "Two-thirds", "Three-quarters", "Four-fifths"],
    answer: "Two-thirds",
    explanation:
      "Salaries are £18,600 of the £28,000 total.\n  18,600 ÷ 28,000 = 0.664, or about 66%\n\n66% is approximately two-thirds (which is 66.7%), so two-thirds is the closest fraction."
  },

  /* ---- Numerical: pie chart (Survey reasons) ---------------------------- */
  {
    id: "num-26",
    section: "numerical",
    topic: "read-off",
    stimulus: {
      chart: {
        type: "pie",
        title: "Primary Reason for Purchase",
        total: 800,
        unit: "respondents",
        data: [
          { label: "Price", percent: 40 },
          { label: "Quality", percent: 28 },
          { label: "Brand", percent: 16 },
          { label: "Recommendation", percent: 10 },
          { label: "Other", percent: 6 }
        ]
      }
    },
    question: "Which reason was the second most commonly cited?",
    options: ["Price", "Quality", "Brand", "Recommendation", "Other"],
    answer: "Quality",
    explanation:
      "Rank the slices:\n  Price 40% (most common)\n  Quality 28% (second)\n  Brand 16%, Recommendation 10%, Other 6%\nThe second most common reason is Quality."
  },
  {
    id: "num-27",
    section: "numerical",
    topic: "share",
    stimulus: {
      chart: {
        type: "pie",
        title: "Primary Reason for Purchase",
        total: 800,
        unit: "respondents",
        data: [
          { label: "Price", percent: 40 },
          { label: "Quality", percent: 28 },
          { label: "Brand", percent: 16 },
          { label: "Recommendation", percent: 10 },
          { label: "Other", percent: 6 }
        ]
      }
    },
    question: "How many respondents cited Quality as their primary reason?",
    options: ["28", "112", "208", "224", "280"],
    answer: "224",
    explanation:
      "Identify the value:\n  Quality = 28% of the 800 respondents\n\nFormula for a part of the whole:\n  percent ÷ 100 × total\n\nCalculation:\n  28 ÷ 100 × 800\n  = 0.28 × 800\n  = 224 respondents\n\nTrap: '28' is just the percentage, not the count."
  },
  {
    id: "num-28",
    section: "numerical",
    topic: "numerical-inference",
    stimulus: {
      chart: {
        type: "pie",
        title: "Primary Reason for Purchase",
        total: 800,
        unit: "respondents",
        data: [
          { label: "Price", percent: 40 },
          { label: "Quality", percent: 28 },
          { label: "Brand", percent: 16 },
          { label: "Recommendation", percent: 10 },
          { label: "Other", percent: 6 }
        ]
      }
    },
    question: "More respondents cited Price than cited Quality and Brand combined.",
    options: ["True", "False", "Not possible to say"],
    answer: "False",
    explanation:
      "Compare Price with Quality + Brand:\n  Price = 40%\n  Quality + Brand = 28% + 16% = 44%\n40% is less than 44%, so the statement is False."
  },

  /* ---- Numerical: table (Training hours) -------------------------------- */
  {
    id: "num-29",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Staff Training Hours by Department",
        columns: ["Department", "2023", "2024"],
        rows: [
          ["Sales", "120", "150"],
          ["Support", "90", "81"],
          ["Tech", "200", "260"],
          ["Admin", "60", "75"]
        ]
      }
    },
    question: "By what percentage did the Tech department's training hours change from 2023 to 2024?",
    options: ["23%", "25%", "30%", "33%", "60%"],
    answer: "30%",
    explanation:
      "Identify the cells:\n  Tech 2023 = 200, 2024 = 260\n\nFormula for percentage change:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (260 - 200) ÷ 200 × 100\n  = 60 ÷ 200 × 100\n  = 30%\n\nTrap: dividing by 260 (the new value) gives 23%."
  },
  {
    id: "num-30",
    section: "numerical",
    topic: "percentage-change",
    stimulus: {
      table: {
        title: "Staff Training Hours by Department",
        columns: ["Department", "2023", "2024"],
        rows: [
          ["Sales", "120", "150"],
          ["Support", "90", "81"],
          ["Tech", "200", "260"],
          ["Admin", "60", "75"]
        ]
      }
    },
    question: "What was the change in the Support department's training hours from 2023 to 2024?",
    options: ["9% decrease", "10% decrease", "11% decrease", "10% increase", "90% decrease"],
    answer: "10% decrease",
    explanation:
      "Identify the cells:\n  Support 2023 = 90, 2024 = 81\n\nFormula for percentage change:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (81 - 90) ÷ 90 × 100\n  = -9 ÷ 90 × 100\n  = -10%\n\nThe negative sign means a 10% decrease."
  },
  {
    id: "num-31",
    section: "numerical",
    topic: "ratio",
    stimulus: {
      table: {
        title: "Staff Training Hours by Department",
        columns: ["Department", "2023", "2024"],
        rows: [
          ["Sales", "120", "150"],
          ["Support", "90", "81"],
          ["Tech", "200", "260"],
          ["Admin", "60", "75"]
        ]
      }
    },
    question: "In 2024, what is the ratio of Sales training hours to Admin training hours, in its simplest form?",
    options: ["2:1", "1:2", "3:1", "5:2", "2:3"],
    answer: "2:1",
    explanation:
      "Identify the cells (2024):\n  Sales 150, Admin 75\n\nWrite the ratio and simplify:\n  150 : 75\n  divide both sides by 75\n  = 2 : 1"
  },
  {
    id: "num-32",
    section: "numerical",
    topic: "numerical-inference",
    stimulus: {
      table: {
        title: "Staff Training Hours by Department",
        columns: ["Department", "2023", "2024"],
        rows: [
          ["Sales", "120", "150"],
          ["Support", "90", "81"],
          ["Tech", "200", "260"],
          ["Admin", "60", "75"]
        ]
      }
    },
    question: "Every department's training hours increased from 2023 to 2024.",
    options: ["True", "False", "Not possible to say"],
    answer: "False",
    explanation:
      "Check each department:\n  Sales 120 -> 150 (up)\n  Support 90 -> 81 (DOWN)\n  Tech 200 -> 260 (up)\n  Admin 60 -> 75 (up)\nSupport fell, so it is not true that every department increased. The statement is False."
  },

  /* ---- Checking: Order Dispatch Log (multi-select) ---------------------- */
  {
    id: "chk-05",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Order Dispatch Log",
        columns: ["Customer", "Order Ref", "Status", "Dispatch Date"],
        rows: [
          ["Hannah Reed", "OD-4471", "D", "12/04"],
          ["Marco Bianchi", "OD-4472", "P", "15/04"],
          ["Priya Shah", "OD-4473", "D", "18/04"],
          ["Tomas Klein", "OD-4474", "R", "02/05"]
        ],
        codingKey: "P = Pending    D = Dispatched    R = Returned",
        entryLabel: "Re-entered record",
        entry: ["Hannah Reed", "OD-4471", "Dispatched", "12/04"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Customer",
      "There is an error in the Order Ref",
      "There is an error in the Status",
      "There is an error in the Dispatch Date"
    ],
    answer: ["The entire item is correct"],
    explanation:
      "Matching original row (Hannah Reed):\n  Customer: Hannah Reed  (correct)\n  Order Ref: OD-4471  (correct)\n  Status: code D = Dispatched, re-entered 'Dispatched'  (correct)\n  Dispatch Date: 12/04  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-06",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Order Dispatch Log",
        columns: ["Customer", "Order Ref", "Status", "Dispatch Date"],
        rows: [
          ["Hannah Reed", "OD-4471", "D", "12/04"],
          ["Marco Bianchi", "OD-4472", "P", "15/04"],
          ["Priya Shah", "OD-4473", "D", "18/04"],
          ["Tomas Klein", "OD-4474", "R", "02/05"]
        ],
        codingKey: "P = Pending    D = Dispatched    R = Returned",
        entryLabel: "Re-entered record",
        entry: ["Marco Bianchi", "OD-4742", "Pending", "15/04"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Customer",
      "There is an error in the Order Ref",
      "There is an error in the Status",
      "There is an error in the Dispatch Date"
    ],
    answer: ["There is an error in the Order Ref"],
    explanation:
      "Matching original row (Marco Bianchi):\n  Customer: Marco Bianchi  (correct)\n  Order Ref: original OD-4472, re-entered OD-4742  (ERROR - the 4 and 7 are transposed)\n  Status: code P = Pending, re-entered 'Pending'  (correct)\n  Dispatch Date: 15/04  (correct)\nOnly the Order Ref contains an error."
  },
  {
    id: "chk-07",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Order Dispatch Log",
        columns: ["Customer", "Order Ref", "Status", "Dispatch Date"],
        rows: [
          ["Hannah Reed", "OD-4471", "D", "12/04"],
          ["Marco Bianchi", "OD-4472", "P", "15/04"],
          ["Priya Shah", "OD-4473", "D", "18/04"],
          ["Tomas Klein", "OD-4474", "R", "02/05"]
        ],
        codingKey: "P = Pending    D = Dispatched    R = Returned",
        entryLabel: "Re-entered record",
        entry: ["Priya Shah", "OD-4473", "Returned", "18/04"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Customer",
      "There is an error in the Order Ref",
      "There is an error in the Status",
      "There is an error in the Dispatch Date"
    ],
    answer: ["There is an error in the Status"],
    explanation:
      "Matching original row (Priya Shah):\n  Customer: Priya Shah  (correct)\n  Order Ref: OD-4473  (correct)\n  Status: code D = Dispatched, but re-entered 'Returned'  (ERROR - wrong status after decoding)\n  Dispatch Date: 18/04  (correct)\nOnly the Status contains an error."
  },
  {
    id: "chk-08",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Order Dispatch Log",
        columns: ["Customer", "Order Ref", "Status", "Dispatch Date"],
        rows: [
          ["Hannah Reed", "OD-4471", "D", "12/04"],
          ["Marco Bianchi", "OD-4472", "P", "15/04"],
          ["Priya Shah", "OD-4473", "D", "18/04"],
          ["Tomas Klein", "OD-4474", "R", "02/05"]
        ],
        codingKey: "P = Pending    D = Dispatched    R = Returned",
        entryLabel: "Re-entered record",
        entry: ["Tomas Klien", "OD-4474", "Returned", "20/05"]
      }
    },
    question: "Compare the re-entered record with the original log. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Customer",
      "There is an error in the Order Ref",
      "There is an error in the Status",
      "There is an error in the Dispatch Date"
    ],
    answer: [
      "There is an error in the Customer",
      "There is an error in the Dispatch Date"
    ],
    explanation:
      "Matching original row (Tomas Klein):\n  Customer: original 'Tomas Klein', re-entered 'Tomas Klien'  (ERROR - the e and i are transposed)\n  Order Ref: OD-4474  (correct)\n  Status: code R = Returned, re-entered 'Returned'  (correct)\n  Dispatch Date: original 02/05, re-entered 20/05  (ERROR - the day is wrong)\nThere are two errors: the Customer and the Dispatch Date."
  },

  /* ---- Checking: Membership Records (multi-select) ---------------------- */
  {
    id: "chk-09",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Membership Records",
        columns: ["Member", "ID", "Tier", "Renewal"],
        rows: [
          ["Aisha Khan", "MB-90213", "G", "31/12"],
          ["Ben Carter", "MB-90214", "S", "30/06"],
          ["Clara Mendes", "MB-90215", "B", "15/09"],
          ["Derek Lowe", "MB-90216", "G", "01/03"]
        ],
        codingKey: "B = Bronze    S = Silver    G = Gold",
        entryLabel: "Re-entered record",
        entry: ["Aisha Khan", "MB-90213", "Gold", "31/12"]
      }
    },
    question: "Compare the re-entered record with the original list. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Member",
      "There is an error in the ID",
      "There is an error in the Tier",
      "There is an error in the Renewal"
    ],
    answer: ["The entire item is correct"],
    explanation:
      "Matching original row (Aisha Khan):\n  Member: Aisha Khan  (correct)\n  ID: MB-90213  (correct)\n  Tier: code G = Gold, re-entered 'Gold'  (correct)\n  Renewal: 31/12  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-10",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Membership Records",
        columns: ["Member", "ID", "Tier", "Renewal"],
        rows: [
          ["Aisha Khan", "MB-90213", "G", "31/12"],
          ["Ben Carter", "MB-90214", "S", "30/06"],
          ["Clara Mendes", "MB-90215", "B", "15/09"],
          ["Derek Lowe", "MB-90216", "G", "01/03"]
        ],
        codingKey: "B = Bronze    S = Silver    G = Gold",
        entryLabel: "Re-entered record",
        entry: ["Ben Carter", "MB-90241", "Silver", "30/06"]
      }
    },
    question: "Compare the re-entered record with the original list. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Member",
      "There is an error in the ID",
      "There is an error in the Tier",
      "There is an error in the Renewal"
    ],
    answer: ["There is an error in the ID"],
    explanation:
      "Matching original row (Ben Carter):\n  Member: Ben Carter  (correct)\n  ID: original MB-90214, re-entered MB-90241  (ERROR - the 1 and 4 are transposed)\n  Tier: code S = Silver, re-entered 'Silver'  (correct)\n  Renewal: 30/06  (correct)\nOnly the ID contains an error."
  },
  {
    id: "chk-11",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Membership Records",
        columns: ["Member", "ID", "Tier", "Renewal"],
        rows: [
          ["Aisha Khan", "MB-90213", "G", "31/12"],
          ["Ben Carter", "MB-90214", "S", "30/06"],
          ["Clara Mendes", "MB-90215", "B", "15/09"],
          ["Derek Lowe", "MB-90216", "G", "01/03"]
        ],
        codingKey: "B = Bronze    S = Silver    G = Gold",
        entryLabel: "Re-entered record",
        entry: ["Clara Mendes", "MB-90215", "Bronze", "15/03"]
      }
    },
    question: "Compare the re-entered record with the original list. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Member",
      "There is an error in the ID",
      "There is an error in the Tier",
      "There is an error in the Renewal"
    ],
    answer: ["There is an error in the Renewal"],
    explanation:
      "Matching original row (Clara Mendes):\n  Member: Clara Mendes  (correct)\n  ID: MB-90215  (correct)\n  Tier: code B = Bronze, re-entered 'Bronze'  (correct)\n  Renewal: original 15/09, re-entered 15/03  (ERROR - the month is wrong)\nOnly the Renewal contains an error."
  },
  {
    id: "chk-12",
    section: "error",
    topic: "error-checking",
    multi: true,
    stimulus: {
      check: {
        title: "Membership Records",
        columns: ["Member", "ID", "Tier", "Renewal"],
        rows: [
          ["Aisha Khan", "MB-90213", "G", "31/12"],
          ["Ben Carter", "MB-90214", "S", "30/06"],
          ["Clara Mendes", "MB-90215", "B", "15/09"],
          ["Derek Lowe", "MB-90216", "G", "01/03"]
        ],
        codingKey: "B = Bronze    S = Silver    G = Gold",
        entryLabel: "Re-entered record",
        entry: ["Derek Lowe", "MB-90216", "Silver", "01/03"]
      }
    },
    question: "Compare the re-entered record with the original list. Select every field that contains an error (or that the entire item is correct).",
    options: [
      "The entire item is correct",
      "There is an error in the Member",
      "There is an error in the ID",
      "There is an error in the Tier",
      "There is an error in the Renewal"
    ],
    answer: ["There is an error in the Tier"],
    explanation:
      "Matching original row (Derek Lowe):\n  Member: Derek Lowe  (correct)\n  ID: MB-90216  (correct)\n  Tier: code G = Gold, but re-entered 'Silver'  (ERROR - wrong tier after decoding)\n  Renewal: 01/03  (correct)\nOnly the Tier contains an error."
  }

];

// Expose to the app (and to Node, if anyone wants to lint/count the bank).
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = QUESTIONS;
