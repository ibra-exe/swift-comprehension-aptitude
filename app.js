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
  //   Checking  90s for 8 questions    -> ~11s/question
  perQuestionSeconds: {
    verbal: 30,
    numerical: 30,
    error: 11
  },
  storageKey: "saville-history-v1", // localStorage key for cross-session history
  themeKey: "saville-theme"         // localStorage key for the light/dark choice
};

const SECTION_LABEL = {
  verbal: "Verbal Reasoning",
  numerical: "Numerical Reasoning",
  error: "Error Checking"
};

const TOPIC_LABEL = {
  "percentage-change": "Percentage change",
  "average": "Averages",
  "share": "Part-of-whole / share",
  "forward-percentage": "Forward % increase/decrease",
  "ratio": "Ratios",
  "read-off": "Reading off a chart",
  "numerical-inference": "Numerical: True/False/Not possible",
  "verbal": "Verbal reasoning",
  "verbal-synonym": "Verbal: word meaning",
  "verbal-detail": "Verbal: detail",
  "verbal-inference": "Verbal: True/False/Not possible",
  "error-checking": "Error checking"
};

/* --------------------------------------------------------------------------
   STATE - current session lives in memory; history is persisted (see below).
   -------------------------------------------------------------------------- */
let state = null;        // active quiz session, or null on home/results
let studyMode = false;   // untimed + immediate explanations

const app = document.getElementById("app");

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

