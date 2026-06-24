/* Study guide content (original): formulas, worked examples & speed tricks per area. */

const STUDY = {
  "comp-numerical": [
    {
      "heading": "Core formulas",
      "items": [
        {
          "term": "Percentage of a total (share)",
          "formula": "share % = (part / whole) x 100",
          "example": "A team sells 18 of the company's 72 total sales: (18 / 72) x 100 = 25%.",
          "trick": "If the part divides cleanly into the whole, recognise the fraction first: 18/72 = 1/4 = 25%, no calculator needed."
        },
        {
          "term": "Percentage change (increase)",
          "formula": "% change = (new - old) / old x 100",
          "example": "Price rises from 40 to 50: (50 - 40) / 40 x 100 = 10/40 x 100 = +25%.",
          "trick": "Always divide by the OLD (starting) value, never the new one. The difference goes on top."
        },
        {
          "term": "Percentage change (decrease)",
          "formula": "% change = (new - old) / old x 100 (result is negative)",
          "example": "Visitors fall from 500 to 400: (400 - 500) / 500 x 100 = -100/500 x 100 = -20%.",
          "trick": "A drop and the rise back are NOT the same percent: -20% from 500 to 400, but 400 to 500 is +25% (smaller base)."
        },
        {
          "term": "Applying a forward % change",
          "formula": "new = old x (1 +- change as a decimal)",
          "example": "Increase 80 by 15%: 80 x 1.15 = 92. Decrease 80 by 15%: 80 x 0.85 = 68.",
          "trick": "Turn the percent into a multiplier once (+15% -> 1.15, -15% -> 0.85) instead of finding the part and adding it on separately."
        },
        {
          "term": "Ratio: form and read",
          "formula": "ratio = a : b (parts of the same unit, in order)",
          "example": "12 cats and 8 dogs gives a cats:dogs ratio of 12 : 8.",
          "detail": "A ratio compares quantities, not the total. Keep the items in the order named in the question and use the same units before comparing."
        },
        {
          "term": "Ratio: simplify",
          "formula": "divide every part by their highest common factor",
          "example": "12 : 8 -> divide both by 4 -> 3 : 2.",
          "trick": "Keep halving while all parts are even (12:8 -> 6:4 -> 3:2). You will reach simplest form without needing to spot the HCF."
        },
        {
          "term": "Ratio: split a total",
          "formula": "one part = total / (sum of ratio parts), then x that part's share",
          "example": "Split 200 in 3 : 2. Parts sum to 5, so 200 / 5 = 40 per part: 3 x 40 = 120 and 2 x 40 = 80.",
          "trick": "Always check your answers add back to the total (120 + 80 = 200). If they don't, you divided by the wrong number."
        },
        {
          "term": "Average (mean)",
          "formula": "mean = sum of values / number of values",
          "example": "Scores 4, 8, 6, 2: (4 + 8 + 6 + 2) / 4 = 20 / 4 = 5.",
          "trick": "To find a missing value when the mean is given, multiply mean x count to get the required total, then subtract the values you have."
        },
        {
          "term": "Fraction to percentage",
          "formula": "% = (numerator / denominator) x 100",
          "example": "3/8 = (3 / 8) x 100 = 0.375 x 100 = 37.5%.",
          "trick": "Scale the fraction so the bottom is 100: 3/8 = ?/100 -> 3 x 12.5 = 37.5, so 37.5%."
        },
        {
          "term": "Percentage difference between two values",
          "formula": "% difference = (larger - smaller) / smaller x 100",
          "example": "Compare 60 and 75: (75 - 60) / 60 x 100 = 15/60 x 100 = 25%.",
          "trick": "Decide first which value is the baseline the question asks about, and divide by THAT. 'How much bigger is B than A' divides by A."
        },
        {
          "term": "Reading tables and charts",
          "formula": "value = row label crossed with column label (read units & scale first)",
          "example": "If a bar reaches halfway between gridlines marked 200 and 300, it reads 250.",
          "detail": "Check the axis scale, the units (thousands? %?), and any footnotes BEFORE calculating. Most chart questions test careful reading, not hard maths. Use only the figure asked about and ignore distractor rows."
        }
      ]
    },
    {
      "heading": "Speed tricks & shortcuts",
      "items": [
        {
          "term": "Find 10% first, then scale",
          "detail": "Move the decimal one place left to get 10%, then multiply for the percent you need.",
          "example": "10% of 240 = 24. So 30% = 24 x 3 = 72, and 70% = 24 x 7 = 168.",
          "trick": "Build any 'nice' percent from 10% blocks rather than multiplying by an awkward decimal."
        },
        {
          "term": "5% = half of 10%, 1% = a tenth of 10%",
          "detail": "Once you have 10%, halve it for 5% and divide by 10 for 1%, then combine.",
          "example": "10% of 240 = 24, so 5% = 12 and 1% = 2.4. Then 16% = 10% + 5% + 1% = 24 + 12 + 2.4 = 38.4.",
          "trick": "Assemble odd percents (e.g. 17%, 23%) from 10% + 5% + 1% chunks."
        },
        {
          "term": "'of' means multiply",
          "detail": "Whenever a question says 'X% of Y' or 'a fraction of Y', replace 'of' with x.",
          "example": "3/5 of 45 = 3/5 x 45 = 27. And 20% of 90 = 0.2 x 90 = 18.",
          "trick": "Convert the percent or fraction to a decimal and just multiply in one step."
        },
        {
          "term": "Increase / decrease with a multiplier",
          "detail": "Add the percent to 1 for an increase, subtract from 1 for a decrease, then multiply once.",
          "example": "+15% -> x1.15: 200 x 1.15 = 230. -20% -> x0.8: 200 x 0.8 = 160.",
          "trick": "Chained changes just multiply the multipliers: +10% then -10% = x1.1 x 0.9 = x0.99 (a net 1% loss, not 0)."
        },
        {
          "term": "Reverse a percentage (find the original)",
          "formula": "original = final / multiplier",
          "example": "A price is 92 after a 15% rise: 92 / 1.15 = 80 was the original. After a 20% cut to 160: 160 / 0.8 = 200.",
          "trick": "Never just subtract 15% from the new price. Divide by the multiplier to undo the change exactly."
        },
        {
          "term": "Percentage POINTS vs percent",
          "detail": "A move from 20% to 25% is +5 percentage points, but a +25% relative increase. Keep the two ideas separate.",
          "example": "20% to 25%: difference is 5 points; relative change = (25 - 20) / 20 x 100 = +25%.",
          "trick": "If the question says 'points', just subtract. If it says 'percent change', divide by the starting value."
        },
        {
          "term": "Multiply by 5 = x10 then halve",
          "detail": "Multiplying by 5 is the same as multiplying by 10 and taking half. Dividing by 5 is x2 then /10.",
          "example": "68 x 5 = 680 / 2 = 340. And 340 / 5 = 340 x 2 / 10 = 680 / 10 = 68.",
          "trick": "Also: x25 = x100 then /4 (e.g. 32 x 25 = 3200 / 4 = 800)."
        },
        {
          "term": "Work backwards from the options & estimate",
          "detail": "In multiple choice, round to estimate the rough answer and eliminate options that are clearly too big or small before doing exact maths.",
          "example": "19.8% of 412: estimate 20% of 400 = 80, so pick the option near 80 (exact = 81.6) and bin any far-off choices.",
          "trick": "Test a candidate answer by plugging it back in. The one that fits the question wins, often faster than solving forward."
        }
      ]
    },
    {
      "heading": "Fraction <-> percentage (worth memorising)",
      "items": [
        {
          "term": "1/2",
          "detail": "50%"
        },
        {
          "term": "1/3",
          "detail": "33.3% (recurring)"
        },
        {
          "term": "2/3",
          "detail": "66.7% (recurring)"
        },
        {
          "term": "1/4",
          "detail": "25%"
        },
        {
          "term": "3/4",
          "detail": "75%"
        },
        {
          "term": "1/5",
          "detail": "20%"
        },
        {
          "term": "2/5",
          "detail": "40%"
        },
        {
          "term": "3/5",
          "detail": "60%"
        },
        {
          "term": "4/5",
          "detail": "80%"
        },
        {
          "term": "1/8",
          "detail": "12.5%"
        },
        {
          "term": "3/8",
          "detail": "37.5%"
        },
        {
          "term": "5/8",
          "detail": "62.5%"
        },
        {
          "term": "1/10",
          "detail": "10%"
        },
        {
          "term": "1/20",
          "detail": "5%"
        }
      ]
    }
  ],
  "exec-numerical": [
    {
      "heading": "Core arithmetic (carried over from entry level)",
      "items": [
        {
          "term": "Percentage of a value",
          "formula": "part = (percent / 100) x whole",
          "example": "18% of 4,500 = 0.18 x 4,500 = 810.",
          "trick": "Find 10% (450) then scale: 18% is just under 2 x 10%, so 900 - 90 = 810."
        },
        {
          "term": "Percentage change",
          "formula": "% change = ((new - old) / old) x 100",
          "example": "Sales rise 250 to 320: ((320 - 250) / 250) x 100 = (70 / 250) x 100 = 28% increase.",
          "trick": "Always divide the gap by the OLD value, never the new one."
        },
        {
          "term": "Reverse percentage (find the original)",
          "formula": "original = final / (1 + percent/100)  [use (1 - percent/100) for a fall]",
          "example": "138 already includes a 15% rise, so original = 138 / 1.15 = 120.",
          "trick": "Never just subtract the percentage from the final figure; divide by the multiplier instead."
        },
        {
          "term": "Ratio sharing",
          "formula": "share = total x (your part / sum of all parts)",
          "example": "Split 60,000 in ratio 3:2:1, sum = 6, so shares = 30,000, 20,000 and 10,000.",
          "trick": "Find one part first (60,000 / 6 = 10,000), then multiply each ratio number by it."
        },
        {
          "term": "Unit rate / unitary method",
          "formula": "per-unit value = total / number of units, then scale up",
          "example": "7 machines make 1,400 units, so 1 makes 200; 12 machines = 200 x 12 = 2,400.",
          "trick": "Get to the value of one unit first, then multiply up to whatever the question asks."
        },
        {
          "term": "Simple average (mean)",
          "formula": "mean = sum of values / count of values",
          "example": "Profits 40, 55, 70, 35: (40 + 55 + 70 + 35) / 4 = 200 / 4 = 50.",
          "trick": "Estimate by eye: the mean must land between the smallest and largest value."
        }
      ]
    },
    {
      "heading": "Profit, margin and cost",
      "items": [
        {
          "term": "Profit",
          "formula": "profit = revenue - cost",
          "example": "Revenue 850,000 and cost 610,000: profit = 850,000 - 610,000 = 240,000."
        },
        {
          "term": "Profit margin (net margin %)",
          "formula": "profit margin = (profit / revenue) x 100",
          "example": "Profit 240,000 on revenue 850,000: (240,000 / 850,000) x 100 = 28.2%.",
          "trick": "Margin always divides by revenue (the bigger number), so a profit margin can never exceed 100% when cost is positive."
        },
        {
          "term": "Markup vs margin (do not confuse them)",
          "formula": "markup = (profit / cost) x 100",
          "example": "Profit 240,000 on cost 610,000: (240,000 / 610,000) x 100 = 39.3%, higher than the 28.2% margin on the same numbers.",
          "trick": "Markup divides by cost, margin divides by revenue; on a profit, markup is always the larger of the two."
        },
        {
          "term": "Gross profit and gross margin",
          "formula": "gross profit = revenue - COGS;  gross margin = (gross profit / revenue) x 100",
          "example": "Revenue 500,000 with COGS 300,000: gross profit 200,000, gross margin = (200,000 / 500,000) x 100 = 40%."
        },
        {
          "term": "Recover profit from revenue and margin",
          "formula": "profit = revenue x (margin / 100)",
          "example": "Revenue 1,200,000 at a 22% margin: 1,200,000 x 0.22 = 264,000.",
          "trick": "Treat the margin as a multiplier on revenue, the same way you apply any percentage of a value."
        }
      ]
    },
    {
      "heading": "Variance against target or budget",
      "items": [
        {
          "term": "Absolute variance",
          "formula": "variance = actual - target  (positive = over, negative = under)",
          "example": "Actual spend 92,000 against budget 80,000: 92,000 - 80,000 = +12,000 (over budget)."
        },
        {
          "term": "Variance as a percentage",
          "formula": "variance % = ((actual - target) / target) x 100",
          "example": "Actual 92,000 vs target 80,000: (12,000 / 80,000) x 100 = 15% over.",
          "trick": "It is a percentage change with the target as the OLD value; divide by the target, not the actual."
        },
        {
          "term": "Favourable vs adverse direction",
          "formula": "(no formula: judge whether higher is good or bad)",
          "example": "Revenue 5% above target is favourable, but cost 5% above target is adverse, even though both compute as +5%.",
          "trick": "For revenue, over is good; for cost, over is bad. Decide the label before you trust the sign."
        },
        {
          "term": "Attainment / achievement ratio",
          "formula": "attainment % = (actual / target) x 100",
          "example": "Actual sales 117,000 against a 130,000 target: (117,000 / 130,000) x 100 = 90% of target (i.e. 10% under).",
          "trick": "Attainment plus the shortfall equals 100%, so 90% achieved is the same as 10% under target."
        }
      ]
    },
    {
      "heading": "Percentages vs percentage points",
      "items": [
        {
          "term": "Percentage-point difference",
          "formula": "pp difference = new percentage - old percentage  (a plain subtraction)",
          "example": "Market share moves 12% to 15%: a rise of 15 - 12 = 3 percentage points."
        },
        {
          "term": "Percentage points vs relative percent change",
          "formula": "points = new% - old%;  relative % = ((new% - old%) / old%) x 100",
          "example": "12% to 15% is 3 percentage points but a relative rise of (3 / 12) x 100 = 25%.",
          "trick": "'Points higher' means subtract; 'percent higher' means divide by the starting percentage."
        },
        {
          "term": "Spread / gap between two rates",
          "formula": "gap = rate A - rate B  (in percentage points)",
          "example": "Loan rate 7.5% minus deposit rate 2.1%: a spread of 5.4 percentage points."
        }
      ]
    },
    {
      "heading": "Weighted averages",
      "items": [
        {
          "term": "Weighted average (weighted mean)",
          "formula": "weighted average = (sum of value x weight) / (sum of weights)",
          "example": "Prices 10, 20, 30 with volumes 5, 3, 2: ((10x5)+(20x3)+(30x2)) / (5+3+2) = 170 / 10 = 17.",
          "trick": "The answer always sits nearer the value with the bigger weight, so use that to sense-check."
        },
        {
          "term": "Blended rate across groups",
          "formula": "blended rate = (sum of size x rate) / (sum of sizes)",
          "example": "200 staff at 4% and 50 staff at 10%: ((200x4)+(50x10)) / 250 = 1,300 / 250 = 5.2%.",
          "trick": "It lands closer to the larger group (5.2% is near the 200-strong 4% group, not the midpoint 7%)."
        },
        {
          "term": "Why weights matter",
          "formula": "(no formula: never plain-average unequal groups)",
          "example": "Averaging 4% and 10% naively gives 7%, but with 200 and 50 people the true figure is 5.2%.",
          "detail": "A simple average of percentages is only correct when the groups are the same size; otherwise weight each rate by its underlying quantity."
        }
      ]
    },
    {
      "heading": "Index numbers",
      "items": [
        {
          "term": "Index number (value relative to a base)",
          "formula": "index = (value in period / value in base period) x 100",
          "example": "Base output 4,000 and current output 4,600: (4,600 / 4,000) x 100 = 115."
        },
        {
          "term": "Reading growth straight from an index",
          "formula": "cumulative % change since base = index - 100",
          "example": "An index of 115 means 15% above the base year; an index of 92 means 8% below.",
          "trick": "Because the base is 100, just subtract 100 to read the total change at a glance."
        },
        {
          "term": "Comparing two periods within an index series",
          "formula": "% change = ((later index - earlier index) / earlier index) x 100",
          "example": "Index 120 to 138: ((138 - 120) / 120) x 100 = (18 / 120) x 100 = 15%.",
          "trick": "Between two non-base periods, divide by the earlier index, not by 100; the point gap alone is wrong."
        },
        {
          "term": "Rebasing an index to a new base year",
          "formula": "new index = (old index / old index of the new base year) x 100",
          "example": "Old indices 125 (2024) and 150 (2025), rebasing to 2024: 2025 = (150 / 125) x 100 = 120."
        }
      ]
    },
    {
      "heading": "Growth over periods (compounding)",
      "items": [
        {
          "term": "Compound growth (future value)",
          "formula": "final = initial x (1 + r)^n",
          "example": "100,000 growing 6%/year for 3 years = 100,000 x (1.06)^3 = 100,000 x 1.191016 = 119,102.",
          "trick": "For a rough check, n years at r% is a bit more than n x r% simple growth (3 x 6% = 18%, actual 19.1%)."
        },
        {
          "term": "Total growth factor over multiple periods",
          "formula": "overall factor = product of each period's (1 + rate)",
          "example": "+10%, -5%, +8% give 1.10 x 0.95 x 1.08 = 1.1286, about 12.9% total, not 13%.",
          "trick": "Multiply the factors; never add the percentages, because each period builds on the last."
        },
        {
          "term": "Compound annual growth rate (CAGR)",
          "formula": "CAGR = (final / initial)^(1/n) - 1",
          "example": "200,000 to 338,000 over 4 years: (338,000 / 200,000)^(1/4) - 1 = (1.69)^0.25 - 1 = 14.0%/year."
        },
        {
          "term": "Average period growth from a total change",
          "formula": "per-period rate = (1 + total change)^(1/n) - 1",
          "example": "44% total over 2 years: (1.44)^(1/2) - 1 = 1.20 - 1 = 20% per year.",
          "trick": "Halving the total percentage over-states it; take the root of the factor instead (sqrt of 1.44 = 1.20)."
        }
      ]
    },
    {
      "heading": "Multi-step table problems (executive style)",
      "items": [
        {
          "term": "Combine cells before the final step",
          "formula": "aggregate the cells first, then apply one formula",
          "example": "Q1-Q4 revenue 120, 140, 160, 180 (total 600) and costs 90, 100, 110, 120 (total 420): profit = 600 - 420 = 180, margin = (180 / 600) x 100 = 30%.",
          "trick": "Sum the rows you need before dividing, so you only run the percentage formula once."
        },
        {
          "term": "Two-table lookup then compute",
          "formula": "pull one figure from each table, then combine",
          "example": "Units 2,500 (table A) at price 48 (table B): revenue = 120,000; with cost 84,000, profit = 36,000."
        },
        {
          "term": "Subtotal then percentage of the whole",
          "formula": "share % = (sum of qualifying rows / grand total) x 100",
          "example": "Regions 40, 55, 30 out of a 250 total: (125 / 250) x 100 = 50%."
        },
        {
          "term": "Chain a rate onto a derived figure",
          "formula": "apply the next rate to the intermediate result",
          "example": "Profit 36,000, then 25% tax: after-tax = 36,000 x (1 - 0.25) = 36,000 x 0.75 = 27,000.",
          "trick": "For a deduction, multiply by what is LEFT (0.75 for a 25% cut) in one step instead of subtracting after."
        },
        {
          "term": "Per-unit metric from totals",
          "formula": "per-unit = total value / total units (combine across rows first)",
          "example": "Revenue 120 + 180 = 300 over units 5 + 10 = 15: average revenue per unit = 300 / 15 = 20.",
          "trick": "Add up the totals and divide once at the end; do not average the separate per-unit figures."
        },
        {
          "term": "Sanity-check the magnitude",
          "formula": "(no formula: confirm size, units and base)",
          "example": "If a 'margin' comes out at 140%, you likely divided by cost and computed a markup instead.",
          "detail": "After multi-step work, confirm the answer is plausible: a margin cannot exceed 100%, a part cannot beat the whole, and re-read which base the question actually wants."
        }
      ]
    },
    {
      "heading": "Speed tricks & shortcuts",
      "items": [
        {
          "term": "Find 10% first, then scale to any percent",
          "formula": "10% = value / 10",
          "example": "10% of 340 = 34, so 30% = 3 x 34 = 102 and 70% = 7 x 34 = 238.",
          "trick": "Get 10% by moving the decimal one place left, then multiply by however many tens you need."
        },
        {
          "term": "Build 5% and 1% from 10%",
          "formula": "5% = 10% / 2;  1% = 10% / 10",
          "example": "On 340: 10% = 34, 5% = 17, 1% = 3.4, so 16% = 34 + 17 + 3.4 = 54.4.",
          "trick": "Any whole percent is a quick mix of 10s, 5s and 1s added together."
        },
        {
          "term": "'Of' means multiply",
          "formula": "A% of B = (A / 100) x B",
          "example": "25% of 80 = 0.25 x 80 = 20.",
          "trick": "It is reversible: 25% of 80 equals 80% of 25, so flip it if the other way is easier (80% of 25 = 20)."
        },
        {
          "term": "Increase or decrease with a multiplier",
          "formula": "+x% means value x (1 + x/100);  -x% means value x (1 - x/100)",
          "example": "+15% is x1.15 (200 -> 230); -20% is x0.80 (200 -> 160).",
          "trick": "One multiplication beats working out the change and then adding or subtracting it."
        },
        {
          "term": "Reverse a percentage (undo the multiplier)",
          "formula": "original = final / multiplier",
          "example": "After a 20% rise a price is 240, so original = 240 / 1.20 = 200.",
          "trick": "To strip a discount or rise, divide by the multiplier; never just add the percentage back on."
        },
        {
          "term": "Percentage points vs percent",
          "formula": "points = new% - old%  (subtract, do not divide)",
          "example": "A tax band moving 20% to 25% rises 5 percentage points but 25% in relative terms.",
          "trick": "If both numbers are already percentages, 'points' is a simple subtraction; 'percent change' divides by the start."
        },
        {
          "term": "Multiply by 5 the fast way",
          "formula": "x5 = (x10) / 2",
          "example": "68 x 5 = 680 / 2 = 340.",
          "trick": "Ten-times-then-halve is faster and cleaner than long multiplication by 5."
        },
        {
          "term": "Work backwards from the options and estimate",
          "formula": "(no formula: test and eliminate)",
          "example": "If 18% of 612 is asked, 10% is about 61 and 20% about 122, so the answer near 110 is the only sensible option.",
          "trick": "Round to easy numbers, bracket the true value, and bin any option that is the wrong order of magnitude."
        }
      ]
    },
    {
      "heading": "Fraction <-> percentage (worth memorising)",
      "items": [
        {
          "term": "1/2",
          "detail": "50%"
        },
        {
          "term": "1/3",
          "detail": "33.3% (recurring)"
        },
        {
          "term": "2/3",
          "detail": "66.7% (recurring)"
        },
        {
          "term": "1/4",
          "detail": "25%"
        },
        {
          "term": "3/4",
          "detail": "75%"
        },
        {
          "term": "1/5",
          "detail": "20%"
        },
        {
          "term": "2/5",
          "detail": "40%"
        },
        {
          "term": "3/5",
          "detail": "60%"
        },
        {
          "term": "4/5",
          "detail": "80%"
        },
        {
          "term": "1/8",
          "detail": "12.5%"
        },
        {
          "term": "3/8",
          "detail": "37.5%"
        },
        {
          "term": "5/8",
          "detail": "62.5%"
        },
        {
          "term": "1/10",
          "detail": "10%"
        },
        {
          "term": "1/20",
          "detail": "5%"
        }
      ]
    }
  ],
  "comp-verbal": [
    {
      "heading": "The Three Verdicts: True / False / Cannot Say",
      "items": [
        {
          "term": "Judge only from the passage, never from what you know",
          "detail": "Each statement must be decided using the passage as your only source of facts. Even if you are an expert on the topic, ignore outside knowledge, personal opinion, and 'common sense' assumptions. The test measures whether you can reason strictly from given text, so anything not on the page does not count as evidence."
        },
        {
          "term": "True = the passage proves it",
          "detail": "Choose True only when the statement follows directly from the text, either as a near-restatement or as something that must logically be the case given what is written. If proving the statement requires you to add a fact the passage never supplies, it is not True.",
          "example": "Passage: 'Every delivery in March arrived on time.' Statement: 'No March delivery was late.' This is just the same fact reworded, so it is True."
        },
        {
          "term": "False = the passage contradicts it",
          "detail": "Choose False only when the statement clashes head-on with something the passage actually states. There must be a real conflict, where the statement and the text cannot both be true at once.",
          "example": "Passage: 'The store is closed on Sundays.' Statement: 'The store is open every day of the week.' The text directly rules this out, so it is False."
        },
        {
          "term": "Cannot Say = the passage neither proves nor disproves it",
          "detail": "Choose Cannot Say when the passage does not give enough information to confirm or deny the statement, either because the point is never raised or because it is mentioned too vaguely to settle. Absence of information points to Cannot Say.",
          "trick": "Run the 'evidence test': can you point to the exact words that PROVE it (True) or the exact words that CONTRADICT it (False)? If you cannot point to either, the answer is Cannot Say."
        }
      ]
    },
    {
      "heading": "The Hardest Call: Cannot Say vs False",
      "items": [
        {
          "term": "Missing is not the same as wrong",
          "detail": "A statement you cannot confirm is not automatically False. False requires the passage to say something that conflicts with the statement. If the passage is simply silent on the point, the honest answer is Cannot Say.",
          "example": "Passage: 'The museum opens at 10am.' Statement: 'The museum closes at 5pm.' The closing time is never given, so it is Cannot Say, not False."
        },
        {
          "term": "Look for the active contradiction",
          "detail": "Before choosing False, find the specific sentence in the passage that the statement clashes with. If you cannot locate a direct conflict, downgrade your answer to Cannot Say.",
          "trick": "Ask one question: 'Does the passage actively say the opposite?' Yes points to False; merely 'it never mentions this' points to Cannot Say."
        },
        {
          "term": "Unstated causes, reasons, and 'because' claims",
          "detail": "Watch statements that explain WHY something happened. A passage can report an event without giving its cause, so any added reason is usually unsupported.",
          "example": "Passage: 'Profits rose in Q3.' Statement: 'Profits rose in Q3 because of the price cut.' The cause is never stated, so it is Cannot Say."
        },
        {
          "term": "Unstated comparisons and rankings",
          "detail": "Statements that rank items or compare two things need support for BOTH sides. If the passage gives a clear figure for each item, the comparison is provable; but if it gives only one side, you cannot rank and the answer is Cannot Say.",
          "example": "Passage: 'Team A sold 40 units.' Statement: 'Team A outsold Team B.' Team B's figure is missing, so it is Cannot Say."
        }
      ]
    },
    {
      "heading": "Scope Words Decide Everything (all / some / only / never)",
      "items": [
        {
          "term": "Compare the statement's scope word against the passage's",
          "detail": "Words like all, every, none, never, only, some, most, and sometimes set how broad a claim is. The single most reliable habit is to underline the scope word in both the statement and the matching passage line, then check whether they agree.",
          "trick": "Mismatched strength is a giant flag: passage says 'most' but statement says 'all', or passage says 'some' but statement says 'none'. These mismatches are usually Cannot Say or False, almost never True."
        },
        {
          "term": "Strong words (all, every, never, only) are easy to break, hard to prove",
          "detail": "A universal claim is True only if the passage covers every case, and it is False only if the passage names a clear exception. One counter-example is enough to make 'all' False.",
          "example": "Passage: 'Two managers missed the briefing.' Statement: 'All managers attended.' The two who missed are a direct exception, so it is False."
        },
        {
          "term": "'Most' does not justify 'all'",
          "detail": "If the passage says 'most' or 'many', a statement claiming 'all' is not supported, but neither is it contradicted, because some unnamed cases could still go either way.",
          "example": "Passage: 'Most staff passed the audit.' Statement: 'All staff passed the audit.' No exception is named and 'all' is not proven, so it is Cannot Say, not False."
        },
        {
          "term": "Soft words (some, most, sometimes) take little to support",
          "detail": "'Some' is satisfied by even a single case. This makes 'some' statements easy to mark True whenever the passage gives at least one instance.",
          "example": "Passage: 'Three of the ten branches reported a loss.' Statement: 'Some branches reported a loss.' Three counts as some, so it is True."
        }
      ]
    },
    {
      "heading": "Synonym-in-Context",
      "items": [
        {
          "term": "Read the whole sentence, not the lone word",
          "detail": "Most words carry several meanings, and only the surrounding sentence tells you which one is in play. Always see how the word actually functions in this context before choosing a match."
        },
        {
          "term": "Predict your own word before reading the options",
          "detail": "Cover the answer choices, then think of a simple word that would slot neatly into the sentence in place of the target word. Now look for the option closest to your prediction.",
          "trick": "Predicting first inoculates you against 'trap' options that are a common meaning of the word but wrong for this sentence. The familiar definition is often the bait."
        },
        {
          "term": "Substitute each option back in and read it aloud in your head",
          "detail": "Plug each candidate into the original sentence and check it still makes sense and keeps the same tone. The correct synonym should leave the sentence's meaning unchanged.",
          "example": "'The firm posted a marked improvement.' Here 'marked' means noticeable, so 'a noticeable improvement' fits, while 'a stained improvement' clearly does not."
        },
        {
          "term": "Match the tone (positive vs negative)",
          "detail": "Keep the same emotional charge as the original word. If the word praises (positive) or criticises (negative), the right synonym must carry that same flavour, which often eliminates two options instantly.",
          "trick": "Tag the target word as +, -, or neutral, then cross out any option with the wrong sign before comparing the survivors in detail."
        }
      ]
    },
    {
      "heading": "Finding a Stated Detail",
      "items": [
        {
          "term": "Scan for a distinctive keyword instead of re-reading",
          "detail": "Pick the most unusual word in the question, a name, number, date, or rare term, and let your eye hunt for it down the passage. This drops you onto the relevant line far faster than reading top to bottom.",
          "trick": "Numbers, capitalised names, and unusual nouns are the fastest anchors because they visually stand out from ordinary text."
        },
        {
          "term": "Read the sentence before and after the match",
          "detail": "The fact you need often sits just beside the keyword rather than on the exact line. Reading the neighbouring sentences gives the context needed to confirm or reject the option."
        },
        {
          "term": "Match the idea, not the vocabulary",
          "detail": "The correct answer usually paraphrases the passage, while tempting wrong answers reuse the passage's exact words but twist the meaning. Echoed wording is a warning sign, not a guarantee of correctness.",
          "example": "Passage: 'Sales grew despite higher costs.' Trap option: 'Sales grew because of higher costs.' It copies the words but flips the logic, so it is wrong."
        },
        {
          "term": "Verify numbers, names, and dates digit by digit",
          "detail": "Detail questions often turn on a single figure or label. Re-check the exact digit, unit, and spelling against the text rather than trusting your memory, since '15%' and '50%' or 'Mr Lee' and 'Ms Lee' are easy to swap."
        }
      ]
    },
    {
      "heading": "Pacing and Exam Technique",
      "items": [
        {
          "term": "Skim the questions before the long passage",
          "detail": "Glance at what is being asked first so you read the passage knowing which details to hunt for. Reading with a purpose stops you from going over the same text repeatedly.",
          "trick": "If you only have time for one pass, read the statements first, then read the passage once while ticking off each one as you reach the relevant line."
        },
        {
          "term": "Budget a fixed time per statement",
          "detail": "Divide total time by the number of statements and roughly hold to it. Flag any statement that overruns and come back once the easy marks are banked.",
          "example": "20 statements in 10 minutes is 600 / 20 = 30 seconds each, so anything past 45 seconds gets flagged and skipped for now."
        },
        {
          "term": "Never leave a blank when guessing is free",
          "detail": "If wrong answers carry no penalty, always commit to your best choice rather than leaving it empty. With three options, a pure guess on True/False/Cannot Say still scores about a third of the time, and an educated guess does better."
        },
        {
          "term": "Reset your mind between passages",
          "detail": "Each passage is its own sealed world. Do not carry a fact, name, or assumption from an earlier passage into the next; judge every statement only against the passage it belongs to."
        }
      ]
    }
  ],
  "comp-error": [
    {
      "heading": "Core comparison method",
      "items": [
        {
          "term": "Anchor on the original, not the copy",
          "detail": "Always treat the first record (the source) as the truth and check the re-entered version against it, never the other way around. If you keep switching which one you trust, your eye drifts and you miss errors. Read one field of the original, then jump straight to the same field in the copy, confirm or flag, then move on."
        },
        {
          "term": "Compare field-by-field, not record-by-record",
          "detail": "Line the two records up and check one field at a time across both copies before moving to the next field. Reading the whole original then the whole copy overloads your short-term memory and lets transpositions slip through. Going field-by-field keeps only one small chunk in your head at any moment.",
          "trick": "Cover everything except the single field you are checking with your finger or a card so your eye cannot wander to the next line."
        },
        {
          "term": "Flag every wrong field, not just the first",
          "detail": "Many questions ask you to select all mismatched fields, and a record can contain more than one error. Do not stop after spotting one difference. Scan all fields to the end every time, because the easy error is often a decoy placed before a subtler one."
        },
        {
          "term": "Check field count and order first",
          "detail": "Before comparing values, confirm both records have the same number of fields in the same order. A common error is a missing or duplicated field that shifts everything after it, making correct values look wrong. Spotting the shift first saves you from flagging knock-on mismatches."
        }
      ]
    },
    {
      "heading": "Decoding coded fields",
      "items": [
        {
          "term": "Decode the key before you compare",
          "detail": "When a field uses a coding key (for example a letter that stands for a department, or a digit that maps to a status), translate the code into its meaning first, then compare. Comparing raw codes you have not decoded means you cannot tell a typo from a legitimately different value.",
          "trick": "Write the decoded value lightly next to the code in your rough working so you are not re-reading the key for every single row."
        },
        {
          "term": "Build the code one segment at a time",
          "detail": "Many keys combine pieces, such as region + year + sequence number. Verify each segment against its own part of the key separately rather than reading the whole code as one blob. An error usually lives in just one segment, and isolating segments makes it jump out.",
          "example": "Code LD-24-007: check LD = London against the region table, 24 = 2024 against the year rule, 007 against the running sequence, as three separate checks."
        },
        {
          "term": "Watch for look-alike code characters",
          "detail": "Coding keys often mix letters and numbers, so the easy mistakes are O versus 0, I versus 1, S versus 5, and B versus 8. When a coded field looks right at a glance, slow down specifically on these pairs because the test writer plants errors exactly there."
        },
        {
          "term": "Re-use the key, do not re-memorise it",
          "detail": "The coding key stays on screen for a reason. Glance back at it for each lookup instead of trusting your memory after the first few rows. Memory drift on a code mapping is a leading cause of confident but wrong answers under time pressure."
        }
      ]
    },
    {
      "heading": "Numbers, dates and transpositions",
      "items": [
        {
          "term": "Read numbers right-to-left to catch transpositions",
          "detail": "A transposition is two adjacent digits swapped, like 1453 written as 1543. The total looks plausible and the number reads as roughly the same shape, so the swap hides on a quick scan. Checking digit positions from the right (units, tens, hundreds) forces you to compare each place value in turn and exposes the swap.",
          "example": "Original 1453 vs copy 1543: reading from the right, units 3=3, tens 5 vs 4, hundreds 4 vs 5, thousands 1=1, which cleanly isolates the swapped middle pair (the 4 and 5 changed places)."
        },
        {
          "term": "Chunk long numbers into groups",
          "detail": "Break a long string of digits into pairs or threes and compare chunk against chunk. The eye reliably handles two or three characters at once but smears a run of eight or more, which is where a single wrong or dropped digit hides.",
          "trick": "Group from the right so the chunks line up by place value: 30298471 becomes 30 29 84 71, then compare each pair."
        },
        {
          "term": "Check digit length before digit values",
          "detail": "A dropped or added digit (1450 vs 14500) is a different error from a wrong digit and is easy to miss because the leading digits match. Count the number of digits in both fields first; if the lengths differ, you already have a mismatch without reading every value.",
          "example": "1450 has 4 digits, 14500 has 5 digits, so the count alone flags the mismatch before you compare any values."
        },
        {
          "term": "Split dates into day, month, year",
          "detail": "Date errors usually sit in one component while the rest is correct, and swapped day/month (03/04 vs 04/03) is a classic plant. Compare the three parts separately and treat the separators as fixed, so a single-component error cannot blend in with a correct-looking whole.",
          "example": "12/06/2024 vs 12/09/2024: day 12 matches, month 06 vs 09 is the error, year 2024 matches, so only the month field is flagged."
        },
        {
          "term": "Mind decimal points, signs and currency symbols",
          "detail": "Treat the decimal position, a leading minus sign, and any currency or unit symbol as fields in their own right. 4.50 vs 45.0 and -12 vs 12 share every digit, so a digit-only scan passes them even though the values differ. Verify the symbol and the point position deliberately, not just the digits.",
          "example": "4.50 and 45.0 use the same digits 4, 5 and 0 but mean 4.5 versus 45, so the moved decimal point alone is the error."
        }
      ]
    },
    {
      "heading": "Text fields and final discipline",
      "items": [
        {
          "term": "Spot doubled and dropped letters in names",
          "detail": "Text errors cluster around double letters (Phillip with two L versus Philip with one), silent or swapped vowels, and dropped trailing letters. Read the word in syllables rather than as a shape, because your brain auto-corrects familiar-looking words and skips the very letter that changed."
        },
        {
          "term": "Treat spacing, case and punctuation as real differences",
          "detail": "If the task counts formatting, then an extra space, a lower-case versus upper-case letter, or a missing hyphen is a genuine mismatch. Decide up front whether the question cares about formatting and apply that rule consistently to every field."
        },
        {
          "term": "Keep a steady pace, do not re-read everything",
          "detail": "Error-checking is scored on speed and accuracy together. Check each field once, deliberately, and move on instead of looping back over fields you already cleared. Re-reading the whole record burns time and rarely surfaces a new error that a careful first pass missed.",
          "trick": "If two fields look identical after one careful look, accept it and move on; spend your saved seconds on the number and code fields where errors actually hide."
        },
        {
          "term": "When stuck, eliminate the clearly-correct fields first",
          "detail": "If you cannot immediately see the error, quickly clear the fields that obviously match to shrink the search. The remaining one or two fields are where the planted error must be, so you can give them your full attention instead of scanning everything equally."
        }
      ]
    }
  ],
  "exec-verbal": [
    {
      "heading": "The golden rule: only the passage counts",
      "items": [
        {
          "term": "The passage is your whole universe",
          "detail": "Judge every statement using only what the text actually says, even on a topic you know well. Real-world knowledge, common sense about how businesses behave, and your own judgement are all inadmissible. If the passage does not put it on the page, you cannot use it.",
          "trick": "Pretend you know nothing about the subject and are a lawyer who can only cite the document in front of you. If you catch yourself thinking 'well, in practice...', that thought is disqualified."
        },
        {
          "term": "Three verdicts, one test each",
          "detail": "True means the passage proves the statement. False means the passage contradicts the statement. Cannot Say means the passage does neither. Run the right test rather than going on a gut feeling about whether the statement sounds correct.",
          "trick": "Ask in order: Can I point to a line that proves it? (True). Can I point to a line that clashes with it? (False). If neither, stop looking and pick Cannot Say."
        },
        {
          "term": "Name the supporting line before you commit",
          "detail": "Before locking in True or False, silently quote the exact sentence that justifies it. A real True or False can always be tied to a specific clause. If you cannot put your finger on one line, you are inferring too far and the honest answer is Cannot Say.",
          "trick": "If your justification starts with 'it implies' or 'surely' rather than a near-direct quote, downgrade your answer to Cannot Say."
        },
        {
          "term": "Strip out the persuasion words",
          "detail": "Authors load passages with framing such as clearly, obviously, undeniably, leading, world-class, and best. These are opinion and tone, not facts. Mentally delete them and judge only the bare factual claim that survives.",
          "example": "'The firm is clearly the market leader' carries the same factual content as 'The firm is the market leader' plus an author opinion. Treat 'clearly' as decoration, not evidence."
        }
      ]
    },
    {
      "heading": "Stated vs implied vs assumed",
      "items": [
        {
          "term": "Separate the three carefully",
          "detail": "Stated means the words appear explicitly. Implied means it must logically follow from the words, with no gap. Assumed means the argument silently relies on it but never says it. Only stated and tightly implied claims can be True; an assumption the passage needs is not something you may treat as given.",
          "example": "Passage: 'The factory ran at full capacity all year.' Stated: it ran at full capacity. Implied (safe): it did not sit idle. Assumed (not given): demand was high enough to justify it, which you cannot mark True."
        },
        {
          "term": "Test an inference with the can-it-be-false check",
          "detail": "An inference is only safe when it cannot possibly be false while every line of the passage stays true. If you can imagine even one scenario where the whole passage holds yet the statement still fails, the inference is unsafe and the verdict moves toward Cannot Say.",
          "trick": "Try to break your own inference: invent a story consistent with the passage where the statement is false. Succeed, and the answer is Cannot Say. Fail every time, and it is genuinely implied."
        },
        {
          "term": "One safe step only, never a chain",
          "detail": "A legitimate inference is a single short hop directly forced by the text. The moment you need a second 'and therefore' to reach the statement, you have left what the passage guarantees and entered speculation.",
          "example": "Passage: 'All directors must hold shares.' Safe one-step: a non-shareholder is not a director. Unsafe chain: 'so the directors are personally wealthy', which adds facts the passage never gives."
        },
        {
          "term": "Plausible is not the same as proven",
          "detail": "Executive passages are written so that the most reasonable-sounding conclusion is often unproven. If reaching the answer relies on it being likely, sensible, or what a manager would normally do, that is your reasoning, not the passage's, so the answer is Cannot Say.",
          "trick": "Whenever a statement feels obviously right but you cannot quote a line, suspect a trap built specifically to punish 'plausible'. Default to Cannot Say."
        }
      ]
    },
    {
      "heading": "Unverified claims map to Cannot Say",
      "items": [
        {
          "term": "A target or forecast is not an outcome",
          "detail": "If the passage says the company aims to, plans to, expects to, or is projected to do something, you only know the plan exists, not that it happened or will happen. Statements about the result are Cannot Say even when the plan sounds certain to succeed.",
          "example": "Passage: 'The board aims to cut costs 15% next year.' True: a cost-cutting aim exists. Cannot Say: costs will fall, or did fall, by 15%."
        },
        {
          "term": "Attributed opinions prove only that the opinion was held",
          "detail": "When the text reports that a person believes, argues, claims, or predicts something, the fact established is that they hold that view. Whether the view is correct is a separate matter the passage usually does not settle.",
          "example": "Passage: 'The CFO believes demand will recover.' True: the CFO holds that belief. Cannot Say: demand will recover."
        },
        {
          "term": "Watch tense and certainty markers, they decide the verdict",
          "detail": "Will, would, could, may, expects to, is projected to, and hopes to all signal an unrealised future or a hedge, which usually means Cannot Say about the outcome. Has, did, reported, recorded, and rose signal a confirmed event, which can support True.",
          "trick": "Underline the main verb of the statement and of the supporting line. If either is a future or hedging verb but the question asks about a settled fact, lean Cannot Say."
        },
        {
          "term": "Correlation in the text is not causation",
          "detail": "If two things moved together, the passage has not told you one caused the other unless it explicitly states the link. Any answer that rewrites a co-occurrence as a cause-and-effect is Cannot Say.",
          "example": "Passage: 'Sales and ad spend both rose in Q3.' Cannot Say: the higher ad spend caused the sales rise, since the passage never claims the connection."
        }
      ]
    },
    {
      "heading": "Quantifier, scope, and comparison traps",
      "items": [
        {
          "term": "Some is not all, and most is not every",
          "detail": "A soft quantifier in the passage cannot support a hard claim in the statement. If the text says most regions grew, a claim about a particular named region growing is Cannot Say, because most leaves room for exceptions you cannot rule out.",
          "example": "Passage: 'Most divisions returned a profit.' Statement: 'The logistics division returned a profit.' Verdict: Cannot Say, since logistics could be one of the loss-makers."
        },
        {
          "term": "All, none, always, only and never are easy to over-read",
          "detail": "A universal word in the answer demands universal support in the passage. A single supporting example never justifies always or every, and the mere absence of a stated exception never proves none or never.",
          "trick": "Circle every absolute word in the statement. For each one ask: does the passage cover literally every case? If even one case is uncovered, it is not True."
        },
        {
          "term": "Match the scope: who, where, and when",
          "detail": "A fact about one division does not transfer to the whole company, a fact about one quarter does not cover the full year, and a fact about one market does not extend to all markets. Check that the subject and the boundaries of the statement line up exactly with the passage.",
          "example": "Passage: 'European sales rose in Q1.' Statement: 'Sales rose in Q1.' Verdict: Cannot Say, because the global figure could fall even while Europe rises."
        },
        {
          "term": "Relative is not absolute",
          "detail": "A higher growth rate does not mean a higher absolute amount, a bigger market share does not mean a bigger total, and a percentage is not a volume or a sum of money. Do not silently convert a proportion into a quantity, or the reverse.",
          "example": "Passage: 'Brand A grew 40%, Brand B grew 10%.' Statement: 'Brand A sold more units than Brand B.' Verdict: Cannot Say, because A could have grown fast from a tiny base."
        }
      ]
    },
    {
      "heading": "Cannot Say vs False: the hardest call",
      "items": [
        {
          "term": "False needs an active clash, not silence",
          "detail": "Mark False only when the statement and the passage make claims that cannot both be true. If the passage simply never addresses the point, that is missing information, which is Cannot Say, not False.",
          "example": "Passage: 'The office opens at 8am.' Statement: 'The office closes at 5pm.' Closing time is never mentioned, so the verdict is Cannot Say, not False."
        },
        {
          "term": "A direct contradiction is genuinely False",
          "detail": "When the statement describes the same point as the passage but in a conflicting way, choose False with confidence. There must be a head-on collision between the two on the same fact.",
          "example": "Passage: 'Every site passed the audit.' Statement: 'One site failed the audit.' These cannot both hold, so the verdict is False."
        },
        {
          "term": "Use the flip test to tell them apart",
          "detail": "Ask whether the passage asserts the opposite of the statement. If yes, it is False. If the passage is merely quiet on the matter, it is Cannot Say. The dividing line is contradiction versus absence.",
          "trick": "Say out loud 'the passage actually states the reverse'. If you can finish that sentence with a real quote, it is False. If you cannot, it is Cannot Say."
        },
        {
          "term": "Unstated reasons, rankings, and comparisons lean Cannot Say",
          "detail": "If the statement adds a cause, a best/worst ranking, or a comparison the passage never makes, you usually cannot mark it False because the passage has not denied it either. The safe verdict is Cannot Say unless the text explicitly rules it out.",
          "example": "Passage: 'Output rose after the new line opened.' Statement: 'The new line was the most productive in the company.' Verdict: Cannot Say, since no ranking is given."
        }
      ]
    },
    {
      "heading": "Caveats, conditionals, and connectors",
      "items": [
        {
          "term": "Conditionals only fire when the condition is met",
          "detail": "An if-then claim tells you nothing until you know the if-part is satisfied. If the passage says profits rise if the merger closes, you cannot claim profits rose unless the text also confirms the merger closed.",
          "trick": "For any if-then, find and verify the condition first. No confirmed condition means no confirmed result, which is Cannot Say."
        },
        {
          "term": "Affirm the antecedent, never the consequent",
          "detail": "From 'if A then B', knowing A is true lets you conclude B. But knowing B is true does not let you conclude A, and knowing A is false tells you nothing about B. Reversing or negating a conditional is a classic trap.",
          "example": "Passage: 'If the bid succeeds, the team expands.' Statement: 'The team expanded, so the bid succeeded.' Verdict: Cannot Say, because the team could expand for another reason."
        },
        {
          "term": "Honour the caveats: however, except, despite, unless",
          "detail": "These words carve out exceptions that frequently flip an answer. Read the entire sentence, because a second clause may withdraw exactly what the first clause appeared to grant.",
          "example": "Passage: 'All branches met target, except the two opened last month.' Statement: 'All branches met target.' Verdict: False, because the exception is explicit."
        },
        {
          "term": "Necessary is not sufficient",
          "detail": "Required for does not mean guarantees. If regulatory approval is necessary for launch, having approval does not prove a launch happened, because other conditions might still be unmet. Treat the outcome as Cannot Say unless the text confirms it.",
          "trick": "Swap 'X is needed for Y' with 'X alone makes Y happen' in your head. If that sounds wrong, you are facing a necessary-not-sufficient trap and the result is Cannot Say."
        }
      ]
    },
    {
      "heading": "Synonyms and precise word meaning in context",
      "items": [
        {
          "term": "Read the whole sentence, not just the target word",
          "detail": "A word's meaning shifts with its surroundings, and executive passages exploit secondary meanings. Work out how the word functions in this exact sentence before reaching for a synonym.",
          "example": "In 'the firm posted a marked improvement', marked means noticeable, not stained or labelled, so 'a noticeable improvement' is the right fit."
        },
        {
          "term": "Predict your own word first, then match",
          "detail": "Cover the options and think of a word that would slot into the sentence with the same meaning and tone. Then pick the option closest to your prediction. This stops a familiar but wrong option from luring you.",
          "trick": "If your predicted word appears almost verbatim among the options, it is very likely the answer; verify by substitution and move on."
        },
        {
          "term": "Substitute each candidate back in",
          "detail": "Plug the option into the original sentence and confirm the meaning, grammar, and tone all still hold. The correct synonym leaves the sentence saying the same thing; a near-synonym usually shifts the meaning or the register.",
          "example": "For 'a robust set of controls', test each option in place: 'a strong set of controls' fits, 'a rude set of controls' does not."
        },
        {
          "term": "Match positive or negative tone",
          "detail": "Keep the emotional charge of the original word. If it praises, the synonym must praise; if it criticises, the synonym must criticise. A word with the right dictionary meaning but the wrong tone is a trap.",
          "example": "Frugal and stingy both mean spending little, but frugal is approving and stingy is critical, so they are not interchangeable in a complimentary sentence."
        }
      ]
    },
    {
      "heading": "Process and pacing under time pressure",
      "items": [
        {
          "term": "Read the question first, then scan for the clause",
          "detail": "Read the statement before the long passage so you know exactly what you are hunting for, then scan the text for the specific clause it depends on. This turns a slow full read into a fast targeted search and stops you re-reading the passage many times.",
          "trick": "Pull one distinctive keyword from the statement (a name, number, date, or unusual term) and scan for it to jump straight to the relevant lines."
        },
        {
          "term": "Read one line either side of your match",
          "detail": "The decisive wording often sits just before or after the keyword rather than on the same line. Reading the neighbouring sentences captures the caveat or qualifier that changes the verdict."
        },
        {
          "term": "Judge each statement independently",
          "detail": "Do not let a previous True or False sway the next item, and do not assume the answers are evenly split across the three verdicts. Each statement stands or falls only against the passage, so a run of three Cannot Says is perfectly possible.",
          "trick": "If you find yourself thinking 'I have had too many Cannot Says already', ignore that feeling entirely; pattern-balancing is a guessing habit, not reasoning."
        },
        {
          "term": "Beware the tempting paraphrase",
          "detail": "Wrong options frequently restate the passage almost faithfully but swap a quantifier, widen the scope, harden a forecast into a fact, or reverse a conditional. Compare the answer word by word against the source clause before trusting a near-match.",
          "example": "Passage: 'sales may rise in some markets'. A trap statement reads 'sales will rise in all markets', changing may to will and some to all; both edits make it Cannot Say at best."
        },
        {
          "term": "Reset between passages and guess when unpenalised",
          "detail": "Treat each passage as a fresh, self-contained world and carry no facts from an earlier one into the next. Where wrong answers are not penalised, never leave a blank, since a reasoned guess can score while a blank cannot.",
          "trick": "If a single item is eating your time, mark your best verdict (often Cannot Say for anything you cannot pin to a line), flag it, and return only if time remains."
        }
      ]
    }
  ],
  "exec-abstract": [
    {
      "heading": "How abstract questions work",
      "items": [
        {
          "term": "What the test actually measures",
          "detail": "Abstract (diagrammatic) reasoning shows you shapes with no words or numbers. A hidden rule governs how they relate. Your job is to spot the rule, then either continue the pattern (next-in-series) or find the figure that breaks it (odd-one-out). It rewards spotting structure quickly, not knowledge."
        },
        {
          "term": "Next-in-series vs odd-one-out",
          "detail": "In next-in-series, the figures change step by step in a fixed direction, and you pick the one that comes next. In odd-one-out, every figure obeys the same rule except one, and you pick the rule-breaker. Same skill, different question: one asks 'what continues?', the other asks 'what disagrees?'."
        },
        {
          "term": "Only the change carries the rule",
          "detail": "Most of what you see is decoration designed to distract you. The signal lives in whatever is moving, growing, rotating, or appearing across the figures. Train yourself to ignore the parts that stay identical and lock onto the parts that differ.",
          "trick": "Before analysing, ask yourself one question: 'What is different between frame 1 and frame 2?' That single difference is usually the whole rule."
        }
      ]
    },
    {
      "heading": "The attribute checklist (scan in this order)",
      "items": [
        {
          "term": "1. Rotation",
          "detail": "Is a shape or pointer turning? Look for a consistent step such as a 45 or 90 degree turn each frame, and a consistent direction (clockwise or anticlockwise). An arrow, hand, or single notch on a shape is the giveaway.",
          "trick": "Pick one clear marker (an arrow tip or a corner) and track only that point around the figure. If it moves a fixed angle each step, rotation is your rule."
        },
        {
          "term": "2. Reflection",
          "detail": "Is a shape flipped rather than turned? A reflection is a mirror image: a tilted L becomes a backwards L. The tell is that the shape looks reversed and cannot be produced by simply spinning it.",
          "trick": "If a shape has handedness (like the letter F or R), reflection flips it to its mirror twin while rotation keeps it the same shape pointing elsewhere. Asking 'could I spin it to get this?' separates the two: if no, it was reflected."
        },
        {
          "term": "3. Count",
          "detail": "How many objects, dots, sides, or lines are there? Counts often follow a sequence: +1 each frame, doubling, or a number tied to another feature (such as dots equal to the number of sides).",
          "trick": "Write the counts as a quick number list (2, 3, 4, ...). A clean arithmetic step jumps out instantly, and lists are easier to extend than pictures."
        },
        {
          "term": "4. Shading / fill",
          "detail": "Check colour and fill state: black, white, grey, striped, dotted. Shading can toggle on and off each frame, rotate around a set of shapes, or correlate with another attribute (for example, big shapes are always filled).",
          "trick": "Treat fill as its own on/off switch and read just that across the row. An alternating black-white-black-white rhythm is a common, easily missed rule."
        },
        {
          "term": "5. Size",
          "detail": "Are shapes growing, shrinking, or alternating large and small? Size may scale steadily, or one element may grow while another shrinks in mirror (an inverse relationship)."
        },
        {
          "term": "6. Shape / shape-cycle",
          "detail": "Does the shape type itself change (circle to square to triangle)? Often the shapes cycle through a fixed repeating set, so the next one is predictable once you find where the loop restarts.",
          "trick": "If shapes repeat in a loop of length N, divide the position by N and use the remainder: remainder 1 is the first shape, remainder 2 the second, and a remainder of 0 means the last shape. Example: position 7 in a 3-shape cycle gives 7 divided by 3 = remainder 1, so it matches position 1."
        },
        {
          "term": "7. Position / movement",
          "detail": "Does an element travel around the frame: corner to corner, or one step clockwise each time? Movement around a square's four corners or a circle's edge is extremely common and easy to verify."
        },
        {
          "term": "8. Add / remove",
          "detail": "Is an element appearing or disappearing each frame? Lines, dots, or whole shapes may accumulate (added one per step) or be stripped away. This overlaps with count but focuses on which specific element changed."
        }
      ]
    },
    {
      "heading": "The fast method (find, form, test)",
      "items": [
        {
          "term": "Step 1: Find what changes",
          "detail": "Run the eight-item checklist across the figures and note every attribute that is NOT constant. Mentally subtract everything identical; whatever remains is your candidate rule (or rules).",
          "trick": "Compare only the first two figures first. Most rules reveal themselves in that single jump, and you confirm on the rest rather than analysing all of them at once."
        },
        {
          "term": "Step 2: Form one rule",
          "detail": "Turn the change into a precise sentence with a direction and a step size, for example 'rotates 90 degrees clockwise AND gains one dot each frame'. A vague 'it changes' is not testable; a precise rule is.",
          "trick": "If two things change at once, treat them as separate parallel rules and solve each independently, then combine. Many items deliberately layer two simple rules to look hard."
        },
        {
          "term": "Step 3: Test against ALL figures",
          "detail": "A real rule must hold for every figure, not just the two you started with. Apply it to each frame; if even one breaks it, your rule is wrong or incomplete, so refine and retest.",
          "trick": "For next-in-series, project your rule one step forward and look for that exact figure in the options before reading them all. For odd-one-out, the figure that fails your confirmed rule is the answer."
        },
        {
          "term": "Eliminate from the options",
          "detail": "When unsure, work backward from the answer choices. Use each attribute as a filter and discard every option that violates it. Often three options die immediately, leaving the answer with little extra effort.",
          "trick": "Knock out options on the single most obvious attribute first (such as fill or count). One pass on one feature frequently removes most of the field."
        },
        {
          "term": "Watch for distractors",
          "detail": "Test writers add irrelevant variety: shapes that change in ways unrelated to the rule, or symmetry that looks meaningful but is just noise. If a feature changes randomly with no consistent step, it is bait, so ignore it.",
          "trick": "If a candidate rule has no consistent direction or step size, it is almost certainly a distractor. Real rules are regular; noise is not."
        },
        {
          "term": "Pace and move on",
          "detail": "These items reward speed. If a rule does not surface in roughly 30 to 40 seconds, lock in your best elimination-based guess, flag it, and continue. Time spent stuck on one hard pattern costs you several easy marks later."
        }
      ]
    }
  ]
};

if (typeof window !== "undefined") window.STUDY = STUDY;
if (typeof module !== "undefined" && module.exports) module.exports = STUDY;
