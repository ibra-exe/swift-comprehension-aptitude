# Swift Comprehension Practice

A self-contained, **fully offline** practice app for the Saville *Swift Comprehension* aptitude
test. Three timed section types - **Verbal Reasoning**, **Numerical Reasoning**, and
**Error Checking** - built for training accuracy under time pressure.

No backend. No build step. No network. Just static files.

---

## How to run

**Option A - just open it.** Double-click `index.html` (or drag it into any modern browser).
That's it.

**Option B - local web server** (recommended, only needed if your browser blocks
`localStorage` on `file://`, which stops past results from being saved):

```bash
# from this folder - pick whichever you have
python3 -m http.server 8000
# then visit http://localhost:8000
```

There are no dependencies to install.

---

## What's included

| File | Purpose |
|------|---------|
| `index.html` | Entry point - open this. |
| `styles.css` | All styling (responsive / mobile-friendly). |
| `questions.js` | **The question bank - edit this to add questions.** |
| `app.js` | App logic: timer, scoring, screens. Rarely needs touching. |

### Features

- **Sections:** Verbal, Numerical, **Abstract Reasoning** (shape sequences & odd-one-out, drawn
  as inline SVG), and Error Checking.
- **Modes:** practice a single section, run the **Full Deck Test** (every question in one
  pooled-timer run), or take the **Real Mock Test** (now spans all four sections).
- **Difficulty:** every question is graded easy / medium / hard. Pick a difficulty before you
  start (Mixed / Easy / Medium / Hard), or choose **Incremental** to have a single section run
  from easy to hard. The current question's difficulty is shown as a tag in the quiz header.
  The mock honours the chosen difficulty (Incremental falls back to Mixed).
- **Real Mock Test:** a full exam simulation across all sections - Verbal (2 testlets of 4),
  Numerical (2 testlets of 4), Abstract (6) and Checking (8) = 30 questions in ~11.5 minutes.
  Each section is separately timed; when its time runs out you move to the next one. Always timed
  (study mode is ignored). Questions are drawn at random each attempt.
- **Section indicator:** the header always shows which section you're on (e.g. "Section 2 of 5")
  during the mock, and the section name during single-section practice.
- **Randomised order:** each session shuffles the question order. Whole stimulus groups (a
  passage and its questions, a table/chart and its questions, a checking record) stay together,
  but the groups appear in a different order every time.
- **Study mode** (toggle on the home screen): untimed, with explanations shown immediately
  after each answer - for when you're first learning.
- **Timed mode:** a single section countdown, exactly like the real Saville test - the whole
  section shares one pool of time (no per-question timer), and you spend it across the questions
  however you like. The pool is `rate × number of questions`; the official rates are 30s for
  verbal and numerical and ~11s for checking (so a 4-question verbal set is 2:00 and an
  8-question checking set is ~1:30). Explanations are withheld until the review screen.
- **Keyboard shortcuts** for speed:
  - Verbal: `T` / `F` / `C` (or `1` / `2` / `3`)
  - Error checking: `C` (Correct) / `E` (Error) (or `1` / `2`)
  - Numerical: `1`–`4`
  - Study mode: `Enter` to go to the next question
- **Results** mirror Saville-style reporting: **Total score**, **Accuracy** (% of attempted
  correct), **Speed** (questions per minute), a **per-section breakdown**, and a flag for your
  **weakest question types**.
- **Review screen** after every session: each question with your answer, the correct answer,
  and the full explanation. Numerical explanations show the complete step-by-step working.
- **Cross-session history** stored in the browser's `localStorage` (local only - no database,
  no server). Clearing browser data or the in-app "Clear history" button wipes it.
- **Landing page** - an attractive homepage (`renderLanding()` in `app.js`) with a "Start
  Practising" button that leads to the mode-select screen.
- **Dark mode is the default**, toggled via the floating ☀️/🌙 button (top-right). An explicit
  choice is remembered in `localStorage`; clearing it returns to the dark default. All colours
  are CSS variables at the top of `styles.css` (light values under `:root`, dark overrides under
  `:root[data-theme="dark"]`), so re-theming is one place to edit.
- **Animated signature** - a typewriter "Made By Ibra" with an inline SVG alien icon and a
  blinking underscore cursor, at the foot of the landing page.

### Calculator note

A calculator is permitted in the real Numerical section, so the app does **not** block it - and
shows an on-screen reminder. Use your device calculator freely while practising numerical items.

---

## Access password (lock screen)

The app opens on a password lock screen; entering the correct password reveals the landing page
and the rest of the app.

- The password is stored only as a **SHA-256 hash** in `app.js` (the constant `AUTH.hash`), never
  in plain text.
- To set a new password, run this in the browser console and paste the result into `AUTH.hash`:

  ```js
  crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR-PASSWORD'))
    .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2,'0')).join('')))
  ```

- The unlock is remembered for the browser session (`sessionStorage`), so closing the tab
  re-locks the app.

> **Security note:** this is a *client-side* gate. It keeps casual visitors out, but it is **not**
> real access control — this repo is public, so anyone can read the source (including the questions)
> directly on GitHub, and a determined user could bypass the gate. For genuine "authorized people
> only" access you need either a private repo on a host that supports authenticated pages
> (e.g. Netlify password protection, Cloudflare Access) or content encrypted with the password so
> the published files are unreadable without it. Happy to set either of those up.

The lock screen needs `crypto.subtle`, which requires a secure context — it works on the hosted
HTTPS site and on `http://127.0.0.1`, but not when opening `index.html` directly via `file://`.

## Section timing

