/* ==========================================================================
   Saville Swift Comprehension - app logic
   Pure vanilla JS. No framework, no network. Reads the bank from questions.js.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIG - the ONE place to change per-question timing (in seconds).
   The section timer = (per-question seconds for that section) × (no. of
   questions). In a mixed mock, each question contributes its own section's
   time. These also pre-fill the editable inputs on the home screen.
   -------------------------------------------------------------------------- */
const CONFIG = {
  // Defaults match the official Saville Swift Comprehension pacing:
  //   Verbal    4 min for 8 questions  -> 30s/question
  //   Numerical 4 min for 8 questions  -> 30s/question
  //   Abstract  ~2 min for 6 questions -> ~20s/question
  //   Checking  90s for 8 questions    -> ~11s/question
  perQuestionSeconds: {
    verbal: 30,
    numerical: 30,
    abstract: 20,
    error: 11
  },
  storageKey: "saville-history-v1", // localStorage key for cross-session history
  themeKey: "saville-theme"         // localStorage key for the light/dark choice
};

/* ==========================================================================
   UI STRINGS  ·  t(key, vars) looks up the string and fills {vars}.
   ========================================================================== */
const STRINGS = {
  en: {
    // sections & topics
    sec_verbal: "Verbal Reasoning", sec_numerical: "Numerical Reasoning", sec_error: "Error Checking",
    "topic_percentage-change": "Percentage change", topic_average: "Averages", topic_share: "Part-of-whole / share",
    "topic_forward-percentage": "Forward % increase/decrease", topic_ratio: "Ratios", "topic_read-off": "Reading off a chart",
    "topic_numerical-inference": "Numerical: True/False/Not possible", topic_verbal: "Verbal reasoning",
    "topic_verbal-synonym": "Verbal: word meaning", "topic_verbal-detail": "Verbal: detail",
    "topic_verbal-inference": "Verbal: True/False/Not possible", "topic_error-checking": "Error checking",
    sec_abstract: "Abstract Reasoning",
    "topic_abstract-series": "Abstract: next in sequence", "topic_abstract-odd": "Abstract: odd one out",
    mode_abstract_t: "Abstract Reasoning", mode_abstract_d: "{n} questions · shapes, sequences & odd-one-out",
    feat_abstract: "Abstract",
    difficulty: "Difficulty", diff_mixed: "Mixed", diff_easy: "Easy", diff_medium: "Medium", diff_hard: "Hard", diff_incremental: "Incremental",
    diff_note: "Difficulty applies to whatever you start next. Incremental orders a single section from easy to hard (the mock always uses a mix).",
    abs_series_q: "Which figure comes next in the sequence?", abs_odd_q: "Which figure is the odd one out?",
    opt_n: "option {n}",
    // lock
    lock_title: "Restricted Access",
    lock_sub: "This Swift Comprehension practice app is private. Enter the access password to continue.",
    lock_placeholder: "Access password", unlock: "Unlock →",
    lock_error: "Incorrect password. Please try again.",
    // landing
    badge: "Aptitude Trainer", hero_title: "Swift Comprehension",
    hero_sub: "Train your accuracy under real time pressure across Verbal, Numerical, Abstract and Error-Checking sections, with full worked explanations on every question.",
    feat_verbal: "Verbal", feat_numerical: "Numerical", feat_error: "Error checking",
    start: "Start Practising →",
    // home
    app_title: "Swift Comprehension Practice",
    app_sub: "Accuracy under time pressure · Verbal · Numerical · Abstract · Error checking",
    choose_mode: "Choose a mode",
    mode_verbal_t: "Verbal Reasoning", mode_verbal_d: "{n} questions · True / False / Cannot Say",
    mode_numerical_t: "Numerical Reasoning", mode_numerical_d: "{n} questions · tables & charts (calculator allowed)",
    mode_error_t: "Error Checking", mode_error_d: "{n} questions · spot the copy errors",
    mode_all_t: "Full Deck Test", mode_all_d: "All {n} questions · every section, one run",
    mock_t: "Real Mock Test",
    mock_d: "Full exam simulation across all sections (Verbal, Numerical, Abstract, Checking) with real, separately-timed sections. Always timed; choose a difficulty above.",
    study_label: "<b>Study mode</b> · untimed, explanations shown immediately",
    study_note: "In timed mode the countdown runs and explanations are withheld until the review screen.",
    past_results: "Past results", clear_history: "Clear history", acc_short: "acc",
    storage_note: "Stored locally in your browser (localStorage) · no server involved.",
    // quiz
    section_of: "Section {a} of {b}", q_of: "Q{a} of {b}", q_label: "Q{a} of {b}",
    time_left: "Time left", study_untimed: "Study mode · untimed",
    calc_note: "🖩 Calculator permitted (as in the real test)",
    quit: "Quit to menu", skip: "Skip →", skip_section: "Skip section →",
    next: "Next →", next_section: "Next section →", finish: "Finish",
    check_answer: "Check answer", back_btn: "Back",
    verdict_correct: "✓ Correct · the answer is {a}",
    verdict_wrong: "✗ Not quite. You chose {you} · the correct answer is {a}",
    heading_why: "Why this is correct", heading_how: "How to get there", explanation: "Explanation",
    coding_key: "Coding key:", original_prefix: "Original: {title}", reentered: "Re-entered record",
    // results
    results: "Results", total_score: "Total score", accuracy: "Accuracy", accuracy_sub: "(of attempted)",
    speed: "Speed", speed_sub: "(q / min)",
    attempted_n: "Attempted {a} of {b}", per_question: "{s}s per question", time_used: "time used {time}",
    study_untimed_paren: " (study mode, untimed)",
    breakdown: "Per-section breakdown",
    focus_areas: "<b>Focus areas</b> · weakest by accuracy:",
    no_weak: "<b>Nice.</b> No weak spots flagged this session.",
    home: "Home", review_btn: "Review answers & explanations →", full_mock: "Full Mock",
    // review
    review: "Review", your_answer: "Your answer:", correct_answer: "Correct answer:",
    not_answered: "· (not answered)", nothing: "nothing",
    back_results: "← Results", done_home: "Done · Home"
  },
};

function t(key, vars) {
  let s = STRINGS.en[key] != null ? STRINGS.en[key] : key;
  if (vars) for (const k in vars) s = s.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]);
  return s;
}
const secLabel = (section) => t("sec_" + section);
const topicLabel = (topic) => t("topic_" + topic);

/* --------------------------------------------------------------------------
   STATE - current session lives in memory; history is persisted (see below).
   -------------------------------------------------------------------------- */
let state = null;        // active quiz session, or null on home/results
let studyMode = false;   // untimed + immediate explanations

// Difficulty: "mixed" | "easy" | "medium" | "hard" | "incremental"
let diffChoice = (function () { try { return localStorage.getItem("sc-diff") || "mixed"; } catch { return "mixed"; } })();
function setDiff(d) { diffChoice = d; try { localStorage.setItem("sc-diff", d); } catch {} }

const app = document.getElementById("app");

/* ==========================================================================
   DIFFICULTY
   --------------------------------------------------------------------------
   New questions carry an explicit `difficulty`. The original bank is graded
   here so every section spans easy/medium/hard (anything unlisted = medium).
   ========================================================================== */
