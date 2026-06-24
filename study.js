/* Study guide content (original): formulas & techniques per area. */

const STUDY = {
  "comp-numerical": [
    {
      "heading": "Percentages",
      "items": [
        {
          "term": "Percentage of a total (share)",
          "detail": "share % = (part / total) x 100\nExample: 18 of 72 staff work part-time. (18 / 72) x 100 = 25%."
        },
        {
          "term": "Percentage change",
          "detail": "% change = ((new - old) / old) x 100\nExample increase: price rises from 40 to 50. ((50 - 40) / 40) x 100 = +25%.\nExample decrease: price falls from 50 to 40. ((40 - 50) / 50) x 100 = -20%."
        },
        {
          "term": "Apply a forward percentage increase",
          "detail": "new value = old x (1 + rate/100)\nExample: increase 80 by 15%. 80 x 1.15 = 92."
        },
        {
          "term": "Apply a forward percentage decrease",
          "detail": "new value = old x (1 - rate/100)\nExample: decrease 200 by 30%. 200 x 0.70 = 140."
        },
        {
          "term": "Fraction to percentage",
          "detail": "percentage = (numerator / denominator) x 100\nExample: 3/8 as a percentage. (3 / 8) x 100 = 37.5%."
        },
        {
          "term": "Percentage difference between two values",
          "detail": "% difference = (|A - B| / ((A + B) / 2)) x 100\nExample: compare 60 and 80. |60 - 80| = 20; average = (60 + 80) / 2 = 70; (20 / 70) x 100 = 28.6%."
        },
        {
          "term": "Classic trap: always divide by the ORIGINAL on % change",
          "detail": "For an increase or a decrease, divide the gap by the starting value, never by the new one. From 40 to 50 the base is 40, giving a 25% rise; from 50 to 40 the base is 50, giving a 20% fall, so an identical gap of 20 yields two different percentages."
        }
      ]
    },
    {
      "heading": "Ratios & proportions",
      "items": [
        {
          "term": "Form a ratio",
          "detail": "ratio = first quantity : second quantity (same units)\nExample: 12 cats and 8 dogs gives a ratio of 12 : 8."
        },
        {
          "term": "Simplify a ratio",
          "detail": "Divide every term by their greatest common divisor.\nExample: 12 : 8, divide both by 4, becomes 3 : 2."
        },
        {
          "term": "Split a total by a ratio",
          "detail": "value per part = total / (sum of ratio parts), then multiply each part by it.\nExample: split 100 in ratio 3 : 2. Sum of parts = 5; one part = 100 / 5 = 20; shares are 3 x 20 = 60 and 2 x 20 = 40 (check: 60 + 40 = 100)."
        }
      ]
    },
    {
      "heading": "Averages & reading data",
      "items": [
        {
          "term": "Average (mean)",
          "detail": "mean = sum of all values / number of values\nExample: scores 7, 8, 9, 12. Sum = 36; count = 4; mean = 36 / 4 = 9."
        },
        {
          "term": "Read values off a table or chart",
          "detail": "Locate the right row and column (or the labelled bar or point) and read the figure where they meet, after checking the units and any heading. Confirm you are on the exact category the question names, since picking the wrong row or column is the most frequent error."
        },
        {
          "term": "Combine reading with a calculation",
          "detail": "Many questions ask you to read two figures first and then apply a formula such as a share or a change.\nExample: a table shows Q1 sales 200 and Q2 sales 250. Percentage change = ((250 - 200) / 200) x 100 = +25%."
        }
      ]
    }
  ],
  "comp-verbal": [
    {
      "heading": "The Core Rule: Answer Only From the Passage",
      "items": [
        {
          "term": "Treat the passage as the only world that exists",
          "detail": "Decide each statement using nothing but what the passage says, even if you personally know the topic. Outside knowledge, assumptions, and common sense are not allowed as evidence."
        },
        {
          "term": "True means the passage proves it",
          "detail": "Mark True only when the statement logically follows from the text, either word-for-word or by a clear restatement of what is written. If you have to add a fact the passage never gives you, it is not True."
        },
        {
          "term": "False means the passage contradicts it",
          "detail": "Mark False only when the statement conflicts with something the passage actually states. There must be a direct clash between the statement and the text."
        },
        {
          "term": "Cannot Say means the passage neither proves nor contradicts it",
          "detail": "Mark Cannot Say when the topic is not covered, or is covered too vaguely to confirm or deny the statement. Silence in the passage points to Cannot Say, not to False."
        }
      ]
    },
    {
      "heading": "Deciding Cannot Say vs False (the hardest call)",
      "items": [
        {
          "term": "Ask: does the passage actively say the opposite?",
          "detail": "If the text states something that cannot both be true alongside the statement, choose False. If the text simply never addresses the point, choose Cannot Say."
        },
        {
          "term": "Missing information is Cannot Say, not False",
          "detail": "A statement you cannot confirm is not automatically wrong. Passage: 'The library opens at 9am.' Statement: 'The library closes at 6pm.' Closing time is never mentioned, so the answer is Cannot Say, not False."
        },
        {
          "term": "A direct clash is False",
          "detail": "When the statement and the text describe the same point in conflicting ways, it is False. Passage: 'All staff completed the training.' Statement: 'Some staff skipped the training.' This directly contradicts the text, so it is False."
        },
        {
          "term": "Watch for unstated causes and comparisons",
          "detail": "If a statement claims a reason, a ranking, or a comparison the passage never makes, lean toward Cannot Say. Passage: 'Sales rose in June.' Statement: 'Sales rose in June because of the new advert.' The cause is never stated, so it is Cannot Say."
        }
      ]
    },
    {
      "heading": "Watch the Scope Words (all / some / only / never)",
      "items": [
        {
          "term": "Scope words change the meaning of the whole sentence",
          "detail": "Words like all, every, none, never, only, some, most, and sometimes set how broad a claim is. Compare the scope word in the statement against the scope word in the passage before deciding."
        },
        {
          "term": "Strong words (all, every, never, only) need explicit support or a counter-example",
          "detail": "A broad 'all' or 'never' statement is True only if the passage covers every case, and it is False only if the passage names a clear exception. Passage: 'Two managers missed the meeting.' Statement: 'All managers attended.' The passage gives a direct exception, so the statement is False. Note: a passage saying only 'Most managers attended' does not name an exception, so 'All managers attended' would be Cannot Say, not False."
        },
        {
          "term": "Soft words (some, most, sometimes) are harder to break",
          "detail": "'Some' only needs one case to be supported. Passage: 'Three of the ten branches reported a loss.' Statement: 'Some branches reported a loss.' Three counts as some, so the statement is True."
        },
        {
          "term": "Beware 'only' and 'except'",
          "detail": "'Only' claims that nothing else qualifies, and 'except' carves out an exception. These narrow the meaning sharply, so check whether the passage truly limits things that tightly before agreeing."
        }
      ]
    },
    {
      "heading": "Synonym-in-Context Method",
      "items": [
        {
          "term": "Read the full sentence, not just the word",
          "detail": "A word can have several meanings, and the right one depends on the sentence around it. Find how the word is actually used here before picking a synonym."
        },
        {
          "term": "Predict your own replacement first",
          "detail": "Cover the answer options and think of a word that would fit the blank or slot, then look for the option closest to your prediction. This stops a familiar-looking but wrong option from pulling you in."
        },
        {
          "term": "Substitute each option back into the sentence",
          "detail": "Plug the candidate word into the original sentence and check it still makes sense and keeps the same tone. Example: in 'The firm posted a marked improvement', 'marked' means noticeable, so 'a noticeable improvement' fits while 'a stained improvement' does not."
        },
        {
          "term": "Match positive or negative tone",
          "detail": "Keep the same flavour as the original word. If the word is positive (praise) or negative (criticism), the correct synonym must carry that same feeling."
        }
      ]
    },
    {
      "heading": "Locating a Stated Detail",
      "items": [
        {
          "term": "Scan for keywords, do not re-read everything",
          "detail": "Pick a distinctive word from the question (a name, number, date, or unusual term) and scan the passage for it. This jumps you to the right spot far faster than reading line by line."
        },
        {
          "term": "Read one sentence before and after the match",
          "detail": "The exact answer often sits just beside the keyword, not on the same line. Reading the neighbouring sentences gives you the full context needed to confirm the detail."
        },
        {
          "term": "Beware paraphrase and matching traps",
          "detail": "The correct answer usually rewords the passage, while wrong options often copy passage words but twist the meaning. Match the idea, not just the vocabulary."
        },
        {
          "term": "Confirm numbers, names, and dates exactly",
          "detail": "Detail questions often hinge on a single figure or label. Re-check the digit, unit, or name against the text rather than trusting your memory of it."
        }
      ]
    },
    {
      "heading": "Pacing and Exam Technique",
      "items": [
        {
          "term": "Read the questions before the long passage",
          "detail": "Skim what is being asked first so you know which details to hunt for, then read the passage with a purpose. This avoids re-reading the same text many times."
        },
        {
          "term": "Budget your time per statement",
          "detail": "Divide the time by the number of questions and roughly stick to it. Example: 20 statements in 10 minutes gives 30 seconds each, so flag anything that takes longer and return to it."
        },
        {
          "term": "Never leave a blank when there is no penalty",
          "detail": "If wrong answers are not penalised, always make your best choice rather than skipping. A flagged guess can still be right, while a blank never scores."
        },
        {
          "term": "Reset between passages",
          "detail": "Each passage is a fresh, self-contained world, so do not carry facts or assumptions from an earlier passage into the next. Judge every statement only against its own passage."
        }
      ]
    }
  ],
  "comp-error": [
    {
      "heading": "Core Method: How to Compare Two Records",
      "items": [
        {
          "term": "Read in fixed chunks, not whole lines",
          "detail": "Break each value into small groups (for example pairs of digits or short letter runs) and compare the original to the copy chunk by chunk. The eye glides over long strings and skips errors, so deliberately slowing into 2 to 3 character pieces forces every character to register."
        },
        {
          "term": "Go field-by-field in a fixed order",
          "detail": "Lock the original value in mind, then check the matching field in the copy before moving on. Finish one field completely before starting the next so you never lose your place or double-count."
        },
        {
          "term": "Compare backwards as a second pass",
          "detail": "After a normal left-to-right check, scan the field again right-to-left. Reading in reverse strips away the meaning of words and numbers, which exposes swaps and missing characters your brain auto-corrected the first time."
        },
        {
          "term": "Use a finger or pointer on each version",
          "detail": "Track the original with one marker and the copy with another so your eyes jump cleanly between the two. This prevents re-reading the wrong row and keeps long records aligned."
        },
        {
          "term": "Count characters when fields look similar",
          "detail": "If two strings appear identical, count the length of each. A mismatch in length instantly reveals an inserted or dropped character even before you find which one."
        }
      ]
    },
    {
      "heading": "Working With Coding Keys",
      "items": [
        {
          "term": "Decode coded fields first",
          "detail": "When a field is built from a key (for example a region code mapped to a city), translate it using the key before comparing anything else. Coded fields hide the most errors because a single wrong character changes the whole meaning."
        },
        {
          "term": "Apply the key one symbol at a time",
          "detail": "Look up each character or block in the key separately rather than guessing the full code from memory. Treat the key as the source of truth and never rely on what you think the code should be."
        },
        {
          "term": "Check both directions of the mapping",
          "detail": "Confirm the original value encodes to the code shown, and that the code shown decodes back to the original value. A code can look valid in the key yet still not match the record it is paired with."
        },
        {
          "term": "Watch for valid-but-wrong codes",
          "detail": "An error is not just an invalid symbol; a code can exist in the key but point to the wrong entry. Always verify the decoded result equals the original field, not merely that the code is legal."
        }
      ]
    },
    {
      "heading": "Error Patterns to Hunt For",
      "items": [
        {
          "term": "Transposed digits or letters",
          "detail": "Two adjacent characters swap places, such as 4719 becoming 4791 or STEIN becoming STIEN. The set of characters is unchanged, so compare order and not just which characters appear."
        },
        {
          "term": "Single-character swaps",
          "detail": "One character is replaced by a similar-looking one, like O for 0, 1 for I, 5 for S, or B for 8. Pause on any character with a common look-alike and confirm it exactly."
        },
        {
          "term": "Inserted or dropped characters",
          "detail": "A record gains or loses one character, shifting everything after it (for example 30421 vs 3421, where the 0 is dropped). Length counts catch these fast, then locate the exact point where the two strings diverge."
        },
        {
          "term": "Case and spacing changes",
          "detail": "Look for altered capitalization, extra or missing spaces, and misplaced hyphens or apostrophes (O'Brien vs OBrien). These small marks count as errors when the field must match exactly."
        },
        {
          "term": "Date and number order",
          "detail": "Check that day, month, and year line up correctly and that thousands separators and decimal points sit in the same spot. 03/04 vs 04/03 and 1,250 vs 12,50 are easy-to-miss placement errors."
        }
      ]
    },
    {
      "heading": "Selecting Every Error (Scoring Tactics)",
      "items": [
        {
          "term": "Assume nothing about the count",
          "detail": "A record may contain several errors, exactly one, or none at all. Check every field even after you find a mistake, because stopping early loses marks on items with multiple errors."
        },
        {
          "term": "Mark each error field as you find it",
          "detail": "Tick or note every field that fails the moment you spot the mismatch. When the question asks you to select every field with an error, a running mark stops you from forgetting an early hit."
        },
        {
          "term": "Treat 'no error' as a real answer",
          "detail": "If all fields match after a full check, confidently choose the no-error option. Do not invent a mistake just because you expect one to be there."
        },
        {
          "term": "Budget time per field, not per record",
          "detail": "Give each field a steady, equal slice of attention so a tricky coded field does not starve a simple one. Consistent pacing across all fields keeps accuracy high under time pressure."
        }
      ]
    }
  ],
  "exec-numerical": [
    {
      "heading": "Core Arithmetic Foundations (carried over from entry level)",
      "items": [
        {
          "term": "Percentage of a value",
          "detail": "part = (percent / 100) x whole\nExample: 18% of 4,500 = (18 / 100) x 4,500 = 0.18 x 4,500 = 810."
        },
        {
          "term": "Percentage change",
          "detail": "% change = ((new - old) / old) x 100\nExample: sales rise from 250 to 320, so % change = ((320 - 250) / 250) x 100 = (70 / 250) x 100 = 28% increase."
        },
        {
          "term": "Reverse percentage (find the original)",
          "detail": "original = final / (1 + percent/100), or for a discount use (1 - percent/100)\nExample: a price of 138 already includes a 15% increase, so original = 138 / 1.15 = 120."
        },
        {
          "term": "Ratio sharing",
          "detail": "share = total x (your part / sum of all parts)\nExample: split 60,000 in ratio 3:2:1, sum = 6, so shares = 30,000, 20,000 and 10,000."
        },
        {
          "term": "Unit rate / unitary method",
          "detail": "per-unit value = total / number of units, then scale up\nExample: 7 machines produce 1,400 units, so 1 machine = 200; 12 machines = 200 x 12 = 2,400 units."
        },
        {
          "term": "Simple average (mean)",
          "detail": "mean = sum of values / count of values\nExample: profits of 40, 55, 70, 35 give mean = (40 + 55 + 70 + 35) / 4 = 200 / 4 = 50."
        }
      ]
    },
    {
      "heading": "Profit, Margin and Cost",
      "items": [
        {
          "term": "Profit",
          "detail": "profit = revenue - cost\nExample: revenue 850,000 and cost 610,000 give profit = 850,000 - 610,000 = 240,000."
        },
        {
          "term": "Profit margin (net margin %)",
          "detail": "profit margin = (profit / revenue) x 100\nExample: profit 240,000 on revenue 850,000 gives margin = (240,000 / 850,000) x 100 = 28.2%."
        },
        {
          "term": "Markup vs margin (don't confuse them)",
          "detail": "markup = (profit / cost) x 100, which uses cost as the base instead of revenue.\nExample: profit 240,000 on cost 610,000 gives markup = (240,000 / 610,000) x 100 = 39.3%, higher than the 28.2% margin on the same numbers."
        },
        {
          "term": "Gross profit vs gross margin",
          "detail": "gross profit = revenue - cost of goods sold; gross margin = (gross profit / revenue) x 100\nExample: revenue 500,000 with COGS 300,000 gives gross profit 200,000 and gross margin = (200,000 / 500,000) x 100 = 40%."
        },
        {
          "term": "Recovering profit from revenue and margin",
          "detail": "profit = revenue x (margin / 100)\nExample: revenue 1,200,000 at a 22% margin gives profit = 1,200,000 x 0.22 = 264,000."
        }
      ]
    },
    {
      "heading": "Variance Against Target or Budget",
      "items": [
        {
          "term": "Absolute variance",
          "detail": "variance = actual - target (positive means over, negative means under)\nExample: actual spend 92,000 against budget 80,000 gives variance = 92,000 - 80,000 = +12,000 (over budget)."
        },
        {
          "term": "Variance as a percentage",
          "detail": "variance % = ((actual - target) / target) x 100\nExample: actual 92,000 vs target 80,000 gives ((92,000 - 80,000) / 80,000) x 100 = (12,000 / 80,000) x 100 = 15% over."
        },
        {
          "term": "Favourable vs adverse direction",
          "detail": "For revenue, actual above target is favourable; for cost, actual above target is adverse. Always check whether 'higher' is good or bad before labelling the sign.\nExample: revenue 5% above target is favourable, but cost 5% above target is adverse, even though both compute as +5%."
        },
        {
          "term": "Attainment / achievement ratio",
          "detail": "attainment % = (actual / target) x 100\nExample: actual sales 117,000 against a 130,000 target give (117,000 / 130,000) x 100 = 90% of target achieved (i.e. 10% under)."
        }
      ]
    },
    {
      "heading": "Percentages vs Percentage Points",
      "items": [
        {
          "term": "Percentage-point difference",
          "detail": "pp difference = new percentage - old percentage (a plain subtraction of two percentages)\nExample: market share moves from 12% to 15%, a rise of 15 - 12 = 3 percentage points."
        },
        {
          "term": "Percentage points vs relative percent change",
          "detail": "A move from 12% to 15% is 3 percentage points but a relative rise of ((15 - 12) / 12) x 100 = 25%. Read the question to see which is asked.\nExample: '3 points higher' = the absolute gap; '25% higher share' = the proportional growth of the share itself."
        },
        {
          "term": "Spread / gap between two rates",
          "detail": "gap = rate A - rate B, expressed in percentage points\nExample: loan rate 7.5% minus deposit rate 2.1% gives a spread of 7.5 - 2.1 = 5.4 percentage points."
        }
      ]
    },
    {
      "heading": "Weighted Averages",
      "items": [
        {
          "term": "Weighted average (weighted mean)",
          "detail": "weighted average = (sum of value x weight) / (sum of weights)\nExample: prices 10, 20, 30 with volumes 5, 3, 2 give ((10x5)+(20x3)+(30x2)) / (5+3+2) = (50+60+60) / 10 = 170 / 10 = 17."
        },
        {
          "term": "Blended rate across groups",
          "detail": "Weight each group's rate by its size, then divide by total size.\nExample: 200 staff at 4% raise and 50 staff at 10% raise give a blended raise = ((200x4)+(50x10)) / (200+50) = (800+500) / 250 = 1,300 / 250 = 5.2%."
        },
        {
          "term": "Why weights matter",
          "detail": "A simple average of percentages is wrong when the groups differ in size; always weight by the underlying quantity.\nExample: averaging 4% and 10% naively gives 7%, but with 200 and 50 people the true figure is 5.2% because the larger group dominates."
        }
      ]
    },
    {
      "heading": "Index Numbers",
      "items": [
        {
          "term": "Index number (value relative to a base)",
          "detail": "index = (value in period / value in base period) x 100\nExample: base-year output 4,000 and current output 4,600 give index = (4,600 / 4,000) x 100 = 115."
        },
        {
          "term": "Reading growth straight from an index",
          "detail": "Because the base equals 100, the index minus 100 is the cumulative % change since the base.\nExample: an index of 115 means output is 15% above the base year; an index of 92 means 8% below."
        },
        {
          "term": "Comparing two periods within an index series",
          "detail": "% change between periods = ((later index - earlier index) / earlier index) x 100, not just the point gap\nExample: index moves 120 to 138, so % change = ((138 - 120) / 120) x 100 = (18 / 120) x 100 = 15%."
        },
        {
          "term": "Rebasing an index to a new base year",
          "detail": "new index = (old index / old index of the new base year) x 100\nExample: with old indices 125 (2024) and 150 (2025), rebasing to 2024 gives 2025 = (150 / 125) x 100 = 120."
        }
      ]
    },
    {
      "heading": "Growth Over Periods (Compounding)",
      "items": [
        {
          "term": "Compound growth (future value)",
          "detail": "final = initial x (1 + r)^n, where r is the rate per period and n is the number of periods\nExample: 100,000 growing 6% per year for 3 years = 100,000 x (1.06)^3 = 100,000 x 1.191016 = 119,102."
        },
        {
          "term": "Total growth factor over multiple periods",
          "detail": "overall factor = product of each period's (1 + rate); multiply factors, don't add the percentages\nExample: years of +10%, -5%, +8% give 1.10 x 0.95 x 1.08 = 1.1286, i.e. about 12.9% total growth, not 13%."
        },
        {
          "term": "Compound annual growth rate (CAGR)",
          "detail": "CAGR = (final / initial)^(1/n) - 1\nExample: revenue grows 200,000 to 338,000 over 4 years, so CAGR = (338,000 / 200,000)^(1/4) - 1 = (1.69)^0.25 - 1 = 1.1402 - 1 = 0.1402 = 14.0% per year."
        },
        {
          "term": "Average period growth from a total change",
          "detail": "per-period rate = (1 + total change)^(1/n) - 1\nExample: 44% total growth over 2 years gives (1.44)^(1/2) - 1 = 1.20 - 1 = 0.20 = 20% per year."
        }
      ]
    },
    {
      "heading": "Multi-Step Table Problems (executive style)",
      "items": [
        {
          "term": "Combine cells before the final step",
          "detail": "Aggregate the relevant table cells (sum or net them) first, then apply the single formula the question asks for.\nExample: Q1-Q4 revenue 120, 140, 160, 180 (total 600) and costs 90, 100, 110, 120 (total 420) give full-year profit = 600 - 420 = 180 and margin = (180 / 600) x 100 = 30%."
        },
        {
          "term": "Two-table lookup then compute",
          "detail": "Pull one figure from each table (e.g. units from one, price from another), multiply or divide, then finish the calculation.\nExample: units sold 2,500 (table A) at price 48 (table B) give revenue = 2,500 x 48 = 120,000; if cost is 84,000 then profit = 120,000 - 84,000 = 36,000."
        },
        {
          "term": "Subtotal then percentage of the whole",
          "detail": "Add the qualifying rows into a subtotal, then divide by the grand total.\nExample: three regions contribute 40, 55, 30 out of a company total of 250, so their combined share = (40 + 55 + 30) / 250 x 100 = 125 / 250 x 100 = 50%."
        },
        {
          "term": "Chain a rate onto a derived figure",
          "detail": "Compute an intermediate result, then apply a further rate (tax, commission, growth) to that result.\nExample: profit 36,000, then 25% tax gives after-tax profit = 36,000 x (1 - 0.25) = 36,000 x 0.75 = 27,000."
        },
        {
          "term": "Per-unit metric from totals",
          "detail": "Combine total revenue and total units across rows, then divide once at the end.\nExample: revenue 120 + 180 = 300 over units 5 + 10 = 15 gives average revenue per unit = 300 / 15 = 20."
        },
        {
          "term": "Sanity-check the magnitude",
          "detail": "After multi-step work, confirm the answer's size and units are plausible (a margin can't exceed 100%, a part can't beat the whole). Re-read which base the question wants before locking in.\nExample: if a 'margin' comes out at 140%, you likely divided by cost instead of revenue and computed a markup."
        }
      ]
    }
  ],
  "exec-verbal": [
    {
      "heading": "Reading the passage: stated vs implied vs assumed",
      "items": [
        {
          "term": "Anchor every answer to the text, not the world",
          "detail": "Treat the passage as the only source of truth, even if you happen to know the real industry. Outside knowledge, common sense about how markets usually behave, and your own opinions are all off-limits; if the passage does not establish it, you cannot rely on it."
        },
        {
          "term": "Separate stated, implied, and assumed",
          "detail": "Stated means the words are explicitly on the page. Implied means it must logically follow from what is on the page. Assumed means the argument needs it to work but never says it, so it is not something you can treat as given."
        },
        {
          "term": "Test 'implied' with the can-it-be-false check",
          "detail": "An inference is only safe if it cannot possibly be false while every sentence of the passage is true. If you can picture a scenario where the whole passage holds yet the statement fails, it is not implied and the safe verdict moves toward Cannot Say."
        },
        {
          "term": "Strip out persuasion language",
          "detail": "Words like clearly, obviously, leading, and best are author framing, not facts. Mentally delete them and judge only the underlying factual claim that remains."
        }
      ]
    },
    {
      "heading": "The True / False / Cannot Say decision",
      "items": [
        {
          "term": "True only if forced by the passage",
          "detail": "Mark True when the statement is directly stated or is the only conclusion the text allows. If reaching True requires one extra step the passage does not provide, it is not True."
        },
        {
          "term": "False only if the passage contradicts it",
          "detail": "Mark False when the statement conflicts with something the passage asserts. Note that 'the passage does not mention it' is never grounds for False; absence of evidence is Cannot Say, not contradiction."
        },
        {
          "term": "Cannot Say is the home of unverified claims",
          "detail": "If the passage gives a forecast, target, plan, expectation, or someone's opinion without confirming the outcome, statements about that outcome are Cannot Say. A projection is not a fact until the text says it happened."
        },
        {
          "term": "Default to Cannot Say when you are reasoning beyond the text",
          "detail": "If proving the statement requires plausibility, motive, or 'it would make sense that', stop. That is reasoning the passage did not do for you, so the answer is Cannot Say."
        }
      ]
    },
    {
      "heading": "Projections, claims, and attributed statements",
      "items": [
        {
          "term": "A target or forecast is not an outcome",
          "detail": "If the passage says the firm aims to cut costs by 15 percent next year, you cannot conclude costs will fall or did fall. That the plan exists can be True; the result is Cannot Say."
        },
        {
          "term": "Attributed opinions establish only that the opinion was held",
          "detail": "If the CEO believes demand will rise, what is true is that the CEO holds that belief, not that demand will rise. Statements about the belief can be True; statements about the predicted fact are Cannot Say."
        },
        {
          "term": "Correlation in the passage is not causation",
          "detail": "If two things rose together, the passage has not told you one caused the other. Treat any causal restatement as Cannot Say unless the text explicitly states the causal link."
        },
        {
          "term": "Watch verb tense and certainty markers",
          "detail": "Will, expects to, is projected to, and could all signal an unrealised future; has, did, and reported signal a confirmed fact. The tense often decides between True and Cannot Say."
        }
      ]
    },
    {
      "heading": "Quantifier, scope, and comparison traps",
      "items": [
        {
          "term": "Some does not mean all, and most does not mean every",
          "detail": "If the passage says most regions grew, a statement that a particular named region grew is Cannot Say, since most allows exceptions. Pin each quantifier to exactly what it covers and no more."
        },
        {
          "term": "All / none / always / only are easy to over-read",
          "detail": "A universal claim in the answer needs universal support in the passage. One supporting example does not justify always, and the absence of a stated counterexample does not prove none."
        },
        {
          "term": "Mind the scope: who, where, and when",
          "detail": "A fact about one division, one quarter, or one market does not transfer to the whole company, the full year, or all markets. Check that the subject and boundaries of the answer match the subject and boundaries in the text."
        },
        {
          "term": "Relative vs absolute comparisons",
          "detail": "A higher growth rate does not mean a higher absolute amount, and a larger share does not mean a larger total. If the passage gives percentages, do not silently convert them into volumes or money."
        }
      ]
    },
    {
      "heading": "Caveats, conditionals, and connectors",
      "items": [
        {
          "term": "Conditionals only fire when the condition is met",
          "detail": "If the passage says profits rise only if the merger closes, then the merger closing is required for any profit rise; you cannot claim profits rose unless the text also confirms the merger closed. With any if-then, check the condition before accepting the result."
        },
        {
          "term": "Affirm the antecedent, not the consequent",
          "detail": "From 'if A then B', knowing A is true lets you conclude B, but knowing B is true does not let you conclude A, and knowing A is false tells you nothing about B. Reversing or negating a conditional is a classic trap that yields Cannot Say."
        },
        {
          "term": "Honour the caveats: however, except, despite, unless",
          "detail": "These words carve out exceptions that often flip an answer. Read the whole sentence before deciding, because the second clause may withdraw what the first clause seemed to grant."
        },
        {
          "term": "Distinguish necessary from sufficient conditions",
          "detail": "Required for is not the same as guarantees. If approval is necessary for launch, meeting approval alone does not prove a launch happened; other conditions may still be unmet, so treat the launch as Cannot Say."
        }
      ]
    },
    {
      "heading": "Process and pacing under time pressure",
      "items": [
        {
          "term": "Read the statement, then hunt the passage",
          "detail": "Read each answer statement first, then scan the passage for the specific clause it depends on. This keeps you verifying a precise claim rather than absorbing the whole text at once."
        },
        {
          "term": "Judge each statement independently",
          "detail": "Do not let an earlier True or False bias the next item, and do not assume a balanced mix of answers. Each statement stands or falls only against the passage."
        },
        {
          "term": "Quote the supporting line in your head",
          "detail": "Before locking in True or False, name the exact sentence that proves it. If you cannot point to one, the honest answer is Cannot Say."
        },
        {
          "term": "Beware the tempting paraphrase",
          "detail": "Wrong options often restate the passage but swap a quantifier, widen the scope, or harden a forecast into a fact. Compare the answer word by word against the source clause before trusting a near-match."
        }
      ]
    }
  ],
  "exec-abstract": [
    {
      "heading": "The attribute checklist (scan every figure against these)",
      "items": [
        {
          "term": "Rotation",
          "detail": "Does a shape turn step to step? Note the direction (clockwise or anticlockwise) and the angle per step, usually 45 or 90 degrees. A consistent turn is one of the most common rules."
        },
        {
          "term": "Reflection (mirror or flip)",
          "detail": "Check whether a figure is flipped across a vertical or horizontal line rather than rotated. A reflection reverses left/right or top/bottom; an asymmetric shape like an L or arrow exposes it instantly."
        },
        {
          "term": "Count of elements",
          "detail": "Count dots, lines, sides, or sub-shapes in each frame. Look for a numeric pattern such as +1 each step, doubling, or a fixed total split differently across frames."
        },
        {
          "term": "Shading and fill",
          "detail": "Track black, white, grey, striped, or dotted fills. Fills often alternate (black, white, black, white) or rotate through a set of shapes in turn."
        },
        {
          "term": "Size",
          "detail": "Is a shape growing or shrinking by a steady amount each frame? Watch for one element scaling while everything else stays fixed."
        },
        {
          "term": "Shape type or shape cycle",
          "detail": "See if shapes change identity (square to pentagon to hexagon) or cycle through a repeating list (triangle, circle, square, then back to triangle). Side-count changes are a frequent disguise for this."
        },
        {
          "term": "Position and movement",
          "detail": "Track where an element sits inside the frame and whether it moves along a path, for example a dot stepping around the corners of a square or sliding one cell each frame."
        },
        {
          "term": "Adding or removing elements",
          "detail": "Notice elements appearing or disappearing on a schedule, such as one new line added per frame or a marker that toggles on and off."
        }
      ]
    },
    {
      "heading": "The method (apply it the same way every time)",
      "items": [
        {
          "term": "1. Spot what changes step to step",
          "detail": "Compare frame 1 to frame 2, then 2 to 3, running down the checklist attribute by attribute. Separate the things that change from the things that stay constant, because both carry information."
        },
        {
          "term": "2. Form one clear rule",
          "detail": "State the pattern in a single sentence, for example 'the arrow rotates 90 degrees clockwise and the fill alternates black and white each step.' If two attributes change, your rule needs to cover both."
        },
        {
          "term": "3. Test the rule against every figure",
          "detail": "Run your rule forward across all the given frames to confirm it holds for each transition, not just the first one. If it breaks anywhere, the rule is wrong and you must revise it."
        },
        {
          "term": "4. Test the rule against every option",
          "detail": "For next-in-series, predict the answer before looking, then find the option that matches; for odd-one-out, the answer is the single figure that breaks the rule the others share. Eliminate options that fail any attribute, and watch for near-miss distractors that get one attribute right but another wrong."
        },
        {
          "term": "Tip: check more than one attribute",
          "detail": "Hard items combine two or three rules at once (e.g. rotation plus a count plus a fill cycle). Distractors are built to satisfy the obvious rule while violating a subtler one, so verify the full rule before committing."
        }
      ]
    },
    {
      "heading": "Worked mini-examples (described in words)",
      "items": [
        {
          "term": "Next-in-series example",
          "detail": "Frames show a single arrow: pointing up, then right, then down. Scanning the checklist, only orientation changes; it rotates 90 degrees clockwise each step (up to right, then right to down). The rule predicts the next arrow points left (down to left, another 90 degrees clockwise). Pick the option with one arrow pointing left, and reject one that points left but is a double arrow, since count must stay at one."
        },
        {
          "term": "Two-rule series example",
          "detail": "Frames show a polygon that goes triangle (3 sides), square (4), pentagon (5), with the fill alternating black, white, black. Two rules apply: sides increase by one, and the fill alternates. Next should be a hexagon (6 sides) with white fill. Reject a black hexagon (right shape, wrong fill) and a white heptagon (7 sides, so right fill but wrong side count)."
        },
        {
          "term": "Odd-one-out example",
          "detail": "Five boxes each hold one shape with a dot. In four of them the dot sits inside the shape; in one the dot sits just outside. The shared rule is 'dot inside the shape,' so the figure with the dot outside is the odd one out. Ignore differences in shape type or size that are not consistent across the set, as those are decoys."
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") window.STUDY = STUDY;
if (typeof module !== "undefined" && module.exports) module.exports = STUDY;