// Read the editable per-question times from the home inputs (falling back to CONFIG).
function readTimerSettings() {
  const get = (id, def) => {
    const el = document.getElementById(id);
    const v = el ? parseInt(el.value, 10) : NaN;
    return Number.isFinite(v) && v > 0 ? v : def;
  };
  return {
    verbal: get("t-verbal", CONFIG.perQuestionSeconds.verbal),
    numerical: get("t-numerical", CONFIG.perQuestionSeconds.numerical),
    error: get("t-error", CONFIG.perQuestionSeconds.error)
  };
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

  let questions;
  if (mode === "all") {
    // Full deck: every question in the bank, sections in order, stimulus groups
    // randomised within each section. One pooled timer (or untimed in study).
    questions = [
      ...shuffleByStimulus(QUESTIONS.filter((q) => q.section === "verbal")),
      ...shuffleByStimulus(QUESTIONS.filter((q) => q.section === "numerical")),
      ...shuffleByStimulus(QUESTIONS.filter((q) => q.section === "error"))
    ];
  } else {
    // Single section: randomise the stimulus groups each session.
    questions = shuffleByStimulus(QUESTIONS.filter((q) => q.section === mode));
  }
  const times = readTimerSettings();
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
   Mirrors the real Saville Swift Comprehension:
     Verbal    - 2 testlets of 4 questions, 2:00 each
     Numerical - 2 testlets of 4 questions, 2:00 each
     Checking  - 1 section of 8 questions, 1:30
   = 24 questions in ~9.5 minutes. Each block is separately timed; when a
   block's time runs out you move straight to the next one (no going back).
   ========================================================================== */
const MOCK = {
  verbal:    { testlets: 2, size: 4, time: 120 },
  numerical: { testlets: 2, size: 4, time: 120 },
  error:     { groups: 2, size: 4, time: 90 } // two 4-item tables = one 8-question section
};

// Random stimulus groups for a section, optionally filtered to a minimum size.
function stimulusGroups(section, minSize) {
  const map = new Map();
  QUESTIONS.filter((q) => q.section === section).forEach((q) => {
    const k = stimulusKey(q);
    if (!map.has(k)) map.set(k, []);
    map.get(k).push(q);
  });
  let groups = [...map.values()];
  if (minSize) groups = groups.filter((g) => g.length >= minSize);
  return shuffle(groups);
}

function buildMock() {
  const blocks = [];

  const vg = stimulusGroups("verbal", MOCK.verbal.size);
  for (let i = 0; i < MOCK.verbal.testlets && i < vg.length; i++) {
    blocks.push({ section: "verbal", timeLimit: MOCK.verbal.time, questions: vg[i].slice(0, MOCK.verbal.size) });
  }

  const ng = stimulusGroups("numerical", MOCK.numerical.size);
  for (let i = 0; i < MOCK.numerical.testlets && i < ng.length; i++) {
    blocks.push({ section: "numerical", timeLimit: MOCK.numerical.time, questions: ng[i].slice(0, MOCK.numerical.size) });
  }

  const cg = stimulusGroups("error", MOCK.error.size);
  let checkQs = [];
  for (let i = 0; i < MOCK.error.groups && i < cg.length; i++) checkQs = checkQs.concat(cg[i].slice(0, MOCK.error.size));
  if (checkQs.length) blocks.push({ section: "error", timeLimit: MOCK.error.time, questions: checkQs });

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
    renderQuiz();
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
function renderStimulus(q, { reviewDiff = false } = {}) {
  if (q.section === "verbal") {
    return `<p class="passage">${esc(q.stimulus.passage)}</p>`;
  }

  if (q.section === "numerical") {
    const calcNote = `<p class="calc-note">🖩 Calculator permitted (as in the real test)</p>`;

    // Chart stimulus (e.g. pie chart).
    if (q.stimulus.chart) return calcNote + renderChart(q.stimulus.chart);

    // Table stimulus.
    const t = q.stimulus.table;
    const head = t.columns.map((c) => `<th>${esc(c)}</th>`).join("");
    const body = t.rows
      .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
      .join("");
    return `
      ${calcNote}
      <div class="tscroll"><table class="data">
        ${t.title ? `<caption>${esc(t.title)}</caption>` : ""}
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table></div>
      ${t.note ? `<p class="small muted">${esc(t.note)}</p>` : ""}`;
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
      ${c.title ? `<caption>Original: ${esc(c.title)}</caption>` : ""}
      <thead><tr>${head}</tr></thead>
      <tbody>${body}</tbody>
    </table></div>
    ${c.codingKey ? `<p class="small muted coding-key">Coding key: ${esc(c.codingKey)}</p>` : ""}
    <div class="tscroll"><table class="data check-entry">
      <caption>${esc(c.entryLabel || "Re-entered record")}</caption>
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
        <span class="hero-badge">Aptitude Trainer</span>
        <h1 class="hero-title">Swift Comprehension</h1>
        <p class="hero-sub">
          Train your accuracy under real time pressure across Verbal, Numerical and
          Error-Checking sections - with full worked explanations on every question.
        </p>
        <div class="hero-feats">
          <div class="hero-feat"><span class="n">${counts.verbal}</span><span class="l">Verbal</span></div>
          <div class="hero-feat"><span class="n">${counts.numerical}</span><span class="l">Numerical</span></div>
          <div class="hero-feat"><span class="n">${counts.error}</span><span class="l">Error checking</span></div>
        </div>
        <button class="enter-btn" id="enter-btn">Start Practising →</button>
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
  const d = CONFIG.perQuestionSeconds;

  app.innerHTML = `
    <div class="topbar">
      <div>
        <h1>Swift Comprehension Practice</h1>
        <div class="sub">Accuracy under time pressure - Verbal · Numerical · Error checking</div>
      </div>
    </div>

    <div class="card">
      <h3 style="margin-top:0">Choose a mode</h3>
      <div class="mode-grid">
        <button class="mode-btn" data-mode="verbal">
          <span class="mode-ic ic-verbal">${ICONS.verbal}</span>
          <span class="mode-tx"><span class="t">Verbal Reasoning</span>
          <span class="d">${counts.verbal} questions · True / False / Cannot Say</span></span>
        </button>
        <button class="mode-btn" data-mode="numerical">
          <span class="mode-ic ic-numerical">${ICONS.numerical}</span>
          <span class="mode-tx"><span class="t">Numerical Reasoning</span>
          <span class="d">${counts.numerical} questions · tables & charts (calculator allowed)</span></span>
        </button>
        <button class="mode-btn" data-mode="error">
          <span class="mode-ic ic-error">${ICONS.error}</span>
          <span class="mode-tx"><span class="t">Error Checking</span>
          <span class="d">${counts.error} questions · spot the copy errors</span></span>
        </button>
        <button class="mode-btn" data-mode="all">
          <span class="mode-ic ic-all">${ICONS.all}</span>
          <span class="mode-tx"><span class="t">Full Deck Test</span>
          <span class="d">All ${counts.verbal + counts.numerical + counts.error} questions · every section, one run</span></span>
        </button>
      </div>
      <button class="mode-btn mock-btn" data-mode="mock">
        <span class="mode-ic ic-mock">${ICONS.mock}</span>
        <span class="mode-tx"><span class="t">Real Mock Test</span>
        <span class="d">Full exam simulation: 24 questions in ~9.5 min, with real rules and section timings (Verbal 2×4 in 2:00, Numerical 2×4 in 2:00, Checking 8 in 1:30). Always timed.</span></span>
      </button>
    </div>

    <div class="card">
      <label class="toggle">
        <input type="checkbox" id="study-toggle" ${studyMode ? "checked" : ""}>
        <span class="track"></span>
        <span><b>Study mode</b> - untimed, explanations shown immediately</span>
      </label>
      <p class="small muted" style="margin:10px 0 0">
        In timed mode the countdown runs and explanations are withheld until the review screen.
      </p>
    </div>

    <div class="card">
      <div class="timing-head">
        <h3 style="margin:0">Timing <span class="small muted">(seconds per question)</span></h3>
        <button class="ghost small" id="reset-timing">Reset to default</button>
      </div>
      <div class="settings-row"><span>Verbal</span><input type="number" id="t-verbal" min="3" value="${d.verbal}"></div>
      <div class="settings-row"><span>Numerical</span><input type="number" id="t-numerical" min="3" value="${d.numerical}"></div>
      <div class="settings-row"><span>Error checking</span><input type="number" id="t-error" min="3" value="${d.error}"></div>
      <p class="small muted" style="margin:10px 0 0">Like the real test, there is no per-question timer: each rate below is pooled into one section countdown (rate × number of questions). Defaults match the official pace: 30s verbal &amp; numerical, ~11s checking (e.g. a 4-question verbal set = 2:00, an 8-question checking set = ~1:30).</p>
    </div>

    ${history.length ? `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h3 style="margin:0">Past results</h3>
        <button class="ghost small" id="clear-hist">Clear history</button>
      </div>
      <div class="hist" style="margin-top:8px">
        ${history.slice(0, 6).map((h) => `
          <div class="row">
            <span>${esc(h.label)}</span>
            <span class="muted">${esc(h.date)}</span>
            <span><b>${h.correct}/${h.total}</b> · ${Math.round(h.accuracy * 100)}% acc</span>
          </div>`).join("")}
      </div>
      <p class="small muted" style="margin:10px 0 0">Stored locally in your browser (localStorage) - no server involved.</p>
    </div>` : ""}
  `;

  $("#study-toggle").addEventListener("change", (e) => { studyMode = e.target.checked; });
  app.querySelectorAll(".mode-btn").forEach((b) =>
    b.addEventListener("click", () => buildQuiz(b.dataset.mode))
  );
  const clr = $("#clear-hist");
  if (clr) clr.addEventListener("click", clearHistory);

  $("#reset-timing").addEventListener("click", () => {
    const d = CONFIG.perQuestionSeconds;
    $("#t-verbal").value = d.verbal;
    $("#t-numerical").value = d.numerical;
    $("#t-error").value = d.error;
  });
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
  const selArr = multi ? (Array.isArray(selected) ? selected : []) : [];
  const optsHtml = q.options.map((opt, i) => {
    let cls = "opt" + (multi ? " multi" : "");
    const isSel = multi ? selArr.includes(opt) : opt === selected;
    if (showExplain) {
      const isAns = multi ? q.answer.includes(opt) : opt === q.answer;
      if (isAns) cls += " correct";
      else if (isSel) cls += " wrong";
    } else if (isSel) {
      cls += " selected";
    }
    const indicator = multi
      ? `<span class="checkbox"></span>`
      : `<span class="key">${esc(keys[i])}</span>`;
    return `<button class="${cls}" data-opt="${esc(opt)}">
      ${indicator}<span>${esc(opt)}</span>
    </button>`;
  }).join("");

  const timerHtml = study
    ? `<span class="timer study">Study mode · untimed</span>`
    : `<div class="timers">
         <div class="timer-pill" id="s-pill" title="Time left for the whole section">
           <span class="tlabel">Time left</span><span class="tval" id="timer">${fmtTime(state.totalSeconds)}</span>
         </div>
       </div>`;

  let explainHtml = "";
  if (showExplain) {
    const correct = isCorrect(q, selected);
    const yourTxt = multi
      ? (selArr.length ? selArr.join("; ") : "nothing")
      : (selected != null ? selected : "nothing");
    const correctTxt = multi ? q.answer.join("; ") : q.answer;
    // Make the wrong-answer feedback explicit: name the correct answer and show
    // the working under a "how to get there" heading.
    const verdict = correct
      ? `✓ Correct - the answer is ${esc(correctTxt)}`
      : `✗ Not quite. You chose ${esc(yourTxt)} - the correct answer is ${esc(correctTxt)}`;
    const heading = correct ? "Why this is correct" : "How to get there";
    explainHtml = `
      <div class="explain">
        <div class="verdict ${correct ? "ok" : "no"}">${verdict}</div>
        <h4>${heading}</h4>
        <pre>${esc(q.explanation)}</pre>
      </div>`;
  }

  // Section indicator: in a mock, show which section/testlet you're on; in
  // single-section practice, name the section.
  let progressHtml, barPct;
  if (state.mock) {
    const b = state.blocks[state.blockIdx];
    const posInBlock = state.idx - state.blockStart[state.blockIdx] + 1;
    progressHtml = `<span class="seclabel">Section ${state.blockIdx + 1} of ${state.blocks.length}</span>` +
      `<span class="progress">${SECTION_LABEL[b.section]} · Q${posInBlock} of ${b.questions.length}</span>`;
    barPct = ((state.idx - state.blockStart[state.blockIdx]) / b.questions.length) * 100;
  } else {
    progressHtml = `<span class="seclabel">${SECTION_LABEL[q.section]}</span>` +
      `<span class="progress">Q${state.idx + 1} of ${n}</span>`;
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
      <div class="options">${optsHtml}</div>
      ${explainHtml}
    </div>

    <div class="nav-row">
      <button class="ghost" id="quit-btn">Quit to menu</button>
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
  let nextLabel = state.idx >= n - 1 ? "Finish" : "Next →";
  if (state.mock) {
    const lastInBlock = state.idx >= n - 1 || state.qBlock[state.idx] !== state.qBlock[state.idx + 1];
    const lastBlock = state.blockIdx >= state.blocks.length - 1;
    nextLabel = lastInBlock ? (lastBlock ? "Finish" : "Next section →") : "Next →";
  }

  if (inStudy()) {
    const back = state.idx > 0 ? `<button class="ghost" id="prev-btn">Back</button>` : "";
    if (multi && !state.revealed) {
      // Must check the multi-select answer before moving on.
      const ready = isAnswered(state.answers[state.idx]);
      return `<div style="display:flex;gap:10px">${back}
        <button class="primary" id="check-btn" ${ready ? "" : "disabled"}>Check answer</button></div>`;
    }
    return `<div style="display:flex;gap:10px">${back}
      <button class="primary" id="next-btn" ${state.revealed ? "" : "disabled"}>${nextLabel}</button></div>`;
  }
  // Timed: single-select auto-advances on pick, so only a Skip button is needed.
  // Multi-select needs an explicit Next/Finish to submit the selection.
  const skipLabel = (state.mock && nextLabel.includes("section")) ? "Skip section →" : "Skip →";
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
    label: state.mode === "mock" ? "Full Mock" : SECTION_LABEL[state.mode],
    date: new Date().toLocaleString(),
    total: r.total, correct: r.correct,
    accuracy: r.accuracy, speed: r.speed
  });

  const sectionRows = Object.entries(r.bySection).map(([sec, v]) => {
    const acc = v.attempted ? v.correct / v.attempted : 0;
    return `<div class="bd-row">
      <span class="bd-name">${SECTION_LABEL[sec]}</span>
      <span class="bar"><i style="width:${Math.round(acc * 100)}%"></i></span>
      <span class="small">${v.correct}/${v.total} · ${Math.round(acc * 100)}%</span>
    </div>`;
  }).join("");

  const weakHtml = r.weak.length
    ? `<div class="flag">
         <b>Focus areas</b> - weakest by accuracy:<br>
         ${r.weak.map((w) => `${TOPIC_LABEL[w.topic] || w.topic} (${Math.round(w.acc * 100)}%)`).join(" · ")}
       </div>`
    : `<div class="flag"><b>Nice.</b> No weak spots flagged this session.</div>`;

  app.innerHTML = `
    <div class="topbar"><h1>Results</h1></div>

    <div class="metrics">
      <div class="metric">
        <div class="big">${r.correct}/${r.total}</div>
        <div class="lbl">Total score</div>
      </div>
      <div class="metric">
        <div class="big">${Math.round(r.accuracy * 100)}%</div>
        <div class="lbl">Accuracy<br>(of attempted)</div>
      </div>
      <div class="metric">
        <div class="big">${r.speed.toFixed(1)}</div>
        <div class="lbl">Speed<br>(q / min)</div>
      </div>
    </div>

    <div class="card">
      <p class="small muted" style="margin-top:0">
        Attempted ${r.attempted} of ${r.total} ·
        ${r.attempted ? r.secPerQ.toFixed(1) + "s per question" : "-"} ·
        time used ${fmtTime(r.timeUsed)}${inStudy() ? " (study mode, untimed)" : ""}
      </p>
      <h3>Per-section breakdown</h3>
      ${sectionRows}
      ${weakHtml}
    </div>

    <div class="nav-row">
      <button class="ghost" id="home-btn">Home</button>
      <button class="primary" id="review-btn">Review answers & explanations →</button>
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
    const answered = isAnswered(a);
    const correct = answered && isCorrect(q, a);
    const yourCls = !answered ? "" : (correct ? "ok" : "no");
    const yourTxt = !answered
      ? "- (not answered)"
      : esc(Array.isArray(a) ? a.join("; ") : a);
    const correctTxt = esc(Array.isArray(q.answer) ? q.answer.join("; ") : q.answer);

    const topicLabel = TOPIC_LABEL[q.topic] || q.topic;
    const showTopicTag = topicLabel.toLowerCase() !== SECTION_LABEL[q.section].toLowerCase();
    return `<div class="review-item">
      <div>
        <span class="tag">${SECTION_LABEL[q.section]}</span>
        ${showTopicTag ? `<span class="tag">${topicLabel}</span>` : ""}
      </div>
      <div style="margin:10px 0">${renderStimulus(q, { reviewDiff: q.section === "error" })}</div>
      <div class="q-text" style="font-size:18px">${esc(q.question)}</div>
      <div class="ans-line">Your answer: <span class="you ${yourCls}">${yourTxt}</span></div>
      <div class="ans-line">Correct answer: <span class="corr">${correctTxt}</span></div>
      <div class="explain">
        <h4>Explanation</h4>
        <pre>${esc(q.explanation)}</pre>
      </div>
    </div>`;
  }).join("");

  app.innerHTML = `
    <div class="topbar"><h1>Review</h1></div>
    <div class="card">${items}</div>
    <div class="nav-row">
      <button class="ghost" id="back-results">← Results</button>
      <button class="primary" id="home-btn2">Done - Home</button>
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
  // Number keys 1..N for any question.
  if (chosen == null) {
    const idx = parseInt(k, 10) - 1;
    if (idx >= 0 && idx < o.length) chosen = o[idx];
  }

  if (chosen != null) { e.preventDefault(); selectOption(chosen); }
});

/* ==========================================================================
   BOOT
   ========================================================================== */
initTheme();
renderLanding();