const DIFF_RANK = { easy: 0, medium: 1, hard: 2 };
const EASY_IDS = new Set([
  // verbal: word-meaning & detail
  "verb-09", "verb-10", "verb-13", "verb-14", "verb-29", "verb-30", "verb-33", "verb-34", "verb-37", "verb-38", "verb-41", "verb-42",
  // numerical: read-off & straightforward averages
  "num-02", "num-11", "num-13", "num-18", "num-34", "num-37", "num-40", "num-41",
  // error: clean / single-field
  "err-01", "err-04", "err-05", "err-07", "err-10", "err-12", "chk-01", "chk-17", "chk-21"
]);
const HARD_IDS = new Set([
  // verbal: nuanced "not possible to say" / inference
  "verb-04", "verb-08", "verb-12", "verb-16", "verb-32", "verb-36", "verb-44",
  // numerical: chart inference & multi-step
  "num-08", "num-12", "num-16", "num-36", "num-39", "num-45",
  // error: multi-error & decode traps
  "chk-03", "chk-04", "chk-15", "chk-16", "chk-19", "chk-24"
]);
function diffOf(q) {
  if (q.difficulty) return q.difficulty;
  if (EASY_IDS.has(q.id)) return "easy";
  if (HARD_IDS.has(q.id)) return "hard";
  return "medium";
}

/* ==========================================================================
   HELPERS
   ========================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtTime = (sec) => {
  sec = Math.max(0, Math.round(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

// Multi-select questions (the new checking style) store their answer as an array.
const isMulti = (q) => Array.isArray(q.answer) || q.multi === true;
// Set equality for multi-select scoring (order-independent).
const setsEqual = (a, b) =>
  Array.isArray(a) && Array.isArray(b) && a.length === b.length &&
  a.every((x) => b.includes(x));
// Has this question been attempted? (string answer, or non-empty array)
const isAnswered = (a) => a != null && (!Array.isArray(a) || a.length > 0);
// Is this answer correct, for either single- or multi-select questions?
const isCorrect = (q, a) => (isMulti(q) ? setsEqual(a, q.answer) : a === q.answer);

// Fisher-Yates shuffle (in place).
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// A key identifying the shared stimulus, so questions about the same passage,
// table, chart or checking record stay together when we randomise order.
function stimulusKey(q) {
  const s = q.stimulus || {};
  if (s.passage) return "p:" + s.passage;
  if (s.table) return "t:" + JSON.stringify(s.table);
  if (s.chart) return "c:" + JSON.stringify(s.chart);
  if (s.check) return "k:" + s.check.title + JSON.stringify(s.check.columns) + JSON.stringify(s.check.rows);
  return "id:" + q.id; // legacy single records: each its own group
}

// Randomise question order while keeping stimulus groups intact (and the
// questions within a group in their authored order).
function shuffleByStimulus(questions) {
  const groups = new Map();
  questions.forEach((q) => {
    const k = stimulusKey(q);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  });
  return shuffle([...groups.values()]).flat();
}


/* ==========================================================================
   PERSISTENCE
   --------------------------------------------------------------------------
   The CURRENT session is held in memory (the `state` object). Completed
   sessions are appended to the browser's localStorage as a small JSON array
   so you can see progress across visits. This is LOCAL ONLY - no server, no
   database. Clearing browser data (or the "Clear history" button) wipes it.
   If localStorage is unavailable (e.g. opened with file:// in a strict
   browser), the app still works fully - it just won't remember past runs.
   ========================================================================== */
function loadHistory() {
  try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)) || []; }
  catch { return []; }
}
function saveHistoryEntry(entry) {
  try {
    const h = loadHistory();
    h.unshift(entry);
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(h.slice(0, 25)));
  } catch { /* storage blocked - ignore, session still works */ }
}
function clearHistory() {
  try { localStorage.removeItem(CONFIG.storageKey); } catch {}
  renderHome();
}

/* ==========================================================================
   THEME (light / dark)
   --------------------------------------------------------------------------
   Three states:
     • explicit "dark"  -> data-theme="dark" on <html>
     • explicit "light" -> data-theme="light"
     • no choice        -> no attribute; CSS follows the OS via @media
   The choice persists in localStorage. A floating button toggles it.
   ========================================================================== */
function effectiveTheme() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
  // theme: "dark" | "light" | null (null = follow system)
  if (theme) document.documentElement.setAttribute("data-theme", theme);
  else document.documentElement.removeAttribute("data-theme");
  const btn = document.getElementById("theme-toggle");
  if (btn) {
    const dark = effectiveTheme() === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    btn.title = btn.getAttribute("aria-label");
  }
}
function toggleTheme() {
  const next = effectiveTheme() === "dark" ? "light" : "dark";
  try { localStorage.setItem(CONFIG.themeKey, next); } catch {}
  applyTheme(next);
}
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(CONFIG.themeKey); } catch {}
  // Dark is the default: if the user hasn't made an explicit choice, use dark.
  applyTheme(saved === "light" ? "light" : "dark");

  // Floating toggle lives outside #app so it survives every re-render.
  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.addEventListener("click", toggleTheme);
  document.body.appendChild(btn);
  applyTheme(document.documentElement.getAttribute("data-theme")); // set icon

  // If the user is following the system and the OS theme flips, update the icon.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!document.documentElement.getAttribute("data-theme")) applyTheme(null);
  });
}

/* ==========================================================================
   QUIZ SETUP
   ========================================================================== */
// Study mode applies to single-section practice only. The real mock is always
// timed (real rules), so study is suppressed while a mock is running.
function inStudy() { return studyMode && !(state && state.mock); }

function buildQuiz(mode) {
  // mode: "verbal" | "numerical" | "error" | "all" | "mock"
  if (mode === "mock") return buildMock();

  const sections = mode === "all" ? ["verbal", "numerical", "abstract", "error"] : [mode];
  let questions = [];
  for (const s of sections) {
    let pool = QUESTIONS.filter((q) => q.section === s);
    // Difficulty filter (easy/medium/hard); fall back to the full pool if a
    // section has none at that level.
    if (diffChoice === "easy" || diffChoice === "medium" || diffChoice === "hard") {
      const f = pool.filter((q) => diffOf(q) === diffChoice);
      pool = f.length ? f : pool;
    }
    questions = questions.concat(shuffleByStimulus(pool));
  }
  // Incremental: order the whole session from easy to hard.
  if (diffChoice === "incremental") {
    questions.sort((p, q) => DIFF_RANK[diffOf(p)] - DIFF_RANK[diffOf(q)]);
  }
  const times = CONFIG.perQuestionSeconds;
  const totalSeconds = questions.reduce((sum, q) => sum + times[q.section], 0);

  state = {
    mode, mock: false,
    questions,
    idx: 0,
    answers: new Array(questions.length).fill(null), // selected option string or null
    revealed: false,        // study mode: is the current explanation shown?
    times,
    totalSeconds,
    startedAt: Date.now(),
    timeUsed: 0,
    timerId: null
  };

  if (!inStudy()) startTimer();
  renderQuiz();
}

