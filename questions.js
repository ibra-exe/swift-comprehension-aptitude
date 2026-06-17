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
  },

  /* ======================================================================
   * BANK GROWTH 2 (more original content across all formats)
   * ==================================================================== */

  /* ---- Verbal: Passage F (Four-day week trial) -------------------------- */
  {
    id: "verb-29", section: "verbal", topic: "verbal-synonym",
    stimulus: { passage: "A medium-sized accountancy firm trialled a four-day working week for six months, keeping salaries unchanged while reducing contracted hours. During the trial, the firm measured client billing, staff wellbeing and rates of staff turnover. Billing remained stable, while reported wellbeing improved and the number of employees leaving the firm fell. The partners acknowledged that the trial took place during a traditionally quieter period for the business, and said a fuller assessment would be needed before making the change permanent." },
    question: "Which one of the following would best replace 'acknowledged' while keeping the meaning of the passage?",
    options: ["admitted", "denied", "predicted", "demanded"],
    answer: "admitted",
    explanation: "Here 'acknowledged' means the partners accepted or admitted a point about the timing of the trial. 'Admitted' preserves that meaning; the others change it."
  },
  {
    id: "verb-30", section: "verbal", topic: "verbal-detail",
    stimulus: { passage: "A medium-sized accountancy firm trialled a four-day working week for six months, keeping salaries unchanged while reducing contracted hours. During the trial, the firm measured client billing, staff wellbeing and rates of staff turnover. Billing remained stable, while reported wellbeing improved and the number of employees leaving the firm fell. The partners acknowledged that the trial took place during a traditionally quieter period for the business, and said a fuller assessment would be needed before making the change permanent." },
    question: "Which one of the following did the firm measure during the trial?",
    options: ["Client billing", "Office rent", "Energy use", "Advertising spend"],
    answer: "Client billing",
    explanation: "The passage lists what was measured: 'client billing, staff wellbeing and rates of staff turnover'. Only client billing appears among the options."
  },
  {
    id: "verb-31", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A medium-sized accountancy firm trialled a four-day working week for six months, keeping salaries unchanged while reducing contracted hours. During the trial, the firm measured client billing, staff wellbeing and rates of staff turnover. Billing remained stable, while reported wellbeing improved and the number of employees leaving the firm fell. The partners acknowledged that the trial took place during a traditionally quieter period for the business, and said a fuller assessment would be needed before making the change permanent." },
    question: "Salaries were kept unchanged during the trial.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "True on the basis of the passage",
    explanation: "The passage states the firm trialled the week 'keeping salaries unchanged while reducing contracted hours', which directly supports the statement."
  },
  {
    id: "verb-32", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A medium-sized accountancy firm trialled a four-day working week for six months, keeping salaries unchanged while reducing contracted hours. During the trial, the firm measured client billing, staff wellbeing and rates of staff turnover. Billing remained stable, while reported wellbeing improved and the number of employees leaving the firm fell. The partners acknowledged that the trial took place during a traditionally quieter period for the business, and said a fuller assessment would be needed before making the change permanent." },
    question: "The firm has decided to make the four-day week permanent.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "Not possible to say on the basis of the passage",
    explanation: "The partners said 'a fuller assessment would be needed before making the change permanent'. No decision is reported, so the answer is Not possible to say."
  },

  /* ---- Verbal: Passage G (Recycling scheme) ----------------------------- */
  {
    id: "verb-33", section: "verbal", topic: "verbal-synonym",
    stimulus: { passage: "A city council introduced a new kerbside recycling scheme aimed at increasing the proportion of household waste that is recycled rather than sent to landfill. Residents were given separate containers for paper, glass and food waste. In the first year, the recycling rate rose from 38% to 49%. The council reported that contamination of recycling, where non-recyclable items are placed in the wrong container, persisted as a challenge, and launched an information campaign to address it." },
    question: "Which one of the following would best replace 'persisted' while keeping the meaning of the passage?",
    options: ["continued", "ceased", "eased", "began"],
    answer: "continued",
    explanation: "Contamination 'persisted as a challenge' means it carried on being a problem. 'Continued' keeps that meaning; 'ceased' and 'eased' suggest it stopped or lessened, and 'began' suggests it was new."
  },
  {
    id: "verb-34", section: "verbal", topic: "verbal-detail",
    stimulus: { passage: "A city council introduced a new kerbside recycling scheme aimed at increasing the proportion of household waste that is recycled rather than sent to landfill. Residents were given separate containers for paper, glass and food waste. In the first year, the recycling rate rose from 38% to 49%. The council reported that contamination of recycling, where non-recyclable items are placed in the wrong container, persisted as a challenge, and launched an information campaign to address it." },
    question: "Residents were given separate containers for which materials?",
    options: ["Paper, glass and food waste", "Plastic only", "Garden waste only", "Metal and textiles"],
    answer: "Paper, glass and food waste",
    explanation: "The passage states residents 'were given separate containers for paper, glass and food waste'."
  },
  {
    id: "verb-35", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A city council introduced a new kerbside recycling scheme aimed at increasing the proportion of household waste that is recycled rather than sent to landfill. Residents were given separate containers for paper, glass and food waste. In the first year, the recycling rate rose from 38% to 49%. The council reported that contamination of recycling, where non-recyclable items are placed in the wrong container, persisted as a challenge, and launched an information campaign to address it." },
    question: "The recycling rate increased during the first year of the scheme.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "True on the basis of the passage",
    explanation: "The recycling rate 'rose from 38% to 49%' in the first year, which supports the statement, so it is True."
  },
  {
    id: "verb-36", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A city council introduced a new kerbside recycling scheme aimed at increasing the proportion of household waste that is recycled rather than sent to landfill. Residents were given separate containers for paper, glass and food waste. In the first year, the recycling rate rose from 38% to 49%. The council reported that contamination of recycling, where non-recyclable items are placed in the wrong container, persisted as a challenge, and launched an information campaign to address it." },
    question: "This is the most successful recycling scheme in the country.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "Not possible to say on the basis of the passage",
    explanation: "The passage gives no comparison with other schemes anywhere else, so there is no basis to judge this claim. The answer is Not possible to say."
  },

  /* ---- Verbal: Passage H (Open-plan office) ----------------------------- */
  {
    id: "verb-37", section: "verbal", topic: "verbal-synonym",
    stimulus: { passage: "When a technology company moved to a new building, it chose an open-plan layout in the hope of encouraging collaboration between teams. Some employees welcomed the change, saying it made it easier to ask colleagues quick questions. Others complained that noise levels made it harder to concentrate on detailed tasks. In response, the company created a number of bookable quiet rooms and introduced a set of guidelines on acceptable noise. A follow-up survey showed mixed opinions about the new arrangement." },
    question: "Which one of the following would best replace 'acceptable' while keeping the meaning of the passage?",
    options: ["permissible", "excessive", "unclear", "free"],
    answer: "permissible",
    explanation: "Guidelines on 'acceptable' noise set out what level is allowed. 'Permissible' captures that meaning; 'excessive' means too much, and the others do not fit."
  },
  {
    id: "verb-38", section: "verbal", topic: "verbal-detail",
    stimulus: { passage: "When a technology company moved to a new building, it chose an open-plan layout in the hope of encouraging collaboration between teams. Some employees welcomed the change, saying it made it easier to ask colleagues quick questions. Others complained that noise levels made it harder to concentrate on detailed tasks. In response, the company created a number of bookable quiet rooms and introduced a set of guidelines on acceptable noise. A follow-up survey showed mixed opinions about the new arrangement." },
    question: "What did the company introduce in response to the noise complaints?",
    options: ["Bookable quiet rooms and noise guidelines", "A return to private offices", "Noise-cancelling headphones for all staff", "A full move to remote working"],
    answer: "Bookable quiet rooms and noise guidelines",
    explanation: "The passage states the company 'created a number of bookable quiet rooms and introduced a set of guidelines on acceptable noise'."
  },
  {
    id: "verb-39", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "When a technology company moved to a new building, it chose an open-plan layout in the hope of encouraging collaboration between teams. Some employees welcomed the change, saying it made it easier to ask colleagues quick questions. Others complained that noise levels made it harder to concentrate on detailed tasks. In response, the company created a number of bookable quiet rooms and introduced a set of guidelines on acceptable noise. A follow-up survey showed mixed opinions about the new arrangement." },
    question: "All employees disliked the open-plan layout.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "False on the basis of the passage",
    explanation: "The passage says 'some employees welcomed the change'. Since not everyone disliked it, the statement is False."
  },
  {
    id: "verb-40", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "When a technology company moved to a new building, it chose an open-plan layout in the hope of encouraging collaboration between teams. Some employees welcomed the change, saying it made it easier to ask colleagues quick questions. Others complained that noise levels made it harder to concentrate on detailed tasks. In response, the company created a number of bookable quiet rooms and introduced a set of guidelines on acceptable noise. A follow-up survey showed mixed opinions about the new arrangement." },
    question: "Opinions in the follow-up survey were mixed.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "True on the basis of the passage",
    explanation: "The passage states 'A follow-up survey showed mixed opinions about the new arrangement', which directly supports the statement."
  },

  /* ---- Verbal: Passage I (Supplier review) ------------------------------ */
  {
    id: "verb-41", section: "verbal", topic: "verbal-synonym",
    stimulus: { passage: "A supermarket chain carried out a review of its produce suppliers after several deliveries arrived later than scheduled. The review found that most delays were linked to a single distribution centre that had recently changed its software system. The chain agreed a recovery plan with the supplier, including temporary additional staffing at the affected centre. Within three months, on-time delivery rates had returned to their previous level. The chain stated it would continue to monitor performance closely." },
    question: "Which one of the following would best replace 'linked' while keeping the meaning of the passage?",
    options: ["connected", "opposed", "compared", "reduced"],
    answer: "connected",
    explanation: "Delays being 'linked to' a centre means they were connected with it. 'Connected' preserves the meaning; the other options change it."
  },
  {
    id: "verb-42", section: "verbal", topic: "verbal-detail",
    stimulus: { passage: "A supermarket chain carried out a review of its produce suppliers after several deliveries arrived later than scheduled. The review found that most delays were linked to a single distribution centre that had recently changed its software system. The chain agreed a recovery plan with the supplier, including temporary additional staffing at the affected centre. Within three months, on-time delivery rates had returned to their previous level. The chain stated it would continue to monitor performance closely." },
    question: "According to the review, most delays were linked to what?",
    options: ["A single distribution centre", "A shortage of drivers", "Poor weather", "A pricing dispute"],
    answer: "A single distribution centre",
    explanation: "The review found 'most delays were linked to a single distribution centre that had recently changed its software system'."
  },
  {
    id: "verb-43", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A supermarket chain carried out a review of its produce suppliers after several deliveries arrived later than scheduled. The review found that most delays were linked to a single distribution centre that had recently changed its software system. The chain agreed a recovery plan with the supplier, including temporary additional staffing at the affected centre. Within three months, on-time delivery rates had returned to their previous level. The chain stated it would continue to monitor performance closely." },
    question: "On-time delivery rates recovered within three months.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "True on the basis of the passage",
    explanation: "The passage states 'Within three months, on-time delivery rates had returned to their previous level', which supports the statement."
  },
  {
    id: "verb-44", section: "verbal", topic: "verbal-inference",
    stimulus: { passage: "A supermarket chain carried out a review of its produce suppliers after several deliveries arrived later than scheduled. The review found that most delays were linked to a single distribution centre that had recently changed its software system. The chain agreed a recovery plan with the supplier, including temporary additional staffing at the affected centre. Within three months, on-time delivery rates had returned to their previous level. The chain stated it would continue to monitor performance closely." },
    question: "The distribution centre has now replaced the software system that caused the problems.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "Not possible to say on the basis of the passage",
    explanation: "The recovery plan mentions temporary additional staffing, but the passage never says the software was replaced. There is no basis to confirm this, so the answer is Not possible to say."
  },

  /* ---- Numerical: table (Annual revenue by product) --------------------- */
  {
    id: "num-33", section: "numerical", topic: "percentage-change",
    stimulus: { table: { title: "Annual Revenue by Product (£m)", columns: ["Product", "2022", "2023", "2024"], rows: [["Alpha", "12", "15", "18"], ["Beta", "8", "7", "9"], ["Gamma", "20", "24", "30"], ["Delta", "5", "6", "6"]] } },
    question: "By what percentage did Gamma's revenue change from 2023 to 2024?",
    options: ["6%", "20%", "24%", "25%", "30%"],
    answer: "25%",
    explanation: "Identify the cells:\n  Gamma 2023 = 24, 2024 = 30\n\nFormula for percentage change:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (30 - 24) ÷ 24 × 100\n  = 6 ÷ 24 × 100\n  = 25%"
  },
  {
    id: "num-34", section: "numerical", topic: "average",
    stimulus: { table: { title: "Annual Revenue by Product (£m)", columns: ["Product", "2022", "2023", "2024"], rows: [["Alpha", "12", "15", "18"], ["Beta", "8", "7", "9"], ["Gamma", "20", "24", "30"], ["Delta", "5", "6", "6"]] } },
    question: "What was the average (mean) 2024 revenue across the four products?",
    options: ["£14m", "£15m", "£15.75m", "£18.9m", "£63m"],
    answer: "£15.75m",
    explanation: "Identify the 2024 cells:\n  18, 9, 30, 6\n\nFormula for the mean:\n  total ÷ number of products\n\nCalculation:\n  18 + 9 + 30 + 6 = 63\n  63 ÷ 4 = 15.75\n  = £15.75m"
  },
  {
    id: "num-35", section: "numerical", topic: "ratio",
    stimulus: { table: { title: "Annual Revenue by Product (£m)", columns: ["Product", "2022", "2023", "2024"], rows: [["Alpha", "12", "15", "18"], ["Beta", "8", "7", "9"], ["Gamma", "20", "24", "30"], ["Delta", "5", "6", "6"]] } },
    question: "In 2024, what is the ratio of Alpha's revenue to Gamma's revenue, in its simplest form?",
    options: ["3:5", "5:3", "2:3", "3:4", "9:10"],
    answer: "3:5",
    explanation: "Identify the 2024 cells:\n  Alpha 18, Gamma 30\n\nWrite the ratio and simplify:\n  18 : 30\n  divide both sides by 6\n  = 3 : 5"
  },
  {
    id: "num-36", section: "numerical", topic: "numerical-inference",
    stimulus: { table: { title: "Annual Revenue by Product (£m)", columns: ["Product", "2022", "2023", "2024"], rows: [["Alpha", "12", "15", "18"], ["Beta", "8", "7", "9"], ["Gamma", "20", "24", "30"], ["Delta", "5", "6", "6"]] } },
    question: "Beta's revenue increased every year from 2022 to 2024.",
    options: ["True", "False", "Not possible to say"],
    answer: "False",
    explanation: "Track Beta year by year:\n  2022 = 8, 2023 = 7, 2024 = 9\nBeta fell from 8 to 7 between 2022 and 2023, so it did not rise every year. The statement is False."
  },

  /* ---- Numerical: pie chart (Monthly budget) ---------------------------- */
  {
    id: "num-37", section: "numerical", topic: "read-off",
    stimulus: { chart: { type: "pie", title: "Monthly Budget Allocation", total: 50000, unit: "pounds", data: [{ label: "Payroll", percent: 52 }, { label: "Rent", percent: 18 }, { label: "Marketing", percent: 14 }, { label: "Equipment", percent: 10 }, { label: "Misc", percent: 6 }] } },
    question: "Which category receives the largest share of the budget?",
    options: ["Payroll", "Rent", "Marketing", "Equipment", "Misc"],
    answer: "Payroll",
    explanation: "The largest slice is Payroll at 52%, well above any other category."
  },
  {
    id: "num-38", section: "numerical", topic: "share",
    stimulus: { chart: { type: "pie", title: "Monthly Budget Allocation", total: 50000, unit: "pounds", data: [{ label: "Payroll", percent: 52 }, { label: "Rent", percent: 18 }, { label: "Marketing", percent: 14 }, { label: "Equipment", percent: 10 }, { label: "Misc", percent: 6 }] } },
    question: "How much of the £50,000 monthly budget is allocated to Marketing?",
    options: ["£700", "£1,400", "£5,000", "£7,000", "£9,000"],
    answer: "£7,000",
    explanation: "Identify the value:\n  Marketing = 14% of £50,000\n\nFormula for a part of the whole:\n  percent ÷ 100 × total\n\nCalculation:\n  14 ÷ 100 × 50,000\n  = 0.14 × 50,000\n  = £7,000"
  },
  {
    id: "num-39", section: "numerical", topic: "numerical-inference",
    stimulus: { chart: { type: "pie", title: "Monthly Budget Allocation", total: 50000, unit: "pounds", data: [{ label: "Payroll", percent: 52 }, { label: "Rent", percent: 18 }, { label: "Marketing", percent: 14 }, { label: "Equipment", percent: 10 }, { label: "Misc", percent: 6 }] } },
    question: "Payroll accounts for more than half of the monthly budget.",
    options: ["True", "False", "Not possible to say"],
    answer: "True",
    explanation: "Payroll is 52%. Since 52% is more than half (50%), the statement is True."
  },

  /* ---- Numerical: bar chart (Help desk tickets) ------------------------- */
  {
    id: "num-40", section: "numerical", topic: "read-off",
    stimulus: { chart: { type: "bar", title: "Help Desk Tickets by Day", unit: "tickets logged", data: [{ label: "Mon", value: 48 }, { label: "Tue", value: 36 }, { label: "Wed", value: 30 }, { label: "Thu", value: 42 }, { label: "Fri", value: 24 }] } },
    question: "On which day were the most tickets logged?",
    options: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    answer: "Mon",
    explanation: "The tallest bar is Monday at 48 tickets, more than any other day."
  },
  {
    id: "num-41", section: "numerical", topic: "average",
    stimulus: { chart: { type: "bar", title: "Help Desk Tickets by Day", unit: "tickets logged", data: [{ label: "Mon", value: 48 }, { label: "Tue", value: 36 }, { label: "Wed", value: 30 }, { label: "Thu", value: 42 }, { label: "Fri", value: 24 }] } },
    question: "What was the mean number of tickets logged per day?",
    options: ["30", "36", "40", "42", "180"],
    answer: "36",
    explanation: "Add the daily totals and divide by the number of days:\n  48 + 36 + 30 + 42 + 24 = 180\n  180 ÷ 5 = 36 tickets per day\n\nTrap: 180 is the weekly total, not the average."
  },
  {
    id: "num-42", section: "numerical", topic: "share",
    stimulus: { chart: { type: "bar", title: "Help Desk Tickets by Day", unit: "tickets logged", data: [{ label: "Mon", value: 48 }, { label: "Tue", value: 36 }, { label: "Wed", value: 30 }, { label: "Thu", value: 42 }, { label: "Fri", value: 24 }] } },
    question: "What percentage of the week's tickets were logged on Friday?",
    options: ["12%", "13%", "15%", "20%", "24%"],
    answer: "13%",
    explanation: "Step 1 - weekly total:\n  48 + 36 + 30 + 42 + 24 = 180\n\nStep 2 - Friday as a share of the whole:\n  24 ÷ 180 × 100\n  = 13.3%, which rounds to 13%"
  },

  /* ---- Numerical: table (Call centre performance) ----------------------- */
  {
    id: "num-43", section: "numerical", topic: "percentage-change",
    stimulus: { table: { title: "Call Centre Performance", columns: ["Metric", "Target", "Actual"], rows: [["Calls Answered", "5,000", "5,400"], ["Avg Wait (sec)", "30", "36"], ["Satisfaction (%)", "90", "88"], ["Resolved First Call (%)", "75", "81"]] } },
    question: "By what percentage did the number of calls answered exceed the target?",
    options: ["4%", "7%", "8%", "9%", "10%"],
    answer: "8%",
    explanation: "Identify the cells:\n  Calls Answered target = 5,000, actual = 5,400\n\nFormula for percentage change:\n  (actual - target) ÷ target × 100\n\nCalculation:\n  (5,400 - 5,000) ÷ 5,000 × 100\n  = 400 ÷ 5,000 × 100\n  = 8%"
  },
  {
    id: "num-44", section: "numerical", topic: "percentage-change",
    stimulus: { table: { title: "Call Centre Performance", columns: ["Metric", "Target", "Actual"], rows: [["Calls Answered", "5,000", "5,400"], ["Avg Wait (sec)", "30", "36"], ["Satisfaction (%)", "90", "88"], ["Resolved First Call (%)", "75", "81"]] } },
    question: "By what percentage did the average wait time exceed its target?",
    options: ["6%", "16.7%", "17%", "20%", "25%"],
    answer: "20%",
    explanation: "Identify the cells:\n  Avg Wait target = 30 sec, actual = 36 sec\n\nFormula for percentage change:\n  (actual - target) ÷ target × 100\n\nCalculation:\n  (36 - 30) ÷ 30 × 100\n  = 6 ÷ 30 × 100\n  = 20%"
  },
  {
    id: "num-45", section: "numerical", topic: "numerical-inference",
    stimulus: { table: { title: "Call Centre Performance", columns: ["Metric", "Target", "Actual"], rows: [["Calls Answered", "5,000", "5,400"], ["Avg Wait (sec)", "30", "36"], ["Satisfaction (%)", "90", "88"], ["Resolved First Call (%)", "75", "81"]] } },
    question: "Both satisfaction and first-call resolution met or exceeded their targets.",
    options: ["True", "False", "Not possible to say"],
    answer: "False",
    explanation: "Compare each with its target:\n  Satisfaction: target 90, actual 88 (below target)\n  Resolved First Call: target 75, actual 81 (above target)\nSatisfaction missed its target, so it is not true that both met or exceeded. The statement is False."
  },

  /* ---- Numerical: table (Website conversions) --------------------------- */
  {
    id: "num-46", section: "numerical", topic: "share",
    stimulus: { table: { title: "Quarterly Website Conversions", columns: ["Quarter", "Visitors", "Conversions"], rows: [["Q1", "20,000", "600"], ["Q2", "25,000", "1,000"], ["Q3", "22,000", "770"], ["Q4", "30,000", "1,200"]] } },
    question: "What was the conversion rate (conversions as a percentage of visitors) in Q2?",
    options: ["2.5%", "3%", "4%", "4.5%", "5%"],
    answer: "4%",
    explanation: "Identify the cells:\n  Q2 visitors = 25,000, conversions = 1,000\n\nFormula for conversion rate:\n  conversions ÷ visitors × 100\n\nCalculation:\n  1,000 ÷ 25,000 × 100\n  = 4%"
  },
  {
    id: "num-47", section: "numerical", topic: "percentage-change",
    stimulus: { table: { title: "Quarterly Website Conversions", columns: ["Quarter", "Visitors", "Conversions"], rows: [["Q1", "20,000", "600"], ["Q2", "25,000", "1,000"], ["Q3", "22,000", "770"], ["Q4", "30,000", "1,200"]] } },
    question: "By what percentage did the number of conversions change from Q1 to Q4?",
    options: ["50%", "60%", "100%", "150%", "200%"],
    answer: "100%",
    explanation: "Identify the cells:\n  Q1 conversions = 600, Q4 conversions = 1,200\n\nFormula for percentage change:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (1,200 - 600) ÷ 600 × 100\n  = 600 ÷ 600 × 100\n  = 100% (the figure doubled)"
  },
  {
    id: "num-48", section: "numerical", topic: "ratio",
    stimulus: { table: { title: "Quarterly Website Conversions", columns: ["Quarter", "Visitors", "Conversions"], rows: [["Q1", "20,000", "600"], ["Q2", "25,000", "1,000"], ["Q3", "22,000", "770"], ["Q4", "30,000", "1,200"]] } },
    question: "What is the ratio of Q1 visitors to Q4 visitors, in its simplest form?",
    options: ["2:3", "3:2", "1:2", "3:4", "2:5"],
    answer: "2:3",
    explanation: "Identify the cells:\n  Q1 visitors = 20,000, Q4 visitors = 30,000\n\nWrite the ratio and simplify:\n  20,000 : 30,000\n  divide both sides by 10,000\n  = 2 : 3"
  },

  /* ---- Checking: Warehouse Stock Check (multi-select) ------------------- */
  {
    id: "chk-13", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Warehouse Stock Check", columns: ["Item", "SKU", "Zone", "Quantity"], rows: [["Bolts M8", "SK-1180", "A", "540"], ["Gaskets", "SK-1181", "M", "120"], ["Sealant", "SK-1182", "C", "75"], ["Washers", "SK-1183", "A", "880"]], codingKey: "A = Aisle    M = Mezzanine    C = Cold Store", entryLabel: "Re-entered record", entry: ["Bolts M8", "SK-1180", "Aisle", "540"] } },
    question: "Compare the re-entered record with the original stock check. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the SKU", "There is an error in the Zone", "There is an error in the Quantity"],
    answer: ["The entire item is correct"],
    explanation: "Matching original row (Bolts M8):\n  Item: Bolts M8  (correct)\n  SKU: SK-1180  (correct)\n  Zone: code A = Aisle, re-entered 'Aisle'  (correct)\n  Quantity: 540  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-14", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Warehouse Stock Check", columns: ["Item", "SKU", "Zone", "Quantity"], rows: [["Bolts M8", "SK-1180", "A", "540"], ["Gaskets", "SK-1181", "M", "120"], ["Sealant", "SK-1182", "C", "75"], ["Washers", "SK-1183", "A", "880"]], codingKey: "A = Aisle    M = Mezzanine    C = Cold Store", entryLabel: "Re-entered record", entry: ["Gaskets", "SK-1181", "Mezzanine", "210"] } },
    question: "Compare the re-entered record with the original stock check. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the SKU", "There is an error in the Zone", "There is an error in the Quantity"],
    answer: ["There is an error in the Quantity"],
    explanation: "Matching original row (Gaskets):\n  Item: Gaskets  (correct)\n  SKU: SK-1181  (correct)\n  Zone: code M = Mezzanine, re-entered 'Mezzanine'  (correct)\n  Quantity: original 120, re-entered 210  (ERROR - the digits are wrong)\nOnly the Quantity contains an error."
  },
  {
    id: "chk-15", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Warehouse Stock Check", columns: ["Item", "SKU", "Zone", "Quantity"], rows: [["Bolts M8", "SK-1180", "A", "540"], ["Gaskets", "SK-1181", "M", "120"], ["Sealant", "SK-1182", "C", "75"], ["Washers", "SK-1183", "A", "880"]], codingKey: "A = Aisle    M = Mezzanine    C = Cold Store", entryLabel: "Re-entered record", entry: ["Sealant", "SK-1182", "Aisle", "75"] } },
    question: "Compare the re-entered record with the original stock check. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the SKU", "There is an error in the Zone", "There is an error in the Quantity"],
    answer: ["There is an error in the Zone"],
    explanation: "Matching original row (Sealant):\n  Item: Sealant  (correct)\n  SKU: SK-1182  (correct)\n  Zone: code C = Cold Store, but re-entered 'Aisle'  (ERROR - wrong zone after decoding)\n  Quantity: 75  (correct)\nOnly the Zone contains an error."
  },
  {
    id: "chk-16", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Warehouse Stock Check", columns: ["Item", "SKU", "Zone", "Quantity"], rows: [["Bolts M8", "SK-1180", "A", "540"], ["Gaskets", "SK-1181", "M", "120"], ["Sealant", "SK-1182", "C", "75"], ["Washers", "SK-1183", "A", "880"]], codingKey: "A = Aisle    M = Mezzanine    C = Cold Store", entryLabel: "Re-entered record", entry: ["Washers", "SK-1138", "Aisle", "808"] } },
    question: "Compare the re-entered record with the original stock check. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the SKU", "There is an error in the Zone", "There is an error in the Quantity"],
    answer: ["There is an error in the SKU", "There is an error in the Quantity"],
    explanation: "Matching original row (Washers):\n  Item: Washers  (correct)\n  SKU: original SK-1183, re-entered SK-1138  (ERROR - the 8 and 3 are transposed)\n  Zone: code A = Aisle, re-entered 'Aisle'  (correct)\n  Quantity: original 880, re-entered 808  (ERROR - the digits are transposed)\nThere are two errors: the SKU and the Quantity."
  },

  /* ---- Checking: Flight Booking Log (multi-select) ---------------------- */
  {
    id: "chk-17", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Flight Booking Log", columns: ["Passenger", "Booking Ref", "Class", "Departure"], rows: [["Lena Vogt", "BK-7203", "Y", "09:40"], ["Omar Haddad", "BK-7204", "J", "14:15"], ["Sara Lindqvist", "BK-7205", "W", "06:50"], ["Raj Patel", "BK-7206", "Y", "21:05"]], codingKey: "Y = Economy    W = Premium    J = Business", entryLabel: "Re-entered record", entry: ["Lena Vogt", "BK-7203", "Economy", "09:40"] } },
    question: "Compare the re-entered record with the original booking log. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Passenger", "There is an error in the Booking Ref", "There is an error in the Class", "There is an error in the Departure"],
    answer: ["The entire item is correct"],
    explanation: "Matching original row (Lena Vogt):\n  Passenger: Lena Vogt  (correct)\n  Booking Ref: BK-7203  (correct)\n  Class: code Y = Economy, re-entered 'Economy'  (correct)\n  Departure: 09:40  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-18", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Flight Booking Log", columns: ["Passenger", "Booking Ref", "Class", "Departure"], rows: [["Lena Vogt", "BK-7203", "Y", "09:40"], ["Omar Haddad", "BK-7204", "J", "14:15"], ["Sara Lindqvist", "BK-7205", "W", "06:50"], ["Raj Patel", "BK-7206", "Y", "21:05"]], codingKey: "Y = Economy    W = Premium    J = Business", entryLabel: "Re-entered record", entry: ["Omar Haddad", "BK-7204", "Business", "14:51"] } },
    question: "Compare the re-entered record with the original booking log. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Passenger", "There is an error in the Booking Ref", "There is an error in the Class", "There is an error in the Departure"],
    answer: ["There is an error in the Departure"],
    explanation: "Matching original row (Omar Haddad):\n  Passenger: Omar Haddad  (correct)\n  Booking Ref: BK-7204  (correct)\n  Class: code J = Business, re-entered 'Business'  (correct)\n  Departure: original 14:15, re-entered 14:51  (ERROR - the minutes are transposed)\nOnly the Departure contains an error."
  },
  {
    id: "chk-19", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Flight Booking Log", columns: ["Passenger", "Booking Ref", "Class", "Departure"], rows: [["Lena Vogt", "BK-7203", "Y", "09:40"], ["Omar Haddad", "BK-7204", "J", "14:15"], ["Sara Lindqvist", "BK-7205", "W", "06:50"], ["Raj Patel", "BK-7206", "Y", "21:05"]], codingKey: "Y = Economy    W = Premium    J = Business", entryLabel: "Re-entered record", entry: ["Sara Lindqvist", "BK-7205", "Economy", "06:50"] } },
    question: "Compare the re-entered record with the original booking log. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Passenger", "There is an error in the Booking Ref", "There is an error in the Class", "There is an error in the Departure"],
    answer: ["There is an error in the Class"],
    explanation: "Matching original row (Sara Lindqvist):\n  Passenger: Sara Lindqvist  (correct)\n  Booking Ref: BK-7205  (correct)\n  Class: code W = Premium, but re-entered 'Economy'  (ERROR - wrong class after decoding)\n  Departure: 06:50  (correct)\nOnly the Class contains an error."
  },
  {
    id: "chk-20", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Flight Booking Log", columns: ["Passenger", "Booking Ref", "Class", "Departure"], rows: [["Lena Vogt", "BK-7203", "Y", "09:40"], ["Omar Haddad", "BK-7204", "J", "14:15"], ["Sara Lindqvist", "BK-7205", "W", "06:50"], ["Raj Patel", "BK-7206", "Y", "21:05"]], codingKey: "Y = Economy    W = Premium    J = Business", entryLabel: "Re-entered record", entry: ["Raj Patel", "BK-7260", "Economy", "21:05"] } },
    question: "Compare the re-entered record with the original booking log. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Passenger", "There is an error in the Booking Ref", "There is an error in the Class", "There is an error in the Departure"],
    answer: ["There is an error in the Booking Ref"],
    explanation: "Matching original row (Raj Patel):\n  Passenger: Raj Patel  (correct)\n  Booking Ref: original BK-7206, re-entered BK-7260  (ERROR - the 0 and 6 are transposed)\n  Class: code Y = Economy, re-entered 'Economy'  (correct)\n  Departure: 21:05  (correct)\nOnly the Booking Ref contains an error."
  },

  /* ---- Checking: Patient Appointment List (multi-select) ---------------- */
  {
    id: "chk-21", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Patient Appointment List", columns: ["Patient", "NHS No", "Clinic", "Time"], rows: [["George Mills", "NH-44120", "C", "10:00"], ["Fatima Noor", "NH-44121", "D", "11:30"], ["Liam Walsh", "NH-44122", "O", "13:15"], ["Yuki Tanaka", "NH-44123", "C", "15:45"]], codingKey: "C = Cardiology    D = Dermatology    O = Orthopaedics", entryLabel: "Re-entered record", entry: ["George Mills", "NH-44120", "Cardiology", "10:00"] } },
    question: "Compare the re-entered record with the original appointment list. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Patient", "There is an error in the NHS No", "There is an error in the Clinic", "There is an error in the Time"],
    answer: ["The entire item is correct"],
    explanation: "Matching original row (George Mills):\n  Patient: George Mills  (correct)\n  NHS No: NH-44120  (correct)\n  Clinic: code C = Cardiology, re-entered 'Cardiology'  (correct)\n  Time: 10:00  (correct)\nEvery field matches, so the entire item is correct."
  },
  {
    id: "chk-22", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Patient Appointment List", columns: ["Patient", "NHS No", "Clinic", "Time"], rows: [["George Mills", "NH-44120", "C", "10:00"], ["Fatima Noor", "NH-44121", "D", "11:30"], ["Liam Walsh", "NH-44122", "O", "13:15"], ["Yuki Tanaka", "NH-44123", "C", "15:45"]], codingKey: "C = Cardiology    D = Dermatology    O = Orthopaedics", entryLabel: "Re-entered record", entry: ["Fatima Noor", "NH-44211", "Dermatology", "11:30"] } },
    question: "Compare the re-entered record with the original appointment list. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Patient", "There is an error in the NHS No", "There is an error in the Clinic", "There is an error in the Time"],
    answer: ["There is an error in the NHS No"],
    explanation: "Matching original row (Fatima Noor):\n  Patient: Fatima Noor  (correct)\n  NHS No: original NH-44121, re-entered NH-44211  (ERROR - the digits are transposed)\n  Clinic: code D = Dermatology, re-entered 'Dermatology'  (correct)\n  Time: 11:30  (correct)\nOnly the NHS No contains an error."
  },
  {
    id: "chk-23", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Patient Appointment List", columns: ["Patient", "NHS No", "Clinic", "Time"], rows: [["George Mills", "NH-44120", "C", "10:00"], ["Fatima Noor", "NH-44121", "D", "11:30"], ["Liam Walsh", "NH-44122", "O", "13:15"], ["Yuki Tanaka", "NH-44123", "C", "15:45"]], codingKey: "C = Cardiology    D = Dermatology    O = Orthopaedics", entryLabel: "Re-entered record", entry: ["Liam Walsh", "NH-44122", "Orthopaedics", "13:51"] } },
    question: "Compare the re-entered record with the original appointment list. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Patient", "There is an error in the NHS No", "There is an error in the Clinic", "There is an error in the Time"],
    answer: ["There is an error in the Time"],
    explanation: "Matching original row (Liam Walsh):\n  Patient: Liam Walsh  (correct)\n  NHS No: NH-44122  (correct)\n  Clinic: code O = Orthopaedics, re-entered 'Orthopaedics'  (correct)\n  Time: original 13:15, re-entered 13:51  (ERROR - the minutes are transposed)\nOnly the Time contains an error."
  },
  {
    id: "chk-24", section: "error", topic: "error-checking", multi: true,
    stimulus: { check: { title: "Patient Appointment List", columns: ["Patient", "NHS No", "Clinic", "Time"], rows: [["George Mills", "NH-44120", "C", "10:00"], ["Fatima Noor", "NH-44121", "D", "11:30"], ["Liam Walsh", "NH-44122", "O", "13:15"], ["Yuki Tanaka", "NH-44123", "C", "15:45"]], codingKey: "C = Cardiology    D = Dermatology    O = Orthopaedics", entryLabel: "Re-entered record", entry: ["Yuki Tanaka", "NH-44123", "Dermatology", "15:45"] } },
    question: "Compare the re-entered record with the original appointment list. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Patient", "There is an error in the NHS No", "There is an error in the Clinic", "There is an error in the Time"],
    answer: ["There is an error in the Clinic"],
    explanation: "Matching original row (Yuki Tanaka):\n  Patient: Yuki Tanaka  (correct)\n  NHS No: NH-44123  (correct)\n  Clinic: code C = Cardiology, but re-entered 'Dermatology'  (ERROR - wrong clinic after decoding)\n  Time: 15:45  (correct)\nOnly the Clinic contains an error."
  },

  /* ======================================================================
   * ABSTRACT REASONING
   * ----------------------------------------------------------------------
   * Figures are described by compact specs (the app draws them as SVG):
   *   { shape: "square|circle|triangle|diamond|arrow", rot, fill, dots }
   * "series" questions show stimulus.series + a "?"; "odd" questions present
   * the candidates as the options. The correct option is given by answerIndex.
   * ==================================================================== */

  // ---- Easy ----
  {
    id: "abs-01", section: "abstract", topic: "abstract-series", difficulty: "easy",
    stimulus: { series: [{ shape: "arrow", rot: 0 }, { shape: "arrow", rot: 90 }, { shape: "arrow", rot: 180 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "arrow", rot: 270 }, { shape: "arrow", rot: 0 }, { shape: "arrow", rot: 90 }, { shape: "arrow", rot: 180 }],
    answerIndex: 0,
    explanation: "The arrow rotates 90° clockwise at each step: 0° → 90° → 180°. The next position is 270°."
  },
  {
    id: "abs-02", section: "abstract", topic: "abstract-odd", difficulty: "easy",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "arrow", rot: 0 }, { shape: "arrow", rot: 0 }, { shape: "arrow", rot: 180 }, { shape: "arrow", rot: 0 }, { shape: "arrow", rot: 0 }],
    answerIndex: 2,
    explanation: "Every arrow points upwards except the third, which points downwards. It is the odd one out."
  },
  {
    id: "abs-03", section: "abstract", topic: "abstract-series", difficulty: "easy",
    stimulus: { series: [{ shape: "square", dots: 1 }, { shape: "square", dots: 2 }, { shape: "square", dots: 3 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "square", dots: 4 }, { shape: "square", dots: 2 }, { shape: "square", dots: 5 }, { shape: "square", dots: 1 }],
    answerIndex: 0,
    explanation: "The number of dots increases by one each step: 1 → 2 → 3. The next figure has 4 dots."
  },

  // ---- Medium ----
  {
    id: "abs-04", section: "abstract", topic: "abstract-series", difficulty: "medium",
    stimulus: { series: [{ shape: "arrow", rot: 0 }, { shape: "arrow", rot: 45 }, { shape: "arrow", rot: 90 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "arrow", rot: 135 }, { shape: "arrow", rot: 90 }, { shape: "arrow", rot: 180 }, { shape: "arrow", rot: 45 }],
    answerIndex: 0,
    explanation: "The arrow rotates 45° clockwise each step: 0° → 45° → 90°. The next position is 135°."
  },
  {
    id: "abs-05", section: "abstract", topic: "abstract-odd", difficulty: "medium",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "circle", fill: true }, { shape: "square", fill: true }, { shape: "triangle", fill: true }, { shape: "diamond", fill: false }, { shape: "arrow", fill: true }],
    answerIndex: 3,
    explanation: "Every figure is solid (filled) except the diamond, which is only an outline. It is the odd one out."
  },
  {
    id: "abs-06", section: "abstract", topic: "abstract-series", difficulty: "medium",
    stimulus: { series: [{ shape: "triangle", rot: 0, fill: true }, { shape: "triangle", rot: 60, fill: false }, { shape: "triangle", rot: 120, fill: true }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "triangle", rot: 180, fill: false }, { shape: "triangle", rot: 180, fill: true }, { shape: "triangle", rot: 240, fill: false }, { shape: "triangle", rot: 120, fill: false }],
    answerIndex: 0,
    explanation: "Two things change each step: the triangle rotates 60° (0° → 60° → 120°), and the fill alternates solid → outline. Next is 180° and outline."
  },

  // ---- Hard ----
  {
    id: "abs-07", section: "abstract", topic: "abstract-series", difficulty: "hard",
    stimulus: { series: [{ shape: "diamond", rot: 0, dots: 1 }, { shape: "diamond", rot: 45, dots: 2 }, { shape: "diamond", rot: 90, dots: 3 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "diamond", rot: 135, dots: 4 }, { shape: "diamond", rot: 90, dots: 4 }, { shape: "diamond", rot: 135, dots: 3 }, { shape: "diamond", rot: 180, dots: 4 }],
    answerIndex: 0,
    explanation: "Two things change together: the diamond rotates 45° each step (0° → 45° → 90°) and the dots increase by one (1 → 2 → 3). Next is 135° with 4 dots."
  },
  {
    id: "abs-08", section: "abstract", topic: "abstract-odd", difficulty: "hard",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "arrow", rot: 45 }, { shape: "arrow", rot: 135 }, { shape: "arrow", rot: 225 }, { shape: "arrow", rot: 315 }, { shape: "arrow", rot: 90 }],
    answerIndex: 4,
    explanation: "Four arrows point diagonally (45°, 135°, 225°, 315°). The fifth points straight (90°), so it is the odd one out."
  },
  {
    id: "abs-09", section: "abstract", topic: "abstract-series", difficulty: "hard",
    stimulus: { series: [{ shape: "circle", fill: true, dots: 0 }, { shape: "circle", fill: false, dots: 1 }, { shape: "circle", fill: true, dots: 2 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "circle", fill: false, dots: 3 }, { shape: "circle", fill: true, dots: 3 }, { shape: "circle", fill: false, dots: 2 }, { shape: "circle", fill: true, dots: 0 }],
    answerIndex: 0,
    explanation: "The fill alternates solid → outline each step, and the dots increase by one (0 → 1 → 2). Next is an outline circle with 3 dots."
  },

  /* ======================================================================
   * BANK GROWTH 3 (original content, graded by difficulty)
   * ==================================================================== */

  // ---- Verbal: Passage J (Customer feedback programme) ------------------
  {
    id: "verb-45", section: "verbal", topic: "verbal-synonym", difficulty: "easy",
    stimulus: { passage: "A retailer launched a customer feedback programme, inviting shoppers to rate their visit through a short survey at the checkout. In the first quarter, response rates were low, so the company added a small prize draw as an incentive. Participation then rose sharply, and the feedback highlighted long queue times as the main concern. In response, the retailer trialled additional staff at peak hours in two of its busiest stores." },
    question: "Which one of the following would best replace 'incentive' while keeping the meaning of the passage?",
    options: ["reward", "penalty", "warning", "refund"],
    answer: "reward",
    explanation: "An 'incentive' here is something offered to encourage participation. 'Reward' keeps that meaning; the others change it."
  },
  {
    id: "verb-46", section: "verbal", topic: "verbal-detail", difficulty: "easy",
    stimulus: { passage: "A retailer launched a customer feedback programme, inviting shoppers to rate their visit through a short survey at the checkout. In the first quarter, response rates were low, so the company added a small prize draw as an incentive. Participation then rose sharply, and the feedback highlighted long queue times as the main concern. In response, the retailer trialled additional staff at peak hours in two of its busiest stores." },
    question: "What did the feedback highlight as the main concern?",
    options: ["Long queue times", "Product quality", "Pricing", "Staff rudeness"],
    answer: "Long queue times",
    explanation: "The passage states the feedback 'highlighted long queue times as the main concern'."
  },
  {
    id: "verb-47", section: "verbal", topic: "verbal-inference", difficulty: "medium",
    stimulus: { passage: "A retailer launched a customer feedback programme, inviting shoppers to rate their visit through a short survey at the checkout. In the first quarter, response rates were low, so the company added a small prize draw as an incentive. Participation then rose sharply, and the feedback highlighted long queue times as the main concern. In response, the retailer trialled additional staff at peak hours in two of its busiest stores." },
    question: "Adding the prize draw increased survey participation.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "True on the basis of the passage",
    explanation: "After the prize draw was added 'participation then rose sharply', which supports the statement."
  },
  {
    id: "verb-48", section: "verbal", topic: "verbal-inference", difficulty: "hard",
    stimulus: { passage: "A retailer launched a customer feedback programme, inviting shoppers to rate their visit through a short survey at the checkout. In the first quarter, response rates were low, so the company added a small prize draw as an incentive. Participation then rose sharply, and the feedback highlighted long queue times as the main concern. In response, the retailer trialled additional staff at peak hours in two of its busiest stores." },
    question: "The extra staffing reduced queue times in the trial stores.",
    options: ["True on the basis of the passage", "False on the basis of the passage", "Not possible to say on the basis of the passage"],
    answer: "Not possible to say on the basis of the passage",
    explanation: "The passage says extra staff were trialled, but reports no result of that trial. There is no basis to judge the effect, so the answer is Not possible to say."
  },

  // ---- Numerical: table (Regional Sales) -------------------------------
  {
    id: "num-49", section: "numerical", topic: "percentage-change", difficulty: "medium",
    stimulus: { table: { title: "Regional Sales (£000s)", columns: ["Region", "Q1", "Q2"], rows: [["North", "240", "300"], ["South", "180", "162"], ["East", "150", "195"], ["West", "200", "220"]] } },
    question: "By what percentage did North's sales change from Q1 to Q2?",
    options: ["20%", "24%", "25%", "30%", "60%"],
    answer: "25%",
    explanation: "Identify the cells:\n  North Q1 = 240, Q2 = 300\n\nFormula:\n  (new - original) ÷ original × 100\n\nCalculation:\n  (300 - 240) ÷ 240 × 100 = 60 ÷ 240 × 100 = 25%"
  },
  {
    id: "num-50", section: "numerical", topic: "percentage-change", difficulty: "medium",
    stimulus: { table: { title: "Regional Sales (£000s)", columns: ["Region", "Q1", "Q2"], rows: [["North", "240", "300"], ["South", "180", "162"], ["East", "150", "195"], ["West", "200", "220"]] } },
    question: "How did South's sales change from Q1 to Q2?",
    options: ["10% decrease", "9% decrease", "11% decrease", "18% decrease", "10% increase"],
    answer: "10% decrease",
    explanation: "Identify the cells:\n  South Q1 = 180, Q2 = 162\n\nCalculation:\n  (162 - 180) ÷ 180 × 100 = -18 ÷ 180 × 100 = -10%\n\nThe negative sign means a 10% decrease."
  },
  {
    id: "num-51", section: "numerical", topic: "share", difficulty: "medium",
    stimulus: { table: { title: "Regional Sales (£000s)", columns: ["Region", "Q1", "Q2"], rows: [["North", "240", "300"], ["South", "180", "162"], ["East", "150", "195"], ["West", "200", "220"]] } },
    question: "What share of total Q2 sales did the East region account for?",
    options: ["17.1%", "19.5%", "20.0%", "22.2%", "25.0%"],
    answer: "22.2%",
    explanation: "Step 1 - total Q2:\n  300 + 162 + 195 + 220 = 877\n\nStep 2 - East as a share:\n  195 ÷ 877 × 100 = 22.2% (to 1 d.p.)"
  },
  {
    id: "num-52", section: "numerical", topic: "ratio", difficulty: "easy",
    stimulus: { table: { title: "Regional Sales (£000s)", columns: ["Region", "Q1", "Q2"], rows: [["North", "240", "300"], ["South", "180", "162"], ["East", "150", "195"], ["West", "200", "220"]] } },
    question: "What is the ratio of North's Q1 sales to West's Q1 sales, in its simplest form?",
    options: ["6:5", "5:6", "5:4", "4:3", "3:2"],
    answer: "6:5",
    explanation: "Identify the cells:\n  North Q1 = 240, West Q1 = 200\n\nSimplify 240 : 200 by dividing both by 40:\n  = 6 : 5"
  },

  // ---- Checking: Shipment Manifest (multi-select) ----------------------
  {
    id: "chk-25", section: "error", topic: "error-checking", multi: true, difficulty: "easy",
    stimulus: { check: { title: "Shipment Manifest", columns: ["Item", "Code", "Status", "Weight"], rows: [["Pallet A", "SH-5012", "S", "120kg"], ["Pallet B", "SH-5013", "P", "85kg"], ["Pallet C", "SH-5014", "H", "64kg"], ["Pallet D", "SH-5015", "S", "210kg"]], codingKey: "P = Pending    S = Shipped    H = On Hold", entryLabel: "Re-entered record", entry: ["Pallet A", "SH-5012", "Shipped", "120kg"] } },
    question: "Compare the re-entered record with the original manifest. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the Code", "There is an error in the Status", "There is an error in the Weight"],
    answer: ["The entire item is correct"],
    explanation: "Matching row (Pallet A):\n  Item, Code and Weight match; Status code S = Shipped, re-entered 'Shipped'. Every field is correct."
  },
  {
    id: "chk-26", section: "error", topic: "error-checking", multi: true, difficulty: "medium",
    stimulus: { check: { title: "Shipment Manifest", columns: ["Item", "Code", "Status", "Weight"], rows: [["Pallet A", "SH-5012", "S", "120kg"], ["Pallet B", "SH-5013", "P", "85kg"], ["Pallet C", "SH-5014", "H", "64kg"], ["Pallet D", "SH-5015", "S", "210kg"]], codingKey: "P = Pending    S = Shipped    H = On Hold", entryLabel: "Re-entered record", entry: ["Pallet B", "SH-5013", "Pending", "58kg"] } },
    question: "Compare the re-entered record with the original manifest. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the Code", "There is an error in the Status", "There is an error in the Weight"],
    answer: ["There is an error in the Weight"],
    explanation: "Matching row (Pallet B): Code and Status (P = Pending) are correct. Weight: original 85kg, re-entered 58kg (ERROR - digits transposed). Only the Weight is wrong."
  },
  {
    id: "chk-27", section: "error", topic: "error-checking", multi: true, difficulty: "medium",
    stimulus: { check: { title: "Shipment Manifest", columns: ["Item", "Code", "Status", "Weight"], rows: [["Pallet A", "SH-5012", "S", "120kg"], ["Pallet B", "SH-5013", "P", "85kg"], ["Pallet C", "SH-5014", "H", "64kg"], ["Pallet D", "SH-5015", "S", "210kg"]], codingKey: "P = Pending    S = Shipped    H = On Hold", entryLabel: "Re-entered record", entry: ["Pallet C", "SH-5041", "On Hold", "64kg"] } },
    question: "Compare the re-entered record with the original manifest. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the Code", "There is an error in the Status", "There is an error in the Weight"],
    answer: ["There is an error in the Code"],
    explanation: "Matching row (Pallet C): Status code H = On Hold and Weight are correct. Code: original SH-5014, re-entered SH-5041 (ERROR - the 1 and 4 are transposed). Only the Code is wrong."
  },
  {
    id: "chk-28", section: "error", topic: "error-checking", multi: true, difficulty: "hard",
    stimulus: { check: { title: "Shipment Manifest", columns: ["Item", "Code", "Status", "Weight"], rows: [["Pallet A", "SH-5012", "S", "120kg"], ["Pallet B", "SH-5013", "P", "85kg"], ["Pallet C", "SH-5014", "H", "64kg"], ["Pallet D", "SH-5015", "S", "210kg"]], codingKey: "P = Pending    S = Shipped    H = On Hold", entryLabel: "Re-entered record", entry: ["Pallet D", "SH-5015", "Pending", "120kg"] } },
    question: "Compare the re-entered record with the original manifest. Select every field that contains an error (or that the entire item is correct).",
    options: ["The entire item is correct", "There is an error in the Item", "There is an error in the Code", "There is an error in the Status", "There is an error in the Weight"],
    answer: ["There is an error in the Status", "There is an error in the Weight"],
    explanation: "Matching row (Pallet D): Item and Code are correct. Status: code S = Shipped, but re-entered 'Pending' (ERROR after decoding). Weight: original 210kg, re-entered 120kg (ERROR - digits transposed). Two errors: Status and Weight."
  },

  // ---- Abstract reasoning ----------------------------------------------
  {
    id: "abs-10", section: "abstract", topic: "abstract-series", difficulty: "easy",
    stimulus: { series: [{ shape: "square" }, { shape: "circle" }, { shape: "triangle" }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "square" }, { shape: "circle" }, { shape: "triangle" }, { shape: "diamond" }],
    answerIndex: 0,
    explanation: "The shapes cycle square → circle → triangle and then repeat, so the next figure is a square."
  },
  {
    id: "abs-11", section: "abstract", topic: "abstract-odd", difficulty: "easy",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "square", dots: 2 }, { shape: "square", dots: 2 }, { shape: "square", dots: 3 }, { shape: "square", dots: 2 }, { shape: "square", dots: 2 }],
    answerIndex: 2,
    explanation: "Every square has two dots except the third, which has three. It is the odd one out."
  },
  {
    id: "abs-12", section: "abstract", topic: "abstract-series", difficulty: "medium",
    stimulus: { series: [{ shape: "triangle", rot: 0 }, { shape: "triangle", rot: 90 }, { shape: "triangle", rot: 180 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "triangle", rot: 270 }, { shape: "triangle", rot: 180 }, { shape: "triangle", rot: 0 }, { shape: "triangle", rot: 90 }],
    answerIndex: 0,
    explanation: "The triangle rotates 90° clockwise each step (0° → 90° → 180°). The next position is 270°."
  },
  {
    id: "abs-13", section: "abstract", topic: "abstract-odd", difficulty: "medium",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "circle", fill: false }, { shape: "square", fill: false }, { shape: "triangle", fill: true }, { shape: "diamond", fill: false }, { shape: "arrow", fill: false }],
    answerIndex: 2,
    explanation: "Every figure is an outline except the triangle, which is solid (filled). It is the odd one out."
  },
  {
    id: "abs-14", section: "abstract", topic: "abstract-series", difficulty: "hard",
    stimulus: { series: [{ shape: "diamond", rot: 0, fill: true, dots: 1 }, { shape: "diamond", rot: 45, fill: false, dots: 2 }, { shape: "diamond", rot: 90, fill: true, dots: 3 }] },
    question: "Which figure comes next in the sequence?",
    options: [{ shape: "diamond", rot: 135, fill: false, dots: 4 }, { shape: "diamond", rot: 135, fill: true, dots: 4 }, { shape: "diamond", rot: 90, fill: false, dots: 4 }, { shape: "diamond", rot: 135, fill: false, dots: 3 }],
    answerIndex: 0,
    explanation: "Three things change together: the diamond rotates 45° (0° → 45° → 90°), the fill alternates solid → outline, and the dots increase by one (1 → 2 → 3). Next is 135°, outline, 4 dots."
  },
  {
    id: "abs-15", section: "abstract", topic: "abstract-odd", difficulty: "hard",
    stimulus: {},
    question: "Which figure is the odd one out?",
    options: [{ shape: "arrow", rot: 0 }, { shape: "arrow", rot: 90 }, { shape: "arrow", rot: 180 }, { shape: "arrow", rot: 270 }, { shape: "arrow", rot: 135 }],
    answerIndex: 4,
    explanation: "Four arrows point straight (up, right, down, left). The fifth points diagonally (135°), so it is the odd one out."
  }

];

// Expose to the app (and to Node, if anyone wants to lint/count the bank).
if (typeof window !== "undefined") window.QUESTIONS = QUESTIONS;
if (typeof module !== "undefined" && module.exports) module.exports = QUESTIONS;