There's no per-question timer; each section runs on one pooled countdown sized from the per-question
rates in the `CONFIG` object at the top of `app.js` (`section timer = rate × number of questions`):

```js
const CONFIG = {
  perQuestionSeconds: { verbal: 30, numerical: 30, abstract: 20, error: 11 },
  ...
};
```

The Real Mock Test uses its own fixed, separately-timed sections.

---

## How to add new questions

Open **`questions.js`** and add objects to the `QUESTIONS` array. The full schema is documented
in the comment block at the top of that file. Every question needs `id`, `section`, `topic`,
`stimulus`, `question`, `options`, `answer` (must exactly match one of `options`), and
`explanation`.

### 1. Verbal

```js
{
  id: "verb-09",
  section: "verbal",
  topic: "verbal",
  stimulus: { passage: "Your reading passage goes here…" },
  question: "A statement to judge against the passage.",
  options: ["True", "False", "Cannot Say"],   // always these three
  answer: "Cannot Say",
  explanation: "Why - referencing only what the passage does or doesn't say."
}
```

> Tip: to attach several statements to one passage, copy the same `stimulus` block onto each
> question object.

### 2. Numerical

```js
{
  id: "num-13",
  section: "numerical",
  topic: "percentage-change", // or: average | share | forward-percentage | ratio
  stimulus: {
    table: {
      title: "My Data (£000s)",
      note: "Optional footnote.",
      columns: ["Region", "2023", "2024"],
      rows: [
        ["North", "120", "150"],
        ["South", "90", "99"]
      ]
    }
  },
  question: "By what percentage did North revenue change from 2023 to 2024?",
  options: ["25%", "20%", "30%", "24%"], // exactly 4 choices; include classic traps
  answer: "25%",
  // Use real line breaks (\n). They are preserved on screen.
  explanation:
    "Identify the cells:\n  North 2023 = 120, 2024 = 150\n\n" +
    "Formula:\n  (new − original) ÷ original × 100\n\n" +
    "Calculation:\n  (150 − 120) ÷ 120 × 100 = 25%\n\n" +
    "Trap: dividing by 150 gives 20% - wrong base."
}
```

**Always write the full working** in `explanation` (identify cells → formula → calculation →
answer) and make at least one wrong option a classic trap (e.g. dividing by the new value on a
% change).

### 3. Error checking

```js
{
  id: "err-13",
  section: "error",
  topic: "error-checking",
  stimulus: {
    recordTitle: "My Record",
    fields: [
      { label: "ID",     original: "100482", copied: "100842" }, // transposed digits
      { label: "Name",   original: "Jane Doe", copied: "Jane Doe" }
    ]
  },
  question: "Does the copied record exactly match the original?",
  options: ["Correct", "Error"],  // always these two
  answer: "Error",
  explanation: "Error in ID - the 4 and 8 are transposed (100482 vs 100842)."
}
```

The review screen automatically highlights which field differs, so you just describe the error
in the `explanation`. Vary the error types: transposed digits, a single wrong character, and
transposed letters in text fields.

---

## Real-test question styles (the official Swift Comprehension)

The bank also includes questions modelled on the real test's styles. The app supports both the
simple shapes above and these richer ones, so you can mix freely.

**Verbal** is not limited to True/False/Cannot Say. Use any `options` array:
- *Synonym-in-context* (`topic: "verbal-synonym"`): "Which one would best replace 'X'?" with 4
  word options.
- *Detail* (`topic: "verbal-detail"`): "Which one is NOT mentioned?" with 4 phrase options.
- *True / False / Not possible to say* (`topic: "verbal-inference"`): options worded
  `"True on the basis of the passage"`, etc.

**Numerical** can use a pie chart instead of a table, and calculation questions usually have 5
options (with the raw percentage as a trap):

```js
stimulus: {
  chart: {
    type: "pie",
    title: "Departmental Headcount",
    total: 400,
    unit: "employees",
    data: [ { label: "Engineering", percent: 35 }, { label: "Sales", percent: 20 } ]
  }
}
```

Chart judgments use `["True", "False", "Not possible to say"]` (`topic: "numerical-inference"`).

**Checking** can be multi-select. Set `multi: true`, make `answer` an **array**, and provide a
`check` stimulus (an original table, an optional `codingKey`, and one re-entered `entry` row whose
values align to `columns`). The user selects every field that is wrong, or that the item is fully
correct:

```js
{
  section: "error", topic: "error-checking", multi: true,
  stimulus: { check: {
    title: "Fleet Vehicle Log",
    columns: ["Driver", "Vehicle Reg", "Type", "Service Date"],
    rows: [ ["Adam Price", "KP19 RTX", "S", "04/03"], /* ... */ ],
    codingKey: "S = Saloon    V = Van    E = Electric",
    entryLabel: "Re-entered record",
    entry: ["Adam Pryce", "KP19 RTX", "Saloon", "04/08"]
  }},
  options: [
    "The entire item is correct",
    "There is an error in the Driver",
    "There is an error in the Vehicle Reg",
    "There is an error in the Type",
    "There is an error in the Service Date"
  ],
  answer: ["There is an error in the Driver", "There is an error in the Service Date"],
  explanation: "..."
}
```

The error-option text must read `"There is an error in the <Column>"` using the exact column
names, so the review screen can highlight the right entry cells automatically.

---

## Extending the app

The code is plain vanilla JS organised into clearly-commented sections in `app.js`
(config → state → setup → answering → scoring → rendering → keyboard → boot). New `topic`
values appear automatically in the weakness flagging; add a friendly label in the `TOPIC_LABEL`
map in `app.js` if you introduce one.