/* ==========================================================================
   REAL MOCK TEST  (official structure & timings)
   --------------------------------------------------------------------------
   Mirrors the real Saville Swift assessment, across ALL sections:
     Verbal    - 2 testlets of 4 questions, 2:00 each
     Numerical - 2 testlets of 4 questions, 2:00 each
     Abstract  - 1 section of 6 questions, 2:00
     Checking  - 1 section of 8 questions, 1:30
   = 30 questions in ~11.5 minutes. Each block is separately timed; when a
   block's time runs out you move straight to the next one (no going back).
   Difficulty (easy/medium/hard) filters the pool; mixed/incremental use all.
   ========================================================================== */
const MOCK_BLOCKS = [
  { section: "verbal", time: 120, size: 4 },
  { section: "verbal", time: 120, size: 4 },
  { section: "numerical", time: 120, size: 4 },
  { section: "numerical", time: 120, size: 4 },
  { section: "abstract", time: 120, size: 6 },
  { section: "error", time: 90, size: 8 }
];

// A shuffled pool for a section, difficulty-filtered when a level is chosen.
function mockPool(section) {
  let pool = QUESTIONS.filter((q) => q.section === section);
  if (diffChoice === "easy" || diffChoice === "medium" || diffChoice === "hard") {
    const f = pool.filter((q) => diffOf(q) === diffChoice);
    if (f.length) pool = f;
  }
  return shuffle(pool.slice());
}

function buildMock() {
  // Draw distinct questions per section, then split them into the timed blocks.
  const pools = {}, used = {};
  const blocks = MOCK_BLOCKS.map((spec) => {
    if (!pools[spec.section]) { pools[spec.section] = mockPool(spec.section); used[spec.section] = 0; }
    const pool = pools[spec.section];
    const qs = pool.slice(used[spec.section], used[spec.section] + spec.size);
    used[spec.section] += spec.size;
    return { section: spec.section, timeLimit: spec.time, questions: qs };
  }).filter((b) => b.questions.length);

  // Flatten into one question list, recording each question's block.
  const questions = [], qBlock = [], blockStart = [];
  blocks.forEach((b, bi) => {
    blockStart[bi] = questions.length;
    b.questions.forEach((q) => { questions.push(q); qBlock.push(bi); });
  });

  state = {
    mode: "mock", mock: true,
    blocks, blockIdx: 0, qBlock, blockStart,
    questions,
    idx: 0,
    answers: new Array(questions.length).fill(null),
    revealed: false,
    startedAt: Date.now(),
    blockStartedAt: Date.now(),
    timeUsed: 0,
    timerId: null,
    totalSeconds: blocks.reduce((s, b) => s + b.timeLimit, 0)
  };
  startTimer();
  renderQuiz();
}

// Move to the next mock block (or finish). Unanswered questions in the block
// just stay unanswered.
function advanceBlock() {
  state.blockIdx++;
  if (state.blockIdx >= state.blocks.length) { endQuiz(); return; }
  state.idx = state.blockStart[state.blockIdx];
  state.blockStartedAt = Date.now();
  state.revealed = false;
  renderQuiz();
}

function startTimer() {
  stopTimer();
  state.timerId = setInterval(updateTimers, 250);
  updateTimers();
}

// Updates the single section countdown. Like the real Saville test, the whole
// section shares one pool of time (there is no per-question timer); you spend it
// across the questions however you like.
function updateTimers() {
  if (!state) return;
  const remaining = state.mock
    ? state.blocks[state.blockIdx].timeLimit - (Date.now() - state.blockStartedAt) / 1000
    : state.totalSeconds - (Date.now() - state.startedAt) / 1000;
  const sEl = document.getElementById("timer");
  const sPill = document.getElementById("s-pill");
  if (sEl) sEl.textContent = fmtTime(remaining);
  if (sPill) sPill.classList.toggle("warn", remaining <= 15);
  if (remaining <= 0) { if (state.mock) advanceBlock(); else endQuiz(); }
}
function stopTimer() {
  if (state && state.timerId) { clearInterval(state.timerId); state.timerId = null; }
}

/* ==========================================================================
   ANSWERING
   ========================================================================== */
function selectOption(value) {
  const q = state.questions[state.idx];

  if (isMulti(q)) {
    // Toggle a field in the selection. The first option ("entire item is
    // correct") is mutually exclusive with the error options.
    if (inStudy() && state.revealed) return; // locked once checked
    const allCorrect = q.options[0];
    let sel = Array.isArray(state.answers[state.idx]) ? state.answers[state.idx].slice() : [];
    if (value === allCorrect) {
      sel = sel.includes(value) ? [] : [value];
    } else {
      sel = sel.filter((v) => v !== allCorrect);
      sel = sel.includes(value) ? sel.filter((v) => v !== value) : sel.concat(value);
    }
    state.answers[state.idx] = sel.length ? sel : null;
    // Update the option buttons in place rather than re-rendering the whole
    // screen — a full re-render replays the card entrance animation and rebuilds
    // the (large) tables, which looks like a flicker on every tick.
    app.querySelectorAll(".opt").forEach((btn) => {
      btn.classList.toggle("selected", sel.includes(btn.dataset.opt));
    });
    const ck = document.getElementById("check-btn"); // study-mode "Check answer"
    if (ck) ck.disabled = !isAnswered(state.answers[state.idx]);
    return;
  }

  // Single-select.
  if (inStudy()) {
    if (state.revealed) return;       // lock once answered
    state.answers[state.idx] = value;
    state.revealed = true;
    renderQuiz();
  } else {
    state.answers[state.idx] = value; // timed: record and auto-advance
    next();
  }
}

// Study mode, multi-select: reveal the explanation after the user has chosen.
function revealMulti() {
  state.revealed = true;
  renderQuiz();
}

function next() {
  state.revealed = false;
  if (state.mock) {
    // In a mock, finishing the last question of a block jumps to the next block
    // (which resets that block's own timer).
    const lastInBlock = state.idx >= state.questions.length - 1 ||
      state.qBlock[state.idx] !== state.qBlock[state.idx + 1];
    if (lastInBlock) advanceBlock();
    else { state.idx++; renderQuiz(); }
    return;
  }
  if (state.idx >= state.questions.length - 1) {
    endQuiz();
  } else {
    state.idx++;
    renderQuiz();
  }
}
function prev() {
  // Only meaningful in study mode (review-as-you-go).
  if (state.idx > 0) { state.idx--; state.revealed = isAnswered(state.answers[state.idx]); renderQuiz(); }
}

function endQuiz() {
  stopTimer();
  const elapsed = (Date.now() - state.startedAt) / 1000;
  state.timeUsed = inStudy() ? elapsed : Math.min(elapsed, state.totalSeconds);
  renderResults();
}

/* ==========================================================================
   SCORING  (mirrors how Saville reports: total + accuracy + speed)
   ========================================================================== */
function computeResults() {
  const { questions, answers, timeUsed } = state;
  let attempted = 0, correct = 0;
  const bySection = {}; // section -> {attempted, correct, total}
  const byTopic = {};   // topic   -> {attempted, correct}

  questions.forEach((q, i) => {
    bySection[q.section] = bySection[q.section] || { attempted: 0, correct: 0, total: 0 };
    byTopic[q.topic] = byTopic[q.topic] || { attempted: 0, correct: 0 };
    bySection[q.section].total++;

    const a = answers[i];
    if (isAnswered(a)) {
      attempted++;
      bySection[q.section].attempted++;
      byTopic[q.topic].attempted++;
      if (isCorrect(q, a)) {
        correct++;
        bySection[q.section].correct++;
        byTopic[q.topic].correct++;
      }
    }
  });

  const accuracy = attempted ? correct / attempted : 0;             // % of attempted correct
  const speed = timeUsed > 0 ? attempted / (timeUsed / 60) : 0;     // questions completed per minute

  // Weakest topics: lowest accuracy among topics you actually attempted.
  const weak = Object.entries(byTopic)
    .filter(([, v]) => v.attempted > 0)
    .map(([t, v]) => ({ topic: t, acc: v.correct / v.attempted, attempted: v.attempted }))
    .sort((a, b) => a.acc - b.acc)
    .filter((x) => x.acc < 1)        // only flag topics with at least one miss
    .slice(0, 3);

  return {
    total: questions.length, attempted, correct,
    accuracy, speed, secPerQ: attempted ? timeUsed / attempted : 0,
    timeUsed, bySection, byTopic, weak
  };
}

/* ==========================================================================
   RENDERING - STIMULUS
   ========================================================================== */
// Renders one abstract-reasoning figure from a compact spec as inline SVG.
// spec: { shape: "square|circle|triangle|diamond|arrow", rot, fill, dots }
function absFigure(spec) {
  const s = spec || {};
  const c = 32, stroke = "currentColor", fill = s.fill ? "currentColor" : "none";
  const rot = `rotate(${s.rot || 0} ${c} ${c})`;
  let shape = "";
  switch (s.shape) {
    case "circle": shape = `<circle cx="32" cy="32" r="17" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`; break;
    case "triangle": shape = `<polygon points="32,14 50,48 14,48" fill="${fill}" stroke="${stroke}" stroke-width="3" stroke-linejoin="round" transform="${rot}"/>`; break;
    case "diamond": shape = `<polygon points="32,11 53,32 32,53 11,32" fill="${fill}" stroke="${stroke}" stroke-width="3" stroke-linejoin="round" transform="${rot}"/>`; break;
    case "arrow": shape = `<g transform="${rot}"><line x1="32" y1="48" x2="32" y2="16" stroke="${stroke}" stroke-width="3" stroke-linecap="round"/><polyline points="23,25 32,15 41,25" fill="none" stroke="${stroke}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g>`; break;
    default: shape = `<rect x="15" y="15" width="34" height="34" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="3" transform="${rot}"/>`;
  }
  let dots = "";
  const n = s.dots || 0;
  for (let i = 0; i < n; i++) dots += `<circle cx="${13 + i * 13}" cy="57" r="3.4" fill="${stroke}"/>`;
  return `<svg class="absfig" viewBox="0 0 64 64" aria-hidden="true">${shape}${dots}</svg>`;
}

function renderStimulus(q, { reviewDiff = false } = {}) {
  if (q.section === "verbal") {
    return `<p class="passage">${esc(q.stimulus.passage)}</p>`;
  }

  if (q.section === "abstract") {
    // Series questions show the sequence followed by a "?" tile; odd-one-out
    // questions have no stimulus row (the candidates are the options).
    const seq = q.stimulus && q.stimulus.series;
    if (!seq) return "";
    const tiles = seq.map((f) => `<div class="abs-tile">${absFigure(f)}</div>`).join("");
    return `<div class="abs-seq">${tiles}<div class="abs-tile abs-q">?</div></div>`;
  }

  if (q.section === "numerical") {
    const calcNote = `<p class="calc-note">${t("calc_note")}</p>`;

    // Chart stimulus (e.g. pie chart).
    if (q.stimulus.chart) return calcNote + renderChart(q.stimulus.chart);

    // Table stimulus.
    const tbl = q.stimulus.table;
    const head = tbl.columns.map((c) => `<th>${esc(c)}</th>`).join("");
    const body = tbl.rows
      .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
      .join("");
    return `
      ${calcNote}
      <div class="tscroll"><table class="data">
        ${tbl.title ? `<caption>${esc(tbl.title)}</caption>` : ""}
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table></div>
      ${tbl.note ? `<p class="small muted">${esc(tbl.note)}</p>` : ""}`;
  }

  if (q.section === "error") {
    // New multi-select checking: original table (+ coding key) and a re-entered row.
    if (q.stimulus.check) return renderCheck(q.stimulus.check, q, reviewDiff);

    // Legacy single-record checking.
    const rec = q.stimulus;
    const rows = rec.fields.map((f) => {
      const mism = reviewDiff && f.original !== f.copied;
      const cls = reviewDiff ? (mism ? "cell-diff" : "cell-same") : "";
      return `<tr>
        <td class="label">${esc(f.label)}</td>
        <td>${esc(f.original)}</td>
        <td class="${cls}">${esc(f.copied)}</td>
      </tr>`;
    }).join("");
    return `
      <div class="tscroll"><table class="record">
        <thead><tr><th>${esc(rec.recordTitle || "Field")}</th><th>Original</th><th>Copied</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`;
  }
  return "";
}

// Renders a chart as inline SVG (no libraries, fully offline).
const CHART_COLORS = ["#5b82ff", "#43c47e", "#e0a23a", "#c879e6", "#ef6f6c", "#3fc1c9"];
function renderChart(chart) {
  return chart.type === "bar" ? renderBar(chart) : renderPie(chart);
}
function renderPie(chart) {
  const r = 92, cx = 110, cy = 110;
  let acc = 0;
  const slices = chart.data.map((d, i) => {
    const frac = d.percent / 100;
    const a0 = acc * 2 * Math.PI - Math.PI / 2; acc += frac;
    const a1 = acc * 2 * Math.PI - Math.PI / 2;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = frac > 0.5 ? 1 : 0;
    // A full-circle single slice needs a closed path; guard the rare 100% case.
    const d2 = frac >= 0.999
      ? `M${cx - r},${cy} A${r},${r} 0 1 1 ${cx + r},${cy} A${r},${r} 0 1 1 ${cx - r},${cy} Z`
      : `M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${large} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z`;
    return `<path d="${d2}" fill="${CHART_COLORS[i % CHART_COLORS.length]}" stroke="var(--surface)" stroke-width="2"/>`;
  }).join("");
  const legend = chart.data.map((d, i) =>
    `<span class="leg"><span class="sw" style="background:${CHART_COLORS[i % CHART_COLORS.length]}"></span>${esc(d.label)} (${d.percent}%)</span>`
  ).join("");
  return `
    <div class="chart-wrap">
      ${chart.title ? `<div class="chart-title">${esc(chart.title)}</div>` : ""}
      ${chart.total != null ? `<div class="chart-sub">Total: ${esc(String(chart.total))}${chart.unit ? " " + esc(chart.unit) : ""}</div>` : ""}
      <svg viewBox="0 0 220 220" class="pie" role="img">${slices}</svg>
      <div class="legend">${legend}</div>
    </div>`;
}

// Renders a simple vertical bar chart as inline SVG.
function renderBar(chart) {
  const data = chart.data;
  const max = Math.max(...data.map((d) => d.value));
  const W = 340, H = 210, pad = 30, gap = 16, n = data.length;
  const bw = (W - pad * 2 - gap * (n - 1)) / n;
  const bars = data.map((d, i) => {
    const h = max > 0 ? (d.value / max) * (H - pad * 2) : 0;
    const x = pad + i * (bw + gap);
    const y = H - pad - h;
    return `
      <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="3" fill="${CHART_COLORS[i % CHART_COLORS.length]}"/>
      <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" class="bar-val">${esc(String(d.value))}</text>
      <text x="${(x + bw / 2).toFixed(1)}" y="${(H - pad + 16).toFixed(1)}" text-anchor="middle" class="bar-lbl">${esc(d.label)}</text>`;
  }).join("");
  return `
    <div class="chart-wrap">
      ${chart.title ? `<div class="chart-title">${esc(chart.title)}</div>` : ""}
      ${chart.unit ? `<div class="chart-sub">${esc(chart.unit)}</div>` : ""}
      <svg viewBox="0 0 ${W} ${H + 12}" class="bar-chart" role="img">
        <line x1="${pad}" y1="${H - pad}" x2="${W - pad}" y2="${H - pad}" stroke="var(--line)"/>
        ${bars}
      </svg>
    </div>`;
}

// Renders the multi-select checking stimulus: original table (+ optional coding
// key) on top, the re-entered row below. In review mode, entry cells whose field
// the answer marks as an error are highlighted.
function renderCheck(c, q, reviewDiff) {
  const head = c.columns.map((col) => `<th>${esc(col)}</th>`).join("");
  const body = c.rows
    .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`)
    .join("");
  const errorCols = reviewDiff && Array.isArray(q.answer)
    ? c.columns.filter((col) => q.answer.includes(`There is an error in the ${col}`))
    : [];
  const entry = c.entry.map((cell, i) => {
    const cls = errorCols.includes(c.columns[i]) ? "cell-diff" : (reviewDiff ? "cell-same" : "");
    return `<td class="${cls}">${esc(cell)}</td>`;
  }).join("");
  return `
    <div class="tscroll"><table class="data check-original">
      ${c.title ? `<caption>${esc(t("original_prefix", { title: c.title }))}</caption>` : ""}
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table></div>
    ${c.codingKey ? `<p class="small muted coding-key">${t("coding_key")} ${esc(c.codingKey)}</p>` : ""}
    <div class="tscroll"><table class="data check-entry">
      <caption>${esc(c.entryLabel || t("reentered"))}</caption>
      <thead><tr>${head}</tr></thead>
      <tbody><tr>${entry}</tr></tbody>
    </table></div>`;
}

// Keyboard hint labels per option. Classic option sets keep their letter
// shortcuts; everything else (synonyms, 5-option numerical, multi-check) uses
// numbers 1..N.
function optionKeys(q) {
  const o = q.options;
  if (o.length === 3 && o[0] === "True" && o[1] === "False" && o[2] === "Cannot Say") return ["T", "F", "C"];
  if (o.length === 2 && o[0] === "Correct" && o[1] === "Error") return ["C", "E"];
  return o.map((_, i) => String(i + 1));
}

/* ==========================================================================
   ACCESS GATE (password lock)
   --------------------------------------------------------------------------
   A simple front-door password so the practice app isn't open to anyone with
   the link. The password is stored only as a SHA-256 hash (never in plain
   text). To change it, run this in the browser console and paste the result
   into AUTH.hash below:
     crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR-PASSWORD'))
       .then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')))

   NOTE: this is a client-side gate. It keeps casual visitors out, but it is
   not strong security - see the README for the real options.
   ========================================================================== */
const AUTH = {
  // SHA-256 of the access password.
  hash: "289f5d2095a64493ed78244853fa4db7236dc354382eeb8fa69d98b154da7cc9",
  sessionKey: "sc-unlocked"
};

function isUnlocked() {
  try { return sessionStorage.getItem(AUTH.sessionKey) === "1"; } catch { return false; }
}
async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

const LOCK_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="4" y="10" width="16" height="11" rx="2.5"/>
    <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
    <circle cx="12" cy="15.5" r="1.4" fill="currentColor" stroke="none"/>
  </svg>`;

function renderLock() {
  state = null;
  app.innerHTML = `
    <div class="lock-wrap">
      <section class="lock-card" id="lock-card">
        <div class="lock-badge">${LOCK_ICON}</div>
        <h1 class="lock-title">${t("lock_title")}</h1>
        <p class="lock-sub">${t("lock_sub")}</p>
        <form class="lock-form" id="lock-form" autocomplete="off" novalidate>
          <input class="lock-input" id="lock-input" type="password" placeholder="${t("lock_placeholder")}"
                 autocomplete="current-password" aria-label="${t("lock_placeholder")}" />
          <button class="enter-btn" type="submit" id="lock-btn">${t("unlock")}</button>
        </form>
        <p class="lock-error" id="lock-error" role="alert" hidden>${t("lock_error")}</p>
      </section>
      <footer class="sig">
        <span class="sig-text" id="sig-text"></span><span class="sig-alien" id="sig-alien">${ALIEN_SVG}</span><span class="sig-cursor">_</span>
      </footer>
    </div>
  `;

  const form = $("#lock-form");
  const input = $("#lock-input");
  const errEl = $("#lock-error");
  const card = $("#lock-card");
  if (input) input.focus();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const val = input.value || "";
    let ok = false;
    try { ok = (await sha256Hex(val)) === AUTH.hash; } catch { ok = false; }
    if (ok) {
      try { sessionStorage.setItem(AUTH.sessionKey, "1"); } catch {}
      renderLanding();
    } else {
      errEl.hidden = false;
      card.classList.remove("shake");
      void card.offsetWidth;       // restart the animation
      card.classList.add("shake");
      input.select();
    }
  });

  runSignature();
}

/* ==========================================================================
   RENDERING - LANDING (the homepage; leads to the mode-select screen)
   ========================================================================== */

// Inline SVG alien (not an emoji) - themes via currentColor / CSS variables.
const ALIEN_SVG = `
  <svg class="alien" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path class="alien-head" d="M32 5C19 5 10 13.5 10 26c0 8.5 5.2 16.2 12 22 3.4 2.9 6.7 5.2 10 7 3.3-1.8 6.6-4.1 10-7 6.8-5.8 12-13.5 12-22C54 13.5 45 5 32 5z"/>
    <ellipse class="alien-eye" cx="23" cy="29" rx="5.2" ry="8.6" transform="rotate(-22 23 29)"/>
    <ellipse class="alien-eye" cx="41" cy="29" rx="5.2" ry="8.6" transform="rotate(22 41 29)"/>
  </svg>`;

function renderLanding() {
  state = null;
  const counts = {
    verbal: QUESTIONS.filter((q) => q.section === "verbal").length,
    numerical: QUESTIONS.filter((q) => q.section === "numerical").length,
    error: QUESTIONS.filter((q) => q.section === "error").length
  };

  app.innerHTML = `
    <div class="landing">
      <section class="hero">
        <span class="hero-badge">${t("badge")}</span>
        <h1 class="hero-title">${t("hero_title")}</h1>
        <p class="hero-sub">${t("hero_sub")}</p>
        <div class="hero-feats">
          <div class="hero-feat"><span class="n">${counts.verbal}</span><span class="l">${t("feat_verbal")}</span></div>
          <div class="hero-feat"><span class="n">${counts.numerical}</span><span class="l">${t("feat_numerical")}</span></div>
          <div class="hero-feat"><span class="n">${counts.error}</span><span class="l">${t("feat_error")}</span></div>
        </div>
        <button class="enter-btn" id="enter-btn">${t("start")}</button>
      </section>

      <footer class="sig">
        <span class="sig-text" id="sig-text"></span><span class="sig-alien" id="sig-alien">${ALIEN_SVG}</span><span class="sig-cursor">_</span>
      </footer>
    </div>
  `;

  $("#enter-btn").addEventListener("click", renderHome);
  runSignature();
}

// Typewriter effect: types out the signature, leaving the cursor blinking.
let sigTimer = null;
function runSignature() {
  if (sigTimer) { clearTimeout(sigTimer); sigTimer = null; }
  const el = document.getElementById("sig-text");
  if (!el) return;
  const alien = document.getElementById("sig-alien");
  if (alien) alien.classList.remove("show"); // hidden until typed out
  const full = "Made By Ibra";
  el.textContent = "";
  let i = 0;
  (function tick() {
    const t = document.getElementById("sig-text");
    if (!t) return;                 // user navigated away mid-type
    t.textContent = full.slice(0, i);
    if (i < full.length) {
      i++;
      sigTimer = setTimeout(tick, 95);
    } else {
      // text done - reveal the alien head as the final "typed" glyph,
      // then leave the cursor blinking after it (text → alien → cursor).
      sigTimer = setTimeout(() => {
        const a = document.getElementById("sig-alien");
        if (a) a.classList.add("show");
      }, 95);
    }
  })();
}

// Inline SVG icons for the mode cards (theme via currentColor).
const ICONS = {
  verbal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2.5"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="13" y2="16"/></svg>`,
  numerical: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="11" width="3.6" height="9" rx="1"/><rect x="10.2" y="5" width="3.6" height="15" rx="1"/><rect x="16.4" y="14" width="3.6" height="6" rx="1"/></svg>`,
  error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6"/><line x1="15" y1="15" x2="20" y2="20"/><polyline points="8,10.5 10,12.5 13.5,8.5"/></svg>`,
  all: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/></svg>`,
  abstract: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><circle cx="17.5" cy="7" r="3.6"/><polygon points="7 13.5 11 20.5 3 20.5"/><polygon points="17.5 13.5 21 20 14 20"/></svg>`,
  mock: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5z"/></svg>`
};

/* ==========================================================================
   RENDERING - HOME
   ========================================================================== */
function renderHome() {
  state = null;
  const counts = {
    verbal: QUESTIONS.filter((q) => q.section === "verbal").length,
    numerical: QUESTIONS.filter((q) => q.section === "numerical").length,
    error: QUESTIONS.filter((q) => q.section === "error").length
  };
  const history = loadHistory();
  counts.abstract = QUESTIONS.filter((q) => q.section === "abstract").length;
  const total = counts.verbal + counts.numerical + counts.abstract + counts.error;
  const diffChips = ["mixed", "easy", "medium", "hard", "incremental"]
    .map((dv) => `<button class="diff-chip ${diffChoice === dv ? "active" : ""}" data-diff="${dv}">${t("diff_" + dv)}</button>`).join("");

  app.innerHTML = `
    <div class="topbar">
      <div>
        <h1>${t("app_title")}</h1>
        <div class="sub">${t("app_sub")}</div>
      </div>
    </div>

    <div class="card">
      <h3 style="margin-top:0">${t("choose_mode")}</h3>

      <div class="diff-row">
        <span class="diff-label">${t("difficulty")}</span>
        <div class="diff-chips">${diffChips}</div>
      </div>
      <p class="small muted" style="margin:0 0 14px">${t("diff_note")}</p>

      <div class="mode-grid">
        <button class="mode-btn" data-mode="verbal">
          <span class="mode-ic ic-verbal">${ICONS.verbal}</span>
          <span class="mode-tx"><span class="t">${t("mode_verbal_t")}</span>
          <span class="d">${t("mode_verbal_d", { n: counts.verbal })}</span></span>
        </button>
        <button class="mode-btn" data-mode="numerical">
          <span class="mode-ic ic-numerical">${ICONS.numerical}</span>
          <span class="mode-tx"><span class="t">${t("mode_numerical_t")}</span>
          <span class="d">${t("mode_numerical_d", { n: counts.numerical })}</span></span>
        </button>
        <button class="mode-btn" data-mode="abstract">
          <span class="mode-ic ic-abstract">${ICONS.abstract}</span>
          <span class="mode-tx"><span class="t">${t("mode_abstract_t")}</span>
          <span class="d">${t("mode_abstract_d", { n: counts.abstract })}</span></span>
        </button>
        <button class="mode-btn" data-mode="error">
          <span class="mode-ic ic-error">${ICONS.error}</span>
          <span class="mode-tx"><span class="t">${t("mode_error_t")}</span>
          <span class="d">${t("mode_error_d", { n: counts.error })}</span></span>
        </button>
      </div>

      <button class="mode-btn wide-btn" data-mode="all">
        <span class="mode-ic ic-all">${ICONS.all}</span>
        <span class="mode-tx"><span class="t">${t("mode_all_t")}</span>
        <span class="d">${t("mode_all_d", { n: total })}</span></span>
      </button>
      <button class="mode-btn mock-btn" data-mode="mock">
        <span class="mode-ic ic-mock">${ICONS.mock}</span>
        <span class="mode-tx"><span class="t">${t("mock_t")}</span>
        <span class="d">${t("mock_d")}</span></span>
      </button>
    </div>

    <div class="card">
      <label class="toggle">
        <input type="checkbox" id="study-toggle" ${studyMode ? "checked" : ""}>
        <span class="track"></span>
        <span>${t("study_label")}</span>
      </label>
      <p class="small muted" style="margin:10px 0 0">${t("study_note")}</p>
    </div>

    ${history.length ? `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3 style="margin:0">${t("past_results")}</h3>
        <button class="ghost small" id="clear-hist">${t("clear_history")}</button>
      </div>
      <div class="hist" style="margin-top:8px">
        ${history.slice(0, 6).map((h) => `
          <div class="row">
            <span>${esc(h.label)}</span>
            <span class="muted">${esc(h.date)}</span>
            <span><b>${h.correct}/${h.total}</b> · ${Math.round(h.accuracy * 100)}% ${t("acc_short")}</span>
          </div>`).join("")}
      </div>
      <p class="small muted" style="margin:10px 0 0">${t("storage_note")}</p>
    </div>` : ""}
  `;

  $("#study-toggle").addEventListener("change", (e) => { studyMode = e.target.checked; });
  // Update the active chip in place (avoids a full re-render / page flicker).
  app.querySelectorAll(".diff-chip").forEach((b) =>
    b.addEventListener("click", () => {
      setDiff(b.dataset.diff);
      app.querySelectorAll(".diff-chip").forEach((c) => c.classList.toggle("active", c === b));
    })
  );
  app.querySelectorAll(".mode-btn").forEach((b) =>
    b.addEventListener("click", () => buildQuiz(b.dataset.mode))
  );
  const clr = $("#clear-hist");
  if (clr) clr.addEventListener("click", clearHistory);
}

/* ==========================================================================
   RENDERING - QUIZ (one question per screen)
   ========================================================================== */
function renderQuiz() {
  const q = state.questions[state.idx];
  const n = state.questions.length;
  const selected = state.answers[state.idx];
  const keys = optionKeys(q);
  const study = inStudy();
  const showExplain = study && state.revealed;

  const multi = isMulti(q);
  const isAbs = q.section === "abstract";
  const selArr = multi ? (Array.isArray(selected) ? selected : []) : [];
  const optsHtml = q.options.map((opt, i) => {
    const val = isAbs ? String(i) : opt;          // abstract options are figures, keyed by index
    let cls = "opt" + (multi ? " multi" : "") + (isAbs ? " optfig" : "");
    const isSel = multi ? selArr.includes(val) : val === selected;
    if (showExplain) {
      const isAns = multi ? q.answer.includes(val) : val === q.answer;
      if (isAns) cls += " correct";
      else if (isSel) cls += " wrong";
    } else if (isSel) {
      cls += " selected";
    }
    const indicator = multi ? `<span class="checkbox"></span>` : `<span class="key">${esc(keys[i])}</span>`;
    const content = isAbs ? absFigure(opt) : `<span>${esc(opt)}</span>`;
    return `<button class="${cls}" data-opt="${esc(val)}">${indicator}${content}</button>`;
  }).join("");

  const timerHtml = study
    ? `<span class="timer study">${t("study_untimed")}</span>`
    : `<div class="timers">
         <div class="timer-pill" id="s-pill" title="${t("time_left")}">
           <span class="tlabel">${t("time_left")}</span><span class="tval" id="timer">${fmtTime(state.totalSeconds)}</span>
         </div>
       </div>`;

  let explainHtml = "";
  if (showExplain) {
    const correct = isCorrect(q, selected);
    const optLabel = (v) => isAbs ? t("opt_n", { n: parseInt(v, 10) + 1 }) : v;
    const yourTxt = multi
      ? (selArr.length ? selArr.join("; ") : t("nothing"))
      : (selected != null ? optLabel(selected) : t("nothing"));
    const correctTxt = multi ? q.answer.join("; ") : optLabel(q.answer);
    const verdict = correct
      ? t("verdict_correct", { a: esc(correctTxt) })
      : t("verdict_wrong", { you: esc(yourTxt), a: esc(correctTxt) });
    const heading = correct ? t("heading_why") : t("heading_how");
    explainHtml = `
      <div class="explain">
        <div class="verdict ${correct ? "ok" : "no"}">${verdict}</div>
        <h4>${heading}</h4>
        <pre>${esc(q.explanation)}</pre>
      </div>`;
  }

  // Section indicator: in a mock, show which section/testlet you're on; in
  // single-section practice, name the section.
  const dl = diffOf(q);
  const diffTag = `<span class="difftag ${dl}">${t("diff_" + dl)}</span>`;
  let progressHtml, barPct;
  if (state.mock) {
    const b = state.blocks[state.blockIdx];
    const posInBlock = state.idx - state.blockStart[state.blockIdx] + 1;
    progressHtml = `<span class="seclabel">${t("section_of", { a: state.blockIdx + 1, b: state.blocks.length })} ${diffTag}</span>` +
      `<span class="progress">${secLabel(b.section)} · ${t("q_of", { a: posInBlock, b: b.questions.length })}</span>`;
    barPct = ((state.idx - state.blockStart[state.blockIdx]) / b.questions.length) * 100;
  } else {
    progressHtml = `<span class="seclabel">${secLabel(q.section)} ${diffTag}</span>` +
      `<span class="progress">${t("q_label", { a: state.idx + 1, b: n })}</span>`;
    barPct = (state.idx / n) * 100;
  }

  app.innerHTML = `
    <div class="quiz-head">
      <div class="head-left">${progressHtml}</div>
      ${timerHtml}
    </div>
    <div class="progress-bar"><i style="width:${barPct}%"></i></div>

    <div class="card">
      ${renderStimulus(q)}
      <div class="q-text">${esc(q.question)}</div>
      <div class="options${isAbs ? " abs-opts" : ""}">${optsHtml}</div>
      ${explainHtml}
    </div>

    <div class="nav-row">
      <button class="ghost" id="quit-btn">${t("quit")}</button>
      ${navHtml(q, multi, n)}
    </div>
  `;

  // Re-prime the timer immediately (the interval also keeps it fresh).
  if (!study) updateTimers();

  app.querySelectorAll(".opt").forEach((b) =>
    b.addEventListener("click", () => selectOption(b.dataset.opt))
  );
  $("#quit-btn").addEventListener("click", () => { stopTimer(); renderHome(); });
  const nb = $("#next-btn"); if (nb) nb.addEventListener("click", next);
  const pb = $("#prev-btn"); if (pb) pb.addEventListener("click", prev);
  const sb = $("#skip-btn"); if (sb) sb.addEventListener("click", next);
  const ck = $("#check-btn"); if (ck) ck.addEventListener("click", revealMulti);
}

// The nav buttons differ for single- vs multi-select and study vs timed.
function navHtml(q, multi, n) {
  // Work out the right "advance" label, including mock section boundaries.
  let lastInBlock = state.idx >= n - 1;
  let nextLabel = lastInBlock ? t("finish") : t("next");
  if (state.mock) {
    lastInBlock = state.idx >= n - 1 || state.qBlock[state.idx] !== state.qBlock[state.idx + 1];
    const lastBlock = state.blockIdx >= state.blocks.length - 1;
    nextLabel = lastInBlock ? (lastBlock ? t("finish") : t("next_section")) : t("next");
  }

  if (inStudy()) {
    const back = state.idx > 0 ? `<button class="ghost" id="prev-btn">${t("back_btn")}</button>` : "";
    if (multi && !state.revealed) {
      // Must check the multi-select answer before moving on.
      const ready = isAnswered(state.answers[state.idx]);
      return `<div style="display:flex;gap:10px">${back}
        <button class="primary" id="check-btn" ${ready ? "" : "disabled"}>${t("check_answer")}</button></div>`;
    }
    return `<div style="display:flex;gap:10px">${back}
      <button class="primary" id="next-btn" ${state.revealed ? "" : "disabled"}>${nextLabel}</button></div>`;
  }
  // Timed: single-select auto-advances on pick, so only a Skip button is needed.
  // Multi-select needs an explicit Next/Finish to submit the selection.
  const skipLabel = (state.mock && lastInBlock && state.blockIdx < state.blocks.length - 1) ? t("skip_section") : t("skip");
  return multi
    ? `<button class="primary" id="next-btn">${nextLabel}</button>`
    : `<button class="ghost" id="skip-btn">${skipLabel}</button>`;
}

/* ==========================================================================
   RENDERING - RESULTS
   ========================================================================== */
function renderResults() {
  const r = computeResults();

  // Persist a compact summary for the home-screen history.
  saveHistoryEntry({
    label: state.mode === "mock" ? t("full_mock") : secLabel(state.mode),
    date: new Date().toLocaleString(),
    total: r.total, correct: r.correct,
    accuracy: r.accuracy, speed: r.speed
  });

  const sectionRows = Object.entries(r.bySection).map(([sec, v]) => {
    const acc = v.attempted ? v.correct / v.attempted : 0;
    return `<div class="bd-row">
      <span class="bd-name">${secLabel(sec)}</span>
      <span class="bar"><i style="width:${Math.round(acc * 100)}%"></i></span>
      <span class="small">${v.correct}/${v.total} · ${Math.round(acc * 100)}%</span>
    </div>`;
  }).join("");

  const weakHtml = r.weak.length
    ? `<div class="flag">
         ${t("focus_areas")}<br>
         ${r.weak.map((w) => `${topicLabel(w.topic)} (${Math.round(w.acc * 100)}%)`).join(" · ")}
       </div>`
    : `<div class="flag">${t("no_weak")}</div>`;

  const meta = `${t("attempted_n", { a: r.attempted, b: r.total })} · ` +
    `${r.attempted ? t("per_question", { s: r.secPerQ.toFixed(1) }) : "-"} · ` +
    `${t("time_used", { time: fmtTime(r.timeUsed) })}${inStudy() ? t("study_untimed_paren") : ""}`;

  app.innerHTML = `
    <div class="topbar"><h1>${t("results")}</h1></div>

    <div class="metrics">
      <div class="metric">
        <div class="big">${r.correct}/${r.total}</div>
        <div class="lbl">${t("total_score")}</div>
      </div>
      <div class="metric">
        <div class="big">${Math.round(r.accuracy * 100)}%</div>
        <div class="lbl">${t("accuracy")}<br>${t("accuracy_sub")}</div>
      </div>
      <div class="metric">
        <div class="big">${r.speed.toFixed(1)}</div>
        <div class="lbl">${t("speed")}<br>${t("speed_sub")}</div>
      </div>
    </div>

    <div class="card">
      <p class="small muted" style="margin-top:0">${meta}</p>
      <h3>${t("breakdown")}</h3>
      ${sectionRows}
      ${weakHtml}
    </div>

    <div class="nav-row">
      <button class="ghost" id="home-btn">${t("home")}</button>
      <button class="primary" id="review-btn">${t("review_btn")}</button>
    </div>
  `;

  $("#home-btn").addEventListener("click", renderHome);
  $("#review-btn").addEventListener("click", renderReview);
}

/* ==========================================================================
   RENDERING - REVIEW (every question, your answer, correct answer, working)
   ========================================================================== */
function renderReview() {
  const items = state.questions.map((q, i) => {
    const a = state.answers[i];
    const isAbs = q.section === "abstract";
    const answered = isAnswered(a);
    const correct = answered && isCorrect(q, a);
    const yourCls = !answered ? "" : (correct ? "ok" : "no");
    const optLabel = (v) => isAbs ? t("opt_n", { n: parseInt(v, 10) + 1 }) : v;
    const yourTxt = !answered
      ? t("not_answered")
      : esc(Array.isArray(a) ? a.join("; ") : optLabel(a));
    const correctTxt = esc(Array.isArray(q.answer) ? q.answer.join("; ") : optLabel(q.answer));

    const dl = diffOf(q);
    const tLabel = topicLabel(q.topic);
    const showTopicTag = tLabel.toLowerCase() !== secLabel(q.section).toLowerCase();
    return `<div class="review-item">
      <div>
        <span class="tag">${secLabel(q.section)}</span>
        ${showTopicTag ? `<span class="tag">${tLabel}</span>` : ""}
        <span class="difftag ${dl}">${t("diff_" + dl)}</span>
      </div>
      <div style="margin:10px 0">${renderStimulus(q, { reviewDiff: q.section === "error" })}</div>
      <div class="q-text" style="font-size:18px">${esc(q.question)}</div>
      <div class="ans-line">${t("your_answer")} <span class="you ${yourCls}">${yourTxt}</span></div>
      <div class="ans-line">${t("correct_answer")} <span class="corr">${correctTxt}</span></div>
      <div class="explain">
        <h4>${t("explanation")}</h4>
        <pre>${esc(q.explanation)}</pre>
      </div>
    </div>`;
  }).join("");

  app.innerHTML = `
    <div class="topbar"><h1>${t("review")}</h1></div>
    <div class="card">${items}</div>
    <div class="nav-row">
      <button class="ghost" id="back-results">${t("back_results")}</button>
      <button class="primary" id="home-btn2">${t("done_home")}</button>
    </div>
  `;
  $("#back-results").addEventListener("click", renderResults);
  $("#home-btn2").addEventListener("click", renderHome);
}

/* ==========================================================================
   KEYBOARD SHORTCUTS  (answer fast)
   Number keys 1..N always pick/toggle the matching option. Classic option sets
   keep letter shortcuts: True/False/Cannot Say -> T/F/C, Correct/Error -> C/E.
   Multi-select: numbers toggle, Enter checks (study) or moves on. In study mode
   Enter advances once the explanation is shown.
   ========================================================================== */
document.addEventListener("keydown", (e) => {
  if (!state) return;                       // only during a quiz
  const q = state.questions[state.idx];
  if (!q) return;
  const multi = isMulti(q);

  const study = inStudy();
  // Enter: advance after a revealed explanation; otherwise submit/check.
  if (e.key === "Enter") {
    if (study && state.revealed) { e.preventDefault(); next(); return; }
    if (multi) {
      e.preventDefault();
      if (study) { if (isAnswered(state.answers[state.idx])) revealMulti(); }
      else next();
      return;
    }
  }
  if (study && state.revealed) return;  // answer already locked this screen

  const k = e.key.toLowerCase();
  let chosen = null;

  // Letter shortcuts for the classic option sets.
  const o = q.options;
  if (o.length === 3 && o[0] === "True" && o[1] === "False" && o[2] === "Cannot Say") {
    if (k === "t") chosen = "True"; else if (k === "f") chosen = "False"; else if (k === "c") chosen = "Cannot Say";
  } else if (o.length === 2 && o[0] === "Correct" && o[1] === "Error") {
    if (k === "c") chosen = "Correct"; else if (k === "e") chosen = "Error";
  }
  // Number keys 1..N for any question. Abstract options are keyed by index.
  if (chosen == null) {
    const idx = parseInt(k, 10) - 1;
    if (idx >= 0 && idx < o.length) chosen = (q.section === "abstract") ? String(idx) : o[idx];
  }

  if (chosen != null) { e.preventDefault(); selectOption(chosen); }
});

/* ==========================================================================
   BOOT
   ========================================================================== */
// Abstract questions declare the correct option via `answerIndex`; normalise it
// to the string answer the scoring/render code expects.
QUESTIONS.forEach((q) => {
  if (q.section === "abstract" && q.answerIndex != null && q.answer == null) q.answer = String(q.answerIndex);
});

initTheme();
if (isUnlocked()) renderLanding();
else renderLock();
