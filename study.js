/* Study guide content (original): step-by-step formulas, examples, shortcuts. EN + AR. */

const STUDY = {
  "en": {
    "comp-numerical": [
      {
        "heading": "Core formulas",
        "items": [
          {
            "term": "Percentage of a total (share)",
            "formula": "share % = (part / whole) x 100",
            "steps": [
              "Find the part (the smaller bit you care about) and the whole (the full total).",
              "Divide the part by the whole; this gives a decimal less than 1.",
              "Multiply that decimal by 100 to turn it into a percentage.",
              "Write a % sign after the answer."
            ],
            "example": "A team sold 18 of the company's 72 total sales. Step 1: part = 18, whole = 72. Step 2: 18 / 72 = 0.25. Step 3: 0.25 x 100 = 25. So the team made 25% of sales.",
            "trick": "If the part divides neatly into the whole, spot the fraction first: 18/72 = 1/4 = 25%, no calculator needed."
          },
          {
            "term": "Percentage change (increase)",
            "formula": "% change = (new - old) / old x 100",
            "steps": [
              "Take the new (later) value and subtract the old (starting) value; this is how much it went up.",
              "Divide that rise by the OLD value, never the new one.",
              "Multiply by 100 to get a percentage.",
              "A positive answer means it grew."
            ],
            "example": "Price rises from 40 to 50. Step 1: 50 - 40 = 10. Step 2: 10 / 40 = 0.25. Step 3: 0.25 x 100 = 25. So it rose by +25%.",
            "trick": "The change goes on top, the starting value goes on the bottom. Always divide by where you started."
          },
          {
            "term": "Percentage change (decrease)",
            "formula": "% change = (new - old) / old x 100  (answer is negative)",
            "steps": [
              "Subtract the old value from the new value; for a drop this comes out negative.",
              "Divide that result by the OLD (starting) value.",
              "Multiply by 100; the minus sign tells you it fell.",
              "You can ignore the minus sign and just say it fell by that many percent."
            ],
            "example": "Visitors fall from 500 to 400. Step 1: 400 - 500 = -100. Step 2: -100 / 500 = -0.2. Step 3: -0.2 x 100 = -20. So it fell by 20%.",
            "trick": "A fall and the rise back are NOT equal: 500 to 400 is -20%, but 400 back to 500 is +25% because the starting value is smaller."
          },
          {
            "term": "Applying a forward % change",
            "formula": "new = old x (1 +/- change as a decimal)",
            "steps": [
              "Turn the percent into a decimal by dividing by 100 (15% becomes 0.15).",
              "For an increase, add it to 1 (1 + 0.15 = 1.15). For a decrease, take it away from 1 (1 - 0.15 = 0.85).",
              "Multiply the starting value by that multiplier.",
              "The answer already includes the change; do not add anything else."
            ],
            "example": "Increase 80 by 15%. Step 1: 15% = 0.15. Step 2: 1 + 0.15 = 1.15. Step 3: 80 x 1.15 = 92. (To decrease 80 by 15%: 80 x 0.85 = 68.)",
            "trick": "Make the multiplier once instead of finding the part and adding it on separately; it saves a whole step."
          },
          {
            "term": "Ratio: form and read",
            "formula": "ratio = a : b  (same unit, kept in order)",
            "steps": [
              "Make sure both amounts are in the same unit before you compare them.",
              "Write the first thing named, then a colon, then the second thing named.",
              "Keep the items in the exact order the question lists them.",
              "A ratio compares the parts to each other, not to the total."
            ],
            "example": "There are 12 cats and 8 dogs. Written in the order 'cats to dogs', the ratio is 12 : 8.",
            "detail": "A ratio shows how sizes compare, not how big the whole is. Watch the order of the names and make units match (e.g. both in grams) before writing it."
          },
          {
            "term": "Ratio: simplify",
            "formula": "divide every part by the same number",
            "steps": [
              "Look for a number that divides into every part of the ratio exactly.",
              "Divide each part by that number.",
              "Repeat if the parts still share a common factor.",
              "Stop when no single number (other than 1) divides them all."
            ],
            "example": "Simplify 12 : 8. Both divide by 4: 12 / 4 = 3 and 8 / 4 = 2. So 12 : 8 = 3 : 2.",
            "trick": "If all parts are even, just keep halving: 12 : 8 becomes 6 : 4 becomes 3 : 2. You reach simplest form without hunting for the biggest factor."
          },
          {
            "term": "Ratio: split a total",
            "formula": "one part = total / (sum of ratio numbers), then x each share",
            "steps": [
              "Add up the numbers in the ratio to find how many parts there are in total.",
              "Divide the total amount by that sum; this is the value of one part.",
              "Multiply that one-part value by each number in the ratio.",
              "Check the results add back up to the original total."
            ],
            "example": "Split 200 in the ratio 3 : 2. Step 1: 3 + 2 = 5 parts. Step 2: 200 / 5 = 40 per part. Step 3: 3 x 40 = 120 and 2 x 40 = 80. Check: 120 + 80 = 200.",
            "trick": "Always add your answers back together. If they don't make the total, you divided by the wrong number."
          },
          {
            "term": "Average (mean)",
            "formula": "mean = sum of values / how many values",
            "steps": [
              "Add up all the values to get one total.",
              "Count how many values there are.",
              "Divide the total by that count.",
              "The answer is the average."
            ],
            "example": "Find the mean of 4, 8, 6, 2. Step 1: 4 + 8 + 6 + 2 = 20. Step 2: there are 4 values. Step 3: 20 / 4 = 5. The mean is 5.",
            "trick": "To find a missing value when the mean is given, do mean x count to get the total needed, then subtract the values you already have."
          },
          {
            "term": "Fraction to percentage",
            "formula": "% = (top / bottom) x 100",
            "steps": [
              "Divide the top number of the fraction by the bottom number.",
              "You get a decimal (something less than 1 for a normal fraction).",
              "Multiply that decimal by 100.",
              "Add a % sign."
            ],
            "example": "Turn 3/8 into a percentage. Step 1: 3 / 8 = 0.375. Step 2: 0.375 x 100 = 37.5. So 3/8 = 37.5%.",
            "trick": "If the bottom divides into 100, scale instead: 3/8, and 100 / 8 = 12.5, so 3 x 12.5 = 37.5%."
          },
          {
            "term": "Percentage difference between two values",
            "formula": "% difference = (larger - smaller) / starting value x 100",
            "steps": [
              "Spot the starting value: it is the one after the word 'than' (the thing you measure FROM).",
              "Subtract the smaller value from the larger to get the gap between them.",
              "Divide that gap by the starting value (the 'than' value), NOT by the other one.",
              "Multiply by 100 to turn it into a percentage."
            ],
            "example": "How much bigger is 75 than 60? The starting value is 60 (it comes after 'than'). Step 1: 75 - 60 = 15. Step 2: 15 / 60 = 0.25. Step 3: 0.25 x 100 = 25%.",
            "trick": "'How much bigger is B than A' divides by A. The value after 'than' goes on the bottom every time."
          },
          {
            "term": "Reading tables and charts",
            "formula": "value = the row label crossed with the column label",
            "steps": [
              "Read the title, the units (is it %, thousands, pounds?) and the scale before doing any maths.",
              "Find the row that matches what's asked, then slide across to the right column.",
              "For a bar or line, read where it lines up against the marked gridlines.",
              "Use only the figure asked about and ignore the other rows put there to distract you."
            ],
            "example": "A bar sits exactly halfway between gridlines marked 200 and 300, so it reads 250.",
            "detail": "Most chart questions test careful reading, not hard maths. Check the scale and units first, and don't assume gridlines go up in 1s; they often jump in 10s, 100s or 1000s."
          }
        ]
      },
      {
        "heading": "Speed tricks & shortcuts",
        "items": [
          {
            "term": "Find 10% first, then scale",
            "detail": "10% is easy: just move the decimal point one place to the left. Then multiply that 10% to build the percent you actually need.",
            "steps": [
              "Move the decimal one place left to get 10% of the number.",
              "Decide how many tens of percent you need (30% is three lots of 10%).",
              "Multiply your 10% value by that count."
            ],
            "example": "10% of 240 = 24. For 30%: 24 x 3 = 72. For 70%: 24 x 7 = 168.",
            "trick": "Build any 'round' percent from 10% blocks instead of multiplying by an awkward decimal."
          },
          {
            "term": "5% = half of 10%, 1% = a tenth of 10%",
            "detail": "Once you know 10%, halve it for 5% and divide it by 10 for 1%, then add the pieces together.",
            "steps": [
              "Find 10% by moving the decimal one place left.",
              "Halve that for 5%.",
              "Divide the 10% by 10 to get 1%.",
              "Add the blocks you need to make the exact percent."
            ],
            "example": "10% of 240 = 24, so 5% = 12 and 1% = 2.4. Then 16% = 10% + 5% + 1% = 24 + 12 + 2.4 = 38.4.",
            "trick": "Assemble odd percents like 17% or 23% from 10% + 5% + 1% chunks."
          },
          {
            "term": "'of' means multiply",
            "detail": "Any time a question says 'X% of Y' or 'a fraction of Y', you can swap the word 'of' for a times sign.",
            "steps": [
              "Turn the percent or fraction into a decimal (20% = 0.2, 3/5 = 0.6).",
              "Replace the word 'of' with a multiply sign.",
              "Multiply the two numbers together."
            ],
            "example": "20% of 90 = 0.2 x 90 = 18. And 3/5 of 45 = 0.6 x 45 = 27.",
            "trick": "There's no extra step; once 'of' becomes 'x', it's a single multiplication."
          },
          {
            "term": "Increase / decrease with a multiplier",
            "detail": "Add the percent to 1 for an increase, take it off 1 for a decrease, then multiply just once.",
            "steps": [
              "Write the percent as a decimal (15% = 0.15).",
              "Add to 1 for a rise (1.15) or subtract from 1 for a fall (0.85).",
              "Multiply the starting number by that multiplier."
            ],
            "example": "+15%: 200 x 1.15 = 230. -20%: 200 x 0.8 = 160.",
            "trick": "Two changes in a row just multiply: +10% then -10% = 1.1 x 0.9 = 0.99, a net 1% loss, not back to where you started."
          },
          {
            "term": "Reverse a percentage (find the original)",
            "formula": "original = final / multiplier",
            "steps": [
              "Work out the multiplier that was used (a 15% rise was x1.15, a 20% cut was x0.8).",
              "Take the final value you were given.",
              "Divide the final value by that multiplier.",
              "The answer is the original amount before the change."
            ],
            "example": "A price is 92 after a 15% rise. 92 / 1.15 = 80, the original price. (After a 20% cut to 160: 160 / 0.8 = 200.)",
            "trick": "Never just subtract 15% off the new price; that gives the wrong answer. Dividing by the multiplier undoes the change exactly."
          },
          {
            "term": "Percentage POINTS vs percent",
            "detail": "Moving from 20% to 25% is a rise of 5 percentage POINTS, but a 25% relative increase. They are two different things, so read the wording carefully.",
            "steps": [
              "If the question says 'points', simply subtract one percent from the other.",
              "If it says 'percent change' or 'how much did it rise', use (new - old) / old x 100.",
              "Match your method to the exact word used."
            ],
            "example": "20% to 25%: that's 25 - 20 = 5 percentage points. As a relative change it's (25 - 20) / 20 x 100 = +25%.",
            "trick": "'Points' = subtract. 'Percent change' = divide by the starting value."
          },
          {
            "term": "Multiply by 5 = x10 then halve",
            "detail": "Multiplying by 5 is the same as multiplying by 10 and taking half. To divide by 5, double the number then divide by 10.",
            "steps": [
              "To multiply by 5: multiply by 10 (add a zero or shift the decimal), then halve.",
              "To divide by 5: double the number first, then divide by 10.",
              "Use whichever direction the question needs."
            ],
            "example": "68 x 5: 68 x 10 = 680, then 680 / 2 = 340. And 340 / 5: 340 x 2 = 680, then 680 / 10 = 68.",
            "trick": "Same idea for 25: x25 = x100 then divide by 4. So 32 x 25 = 3200 / 4 = 800."
          },
          {
            "term": "Estimate and eliminate from the options",
            "detail": "In a multiple-choice test you don't always need the exact answer; a rough figure can rule out the wrong options instantly.",
            "steps": [
              "Round the numbers to easy values and do the sum in your head.",
              "Compare your rough answer to the options.",
              "Cross out any option that is clearly too big or too small.",
              "Only do the exact calculation if two options are still close."
            ],
            "example": "19% of 412? Round to 20% of 400 = 80. If the options are 12, 78 and 150, only 78 is near 80, so pick it.",
            "trick": "Also sanity-check direction: an 'increase' answer must be bigger than the start; a 'share' must be less than the whole."
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
            "detail": "about 33.3% (a third)"
          },
          {
            "term": "2/3",
            "detail": "about 66.7% (two thirds)"
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
            "steps": [
              "Turn the percent into a decimal by dividing it by 100 (so 18% becomes 0.18).",
              "Multiply that decimal by the whole number you were given.",
              "The answer is the size of that slice of the whole."
            ],
            "example": "18% of 4,500: 18 / 100 = 0.18, then 0.18 x 4,500 = 810.",
            "trick": "Build it from easy blocks: 10% of 4,500 is 450 and 1% is 45. So 18% = 450 + 45 + 45 + 45 + 45 + 45 + 45 + 45 + 45 = 810. Quicker still: 20% is 900, then take away 2% (which is 90) to land on 810."
          },
          {
            "term": "Percentage change (up or down)",
            "formula": "% change = ((new - old) / old) x 100",
            "steps": [
              "Subtract the OLD value from the NEW value to get the gap (a minus answer means it fell).",
              "Divide that gap by the OLD (starting) value.",
              "Multiply by 100 to turn it into a percentage."
            ],
            "example": "Sales go from 250 to 320: 320 - 250 = 70, then 70 / 250 = 0.28, then x 100 = 28% increase.",
            "trick": "Always divide by the OLD number, never the new one. The gap goes on top."
          },
          {
            "term": "Reverse percentage (find the original)",
            "formula": "original = final / (1 + percent/100)   [use (1 - percent/100) for a fall]",
            "steps": [
              "Decide the multiplier: a 15% rise means 1.15; a 15% fall means 0.85.",
              "Divide the final figure by that multiplier.",
              "The answer is the value you started with before the change."
            ],
            "example": "138 already includes a 15% rise: multiplier is 1.15, so 138 / 1.15 = 120.",
            "trick": "Never just subtract the percentage from the final figure. Divide by the multiplier to undo the change exactly."
          },
          {
            "term": "Ratio sharing",
            "formula": "share = total x (your part / sum of all parts)",
            "steps": [
              "Add up all the numbers in the ratio to get the total number of parts.",
              "Divide the total amount by that number of parts to find what one part is worth.",
              "Multiply that one-part value by each ratio number to get each share.",
              "Check the shares add back up to the original total."
            ],
            "example": "Split 60,000 in ratio 3:2:1. Parts add to 6, so one part = 60,000 / 6 = 10,000. Shares = 30,000, 20,000 and 10,000 (which sum to 60,000).",
            "trick": "Find one part first, then just multiply each ratio number by it."
          },
          {
            "term": "Unit rate / unitary method",
            "formula": "per-unit value = total / number of units, then scale up",
            "steps": [
              "Divide the total by the number of units to find the value of one unit.",
              "Multiply that one-unit value by the new number of units the question asks about."
            ],
            "example": "7 machines make 1,400 units, so 1 machine makes 1,400 / 7 = 200. Then 12 machines make 200 x 12 = 2,400.",
            "trick": "Always get to the value of one first, then multiply up to whatever number you need."
          },
          {
            "term": "Simple average (mean)",
            "formula": "mean = sum of values / count of values",
            "steps": [
              "Add all the values together.",
              "Count how many values there are.",
              "Divide the total by that count."
            ],
            "example": "Profits 40, 55, 70, 35: total = 200, count = 4, so 200 / 4 = 50.",
            "trick": "The mean must land between the smallest and largest value, so glance at the range to sense-check."
          }
        ]
      },
      {
        "heading": "Profit, margin and cost",
        "items": [
          {
            "term": "Profit",
            "formula": "profit = revenue - cost",
            "steps": [
              "Find the total money coming in (revenue).",
              "Find the total money going out (cost).",
              "Subtract cost from revenue. A minus answer means a loss."
            ],
            "example": "Revenue 850,000 and cost 610,000: profit = 850,000 - 610,000 = 240,000.",
            "trick": "If several cost lines are listed, add them all up first, then do one subtraction."
          },
          {
            "term": "Profit margin (as a percentage of sales)",
            "formula": "profit margin = (profit / revenue) x 100",
            "steps": [
              "Work out the profit first (revenue minus cost) if you are not given it.",
              "Divide the profit by the revenue.",
              "Multiply by 100 to make it a percentage."
            ],
            "example": "Profit 240,000 on revenue 850,000: 240,000 / 850,000 = 0.282, then x 100 = 28.2%.",
            "trick": "Margin always divides by revenue (the bigger number), so a sensible margin can never be above 100%. If it is, you divided by the wrong figure."
          },
          {
            "term": "Markup vs margin (do not confuse them)",
            "formula": "markup = (profit / cost) x 100",
            "steps": [
              "Work out the profit (revenue minus cost).",
              "For markup, divide profit by COST; for margin, divide profit by REVENUE.",
              "Multiply by 100."
            ],
            "example": "Profit 240,000 on cost 610,000: 240,000 / 610,000 = 0.393, x 100 = 39.3% markup, which is higher than the 28.2% margin on the same numbers.",
            "trick": "Markup divides by cost, margin divides by revenue. On a profit, markup is always the larger of the two."
          },
          {
            "term": "Gross profit and gross margin",
            "formula": "gross profit = revenue - COGS;  gross margin = (gross profit / revenue) x 100",
            "steps": [
              "Subtract the cost of goods sold (COGS) from revenue to get gross profit.",
              "Divide that gross profit by revenue.",
              "Multiply by 100 for the gross margin percentage."
            ],
            "example": "Revenue 500,000 with COGS 300,000: gross profit = 200,000, gross margin = 200,000 / 500,000 x 100 = 40%.",
            "trick": "Gross uses only the cost of making the goods; ignore overheads unless the question names them."
          },
          {
            "term": "Recover profit from revenue and margin",
            "formula": "profit = revenue x (margin / 100)",
            "steps": [
              "Turn the margin percent into a decimal (divide by 100).",
              "Multiply revenue by that decimal.",
              "The answer is the profit in money."
            ],
            "example": "Revenue 1,200,000 at a 22% margin: 22 / 100 = 0.22, then 1,200,000 x 0.22 = 264,000.",
            "trick": "Treat the margin like any other percentage of a value: just multiply revenue by it."
          }
        ]
      },
      {
        "heading": "Variance against target or budget",
        "items": [
          {
            "term": "Absolute variance (the money difference)",
            "formula": "variance = actual - target   (positive = over, negative = under)",
            "steps": [
              "Take the actual figure.",
              "Subtract the target (or budget) figure.",
              "A plus answer is over target; a minus answer is under target."
            ],
            "example": "Actual spend 92,000 against budget 80,000: 92,000 - 80,000 = +12,000 (over budget).",
            "trick": "Keep actual first and target second, so the plus/minus sign reads the right way round."
          },
          {
            "term": "Variance as a percentage",
            "formula": "variance % = ((actual - target) / target) x 100",
            "steps": [
              "Subtract the target from the actual to get the money difference.",
              "Divide that difference by the TARGET.",
              "Multiply by 100."
            ],
            "example": "Actual 92,000 vs target 80,000: difference = 12,000, then 12,000 / 80,000 = 0.15, x 100 = 15% over.",
            "trick": "This is just a percentage change with the target as the OLD value, so divide by the target, not the actual."
          },
          {
            "term": "Favourable vs adverse direction",
            "detail": "Some variances are good and some are bad, even when the maths is identical. For revenue, being over target is good (favourable); for cost, being over target is bad (adverse). Decide whether higher is helpful before you trust the plus or minus sign.",
            "example": "Revenue 5% above target is favourable, but cost 5% above target is adverse, even though both compute as +5%.",
            "trick": "Ask 'do we want more of this?' Yes for income, no for spending. Label it before reporting it."
          },
          {
            "term": "Attainment / achievement ratio",
            "formula": "attainment % = (actual / target) x 100",
            "steps": [
              "Divide the actual figure by the target figure.",
              "Multiply by 100.",
              "Below 100% means under target; above 100% means over."
            ],
            "example": "Actual sales 117,000 against a 130,000 target: 117,000 / 130,000 = 0.90, x 100 = 90% of target.",
            "trick": "Attainment plus the shortfall makes 100%, so 90% achieved is the same as 10% under target."
          }
        ]
      },
      {
        "heading": "Percentages vs percentage points",
        "items": [
          {
            "term": "Percentage-point difference",
            "formula": "pp difference = new percentage - old percentage   (a plain subtraction)",
            "steps": [
              "Check both figures are already percentages.",
              "Subtract the smaller percentage from the larger one.",
              "Call the answer 'percentage points', not 'percent'."
            ],
            "example": "Market share moves from 12% to 15%: 15 - 12 = 3 percentage points.",
            "trick": "When both numbers are already in %, 'points' just means subtract. No dividing needed."
          },
          {
            "term": "Percentage points vs relative percent change",
            "formula": "points = new% - old%;  relative % = ((new% - old%) / old%) x 100",
            "steps": [
              "For points, subtract the old percentage from the new percentage.",
              "For a relative percent change, take that gap and divide it by the OLD percentage.",
              "Multiply by 100 for the relative figure."
            ],
            "example": "12% to 15%: points = 15 - 12 = 3. Relative = 3 / 12 = 0.25, x 100 = 25%.",
            "trick": "'Points higher' means subtract; 'percent higher' means divide by the starting percentage."
          },
          {
            "term": "Spread / gap between two rates",
            "formula": "gap = rate A - rate B   (answer is in percentage points)",
            "steps": [
              "Line up the two rates (make sure both are percentages).",
              "Subtract one from the other.",
              "Report the answer as percentage points."
            ],
            "example": "Loan rate 7.5% minus deposit rate 2.1%: 7.5 - 2.1 = 5.4 percentage points.",
            "trick": "A spread is always a subtraction of two rates, never a division."
          }
        ]
      },
      {
        "heading": "Weighted averages",
        "items": [
          {
            "term": "Weighted average (weighted mean)",
            "formula": "weighted average = (sum of value x weight) / (sum of weights)",
            "steps": [
              "Multiply each value by its own weight (its size, volume or count).",
              "Add all those results together.",
              "Add up all the weights on their own.",
              "Divide the first total by the total of the weights."
            ],
            "example": "Prices 10, 20, 30 with volumes 5, 3, 2: (10x5) + (20x3) + (30x2) = 50 + 60 + 60 = 170. Weights add to 5 + 3 + 2 = 10. So 170 / 10 = 17.",
            "trick": "The answer always leans toward the value with the biggest weight, so use that to sense-check."
          },
          {
            "term": "Blended rate across groups",
            "formula": "blended rate = (sum of size x rate) / (sum of sizes)",
            "steps": [
              "Multiply each group's size by its rate.",
              "Add those products together.",
              "Add up all the group sizes.",
              "Divide the first total by the total size."
            ],
            "example": "200 staff at 4% and 50 staff at 10%: (200x4) + (50x10) = 800 + 500 = 1,300. Sizes add to 250. So 1,300 / 250 = 5.2%.",
            "trick": "It lands nearer the bigger group: 5.2% sits close to the 200-strong 4% group, not the halfway 7%."
          },
          {
            "term": "Why you cannot just plain-average percentages",
            "detail": "A simple average of two percentages is only correct when the two groups are exactly the same size. If the groups differ, you must weight each rate by how many people or items are behind it, or your answer will be off.",
            "example": "Averaging 4% and 10% naively gives 7%, but with 200 people on 4% and only 50 on 10%, the true blended figure is 5.2%.",
            "trick": "If the question gives you group sizes, that is your hint to weight, not to plain-average."
          }
        ]
      },
      {
        "heading": "Index numbers",
        "items": [
          {
            "term": "Index number (value relative to a base)",
            "formula": "index = (value in period / value in base period) x 100",
            "steps": [
              "Divide the current period's value by the base period's value.",
              "Multiply by 100.",
              "The base period always comes out as exactly 100."
            ],
            "example": "Base output 4,000 and current output 4,600: 4,600 / 4,000 = 1.15, x 100 = 115.",
            "trick": "An index just rescales everything so the base year equals 100, making changes easy to read."
          },
          {
            "term": "Reading growth straight from an index",
            "formula": "cumulative % change since base = index - 100",
            "steps": [
              "Take the index value.",
              "Subtract 100.",
              "The result is the total percent change since the base year (minus means below the base)."
            ],
            "example": "An index of 115 means 115 - 100 = 15% above the base year; an index of 92 means 92 - 100 = 8% below.",
            "trick": "Because the base is 100, just subtract 100 to read the total change at a glance."
          },
          {
            "term": "Comparing two periods within an index series",
            "formula": "% change = ((later index - earlier index) / earlier index) x 100",
            "steps": [
              "Subtract the earlier index from the later index.",
              "Divide that gap by the EARLIER index (not by 100).",
              "Multiply by 100."
            ],
            "example": "Index 120 to 138: 138 - 120 = 18, then 18 / 120 = 0.15, x 100 = 15%.",
            "trick": "Between two non-base periods, divide by the earlier index. The point gap on its own is the wrong answer."
          },
          {
            "term": "Rebasing an index to a new base year",
            "formula": "new index = (old index / old index of the new base year) x 100",
            "steps": [
              "Pick the year that will become the new base and note its old index value.",
              "Divide every year's old index by that chosen year's old index.",
              "Multiply each result by 100 so the new base year reads 100."
            ],
            "example": "Old indices 125 (2024) and 150 (2025), rebasing to 2024: 2025 = 150 / 125 = 1.2, x 100 = 120.",
            "trick": "Whatever year you rebase to must end up as exactly 100; use that as your check."
          }
        ]
      },
      {
        "heading": "Growth over periods (compounding)",
        "items": [
          {
            "term": "Compound growth (future value)",
            "formula": "final = initial x (1 + r)^n",
            "steps": [
              "Turn the rate into a multiplier by adding it to 1 (6% becomes 1.06).",
              "Raise that multiplier to the power of the number of periods (multiply it by itself n times).",
              "Multiply the starting amount by that result."
            ],
            "example": "100,000 growing 6%/year for 3 years: 1.06 x 1.06 x 1.06 = 1.191016, then 100,000 x 1.191016 = 119,102.",
            "trick": "For a rough check, n years at r% is a bit more than n x r% (3 x 6% = 18%, true answer 19.1%)."
          },
          {
            "term": "Total growth factor over several periods",
            "formula": "overall factor = product of each period's (1 + rate)",
            "steps": [
              "Turn each period's change into a multiplier (+10% is 1.10, -5% is 0.95).",
              "Multiply all the multipliers together.",
              "Subtract 1 and multiply by 100 to read the overall percent change."
            ],
            "example": "+10%, -5%, +8%: 1.10 x 0.95 x 1.08 = 1.1286, which is 0.1286 x 100 = about 12.9% total.",
            "trick": "Multiply the factors; never add the percentages, because each period builds on the last."
          },
          {
            "term": "Compound annual growth rate (CAGR)",
            "formula": "CAGR = (final / initial)^(1/n) - 1",
            "steps": [
              "Divide the final value by the starting value to get the overall factor.",
              "Take the n-th root of that factor (for 4 years, the 4th root, i.e. raise it to the power 1/4).",
              "Subtract 1, then multiply by 100 for the yearly percent."
            ],
            "example": "200,000 to 338,000 over 4 years: 338,000 / 200,000 = 1.69, the 4th root of 1.69 = 1.140, minus 1 = 0.140, x 100 = 14.0%/year.",
            "trick": "If your calculator has no root button, the n-th root is the same as raising to the power 1 divided by n."
          },
          {
            "term": "Average period growth from a total change",
            "formula": "per-period rate = (1 + total change)^(1/n) - 1",
            "steps": [
              "Turn the total change into a factor (a 44% total rise is 1.44).",
              "Take the n-th root of that factor (over 2 years, the square root).",
              "Subtract 1 and multiply by 100."
            ],
            "example": "44% total over 2 years: square root of 1.44 = 1.20, minus 1 = 0.20, x 100 = 20% per year.",
            "trick": "Do not just halve the total percent; that over-states it. Take the root of the factor instead."
          }
        ]
      },
      {
        "heading": "Multi-step table problems (executive style)",
        "items": [
          {
            "term": "Combine the cells before the final step",
            "formula": "aggregate the cells first, then apply one formula",
            "steps": [
              "Find every cell the question needs and add them into the totals you require.",
              "Do the running totals first (for example total revenue and total cost).",
              "Apply the final formula once to those totals."
            ],
            "example": "Q1-Q4 revenue 120, 140, 160, 180 = 600 total; costs 90, 100, 110, 120 = 420 total. Profit = 600 - 420 = 180, margin = 180 / 600 x 100 = 30%.",
            "trick": "Sum the rows you need before dividing, so you only run the percentage formula once."
          },
          {
            "term": "Two-table lookup then compute",
            "formula": "pull one figure from each table, then combine",
            "steps": [
              "Read the first figure carefully from the first table.",
              "Read the matching figure from the second table.",
              "Combine the two with whatever operation the question asks (multiply, subtract, etc.)."
            ],
            "example": "Units 2,500 from table A at price 48 from table B: revenue = 2,500 x 48 = 120,000; with cost 84,000, profit = 120,000 - 84,000 = 36,000.",
            "trick": "Double-check you matched the right row and column in each table before multiplying."
          },
          {
            "term": "Subtotal then percentage of the whole",
            "formula": "share % = (sum of qualifying rows / grand total) x 100",
            "steps": [
              "Add up only the rows the question is asking about.",
              "Divide that subtotal by the grand total of everything.",
              "Multiply by 100."
            ],
            "example": "Regions 40, 55, 30 out of a 250 total: 40 + 55 + 30 = 125, then 125 / 250 = 0.5, x 100 = 50%.",
            "trick": "Make sure the grand total is the WHOLE, not just the rows you added up."
          },
          {
            "term": "Chain a rate onto a figure you just worked out",
            "formula": "apply the next rate to the intermediate result",
            "steps": [
              "Work out the intermediate figure first (for example the profit).",
              "For a deduction, multiply by what is LEFT (a 25% cut means multiply by 0.75).",
              "For an addition, multiply by 1 plus the rate."
            ],
            "example": "Profit 36,000, then 25% tax: keep 100% - 25% = 75%, so 36,000 x 0.75 = 27,000 after tax.",
            "trick": "For a deduction, multiply by what remains in one step instead of working out the cut and then subtracting."
          },
          {
            "term": "Per-unit metric from totals",
            "formula": "per-unit = total value / total units (combine across rows first)",
            "steps": [
              "Add up the total value across all the rows.",
              "Add up the total number of units across all the rows.",
              "Divide the total value by the total units once at the end."
            ],
            "example": "Revenue 120 + 180 = 300 over units 5 + 10 = 15: average revenue per unit = 300 / 15 = 20.",
            "trick": "Add the totals and divide once; do NOT average the separate per-unit figures, as that ignores the different sizes."
          },
          {
            "term": "Sanity-check the size of your answer",
            "detail": "After several steps it is easy to slip. Before committing, ask if the answer is plausible: a margin cannot be above 100%, a part cannot be bigger than the whole, and the units should match what was asked. If something looks off, re-read which base the question wanted.",
            "example": "If a 'margin' comes out at 140%, you probably divided by cost and found a markup instead of a margin.",
            "trick": "A quick 'does this make sense?' catches most multi-step slips before they cost you the mark."
          }
        ]
      },
      {
        "heading": "Speed tricks & shortcuts",
        "items": [
          {
            "term": "Find 10% first, then scale to any percent",
            "formula": "10% = value / 10",
            "steps": [
              "Move the decimal point one place to the left to get 10%.",
              "Multiply that 10% figure by however many tens you need.",
              "Add or take away smaller blocks if the percent is not a round ten."
            ],
            "example": "10% of 340 = 34. So 30% = 3 x 34 = 102, and 70% = 7 x 34 = 238.",
            "trick": "Build any 'nice' percent out of 10% blocks rather than multiplying by an awkward decimal."
          },
          {
            "term": "5% is half of 10%; 1% is a tenth of 10%",
            "formula": "5% = 10% / 2;  1% = 10% / 10",
            "steps": [
              "Work out 10% first.",
              "Halve it to get 5%.",
              "Divide the 10% by 10 to get 1%.",
              "Add the blocks you need together."
            ],
            "example": "On 340: 10% = 34, 5% = 17, 1% = 3.4. So 16% = 34 + 17 + 3.4 = 54.4.",
            "trick": "Any whole percent is a quick mix of 10s, 5s and 1s added up."
          },
          {
            "term": "'Of' means multiply",
            "formula": "A% of B = (A / 100) x B",
            "steps": [
              "Whenever you see 'of', replace it with a multiply sign.",
              "Turn the percent or fraction into a decimal.",
              "Multiply it by the other number."
            ],
            "example": "25% of 80 = 0.25 x 80 = 20.",
            "trick": "It is reversible: 25% of 80 equals 80% of 25, so flip it if the other way is easier."
          },
          {
            "term": "Increase or decrease with a multiplier",
            "formula": "+x% means x (1 + x/100);  -x% means x (1 - x/100)",
            "steps": [
              "For an increase, add the percent (as a decimal) to 1; for a decrease, subtract it from 1.",
              "Multiply the value by that single multiplier.",
              "Read the answer directly, with no extra adding or subtracting."
            ],
            "example": "+15% is x1.15: 200 x 1.15 = 230. -20% is x0.80: 200 x 0.80 = 160.",
            "trick": "One multiplication beats working out the change and then adding or subtracting it separately."
          },
          {
            "term": "Reverse a percentage (undo the multiplier)",
            "formula": "original = final / multiplier",
            "steps": [
              "Work out the multiplier the change used (a 20% rise is 1.20, a 20% cut is 0.80).",
              "Divide the final figure by that multiplier.",
              "The answer is the value before the change."
            ],
            "example": "After a 20% rise a price is 240: 240 / 1.20 = 200 was the original.",
            "trick": "To strip out a rise or discount, divide by the multiplier; never just add the percentage back on."
          },
          {
            "term": "Percentage points vs percent",
            "formula": "points = new% - old%   (subtract, do not divide)",
            "steps": [
              "Check both numbers are already percentages.",
              "If the question says 'points', simply subtract one from the other.",
              "If it says 'percent change', divide the gap by the starting percentage instead."
            ],
            "example": "A tax band moving 20% to 25% rises 5 percentage points, but 25% in relative terms (5 / 20 x 100).",
            "trick": "'Points' is a subtraction; 'percent change' is a division. Spot the word first."
          },
          {
            "term": "Multiply by 5 the fast way",
            "formula": "x5 = (x10) / 2",
            "steps": [
              "Multiply the number by 10 (add a zero or move the decimal right).",
              "Halve the result."
            ],
            "example": "68 x 5 = 680 / 2 = 340.",
            "trick": "Also handy: x25 = x100 then divide by 4 (32 x 25 = 3,200 / 4 = 800)."
          },
          {
            "term": "Work backwards from the options and estimate",
            "detail": "In multiple choice you do not always need the exact answer. Round the numbers to easy ones, work out a rough figure, and throw out any option that is clearly the wrong size before doing the precise sum.",
            "example": "18% of 612: 10% is about 61 and 20% about 122, so the true value sits near 110 and you can bin any far-off option.",
            "trick": "You can also test an option by plugging it back into the question; the one that fits wins, often faster than solving forwards."
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
        "heading": "Start here: how verbal questions work",
        "items": [
          {
            "term": "What these questions are really testing",
            "detail": "You get a short passage of text, then a set of statements or questions about it. Your job is not to know the topic, and not to be clever. It is to show that you can read carefully and answer using only what the words on the page actually tell you. Treat it like checking a receipt: you compare what is claimed against what is written, and nothing more."
          },
          {
            "term": "The three question types you will meet",
            "detail": "First, True/False/Cannot Say: you decide whether a statement matches the passage. Second, synonym-in-context: you pick the word that means the same as a word used in the passage. Third, stated-detail: you find a specific fact the passage gives, such as a name, number, or reason. The reading skill is the same for all three; only the question wording changes."
          },
          {
            "term": "The one golden rule",
            "detail": "Answer from the passage and nothing else. Forget what you personally know, believe, or assume is obvious. If the passage does not say it, you do not know it. This single habit fixes most wrong answers, because the test is built to punish readers who quietly fill in gaps with their own knowledge.",
            "trick": "Imagine you know absolutely nothing about the subject and can only quote the text. If you catch yourself thinking 'well, in real life...', that thought is not allowed and you should drop it."
          }
        ]
      },
      {
        "heading": "True / False / Cannot Say: the three verdicts",
        "items": [
          {
            "term": "True means the passage proves it",
            "detail": "Pick True only when the statement either repeats what the passage says in different words, or follows from it so directly there is no gap. If you have to add a fact the passage never gives in order to make the statement work, it is not True.",
            "steps": [
              "Read the statement once and hold it in mind.",
              "Find the line in the passage that talks about the same thing.",
              "Check whether that line, on its own, makes the statement definitely correct.",
              "Make sure you did not add any fact of your own to get there.",
              "If the line proves it with nothing extra added, mark True."
            ],
            "example": "Passage: 'Every order placed on Monday was shipped that same day.' Statement: 'No Monday order was left unshipped on Monday.' This is the same fact said another way, so the answer is True."
          },
          {
            "term": "False means the passage contradicts it",
            "detail": "Pick False only when the statement clashes head-on with something the passage actually says, so the two cannot both be true at the same time. There must be a real collision, not just a feeling that the statement seems wrong.",
            "steps": [
              "Read the statement and note exactly what it claims.",
              "Find the passage line that covers the same point.",
              "Ask whether the passage and the statement disagree directly.",
              "If they cannot both be true at once, mark False."
            ],
            "example": "Passage: 'The cafe is shut on Mondays.' Statement: 'The cafe is open seven days a week.' The passage rules this out directly, so the answer is False."
          },
          {
            "term": "Cannot Say means the passage neither proves nor disproves it",
            "detail": "Pick Cannot Say when the passage simply does not give you enough to decide. This happens when the point is never mentioned, or is mentioned too vaguely to settle. Not knowing is a valid answer here, and often the correct one.",
            "steps": [
              "Read the statement carefully.",
              "Search the passage for anything that proves it. If you find clear proof, the answer is True.",
              "Search for anything that contradicts it. If you find a clear clash, the answer is False.",
              "If you find neither proof nor clash, mark Cannot Say."
            ],
            "trick": "Run the 'point to it' test. Can you point at the exact words that prove the statement (True) or the exact words that contradict it (False)? If you cannot point at either, the answer is Cannot Say."
          }
        ]
      },
      {
        "heading": "The hardest call: Cannot Say versus False",
        "items": [
          {
            "term": "Missing information is not the same as wrong information",
            "detail": "A statement you cannot confirm is not automatically False. False needs the passage to actively say the opposite. If the passage is just silent on the point, the honest answer is Cannot Say. Mixing these two up is the single most common mistake people make.",
            "example": "Passage: 'The library opens at 9am.' Statement: 'The library closes at 6pm.' The closing time is never given, so you cannot call this False; it is Cannot Say."
          },
          {
            "term": "Find the active clash before you choose False",
            "detail": "Before settling on False, locate the exact sentence the statement collides with. If you cannot find a sentence that says the opposite, step back to Cannot Say. False without a clash is a guess dressed up as a verdict.",
            "trick": "Ask one plain question: 'Does the passage actually say the reverse of this?' If you can finish that sentence with a real quote, it is False. If all you can say is 'it never mentions this', it is Cannot Say."
          },
          {
            "term": "Watch for added reasons and causes",
            "detail": "Be careful with statements that explain WHY something happened. A passage can report that something occurred without ever saying what caused it. If the statement adds a 'because' the passage does not give, that reason is unsupported and the answer is usually Cannot Say.",
            "example": "Passage: 'Sales rose in the spring.' Statement: 'Sales rose in the spring because of the new advert.' The cause is never stated, so the answer is Cannot Say."
          },
          {
            "term": "Watch for added comparisons and rankings",
            "detail": "Statements that compare two things, or rank something as best, biggest, or first, need evidence for every side of the comparison. If the passage only gives you one side, you cannot judge the comparison, so the answer is Cannot Say.",
            "example": "Passage: 'Branch A took 300 bookings.' Statement: 'Branch A took more bookings than Branch B.' Branch B's number is missing, so the answer is Cannot Say."
          }
        ]
      },
      {
        "heading": "Scope words decide everything (all, some, only, never)",
        "items": [
          {
            "term": "Match the strength of the statement to the passage",
            "detail": "Words like all, every, none, never, only, some, most, and sometimes set how big a claim is. A small difference in these words can flip the whole answer, so they deserve special attention. The most reliable habit is to underline the scope word in both the statement and the passage line, then check they agree.",
            "steps": [
              "Underline the scope word in the statement (such as all, some, never).",
              "Find the matching line in the passage and underline its scope word too.",
              "Compare the two: do they claim the same breadth?",
              "If the statement claims more than the passage proves, it is not True, and is usually Cannot Say or False."
            ],
            "trick": "A mismatch in strength is a huge warning sign. Passage says 'most' but the statement says 'all'? Passage says 'some' but the statement says 'none'? That gap almost never gives a True answer."
          },
          {
            "term": "Strong words (all, every, never, only) are hard to prove and easy to break",
            "detail": "A word like 'all' is True only if the passage covers every single case, and it is False the moment the passage names even one exception. One counter-example is enough to sink a universal claim.",
            "example": "Passage: 'Two of the drivers missed the safety briefing.' Statement: 'All drivers attended the briefing.' The two who missed are a direct exception, so the answer is False."
          },
          {
            "term": "'Most' does not justify 'all'",
            "detail": "If the passage says 'most' or 'many', a statement that claims 'all' is not proven, but it is not contradicted either, because the unnamed remainder could go either way. So the answer is Cannot Say, not False.",
            "example": "Passage: 'Most members renewed their subscription.' Statement: 'All members renewed.' No exception is named and 'all' is not proven, so the answer is Cannot Say."
          },
          {
            "term": "Soft words (some, most, sometimes) take very little to prove",
            "detail": "'Some' is satisfied by even a single case. So a statement using 'some' is easy to mark True the moment the passage gives at least one example of it.",
            "example": "Passage: 'Four of the twelve stores reported a loss.' Statement: 'Some stores reported a loss.' Four counts as some, so the answer is True."
          }
        ]
      },
      {
        "heading": "Synonym-in-context: pick the word that fits HERE",
        "items": [
          {
            "term": "Read the whole sentence, not just the lone word",
            "detail": "Most words carry more than one meaning, and only the surrounding sentence tells you which one is in play. Always see how the word actually works in this particular sentence before you choose a match. The dictionary's most common meaning is often the trap.",
            "steps": [
              "Find the target word inside its full sentence.",
              "Read the sentence and decide what the word is doing there.",
              "Cover the answer options for a moment.",
              "Think of your own simple replacement word that keeps the sentence's meaning."
            ],
            "trick": "Predict your own word first, before you look at the options. This stops a 'familiar but wrong' option from luring you, because the common meaning of the word is usually offered as bait."
          },
          {
            "term": "Substitute each option back into the sentence",
            "detail": "Take each answer choice in turn, slot it into the original sentence in place of the target word, and read it through. The correct synonym leaves the sentence meaning the same thing and sounding natural; a wrong one shifts the meaning or sounds odd.",
            "steps": [
              "Replace the target word with the first option and read the whole sentence.",
              "Ask: does it still mean the same and read sensibly?",
              "Repeat for every option.",
              "Keep the one that changes the meaning least."
            ],
            "example": "Sentence: 'The report noted a marked drop in errors.' Here 'marked' means noticeable, so 'a noticeable drop' fits, while 'a stained drop' clearly does not."
          },
          {
            "term": "Match the tone: positive, negative, or neutral",
            "detail": "Keep the same feeling as the original word. If the word is praising something (positive) or criticising it (negative), the right synonym must carry that same flavour. Checking tone often lets you delete two options straight away.",
            "steps": [
              "Decide if the target word feels positive, negative, or neutral.",
              "Mark each option as positive, negative, or neutral too.",
              "Cross out any option whose tone does not match.",
              "Compare only the survivors in detail."
            ],
            "example": "'Thrifty' and 'stingy' both mean spending little, but 'thrifty' is approving and 'stingy' is critical, so in a complimentary sentence only 'thrifty' fits."
          }
        ]
      },
      {
        "heading": "Finding a stated detail",
        "items": [
          {
            "term": "Scan for a distinctive keyword instead of re-reading",
            "detail": "Do not read the whole passage again to find one fact. Pick the most unusual word in the question, such as a name, a number, a date, or a rare term, and let your eye hunt for it down the page. This drops you onto the right line far faster.",
            "steps": [
              "Read the question and choose its most distinctive word.",
              "Run your eye down the passage looking only for that word.",
              "Stop when you spot it.",
              "Read around it to find the answer."
            ],
            "trick": "Numbers, capital-letter names, and unusual nouns stand out visually, so they are the fastest anchors to scan for."
          },
          {
            "term": "Read the sentence before and after your match",
            "detail": "The fact you need often sits just beside the keyword rather than on the exact same line. Reading the neighbouring sentences gives you the context to confirm the right answer and reject a near-miss."
          },
          {
            "term": "Match the meaning, not the matching words",
            "detail": "The correct answer usually says the same thing as the passage using different words. Tempting wrong answers reuse the passage's exact words but twist the meaning. So copied wording is a warning sign, not proof of a right answer.",
            "example": "Passage: 'Profits grew despite rising costs.' Trap option: 'Profits grew because of rising costs.' It reuses the words but flips the logic, so it is wrong."
          },
          {
            "term": "Check numbers, names, and dates digit by digit",
            "detail": "Detail questions often hinge on a single figure or label, and test writers love to swap them. Re-check the exact digit, unit, and spelling against the text rather than trusting your memory, because '15%' and '50%', or 'Mr Lee' and 'Ms Lee', are easy to mix up."
          }
        ]
      },
      {
        "heading": "Pacing and exam technique",
        "items": [
          {
            "term": "Skim the questions before the long passage",
            "detail": "Glance at what is being asked first, so you read the passage already knowing which details matter. Reading with a purpose stops you going over the same text again and again.",
            "trick": "If you only have time for one read, read the statements first, then read the passage once and tick off each statement as you reach the line that settles it."
          },
          {
            "term": "Give each statement a fixed slice of time",
            "detail": "Work out roughly how long you can spend on each statement, then try to stick to it. If one statement is dragging on, flag it and move on, then come back once the easy marks are safely banked.",
            "steps": [
              "Turn your total time into seconds (minutes times 60).",
              "Divide that by the number of statements to get seconds per statement.",
              "Use that figure as your rough budget for each one.",
              "If a statement runs well past its budget, flag it and move on."
            ],
            "example": "You have 10 minutes for 20 statements. 10 times 60 is 600 seconds. 600 divided by 20 is 30 seconds each, so anything running past about 45 seconds gets flagged and skipped for now."
          },
          {
            "term": "Never leave a blank when guessing is free",
            "detail": "If wrong answers carry no penalty, always commit to your best choice rather than leaving it empty. With three options, even a pure guess on True/False/Cannot Say scores about a third of the time (roughly 33 in every 100), and a reasoned guess does better than that."
          },
          {
            "term": "Treat each passage as a sealed world",
            "detail": "Every passage stands on its own. Do not carry a fact, name, or assumption from an earlier passage into the next one. Judge each statement only against the passage it belongs to, and reset your mind before you start a new text.",
            "trick": "Do not try to balance your answers either. A run of three Cannot Says in a row is perfectly possible; the answers are not spread evenly on purpose, so pattern-guessing only hurts you."
          }
        ]
      }
    ],
    "comp-error": [
      {
        "heading": "Your checking routine",
        "items": [
          {
            "term": "The field-by-field checking routine",
            "detail": "A fixed routine beats random scanning. Pick the source record, line it up against the copy, and walk the same path every single time so your eye never wanders and you never lose your place. This is the order to follow on every question.",
            "steps": [
              "Decide which record is the original (the source) and treat only that one as correct.",
              "Count the fields in both records and check they line up; a missing or extra field shifts everything and creates fake mismatches.",
              "Start at the first field of the original and look only at that one field.",
              "Jump straight across to the same field in the copy and compare just those two values.",
              "If they match, mentally tick it and move on; if they differ, mark that field as an error.",
              "Move down to the next field and repeat, never skipping ahead.",
              "Keep going to the very last field even after you find one error, because there can be more than one.",
              "At the end, your list of marked fields is your answer; do not start over."
            ],
            "trick": "Use a finger, pen, or the edge of a card to cover every line except the one pair you are comparing, so your eye physically cannot drift to the next row."
          },
          {
            "term": "Anchor on the original, never swap sides",
            "detail": "Always read the original first and the copy second, in that order, for every field. If you keep flipping which record you trust, your brain quietly starts averaging the two and stops noticing small differences. Same direction every time keeps your eye sharp.",
            "trick": "Say it in your head as a one-way sentence: 'original says X, does the copy match?' Never the reverse."
          },
          {
            "term": "Check the shape before the values",
            "detail": "Before comparing any actual values, glance at the overall shape of both records: same number of fields, same order, nothing missing or doubled. A single dropped field pushes everything after it out of line, which makes correct values look wrong and wastes time. Catching the shift first saves you from flagging a string of fake errors.",
            "example": "The original has four fields in this order: Name, ID, Date, Amount. The copy has only three: Name, Date, Amount. So ID has been dropped, and every field after it has slid up one place (the copy's Date sits where ID should be). The real error is the missing ID, not the values that now look out of line."
          }
        ]
      },
      {
        "heading": "Decoding a coding key",
        "items": [
          {
            "term": "Translate the code before you compare it",
            "detail": "When a field is a code (a letter for a department, a number for a status), look it up in the key and turn it into its plain meaning first, then compare. If you compare two raw codes you have not decoded, you cannot tell a genuine typo from a value that is simply allowed to be different. Decode, then judge.",
            "trick": "Lightly jot the decoded meaning next to the code in your rough working the first time you see it, so you are not searching the key again for the same code two rows later."
          },
          {
            "term": "Break a built-up code into segments",
            "detail": "Many codes are built from parts joined together, such as region then year then a running number. Check each part against its own section of the key on its own, instead of reading the whole code as one lump. Errors almost always live in just one segment, and splitting the code makes that segment stand out.",
            "example": "Take the code LN-25-014. Check it in three small pieces, not one big guess. First piece: LN against the region list, which says LN means London. Second piece: 25 against the year rule, which says 25 means 2025. Third piece: 014 against the running-number sequence. If only the middle piece is meant to be 26 (2026), the wrong year jumps straight out as soon as you check that one segment."
          }
        ]
      },
      {
        "heading": "Numbers, dates and decimals",
        "items": [
          {
            "term": "Compare digit length before digit values",
            "detail": "A dropped or added digit is a different kind of error from a wrong digit, and it hides well because the leading digits still match. Before reading the values, simply count how many digits are in each version. If the counts differ, you already have a mismatch and do not need to read further.",
            "steps": [
              "Count how many digits are in the original number.",
              "Count how many digits are in the copy.",
              "If the two counts are not equal, stop: a digit has been added or dropped, so it is an error.",
              "Only if the counts match do you go on to compare the digits one by one."
            ],
            "example": "Original is 1450, copy is 14500. Count the original: 1-4-5-0 is 4 digits. Count the copy: 1-4-5-0-0 is 5 digits. 4 does not equal 5, so it is an error, and you knew that without even reading the values."
          },
          {
            "term": "Read long numbers right-to-left to catch swaps",
            "detail": "A transposition is two next-door digits that have swapped places, like 1453 typed as 1543. The total still looks about right, so a left-to-right skim misses it. Comparing from the right (units first, then tens, then hundreds) forces you to line up each place value and the swap pops out.",
            "steps": [
              "Line the two numbers up so their right-hand ends are level.",
              "Compare the right-most digit of each (the units); note match or differ.",
              "Step left to the next digit of each (the tens); note match or differ.",
              "Keep stepping left, one place at a time, until you reach the far end.",
              "If exactly two next-door digits differ and they are each other's value, that is a swap."
            ],
            "example": "Original 1453 versus copy 1543, working from the right. Units: original 3, copy 3, match. Tens: original 5, copy 4, differ. Hundreds: original 4, copy 5, differ. Thousands: original 1, copy 1, match. The two middle digits, 5 and 4, have simply traded places, so it is a transposition."
          },
          {
            "term": "Chunk long numbers into small groups",
            "detail": "Your eye handles two or three characters at once but smears a run of eight or more, which is where a single wrong digit hides. Break each number into pairs and compare chunk against chunk instead of one long blur. Start the pairs from the right; if there is an odd digit left over, it simply sits on its own at the front.",
            "trick": "30298471 has 8 digits, so it splits evenly into the pairs 30 29 84 71. Read the copy's pairs in the same order and compare pair against pair; the first chunk that does not match is where the error lives."
          },
          {
            "term": "Split a date into day, month and year",
            "detail": "Date errors usually hit one part while the rest is correct, and a swapped day and month is a classic plant. Treat the slashes as fixed walls and compare the three parts one at a time, so a single wrong part cannot blend into a date that looks right overall.",
            "steps": [
              "Compare the day (the part before the first slash) in both dates.",
              "Compare the month (the part between the slashes) in both dates.",
              "Compare the year (the part after the last slash) in both dates.",
              "Mark the date as an error if any one of the three parts differs."
            ],
            "example": "Original 12/06/2024 versus copy 12/09/2024. Day: 12 versus 12, match. Month: 06 versus 09, differ. Year: 2024 versus 2024, match. Only the month is wrong, so the month is what you flag."
          },
          {
            "term": "Treat the decimal point, sign and symbol as real",
            "detail": "The position of the decimal point, a leading minus sign, and any currency or unit symbol each change the meaning even when every digit is identical. A digit-only scan waves these through. Check the point, the sign, and the symbol on purpose, not just the numbers around them.",
            "example": "Original 4.50 versus copy 45.0. Both use the same three digits, 4, 5 and 0, so a digit-only glance says they match. But the point has moved: 4.50 means four and a half, while 45.0 means forty-five. The shifted decimal point is the error, even though no digit changed."
          }
        ]
      },
      {
        "heading": "Text fields and finishing well",
        "items": [
          {
            "term": "Hunt for doubled and dropped letters in names",
            "detail": "Word errors cluster in a few spots: double letters (Phillip with two L versus Philip with one L), a swapped or missing vowel, and a dropped letter at the end. Read the word slowly in syllables rather than as a familiar shape, because your brain auto-corrects words it recognises and skips the very letter that changed.",
            "example": "Original Philip has one L; copy Phillip has two L. Counting the L in each (one versus two) shows the copy added a letter, so it is an error.",
            "trick": "Whisper the word in beats, Phil-lip, and the extra or missing letter usually trips your tongue."
          },
          {
            "term": "Decide whether spacing and case count, then be consistent",
            "detail": "Sometimes an extra space, a capital letter versus a small one, or a missing hyphen is a genuine mismatch, and sometimes the task ignores formatting. Decide which rule applies before you start, then apply that same rule to every field so you are not stricter on some rows than others."
          },
          {
            "term": "When stuck, clear the obvious matches first",
            "detail": "If the error will not jump out, do not stare at the whole record. Quickly tick off the fields that obviously match to shrink the search down to the one or two fields left over. The planted error has to be hiding in what remains, so you can give those your full attention instead of spreading it thin."
          },
          {
            "term": "One careful pass, then stop",
            "detail": "Error-checking scores speed and accuracy together. Check each field once, deliberately, and move on; do not loop back over fields you already cleared. Re-reading the whole record eats your time and almost never turns up something a careful first pass missed.",
            "trick": "If two fields look identical after one honest look, accept it and bank the seconds for the number and code fields, which is where the real errors live."
          }
        ]
      }
    ],
    "exec-verbal": [
      {
        "heading": "The one rule that beats everything: use only the passage",
        "items": [
          {
            "term": "The passage is the only thing that counts",
            "detail": "You decide every statement using only the words on the page, even if you happen to know the topic well. Real-world knowledge, common sense about how companies behave, and your own opinion are all banned. If the passage does not put a fact in front of you, you are not allowed to use it. The test is checking whether you can reason strictly from given text, nothing else.",
            "steps": [
              "Read the statement and notice the temptation to bring in what you already know.",
              "Deliberately switch that outside knowledge off; pretend you are a stranger to the subject.",
              "Ask: is this fact actually written in the passage, in words I can point to?",
              "If it is only true in the real world but not on the page, treat it as not given."
            ],
            "trick": "Imagine you are a lawyer who may only quote the document in front of you. The second you think well, in practice..., that thought is thrown out of court."
          },
          {
            "term": "Three verdicts, one quick test for each",
            "detail": "Every statement gets one of three labels. True means the passage proves it. False means the passage contradicts it. Cannot Say means the passage does neither. You pick by running a test, not by guessing whether the statement sounds sensible.",
            "steps": [
              "First ask: can I point to a line that proves the statement? If yes, mark True.",
              "If not, ask: can I point to a line that clashes with the statement? If yes, mark False.",
              "If you can do neither, stop searching and mark Cannot Say.",
              "Do not talk yourself past this; I cannot find proof either way is the definition of Cannot Say."
            ],
            "trick": "Run the tests in that exact order: prove, then clash, then neither. Most wrong answers come from skipping straight to a gut feeling instead of looking for a line."
          },
          {
            "term": "Name the line before you commit to True or False",
            "detail": "A genuine True or False can always be tied to one specific sentence in the passage. Before you lock in either, silently quote the clause that justifies it. If you cannot put your finger on a single line, you are reading too much into the text and the honest answer is Cannot Say.",
            "steps": [
              "Decide your provisional answer (True or False).",
              "Find the exact sentence that backs it up and read it again.",
              "Check your reasoning starts with a near-quote, not with it implies or surely.",
              "If no single line supports you, downgrade the answer to Cannot Say."
            ],
            "trick": "If your justification begins with obviously or it must mean, that is your brain filling a gap the passage left empty. Switch to Cannot Say."
          },
          {
            "term": "Delete the persuasion words before judging",
            "detail": "Writers sprinkle passages with opinion words such as clearly, obviously, undeniably, leading, world-class, and best. These set a tone but prove nothing. Mentally cross them out and judge only the plain factual claim that is left behind.",
            "steps": [
              "Spot tone words like clearly, obviously, leading, best, world-class.",
              "Cross them out in your head and reread the bare sentence.",
              "Judge the statement against that stripped-down fact only.",
              "Never treat clearly or obviously as if it were evidence."
            ],
            "trick": "The firm is clearly the market leader carries the same fact as The firm is the market leader plus an opinion. Treat clearly as decoration, not proof."
          }
        ]
      },
      {
        "heading": "Stated vs implied vs assumed",
        "items": [
          {
            "term": "Tell the three apart",
            "detail": "Stated means the words are actually there. Implied means it must follow from the words with no gap left to fill. Assumed means the argument quietly leans on it but never says it. Only stated facts and tight, gap-free implications can be marked True. An assumption the passage needs is not something you may treat as proven.",
            "steps": [
              "Find the words in the passage that relate to the statement.",
              "If the statement just repeats those words, it is stated, so it can be True.",
              "If it follows with zero gap, it is implied, so it can still be True.",
              "If you had to quietly add a fact to make it work, it is assumed, so it is not True."
            ],
            "trick": "Passage: The factory ran at full capacity all year. Stated: it ran at full capacity. Safe implied: it did not sit idle. Assumed (not allowed): demand was high enough to justify it. The last one needs a fact you were never given."
          },
          {
            "term": "The can-it-be-false check for any inference",
            "detail": "An inference is only safe when it cannot possibly be false while every line of the passage stays true. If you can dream up even one situation where the whole passage is still true yet the statement fails, your inference is unsafe and you should lean towards Cannot Say.",
            "steps": [
              "Write down the statement you are tempted to mark True.",
              "Try to invent a short story that keeps every passage line true but makes the statement false.",
              "If you can invent even one such story, the inference is unsafe: choose Cannot Say.",
              "If every attempt fails and the statement is forced to be true, it is genuinely implied: True."
            ],
            "trick": "Actively try to break your own answer. If you can picture a world where the passage holds but the statement does not, that is your proof the answer is Cannot Say."
          },
          {
            "term": "One safe step only, never a chain",
            "detail": "A legitimate inference is a single short hop that the text forces on you. The moment you need a second and therefore to reach the statement, you have walked off what the passage guarantees and into your own speculation.",
            "steps": [
              "Identify the one fact the passage gives.",
              "Take a single direct step from it and stop.",
              "If you needed a second link to reach the statement, the step is too long.",
              "Treat any two-step conclusion as Cannot Say unless every link is spelt out in the passage."
            ],
            "trick": "Passage: All directors must hold shares. Safe one step: a non-shareholder is not a director. Unsafe extra step: so the directors are wealthy, which smuggles in a fact the passage never gave."
          },
          {
            "term": "Plausible is not the same as proven",
            "detail": "These passages are written so the most reasonable-sounding conclusion is often the one that is not actually proven. If reaching the answer depends on it being likely, sensible, or what a manager would normally do, that reasoning is yours, not the passage's, so the answer is Cannot Say.",
            "steps": [
              "Notice if a statement feels obviously right.",
              "Try to quote the line that proves it.",
              "If no line proves it and you are leaning on it makes sense, that is a trap.",
              "Default to Cannot Say when plausible is your only support."
            ],
            "trick": "The smarter the statement sounds while you still cannot find a supporting line, the more likely it is a planted trap. Reward yourself for choosing Cannot Say on those."
          }
        ]
      },
      {
        "heading": "Unverified claims become Cannot Say",
        "items": [
          {
            "term": "A target or forecast is not an outcome",
            "detail": "If the passage says a company aims to, plans to, expects to, or is projected to do something, all you actually know is that the plan exists, not that it happened or will happen. Any statement about the result is Cannot Say, even when the plan sounds certain to work.",
            "steps": [
              "Look for plan words: aims to, plans to, expects to, projected to, targets.",
              "Mark as True only the fact that the plan or target exists.",
              "Do not treat the planned result as something that has been achieved.",
              "Label any statement about the actual outcome as Cannot Say."
            ],
            "trick": "Passage: The board aims to cut costs 15% next year. True: a cost-cutting aim exists. Cannot Say: costs will fall, or did fall, by 15%."
          },
          {
            "term": "An opinion only proves the opinion was held",
            "detail": "When the text reports that a person believes, argues, claims, or predicts something, the only fact you can take to the bank is that the person holds that view. Whether the view is actually correct is a separate question the passage usually leaves open.",
            "steps": [
              "Spot the reporting verb: believes, argues, claims, predicts, expects.",
              "Confirm True only for this person holds this view.",
              "Keep the person's view separate from what is actually the case.",
              "Mark any statement that treats the opinion as fact as Cannot Say."
            ],
            "trick": "Passage: The CFO believes demand will recover. True: the CFO holds that belief. Cannot Say: demand will recover."
          },
          {
            "term": "Watch the verb tense and certainty words",
            "detail": "Words like will, would, could, may, expects to, is projected to, and hopes to all point to something that has not happened yet, or that is hedged. About outcomes, these usually mean Cannot Say. Words like has, did, reported, recorded, and rose point to a confirmed event, which can support True.",
            "steps": [
              "Underline the main verb in the statement and in the supporting line.",
              "If it is a future or hedging verb (will, may, could, expects), treat the outcome as unconfirmed.",
              "If it is a settled past verb (did, rose, reported), the event can be confirmed.",
              "When the question asks about a settled fact but the line only hedges, lean Cannot Say."
            ],
            "trick": "Hard verbs (did, rose, reported) can earn a True. Soft verbs (may, will, expects) about a result almost always mean Cannot Say."
          },
          {
            "term": "Two things moving together is not cause and effect",
            "detail": "If the passage says two things rose at the same time, it has not told you that one caused the other unless it explicitly states the link. Any answer that rewrites a coincidence as a cause is Cannot Say.",
            "steps": [
              "Notice when two figures move in the same direction.",
              "Check whether the passage actually says one caused the other.",
              "If the cause link is not spelt out, do not invent it.",
              "Mark the cause-and-effect statement as Cannot Say."
            ],
            "trick": "Passage: Sales and ad spend both rose in Q3. Cannot Say: the higher ad spend caused the sales rise, because the passage never claims the connection."
          }
        ]
      },
      {
        "heading": "Quantifier, scope, and comparison traps",
        "items": [
          {
            "term": "Some is not all, and most is not every",
            "detail": "A soft quantifier in the passage cannot support a hard claim in the statement. If the text says most regions grew, a claim about one named region growing is Cannot Say, because most leaves room for exceptions you cannot rule out.",
            "steps": [
              "Underline the quantifier in the passage (some, most, many, a few).",
              "Underline the quantifier in the statement (all, every, this one, none).",
              "Check whether the passage word actually covers the statement word.",
              "If most or some is being stretched to all or to a specific case, mark Cannot Say."
            ],
            "trick": "Passage: Most divisions returned a profit. Statement: The logistics division returned a profit. Cannot Say, because logistics could be one of the loss-makers hiding inside the minority."
          },
          {
            "term": "All, none, always, only and never are easy to over-read",
            "detail": "An absolute word in the answer demands absolute support in the passage. A single supporting example never proves always or every, and the mere fact that no exception is mentioned never proves none or never.",
            "steps": [
              "Circle every absolute word in the statement: all, none, always, never, only, every.",
              "For each one, ask whether the passage covers literally every case.",
              "If even one case is left uncovered, the statement is not yet proven True.",
              "Remember: no exception being mentioned is not the same as no exception existing."
            ],
            "trick": "One counter-example is enough to make all False, but to mark all True you need the passage to cover every single case. Absolutes are easy to break and hard to prove."
          },
          {
            "term": "Match the scope: who, where, and when",
            "detail": "A fact about one division does not transfer to the whole company, a fact about one quarter does not cover the full year, and a fact about one market does not stretch to all markets. Make sure the subject and the boundaries of the statement line up exactly with the passage.",
            "steps": [
              "Find the subject and the boundary in the passage line (which unit, which place, which time).",
              "Find the subject and boundary in the statement.",
              "Compare them side by side: same who, same where, same when?",
              "If the statement is broader than the passage, mark Cannot Say."
            ],
            "trick": "Passage: European sales rose in Q1. Statement: Sales rose in Q1. Cannot Say, because the global figure could fall even while Europe rises."
          },
          {
            "term": "Relative is not absolute",
            "detail": "A higher growth rate does not mean a higher total amount, a bigger market share does not mean a bigger total, and a percentage is not a number of units or a sum of money. Do not quietly swap a proportion for a quantity, or a quantity for a proportion.",
            "steps": [
              "Notice whether the passage gives a rate or share (a percentage) or an actual amount (units, money).",
              "Notice which one the statement is really claiming.",
              "If the statement turns a percentage into a total (or the reverse), stop.",
              "Without the missing starting figure to convert it, mark Cannot Say."
            ],
            "trick": "Passage: Brand A grew 40%, Brand B grew 10%. Statement: Brand A sold more units than Brand B. Cannot Say, because A could have grown fast from a tiny starting base while B grew slowly from a huge one."
          }
        ]
      },
      {
        "heading": "Cannot Say vs False: the hardest call",
        "items": [
          {
            "term": "False needs an active clash, not silence",
            "detail": "Only mark False when the statement and the passage make claims that cannot both be true at once. If the passage simply never mentions the point, that is missing information, which is Cannot Say, not False.",
            "steps": [
              "Find the part of the passage that talks about the same point as the statement.",
              "If there is no such part, the passage is silent: mark Cannot Say.",
              "If there is a part, check whether it directly conflicts with the statement.",
              "Only a real, head-on conflict earns False."
            ],
            "trick": "Passage: The office opens at 8am. Statement: The office closes at 5pm. Closing time is never mentioned, so it is Cannot Say, not False."
          },
          {
            "term": "A direct contradiction is genuinely False",
            "detail": "When the statement describes the same fact as the passage but in a way that conflicts, choose False with confidence. There has to be a head-on collision between the two on the very same point.",
            "steps": [
              "Confirm both the passage and the statement are about the same fact.",
              "Check whether they can both be true at the same time.",
              "If they cannot both hold, that is a contradiction.",
              "Mark it False without hesitating."
            ],
            "trick": "Passage: Every site passed the audit. Statement: One site failed the audit. These cannot both be true, so it is False."
          },
          {
            "term": "The flip test sorts them out",
            "detail": "Ask whether the passage actually asserts the opposite of the statement. If it does, the answer is False. If the passage is merely quiet on the matter, the answer is Cannot Say. The dividing line is contradiction versus absence.",
            "steps": [
              "Say to yourself: the passage actually states the reverse of this.",
              "Try to finish that sentence with a real quote from the passage.",
              "If you can quote it, the answer is False.",
              "If you cannot find such a quote, the answer is Cannot Say."
            ],
            "trick": "Being unable to prove a statement does not make it False. False needs the passage to say the opposite, in words you can point at."
          },
          {
            "term": "Added reasons, rankings, and comparisons lean Cannot Say",
            "detail": "If the statement bolts on a cause, a best-or-worst ranking, or a comparison the passage never makes, you usually cannot call it False, because the passage has not denied it either. The safe verdict is Cannot Say unless the text explicitly rules it out.",
            "steps": [
              "Spot the extra claim: a because, a most/best/worst, or an A-versus-B comparison.",
              "Check whether the passage supplies that cause, ranking, or both sides of the comparison.",
              "If it does not, you can neither prove nor disprove it.",
              "Mark it Cannot Say (not False) unless the passage clearly contradicts it."
            ],
            "trick": "Passage: Output rose after the new line opened. Statement: The new line was the most productive in the company. Cannot Say, because no ranking is given."
          }
        ]
      },
      {
        "heading": "Caveats, conditionals, and connectors",
        "items": [
          {
            "term": "An if-then claim does nothing until the if is met",
            "detail": "A conditional tells you nothing on its own. If the passage says profits rise if the merger closes, you cannot claim profits rose unless the text also confirms the merger actually closed.",
            "steps": [
              "Spot the if-then structure in the passage.",
              "Find the if part (the condition) and check whether the passage confirms it.",
              "If the condition is confirmed, you may take the then result.",
              "If the condition is not confirmed, the result is Cannot Say."
            ],
            "trick": "For every if-then, hunt down the condition first. No confirmed condition means no confirmed result."
          },
          {
            "term": "Affirm the if, never the then",
            "detail": "From if A then B, knowing A is true lets you conclude B. But knowing B is true does not let you conclude A, and knowing A is false tells you nothing about B. Running a conditional backwards is a classic trap.",
            "steps": [
              "Write the rule as if A then B.",
              "If the passage confirms A is true, you may conclude B.",
              "If the passage only confirms B is true, you may not conclude A.",
              "If A is false, do not conclude anything about B."
            ],
            "trick": "Passage: If the bid succeeds, the team expands. Statement: The team expanded, so the bid succeeded. Cannot Say, because the team could have expanded for some other reason."
          },
          {
            "term": "Honour the caveats: however, except, despite, unless",
            "detail": "These words carve out exceptions that often flip the answer. Read the whole sentence to the end, because a second clause can withdraw exactly what the first clause seemed to grant.",
            "steps": [
              "When you see however, except, despite, unless, or but, keep reading to the end of the sentence.",
              "Identify what the caveat takes back or limits.",
              "Re-judge the statement against the sentence as a whole, not just its first half.",
              "Let the exception change your verdict if it applies."
            ],
            "trick": "Passage: All branches met target, except the two opened last month. Statement: All branches met target. False, because the exception is stated outright."
          },
          {
            "term": "Necessary is not the same as sufficient",
            "detail": "Required for does not mean guarantees. If regulatory approval is necessary for a launch, having that approval does not prove a launch happened, because other conditions might still be missing. Treat the outcome as Cannot Say unless the text confirms it.",
            "steps": [
              "Spot needed for or required for language.",
              "Remember that meeting one requirement does not force the outcome to happen.",
              "Check whether the passage confirms the outcome itself.",
              "If only the requirement is confirmed, mark the outcome Cannot Say."
            ],
            "trick": "Re-read X is needed for Y as X on its own is enough to make Y happen. If that re-reading sounds wrong, you have a necessary-not-sufficient trap, so the result is Cannot Say."
          }
        ]
      },
      {
        "heading": "Synonyms and exact word meaning in context",
        "items": [
          {
            "term": "Read the whole sentence, not just the target word",
            "detail": "A word changes meaning with the words around it, and these passages love to use a word's less common meaning. Work out how the word is actually being used in this exact sentence before you reach for a synonym.",
            "steps": [
              "Find the target word and read the entire sentence it sits in.",
              "Work out the job the word is doing here, in this context.",
              "Ignore the meaning the word usually has elsewhere.",
              "Only then look at the answer options."
            ],
            "trick": "In the firm posted a marked improvement, marked means noticeable, not stained or labelled. The context, not the dictionary's first entry, decides."
          },
          {
            "term": "Predict your own word first, then match",
            "detail": "Cover the options and think of a simple word that would slot into the sentence with the same meaning and tone. Then pick the option closest to your own word. This stops a familiar but wrong option from luring you in.",
            "steps": [
              "Hide the answer options.",
              "Read the sentence and think of your own replacement word.",
              "Now reveal the options and find the one nearest your word.",
              "Confirm it by reading the sentence with that option in place."
            ],
            "trick": "If your predicted word turns up almost word for word among the options, it is very likely the answer. Check it by substitution and move on."
          },
          {
            "term": "Substitute each candidate back in",
            "detail": "Plug each option into the original sentence and check that the meaning, the grammar, and the tone all still hold. The correct synonym leaves the sentence saying the same thing; a near-miss usually shifts the meaning or the formality.",
            "steps": [
              "Take the first option and read the full sentence with it swapped in.",
              "Ask whether the sentence still means the same and still reads naturally.",
              "Repeat for each option.",
              "Keep the one option that leaves the meaning unchanged."
            ],
            "trick": "For a robust set of controls, test each: a strong set of controls fits, a rude set of controls does not. Reading it aloud in your head exposes the bad fits fast."
          },
          {
            "term": "Match positive or negative tone",
            "detail": "Keep the same emotional charge as the original word. If it praises, the synonym must praise; if it criticises, the synonym must criticise. A word with the right dictionary meaning but the wrong tone is a trap.",
            "steps": [
              "Tag the target word as positive, negative, or neutral.",
              "Tag each option the same way.",
              "Cross out any option whose tone does not match the target.",
              "Compare only the survivors in detail."
            ],
            "trick": "Frugal and stingy both mean spending little, but frugal is approving and stingy is critical. In a complimentary sentence they are not interchangeable, so tone breaks the tie."
          }
        ]
      },
      {
        "heading": "Process and pacing under time pressure",
        "items": [
          {
            "term": "Read the question first, then scan for the clause",
            "detail": "Read the statement before the long passage so you know exactly what you are hunting for, then scan the text for the one clause it depends on. This turns a slow full read into a fast targeted search and stops you reading the passage over and over.",
            "steps": [
              "Read the statement (or question) first.",
              "Pick out one distinctive keyword from it: a name, number, date, or unusual term.",
              "Scan the passage for that keyword to jump straight to the relevant lines.",
              "Read those lines closely and judge."
            ],
            "trick": "Numbers, capitalised names, and rare words stand out from ordinary text, so they are the fastest things to scan for."
          },
          {
            "term": "Read one line either side of your match",
            "detail": "The wording that actually decides the verdict often sits just before or after the keyword, not on the same line. Reading the neighbouring sentences catches the caveat or qualifier that flips the answer.",
            "steps": [
              "Land on the line containing your keyword.",
              "Read the sentence immediately before it.",
              "Read the sentence immediately after it.",
              "Only then settle on your verdict, with any caveat included."
            ],
            "trick": "A however or except hiding in the next sentence can turn a True into a False. Always glance one line each way before committing."
          },
          {
            "term": "Judge each statement independently",
            "detail": "Do not let a previous True or False sway the next one, and do not assume the answers are spread evenly across the three verdicts. Each statement stands or falls only against the passage, so a run of three Cannot Says in a row is perfectly normal.",
            "steps": [
              "Treat each statement as a brand new question.",
              "Ignore what your last few answers were.",
              "Resist any urge to balance out the verdicts.",
              "Judge purely on the line you can find in the passage."
            ],
            "trick": "If you catch yourself thinking I have had too many Cannot Says, ignore that feeling completely. Pattern-balancing is a guessing habit, not reasoning."
          },
          {
            "term": "Beware the tempting paraphrase",
            "detail": "Wrong options often restate the passage almost faithfully but swap a quantifier, widen the scope, harden a forecast into a fact, or reverse a conditional. Compare the answer word by word against the source clause before trusting a near-match.",
            "steps": [
              "Put the statement next to the passage line it seems to match.",
              "Check the quantifier (some vs all), the scope (one unit vs whole company), and the verb (may vs did).",
              "Look for a flipped if-then or an added cause.",
              "If any single word has been changed in a way that matters, the verdict is usually Cannot Say or False."
            ],
            "trick": "Passage: sales may rise in some markets. Trap statement: sales will rise in all markets. Two tiny edits (may to will, some to all) drop it to Cannot Say at best."
          },
          {
            "term": "Reset between passages and guess when there is no penalty",
            "detail": "Treat each passage as a fresh, sealed world and carry no facts from an earlier one into the next. Where wrong answers are not penalised, never leave a blank, because a reasoned guess can score while a blank never can.",
            "steps": [
              "When a new passage starts, mentally wipe the previous one.",
              "Do not import names, figures, or assumptions across passages.",
              "If one item is eating your time, mark your best verdict and flag it.",
              "Come back to flagged items only if time remains; never leave a blank if guessing is free."
            ],
            "trick": "For anything you genuinely cannot pin to a line, Cannot Say is the safest single guess, since most traps are built to punish over-confident True or False answers."
          }
        ]
      }
    ],
    "exec-abstract": [
      {
        "heading": "What these puzzles are really asking",
        "items": [
          {
            "term": "No words, no maths, just shapes",
            "detail": "Abstract (diagrammatic) questions show you a row of pictures made of shapes, dots, arrows and shading. There are no sums to do and nothing to read. A hidden rule connects the pictures, and your only job is to work out that rule. Because there are no numbers to fear, anyone can do well at these once they know where to look.",
            "trick": "Tell yourself the answer is always a simple, tidy rule. The pictures look busy on purpose, but the real rule is usually one small change repeated again and again."
          },
          {
            "term": "Two question types, one skill",
            "detail": "Next-in-series gives you pictures that change step by step in one direction, and you pick the picture that comes next. Odd-one-out gives you pictures that all follow the same rule except one, and you pick the one that does not fit. Both need the very same skill: find the rule first, then either continue it or spot who breaks it.",
            "trick": "Decide which type you are facing before you start. For series, ask 'what comes next?'. For odd-one-out, ask 'who disagrees with the others?'. Same hunt, different finish."
          },
          {
            "term": "Look at what moves, ignore what stays still",
            "detail": "Most of each picture is decoration put there to distract you. The rule lives only in the things that change from one picture to the next: something turning, growing, appearing, or swapping colour. Train your eye to skip past anything that is identical every time and lock on to the parts that differ.",
            "trick": "Cover everything and compare just the first two pictures. The one thing that is different between them is almost always the whole rule. Find it there, then check it holds for the rest."
          },
          {
            "term": "Real rules are regular, noise is not",
            "detail": "A genuine rule moves in a steady, predictable way: the same turn each step, one extra dot each step, or a colour that flips every picture. If a feature changes by a different amount each time with no steady pattern, it is bait, not the rule. Throw it out and keep looking for the feature that changes in a tidy, repeating way.",
            "trick": "If you cannot describe a change as a fixed step in a fixed direction (for example 'a quarter turn clockwise each time'), it is probably a distractor. Steady equals real, random equals noise."
          }
        ]
      },
      {
        "heading": "The attribute checklist (run through these eight, in order)",
        "items": [
          {
            "term": "1. Rotation (is something turning?)",
            "detail": "Check whether a shape, arrow or pointer is spinning around its centre. A real rotation turns by the same angle every step in the same direction. Common steps are a quarter turn (90 degrees) or an eighth turn (45 degrees), going either clockwise or anticlockwise. An arrow, a clock hand, or a single notch on a shape is the easiest thing to track.",
            "trick": "Pick one clear point, like the tip of an arrow or one corner, and follow only that point picture to picture. If it swings the same amount each time, rotation is your rule. Beware of shapes like circles that look identical when turned, where rotation can be happening but is impossible to see."
          },
          {
            "term": "2. Reflection (is something flipped, not turned?)",
            "detail": "A reflection is a mirror image, like a letter F becoming a backwards F. It is different from rotation: turning keeps the shape itself unchanged and just points it in a new direction, while flipping reverses it into its mirror twin. The giveaway is a lopsided shape that suddenly looks back-to-front in a way that spinning could never produce.",
            "trick": "Ask 'could I get this just by spinning the original shape?'. If yes, it is rotation. If the shape looks back-to-front and no amount of spinning could make it, it was reflected. Shapes with a clear left and right side (F, R, an L-shape) are where flips show up."
          },
          {
            "term": "3. Count (how many things are there?)",
            "detail": "Count the objects, dots, lines, or the number of sides on a shape. Counts usually follow a tidy sequence: one more each step, doubling each step, or a number tied to something else (for example, the number of dots matching the number of sides). Counting is one of the most common rules and one of the easiest to miss because you have to actually stop and count.",
            "trick": "Say the counts out loud as a short list (2, 3, 4 and so on). A steady step like 'plus one' or 'times two' leaps out the moment you hear it, and a list is far easier to carry forward in your head than a picture."
          },
          {
            "term": "4. Shading / fill (what colour or pattern fills it?)",
            "detail": "Look at whether shapes are filled black, left white, shaded grey, striped, or dotted. Fill often flips on and off every picture (black, white, black, white), travels around a group of shapes, or links to another feature (for example, big shapes are always filled). It is easy to spot once you decide to look only at colour and nothing else.",
            "trick": "Read just the fill across the whole row, ignoring shape and size. A black-white-black-white rhythm is extremely common and very easy to overlook when the shapes themselves are also changing."
          },
          {
            "term": "5. Size (is it growing or shrinking?)",
            "detail": "Check whether shapes get bigger, get smaller, or swap between large and small each step. Sometimes the size changes steadily in one direction. Sometimes one element grows while another shrinks at the same time, which is called an inverse or mirror relationship, and it is a favourite trick to make an easy rule look hard.",
            "trick": "If two shapes are present, watch whether they move in opposite directions: as one balloons up, the other may shrink down. Spotting that 'see-saw' pairing can crack the whole item at once."
          },
          {
            "term": "6. Shape / shape-cycle (does the shape itself change?)",
            "detail": "See whether the actual type of shape changes, such as circle to square to triangle. Very often the shapes run through a fixed repeating loop, so once you find where the loop starts over, the next shape is easy to predict. The loop might be length two (just A, B, A, B) or longer.",
            "trick": "Write the shapes as a short loop, like circle-square-triangle-circle-square, and just read off what comes next. If the loop repeats every 3 pictures, then pictures 1, 4 and 7 share the same shape, so you can jump in threes to confirm."
          },
          {
            "term": "7. Position / movement (does something travel?)",
            "detail": "Check whether an element moves around the frame: hopping from corner to corner, sliding one step along an edge, or circling the four corners of a square one place at a time. Movement around corners or around the edge of a circle is very common and quick to verify once you spot it.",
            "trick": "Number the four corners in your mind as positions 1, 2, 3, 4 and watch the dot or marker hop. If it moves one corner clockwise each time, the next position is simply the next number along (and after 4 it goes back to 1)."
          },
          {
            "term": "8. Add / remove (does something appear or vanish?)",
            "detail": "Look for an element that is added or taken away each step: lines building up one at a time, dots being stripped off, or a whole shape appearing or disappearing. This overlaps with counting, but here you focus on which exact element changed rather than just the total number.",
            "trick": "Lay the pictures side by side and ask 'what is here that was not there before?' and 'what has gone?'. The single element that appears or vanishes each step is your rule."
          }
        ]
      },
      {
        "heading": "The method: how to crack any item",
        "items": [
          {
            "term": "Step 1: Find what changes",
            "detail": "Run the eight-point checklist across the pictures and note every feature that is not the same throughout. Whatever stays identical is decoration; whatever moves is your candidate rule. Often only one feature is really changing in a tidy way, and that is the whole answer.",
            "steps": [
              "Look at the first two pictures only, side by side.",
              "Run down the checklist: rotation, reflection, count, fill, size, shape, position, add/remove.",
              "For each feature, decide 'same' or 'changed' between those two pictures.",
              "Mentally cross out everything you marked 'same', it is just decoration.",
              "Whatever is left marked 'changed' is your candidate rule to test next."
            ],
            "trick": "Start with just the first two pictures, not all of them. Most rules show up in that single jump, and you only need the rest to confirm. This saves you from drowning in detail."
          },
          {
            "term": "Step 2: Turn the change into one clear rule",
            "detail": "Describe the change as a precise sentence that includes a direction and a step size, such as 'turns 90 degrees clockwise each step' or 'gains one dot each step'. A vague 'it sort of changes' cannot be checked. A precise rule can be applied and tested, which is what you need.",
            "steps": [
              "Take the one feature you spotted changing.",
              "Say the direction of the change (clockwise, growing, adding, flipping on and off).",
              "Say the size of the step (90 degrees, plus one, double, every other picture).",
              "Join them into one short sentence you could say out loud.",
              "If two features change at once, write a separate sentence for each and treat them as two rules running side by side."
            ],
            "trick": "When two things change together, do not panic. Solve each one on its own (for example, rotation alone, then fill alone), then combine the answers. Hard-looking items are usually two easy rules stacked up."
          },
          {
            "term": "Step 3: Test the rule on every picture",
            "detail": "A true rule must work for all the pictures, not just the first two you looked at. Apply your rule to each picture in turn. If even one picture breaks it, your rule is wrong or incomplete, so adjust it and test again until it fits every single picture.",
            "steps": [
              "Start at picture one and use your rule to predict picture two: does it match?",
              "Use it to predict picture three, then four, and so on to the end.",
              "If every picture matches, your rule is confirmed and you can trust it.",
              "If one picture does not match, your rule is wrong or you have missed a second rule.",
              "Fix the rule (or add the second rule) and run the test again from picture one."
            ],
            "trick": "For a series, apply your confirmed rule one more time after the last picture to work out what the answer should be, then hunt for that exact picture among the options. For odd-one-out, the picture that fails your confirmed rule is the answer."
          },
          {
            "term": "Work backwards from the options when stuck",
            "detail": "If the rule will not show itself, switch to the answer choices instead. Use each feature as a filter and throw out every option that breaks it. Very often three options die straight away on one obvious feature, leaving the answer almost handed to you.",
            "steps": [
              "Pick the single most obvious feature (often fill or count).",
              "Check that one feature in each answer option.",
              "Cross out every option that gets that feature wrong.",
              "Move to the next feature and repeat on the options that are left.",
              "Keep filtering until only one option remains, that is your answer."
            ],
            "trick": "Filter on the easiest feature first, such as black-versus-white or how many dots. One pass on one simple feature usually wipes out most of the wrong options."
          },
          {
            "term": "Spot and ignore the distractors",
            "detail": "Test writers deliberately add features that change in messy, meaningless ways to pull your attention off the real rule. Symmetry that looks important but leads nowhere, or a shape that changes by a different amount each time, is bait. If a feature has no steady direction and no steady step, drop it.",
            "steps": [
              "For each thing that seems to change, ask whether the change is steady and repeating.",
              "If the change has a fixed direction and a fixed step, keep it as a real rule.",
              "If the change is different every step with no pattern, mark it as a distractor.",
              "Ignore the distractor completely and base your answer only on the steady rules."
            ],
            "trick": "Ask of every change: 'Same direction? Same size step?'. Two yeses means a real rule. Any no means it is noise put there to waste your time."
          },
          {
            "term": "Watch the clock and keep moving",
            "detail": "These questions reward speed as much as accuracy. If a rule has not appeared after roughly half a minute, do not keep staring. Use the elimination method to make your best guess, flag the question, and move on. Burning time on one hard pattern costs you several easy marks you could have banked elsewhere.",
            "steps": [
              "Give yourself about 30 to 40 seconds to find the rule.",
              "If it has not surfaced, switch to eliminating options instead.",
              "Pick the best surviving option as your answer.",
              "Flag the question so you can return if time allows.",
              "Move straight on to the next item without dwelling on it."
            ],
            "trick": "A flagged best-guess beats a perfect answer you never reach. Bank the easy marks first, then come back to the hard ones only if time is left over."
          }
        ]
      }
    ]
  },
  "ar": {
    "comp-numerical": [
      {
        "heading": "الصيغ الأساسية",
        "items": [
          {
            "term": "النسبة المئوية من المجموع (الحصة)",
            "formula": "share % = (part / whole) x 100",
            "steps": [
              "جد الجزء (الكمية الأصغر التي تهتم بها) والكل (المجموع الكامل).",
              "اقسم الجزء على الكل؛ يعطيك هذا عددًا عشريًا أقل من 1.",
              "اضرب ذلك العدد العشري في 100 لتحويله إلى نسبة مئوية.",
              "اكتب علامة % بعد الإجابة."
            ],
            "example": "باع فريق 18 من إجمالي مبيعات الشركة البالغة 72 عملية بيع. الخطوة 1: الجزء = 18، الكل = 72. الخطوة 2: 18 / 72 = 0.25. الخطوة 3: 0.25 x 100 = 25. إذن حقق الفريق 25% من المبيعات.",
            "trick": "إذا كان الجزء يقبل القسمة بدقة على الكل، فاكتشف الكسر أولًا: 18/72 = 1/4 = 25%، دون الحاجة إلى آلة حاسبة."
          },
          {
            "term": "التغير في النسبة المئوية (الزيادة)",
            "formula": "% change = (new - old) / old x 100",
            "steps": [
              "خذ القيمة الجديدة (اللاحقة) واطرح منها القيمة القديمة (البدائية)؛ هذا هو مقدار الارتفاع.",
              "اقسم ذلك الارتفاع على القيمة القديمة، وليس أبدًا على الجديدة.",
              "اضرب في 100 للحصول على نسبة مئوية.",
              "الإجابة الموجبة تعني أنها نمت."
            ],
            "example": "يرتفع السعر من 40 إلى 50. الخطوة 1: 50 - 40 = 10. الخطوة 2: 10 / 40 = 0.25. الخطوة 3: 0.25 x 100 = 25. إذن ارتفع بمقدار +25%.",
            "trick": "التغير يوضع في الأعلى، والقيمة البدائية توضع في الأسفل. اقسم دائمًا على المكان الذي بدأت منه."
          },
          {
            "term": "التغير في النسبة المئوية (النقصان)",
            "formula": "% change = (new - old) / old x 100  (answer is negative)",
            "steps": [
              "اطرح القيمة القديمة من القيمة الجديدة؛ في حالة الانخفاض تكون النتيجة سالبة.",
              "اقسم تلك النتيجة على القيمة القديمة (البدائية).",
              "اضرب في 100؛ تخبرك علامة الطرح بأنها انخفضت.",
              "يمكنك تجاهل علامة الطرح والقول فقط إنها انخفضت بذلك العدد من النسبة المئوية."
            ],
            "example": "ينخفض عدد الزوار من 500 إلى 400. الخطوة 1: 400 - 500 = -100. الخطوة 2: -100 / 500 = -0.2. الخطوة 3: -0.2 x 100 = -20. إذن انخفض بمقدار 20%.",
            "trick": "الانخفاض والارتفاع للعودة ليسا متساويين: من 500 إلى 400 هو -20%، لكن من 400 للعودة إلى 500 هو +25% لأن القيمة البدائية أصغر."
          },
          {
            "term": "تطبيق تغير مئوي للأمام",
            "formula": "new = old x (1 +/- change as a decimal)",
            "steps": [
              "حوّل النسبة المئوية إلى عدد عشري بقسمتها على 100 (15% تصبح 0.15).",
              "في حالة الزيادة، أضفها إلى 1 (1 + 0.15 = 1.15). في حالة النقصان، اطرحها من 1 (1 - 0.15 = 0.85).",
              "اضرب القيمة البدائية في ذلك المعامل.",
              "الإجابة تتضمن التغير بالفعل؛ لا تضف أي شيء آخر."
            ],
            "example": "زد 80 بنسبة 15%. الخطوة 1: 15% = 0.15. الخطوة 2: 1 + 0.15 = 1.15. الخطوة 3: 80 x 1.15 = 92. (لإنقاص 80 بنسبة 15%: 80 x 0.85 = 68.)",
            "trick": "كوّن المعامل مرة واحدة بدلًا من إيجاد الجزء وإضافته بشكل منفصل؛ فهذا يوفر خطوة كاملة."
          },
          {
            "term": "النسبة: التكوين والقراءة",
            "formula": "ratio = a : b  (same unit, kept in order)",
            "steps": [
              "تأكد من أن كلتا الكميتين بالوحدة نفسها قبل مقارنتهما.",
              "اكتب الشيء المذكور أولًا، ثم نقطتين رأسيتين، ثم الشيء المذكور ثانيًا.",
              "احتفظ بالعناصر بالترتيب الدقيق الذي يسرده السؤال.",
              "النسبة تقارن الأجزاء ببعضها البعض، وليس بالمجموع."
            ],
            "example": "هناك 12 قطة و8 كلاب. مكتوبة بترتيب 'القطط إلى الكلاب'، تكون النسبة 12 : 8.",
            "detail": "النسبة توضح كيف تقارن الأحجام، وليس كم يبلغ حجم الكل. انتبه لترتيب الأسماء واجعل الوحدات متطابقة (مثلًا كلتاهما بالجرامات) قبل كتابتها."
          },
          {
            "term": "النسبة: التبسيط",
            "formula": "divide every part by the same number",
            "steps": [
              "ابحث عن عدد يقسم كل جزء من النسبة بدقة.",
              "اقسم كل جزء على ذلك العدد.",
              "كرر إذا كانت الأجزاء لا تزال تشترك في عامل مشترك.",
              "توقف عندما لا يوجد عدد واحد (غير 1) يقسمها جميعًا."
            ],
            "example": "بسّط 12 : 8. كلاهما يقبل القسمة على 4: 12 / 4 = 3 و8 / 4 = 2. إذن 12 : 8 = 3 : 2.",
            "trick": "إذا كانت كل الأجزاء زوجية، فاستمر فقط في القسمة على النصف: 12 : 8 تصبح 6 : 4 تصبح 3 : 2. تصل إلى أبسط صورة دون البحث عن أكبر عامل."
          },
          {
            "term": "النسبة: تقسيم مجموع",
            "formula": "one part = total / (sum of ratio numbers), then x each share",
            "steps": [
              "اجمع الأعداد في النسبة لمعرفة عدد الأجزاء الإجمالي.",
              "اقسم الكمية الإجمالية على ذلك المجموع؛ هذه هي قيمة جزء واحد.",
              "اضرب قيمة الجزء الواحد في كل عدد في النسبة.",
              "تحقق من أن النتائج تُجمع لتعود إلى المجموع الأصلي."
            ],
            "example": "قسّم 200 بالنسبة 3 : 2. الخطوة 1: 3 + 2 = 5 أجزاء. الخطوة 2: 200 / 5 = 40 لكل جزء. الخطوة 3: 3 x 40 = 120 و2 x 40 = 80. التحقق: 120 + 80 = 200.",
            "trick": "اجمع إجاباتك معًا دائمًا. إذا لم تكوّن المجموع، فقد قسمت على العدد الخطأ."
          },
          {
            "term": "المتوسط (الوسط الحسابي)",
            "formula": "mean = sum of values / how many values",
            "steps": [
              "اجمع كل القيم للحصول على مجموع واحد.",
              "عُدّ كم عدد القيم الموجودة.",
              "اقسم المجموع على ذلك العدد.",
              "الإجابة هي المتوسط."
            ],
            "example": "جد متوسط 4، 8، 6، 2. الخطوة 1: 4 + 8 + 6 + 2 = 20. الخطوة 2: هناك 4 قيم. الخطوة 3: 20 / 4 = 5. المتوسط هو 5.",
            "trick": "لإيجاد قيمة مفقودة عند إعطاء المتوسط، اضرب المتوسط x العدد للحصول على المجموع المطلوب، ثم اطرح القيم التي لديك بالفعل."
          },
          {
            "term": "الكسر إلى نسبة مئوية",
            "formula": "% = (top / bottom) x 100",
            "steps": [
              "اقسم العدد العلوي للكسر على العدد السفلي.",
              "تحصل على عدد عشري (شيء أقل من 1 للكسر العادي).",
              "اضرب ذلك العدد العشري في 100.",
              "أضف علامة %."
            ],
            "example": "حوّل 3/8 إلى نسبة مئوية. الخطوة 1: 3 / 8 = 0.375. الخطوة 2: 0.375 x 100 = 37.5. إذن 3/8 = 37.5%.",
            "trick": "إذا كان العدد السفلي يقسم 100، فقم بالتدريج بدلًا من ذلك: 3/8، و100 / 8 = 12.5، إذن 3 x 12.5 = 37.5%."
          },
          {
            "term": "الفرق المئوي بين قيمتين",
            "formula": "% difference = (larger - smaller) / starting value x 100",
            "steps": [
              "حدد القيمة البدائية: هي القيمة التي تأتي بعد كلمة 'من' (الشيء الذي تقيس انطلاقًا منه).",
              "اطرح القيمة الأصغر من الأكبر للحصول على الفجوة بينهما.",
              "اقسم تلك الفجوة على القيمة البدائية (قيمة 'من')، وليس على الأخرى.",
              "اضرب في 100 لتحويلها إلى نسبة مئوية."
            ],
            "example": "بكم تزيد 75 عن 60؟ القيمة البدائية هي 60 (تأتي بعد 'عن'). الخطوة 1: 75 - 60 = 15. الخطوة 2: 15 / 60 = 0.25. الخطوة 3: 0.25 x 100 = 25%.",
            "trick": "'بكم تزيد B عن A' تقسم على A. القيمة التي تأتي بعد 'عن' توضع في الأسفل في كل مرة."
          },
          {
            "term": "قراءة الجداول والرسوم البيانية",
            "formula": "value = the row label crossed with the column label",
            "steps": [
              "اقرأ العنوان والوحدات (هل هي %، آلاف، جنيهات؟) والمقياس قبل إجراء أي عمليات حسابية.",
              "جد الصف الذي يطابق المطلوب، ثم انتقل عرضيًا إلى العمود الصحيح.",
              "بالنسبة للأعمدة أو الخطوط، اقرأ أين تصطف مقابل خطوط الشبكة المعلّمة.",
              "استخدم فقط الرقم المطلوب وتجاهل الصفوف الأخرى الموضوعة لتشتيتك."
            ],
            "example": "يقع عمود في منتصف المسافة تمامًا بين خطي شبكة معلّمين بـ 200 و300، فيُقرأ على أنه 250.",
            "detail": "معظم أسئلة الرسوم البيانية تختبر القراءة المتأنية، وليس الرياضيات الصعبة. تحقق من المقياس والوحدات أولًا، ولا تفترض أن خطوط الشبكة تتصاعد بمقدار 1؛ فهي غالبًا تقفز بمقدار 10 أو 100 أو 1000."
          }
        ]
      },
      {
        "heading": "حيل وطرق مختصرة للسرعة",
        "items": [
          {
            "term": "جد 10% أولًا، ثم درّج",
            "detail": "حساب 10% سهل: ما عليك سوى تحريك الفاصلة العشرية مكانًا واحدًا إلى اليسار. ثم اضرب تلك الـ 10% لبناء النسبة المئوية التي تحتاجها فعلًا.",
            "steps": [
              "حرّك الفاصلة العشرية مكانًا واحدًا إلى اليسار للحصول على 10% من العدد.",
              "قرر كم عدد عشرات النسبة المئوية التي تحتاجها (30% هي ثلاث وحدات من 10%).",
              "اضرب قيمة الـ 10% في ذلك العدد."
            ],
            "example": "10% من 240 = 24. لـ 30%: 24 x 3 = 72. لـ 70%: 24 x 7 = 168.",
            "trick": "ابنِ أي نسبة مئوية 'مدوّرة' من كتل الـ 10% بدلًا من الضرب في عدد عشري صعب."
          },
          {
            "term": "5% = نصف 10%، 1% = عُشر 10%",
            "detail": "بمجرد أن تعرف 10%، اقسمها على النصف للحصول على 5% واقسمها على 10 للحصول على 1%، ثم اجمع الأجزاء معًا.",
            "steps": [
              "جد 10% بتحريك الفاصلة العشرية مكانًا واحدًا إلى اليسار.",
              "اقسمها على النصف للحصول على 5%.",
              "اقسم الـ 10% على 10 للحصول على 1%.",
              "اجمع الكتل التي تحتاجها لتكوين النسبة المئوية الدقيقة."
            ],
            "example": "10% من 240 = 24، إذن 5% = 12 و1% = 2.4. ثم 16% = 10% + 5% + 1% = 24 + 12 + 2.4 = 38.4.",
            "trick": "جمّع النسب المئوية الفردية مثل 17% أو 23% من كتل 10% + 5% + 1%."
          },
          {
            "term": "'من' تعني الضرب",
            "detail": "في أي وقت يقول فيه السؤال 'X% من Y' أو 'كسر من Y'، يمكنك استبدال كلمة 'من' بعلامة الضرب.",
            "steps": [
              "حوّل النسبة المئوية أو الكسر إلى عدد عشري (20% = 0.2، 3/5 = 0.6).",
              "استبدل كلمة 'من' بعلامة ضرب.",
              "اضرب العددين معًا."
            ],
            "example": "20% من 90 = 0.2 x 90 = 18. و3/5 من 45 = 0.6 x 45 = 27.",
            "trick": "لا توجد خطوة إضافية؛ بمجرد أن تصبح 'من' علامة 'x'، فهي عملية ضرب واحدة."
          },
          {
            "term": "الزيادة / النقصان باستخدام معامل",
            "detail": "أضف النسبة المئوية إلى 1 للزيادة، واطرحها من 1 للنقصان، ثم اضرب مرة واحدة فقط.",
            "steps": [
              "اكتب النسبة المئوية كعدد عشري (15% = 0.15).",
              "أضفها إلى 1 للارتفاع (1.15) أو اطرحها من 1 للانخفاض (0.85).",
              "اضرب العدد البدائي في ذلك المعامل."
            ],
            "example": "+15%: 200 x 1.15 = 230. -20%: 200 x 0.8 = 160.",
            "trick": "التغيران المتتاليان يتم ضربهما فقط: +10% ثم -10% = 1.1 x 0.9 = 0.99، أي خسارة صافية قدرها 1%، وليس العودة إلى حيث كنت."
          },
          {
            "term": "عكس النسبة المئوية (إيجاد القيمة الأصلية)",
            "formula": "original = final / multiplier",
            "steps": [
              "احسب المعامل الذي تم استخدامه (ارتفاع بنسبة 15% كان x1.15، خفض بنسبة 20% كان x0.8).",
              "خذ القيمة النهائية التي أُعطيت لك.",
              "اقسم القيمة النهائية على ذلك المعامل.",
              "الإجابة هي المبلغ الأصلي قبل التغير."
            ],
            "example": "سعر يبلغ 92 بعد ارتفاع بنسبة 15%. 92 / 1.15 = 80، وهو السعر الأصلي. (بعد خفض بنسبة 20% إلى 160: 160 / 0.8 = 200.)",
            "trick": "لا تطرح أبدًا 15% فقط من السعر الجديد؛ فهذا يعطي إجابة خاطئة. القسمة على المعامل تعكس التغير تمامًا."
          },
          {
            "term": "نقاط النسبة المئوية مقابل النسبة المئوية",
            "detail": "الانتقال من 20% إلى 25% هو ارتفاع بمقدار 5 نقاط مئوية، لكنه زيادة نسبية قدرها 25%. هما شيئان مختلفان، لذا اقرأ الصياغة بعناية.",
            "steps": [
              "إذا قال السؤال 'نقاط'، فاطرح ببساطة نسبة مئوية من الأخرى.",
              "إذا قال 'التغير المئوي' أو 'بكم ارتفع'، فاستخدم (new - old) / old x 100.",
              "طابق طريقتك مع الكلمة الدقيقة المستخدمة."
            ],
            "example": "من 20% إلى 25%: هذا 25 - 20 = 5 نقاط مئوية. كتغير نسبي يكون (25 - 20) / 20 x 100 = +25%.",
            "trick": "'نقاط' = اطرح. 'التغير المئوي' = اقسم على القيمة البدائية."
          },
          {
            "term": "الضرب في 5 = x10 ثم القسمة على النصف",
            "detail": "الضرب في 5 يساوي الضرب في 10 وأخذ النصف. للقسمة على 5، ضاعِف العدد ثم اقسمه على 10.",
            "steps": [
              "للضرب في 5: اضرب في 10 (أضف صفرًا أو حرّك الفاصلة العشرية)، ثم اقسم على النصف.",
              "للقسمة على 5: ضاعِف العدد أولًا، ثم اقسم على 10.",
              "استخدم الاتجاه الذي يحتاجه السؤال."
            ],
            "example": "68 x 5: 68 x 10 = 680، ثم 680 / 2 = 340. و340 / 5: 340 x 2 = 680، ثم 680 / 10 = 68.",
            "trick": "الفكرة نفسها تنطبق على 25: x25 = x100 ثم القسمة على 4. إذن 32 x 25 = 3200 / 4 = 800."
          },
          {
            "term": "التقدير والاستبعاد من الخيارات",
            "detail": "في اختبار متعدد الخيارات لا تحتاج دائمًا إلى الإجابة الدقيقة؛ يمكن لرقم تقريبي أن يستبعد الخيارات الخاطئة على الفور.",
            "steps": [
              "قرّب الأعداد إلى قيم سهلة وأجرِ العملية في رأسك.",
              "قارن إجابتك التقريبية بالخيارات.",
              "اشطب أي خيار يكون بوضوح أكبر مما ينبغي أو أصغر مما ينبغي.",
              "قم بالحساب الدقيق فقط إذا بقي خياران متقاربين."
            ],
            "example": "19% من 412؟ قرّب إلى 20% من 400 = 80. إذا كانت الخيارات 12 و78 و150، فإن 78 فقط قريب من 80، لذا اخترها.",
            "trick": "تحقق أيضًا من الاتجاه للتأكد من المنطقية: إجابة 'الزيادة' يجب أن تكون أكبر من البداية؛ و'الحصة' يجب أن تكون أقل من الكل."
          }
        ]
      },
      {
        "heading": "الكسر <-> النسبة المئوية (يستحق الحفظ)",
        "items": [
          {
            "term": "1/2",
            "detail": "50%"
          },
          {
            "term": "1/3",
            "detail": "حوالي 33.3% (الثلث)"
          },
          {
            "term": "2/3",
            "detail": "حوالي 66.7% (الثلثان)"
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
        "heading": "الحساب الأساسي (منقول من المستوى التمهيدي)",
        "items": [
          {
            "term": "النسبة المئوية من قيمة",
            "formula": "part = (percent / 100) x whole",
            "steps": [
              "حوّل النسبة المئوية إلى عدد عشري بقسمتها على 100 (فتصبح 18% هي 0.18).",
              "اضرب ذلك العدد العشري في العدد الكلي المعطى لك.",
              "الناتج هو حجم تلك الشريحة من الكل."
            ],
            "example": "18% من 4,500: 18 / 100 = 0.18، ثم 0.18 x 4,500 = 810.",
            "trick": "ابنِها من كتل سهلة: 10% من 4,500 هي 450 و1% هي 45. إذن 18% = 450 + 45 + 45 + 45 + 45 + 45 + 45 + 45 + 45 = 810. وأسرع من ذلك: 20% هي 900، ثم اطرح 2% (وهي 90) لتصل إلى 810."
          },
          {
            "term": "التغير في النسبة المئوية (زيادة أو نقصان)",
            "formula": "% change = ((new - old) / old) x 100",
            "steps": [
              "اطرح القيمة القديمة من القيمة الجديدة للحصول على الفجوة (الناتج السالب يعني أنها انخفضت).",
              "اقسم تلك الفجوة على القيمة القديمة (الابتدائية).",
              "اضرب في 100 لتحويلها إلى نسبة مئوية."
            ],
            "example": "ترتفع المبيعات من 250 إلى 320: 320 - 250 = 70، ثم 70 / 250 = 0.28، ثم x 100 = 28% زيادة.",
            "trick": "اقسم دائمًا على العدد القديم، لا على الجديد أبدًا. الفجوة توضع في الأعلى."
          },
          {
            "term": "النسبة المئوية العكسية (إيجاد القيمة الأصلية)",
            "formula": "original = final / (1 + percent/100)   [use (1 - percent/100) for a fall]",
            "steps": [
              "حدد المُضاعِف: زيادة بنسبة 15% تعني 1.15؛ نقصان بنسبة 15% يعني 0.85.",
              "اقسم الرقم النهائي على ذلك المُضاعِف.",
              "الناتج هو القيمة التي بدأت بها قبل التغير."
            ],
            "example": "138 تتضمن بالفعل زيادة 15%: المُضاعِف هو 1.15، إذن 138 / 1.15 = 120.",
            "trick": "لا تطرح النسبة المئوية من الرقم النهائي مطلقًا. اقسم على المُضاعِف للتراجع عن التغير بدقة."
          },
          {
            "term": "تقاسم النسبة",
            "formula": "share = total x (your part / sum of all parts)",
            "steps": [
              "اجمع كل الأرقام في النسبة للحصول على إجمالي عدد الأجزاء.",
              "اقسم المبلغ الإجمالي على ذلك العدد من الأجزاء لإيجاد قيمة الجزء الواحد.",
              "اضرب قيمة الجزء الواحد في كل رقم من أرقام النسبة للحصول على كل حصة.",
              "تحقق من أن مجموع الحصص يعود إلى الإجمالي الأصلي."
            ],
            "example": "اقسم 60,000 بنسبة 3:2:1. مجموع الأجزاء 6، إذن الجزء الواحد = 60,000 / 6 = 10,000. الحصص = 30,000 و20,000 و10,000 (والتي مجموعها 60,000).",
            "trick": "أوجد الجزء الواحد أولًا، ثم اضرب فيه كل رقم من أرقام النسبة."
          },
          {
            "term": "معدل الوحدة / الطريقة الأحادية",
            "formula": "per-unit value = total / number of units, then scale up",
            "steps": [
              "اقسم الإجمالي على عدد الوحدات لإيجاد قيمة الوحدة الواحدة.",
              "اضرب قيمة الوحدة الواحدة في العدد الجديد من الوحدات الذي يسأل عنه السؤال."
            ],
            "example": "7 آلات تنتج 1,400 وحدة، إذن آلة واحدة تنتج 1,400 / 7 = 200. ثم 12 آلة تنتج 200 x 12 = 2,400.",
            "trick": "اوصل دائمًا إلى قيمة الواحد أولًا، ثم اضرب وصولًا إلى أي عدد تحتاجه."
          },
          {
            "term": "المتوسط البسيط (الوسط الحسابي)",
            "formula": "mean = sum of values / count of values",
            "steps": [
              "اجمع كل القيم معًا.",
              "احسب عدد القيم الموجودة.",
              "اقسم الإجمالي على ذلك العدد."
            ],
            "example": "الأرباح 40، 55، 70، 35: الإجمالي = 200، العدد = 4، إذن 200 / 4 = 50.",
            "trick": "يجب أن يقع الوسط الحسابي بين أصغر قيمة وأكبرها، فألقِ نظرة على المدى للتحقق من المعقولية."
          }
        ]
      },
      {
        "heading": "الربح والهامش والتكلفة",
        "items": [
          {
            "term": "الربح",
            "formula": "profit = revenue - cost",
            "steps": [
              "أوجد إجمالي الأموال الداخلة (الإيراد).",
              "أوجد إجمالي الأموال الخارجة (التكلفة).",
              "اطرح التكلفة من الإيراد. الناتج السالب يعني خسارة."
            ],
            "example": "الإيراد 850,000 والتكلفة 610,000: الربح = 850,000 - 610,000 = 240,000.",
            "trick": "إذا كانت هناك عدة بنود تكلفة مدرجة، اجمعها كلها أولًا، ثم نفّذ عملية طرح واحدة."
          },
          {
            "term": "هامش الربح (كنسبة مئوية من المبيعات)",
            "formula": "profit margin = (profit / revenue) x 100",
            "steps": [
              "احسب الربح أولًا (الإيراد ناقص التكلفة) إن لم يُعطَ لك.",
              "اقسم الربح على الإيراد.",
              "اضرب في 100 لجعله نسبة مئوية."
            ],
            "example": "ربح 240,000 على إيراد 850,000: 240,000 / 850,000 = 0.282، ثم x 100 = 28.2%.",
            "trick": "الهامش يُقسم دائمًا على الإيراد (الرقم الأكبر)، لذا فإن الهامش المعقول لا يمكن أن يتجاوز 100% أبدًا. إن تجاوزه، فقد قسمت على الرقم الخطأ."
          },
          {
            "term": "هامش التكلفة مقابل هامش الربح (لا تخلط بينهما)",
            "formula": "markup = (profit / cost) x 100",
            "steps": [
              "احسب الربح (الإيراد ناقص التكلفة).",
              "لهامش التكلفة، اقسم الربح على التكلفة؛ ولهامش الربح، اقسم الربح على الإيراد.",
              "اضرب في 100."
            ],
            "example": "ربح 240,000 على تكلفة 610,000: 240,000 / 610,000 = 0.393، x 100 = 39.3% هامش تكلفة، وهو أعلى من هامش الربح 28.2% على نفس الأرقام.",
            "trick": "هامش التكلفة يُقسم على التكلفة، وهامش الربح يُقسم على الإيراد. في حالة الربح، يكون هامش التكلفة دائمًا الأكبر من الاثنين."
          },
          {
            "term": "إجمالي الربح وإجمالي الهامش",
            "formula": "gross profit = revenue - COGS;  gross margin = (gross profit / revenue) x 100",
            "steps": [
              "اطرح تكلفة البضائع المباعة (COGS) من الإيراد للحصول على إجمالي الربح.",
              "اقسم إجمالي الربح ذلك على الإيراد.",
              "اضرب في 100 للحصول على نسبة إجمالي الهامش المئوية."
            ],
            "example": "إيراد 500,000 مع تكلفة بضائع مباعة 300,000: إجمالي الربح = 200,000، إجمالي الهامش = 200,000 / 500,000 x 100 = 40%.",
            "trick": "يستخدم الإجمالي تكلفة صنع البضائع فقط؛ تجاهل المصاريف العامة ما لم يذكرها السؤال."
          },
          {
            "term": "استرجاع الربح من الإيراد والهامش",
            "formula": "profit = revenue x (margin / 100)",
            "steps": [
              "حوّل نسبة الهامش المئوية إلى عدد عشري (اقسم على 100).",
              "اضرب الإيراد في ذلك العدد العشري.",
              "الناتج هو الربح بالمال."
            ],
            "example": "إيراد 1,200,000 بهامش 22%: 22 / 100 = 0.22، ثم 1,200,000 x 0.22 = 264,000.",
            "trick": "تعامل مع الهامش كأي نسبة مئوية أخرى من قيمة: فقط اضرب الإيراد فيه."
          }
        ]
      },
      {
        "heading": "الانحراف عن الهدف أو الميزانية",
        "items": [
          {
            "term": "الانحراف المطلق (الفرق المالي)",
            "formula": "variance = actual - target   (positive = over, negative = under)",
            "steps": [
              "خذ الرقم الفعلي.",
              "اطرح الرقم المستهدف (أو الميزانية).",
              "الناتج الموجب يعني تجاوز الهدف؛ والناتج السالب يعني أقل من الهدف."
            ],
            "example": "الإنفاق الفعلي 92,000 مقابل ميزانية 80,000: 92,000 - 80,000 = +12,000 (تجاوز الميزانية).",
            "trick": "احتفظ بالفعلي أولًا والمستهدف ثانيًا، حتى تُقرأ إشارة الموجب/السالب بالاتجاه الصحيح."
          },
          {
            "term": "الانحراف كنسبة مئوية",
            "formula": "variance % = ((actual - target) / target) x 100",
            "steps": [
              "اطرح المستهدف من الفعلي للحصول على الفرق المالي.",
              "اقسم ذلك الفرق على المستهدف.",
              "اضرب في 100."
            ],
            "example": "الفعلي 92,000 مقابل المستهدف 80,000: الفرق = 12,000، ثم 12,000 / 80,000 = 0.15، x 100 = 15% تجاوزًا.",
            "trick": "هذا مجرد تغير في النسبة المئوية مع المستهدف كقيمة قديمة، فاقسم على المستهدف، لا على الفعلي."
          },
          {
            "term": "اتجاه مُلائم مقابل اتجاه سلبي",
            "detail": "بعض الانحرافات جيدة وبعضها سيئ، حتى عندما تكون العملية الحسابية متطابقة. بالنسبة للإيراد، يُعد تجاوز الهدف أمرًا جيدًا (مُلائمًا)؛ وبالنسبة للتكلفة، يُعد تجاوز الهدف أمرًا سيئًا (سلبيًا). قرر ما إذا كان الارتفاع مفيدًا قبل أن تثق بإشارة الموجب أو السالب.",
            "example": "الإيراد الذي يزيد 5% عن الهدف مُلائم، لكن التكلفة التي تزيد 5% عن الهدف سلبية، رغم أن كليهما يُحسب على أنه +5%.",
            "trick": "اسأل 'هل نريد المزيد من هذا؟' نعم للدخل، لا للإنفاق. سمِّه قبل أن تُبلغ عنه."
          },
          {
            "term": "نسبة التحقيق / الإنجاز",
            "formula": "attainment % = (actual / target) x 100",
            "steps": [
              "اقسم الرقم الفعلي على الرقم المستهدف.",
              "اضرب في 100.",
              "أقل من 100% يعني أقل من الهدف؛ وأعلى من 100% يعني تجاوزًا له."
            ],
            "example": "المبيعات الفعلية 117,000 مقابل هدف 130,000: 117,000 / 130,000 = 0.90، x 100 = 90% من الهدف.",
            "trick": "التحقيق مع العجز يُكوّنان 100%، إذن 90% منجزة هي نفسها 10% أقل من الهدف."
          }
        ]
      },
      {
        "heading": "النسب المئوية مقابل النقاط المئوية",
        "items": [
          {
            "term": "الفرق بالنقاط المئوية",
            "formula": "pp difference = new percentage - old percentage   (a plain subtraction)",
            "steps": [
              "تحقق من أن كلا الرقمين نسبتان مئويتان بالفعل.",
              "اطرح النسبة المئوية الأصغر من الأكبر.",
              "سمِّ الناتج 'نقاطًا مئوية'، لا 'نسبة مئوية'."
            ],
            "example": "تنتقل الحصة السوقية من 12% إلى 15%: 15 - 12 = 3 نقاط مئوية.",
            "trick": "عندما يكون كلا الرقمين بالفعل بالنسبة المئوية، فإن 'النقاط' تعني فقط الطرح. لا حاجة للقسمة."
          },
          {
            "term": "النقاط المئوية مقابل التغير النسبي في النسبة المئوية",
            "formula": "points = new% - old%;  relative % = ((new% - old%) / old%) x 100",
            "steps": [
              "للنقاط، اطرح النسبة المئوية القديمة من النسبة المئوية الجديدة.",
              "للتغير النسبي في النسبة المئوية، خذ تلك الفجوة واقسمها على النسبة المئوية القديمة.",
              "اضرب في 100 للحصول على الرقم النسبي."
            ],
            "example": "من 12% إلى 15%: النقاط = 15 - 12 = 3. النسبي = 3 / 12 = 0.25، x 100 = 25%.",
            "trick": "'أعلى بنقاط' تعني الطرح؛ و'أعلى بنسبة مئوية' تعني القسمة على النسبة المئوية الابتدائية."
          },
          {
            "term": "الفارق / الفجوة بين معدلين",
            "formula": "gap = rate A - rate B   (answer is in percentage points)",
            "steps": [
              "صُفّ المعدلين (تأكد من أن كليهما نسبتان مئويتان).",
              "اطرح أحدهما من الآخر.",
              "أبلغ عن الناتج بالنقاط المئوية."
            ],
            "example": "معدل القرض 7.5% ناقص معدل الإيداع 2.1%: 7.5 - 2.1 = 5.4 نقطة مئوية.",
            "trick": "الفارق دائمًا طرح معدلين، وليس قسمة أبدًا."
          }
        ]
      },
      {
        "heading": "المتوسطات المرجحة",
        "items": [
          {
            "term": "المتوسط المرجح (الوسط المرجح)",
            "formula": "weighted average = (sum of value x weight) / (sum of weights)",
            "steps": [
              "اضرب كل قيمة في وزنها الخاص (حجمها أو كميتها أو عددها).",
              "اجمع كل تلك النواتج معًا.",
              "اجمع كل الأوزان وحدها.",
              "اقسم الإجمالي الأول على إجمالي الأوزان."
            ],
            "example": "الأسعار 10، 20، 30 بأحجام 5، 3، 2: (10x5) + (20x3) + (30x2) = 50 + 60 + 60 = 170. الأوزان مجموعها 5 + 3 + 2 = 10. إذن 170 / 10 = 17.",
            "trick": "يميل الناتج دائمًا نحو القيمة ذات الوزن الأكبر، فاستخدم ذلك للتحقق من المعقولية."
          },
          {
            "term": "المعدل المُمزج عبر المجموعات",
            "formula": "blended rate = (sum of size x rate) / (sum of sizes)",
            "steps": [
              "اضرب حجم كل مجموعة في معدلها.",
              "اجمع تلك النواتج معًا.",
              "اجمع كل أحجام المجموعات.",
              "اقسم الإجمالي الأول على إجمالي الحجم."
            ],
            "example": "200 موظف بمعدل 4% و50 موظفًا بمعدل 10%: (200x4) + (50x10) = 800 + 500 = 1,300. الأحجام مجموعها 250. إذن 1,300 / 250 = 5.2%.",
            "trick": "يقع الناتج أقرب إلى المجموعة الأكبر: 5.2% تقع قريبًا من مجموعة الـ200 ذات الـ4%، لا عند منتصف الطريق 7%."
          },
          {
            "term": "لماذا لا يمكنك مجرد حساب المتوسط البسيط للنسب المئوية",
            "detail": "المتوسط البسيط لنسبتين مئويتين يكون صحيحًا فقط عندما تكون المجموعتان بنفس الحجم تمامًا. إذا اختلفت المجموعتان، فيجب أن ترجح كل معدل بعدد الأشخاص أو العناصر الكامنة وراءه، وإلا فسيكون جوابك خاطئًا.",
            "example": "حساب متوسط 4% و10% ببساطة يعطي 7%، لكن مع 200 شخص بمعدل 4% و50 فقط بمعدل 10%، فإن الرقم المُمزج الحقيقي هو 5.2%.",
            "trick": "إذا أعطاك السؤال أحجام المجموعات، فذلك تلميح لك بالترجيح، لا بحساب المتوسط البسيط."
          }
        ]
      },
      {
        "heading": "الأرقام القياسية",
        "items": [
          {
            "term": "الرقم القياسي (القيمة نسبةً إلى الأساس)",
            "formula": "index = (value in period / value in base period) x 100",
            "steps": [
              "اقسم قيمة الفترة الحالية على قيمة فترة الأساس.",
              "اضرب في 100.",
              "تخرج فترة الأساس دائمًا بقيمة 100 بالضبط."
            ],
            "example": "إنتاج الأساس 4,000 والإنتاج الحالي 4,600: 4,600 / 4,000 = 1.15، x 100 = 115.",
            "trick": "الرقم القياسي يعيد قياس كل شيء فقط بحيث تساوي سنة الأساس 100، مما يسهّل قراءة التغيرات."
          },
          {
            "term": "قراءة النمو مباشرة من الرقم القياسي",
            "formula": "cumulative % change since base = index - 100",
            "steps": [
              "خذ قيمة الرقم القياسي.",
              "اطرح 100.",
              "الناتج هو إجمالي التغير المئوي منذ سنة الأساس (السالب يعني أقل من الأساس)."
            ],
            "example": "الرقم القياسي 115 يعني 115 - 100 = 15% فوق سنة الأساس؛ والرقم القياسي 92 يعني 92 - 100 = 8% تحتها.",
            "trick": "بما أن الأساس هو 100، اطرح فقط 100 لتقرأ إجمالي التغير في لمحة."
          },
          {
            "term": "مقارنة فترتين ضمن سلسلة رقم قياسي",
            "formula": "% change = ((later index - earlier index) / earlier index) x 100",
            "steps": [
              "اطرح الرقم القياسي الأسبق من الرقم القياسي الأحدث.",
              "اقسم تلك الفجوة على الرقم القياسي الأسبق (لا على 100).",
              "اضرب في 100."
            ],
            "example": "رقم قياسي من 120 إلى 138: 138 - 120 = 18، ثم 18 / 120 = 0.15، x 100 = 15%.",
            "trick": "بين فترتين ليستا أساسًا، اقسم على الرقم القياسي الأسبق. فجوة النقاط وحدها هي الجواب الخطأ."
          },
          {
            "term": "إعادة تأسيس رقم قياسي إلى سنة أساس جديدة",
            "formula": "new index = (old index / old index of the new base year) x 100",
            "steps": [
              "اختر السنة التي ستصبح الأساس الجديد ودوّن قيمة رقمها القياسي القديم.",
              "اقسم الرقم القياسي القديم لكل سنة على الرقم القياسي القديم للسنة المختارة.",
              "اضرب كل ناتج في 100 بحيث تُقرأ سنة الأساس الجديدة 100."
            ],
            "example": "الأرقام القياسية القديمة 125 (2024) و150 (2025)، مع إعادة التأسيس إلى 2024: 2025 = 150 / 125 = 1.2، x 100 = 120.",
            "trick": "أي سنة تعيد التأسيس إليها يجب أن تنتهي إلى 100 بالضبط؛ استخدم ذلك للتحقق."
          }
        ]
      },
      {
        "heading": "النمو عبر الفترات (التراكم)",
        "items": [
          {
            "term": "النمو المركب (القيمة المستقبلية)",
            "formula": "final = initial x (1 + r)^n",
            "steps": [
              "حوّل المعدل إلى مُضاعِف بإضافته إلى 1 (6% تصبح 1.06).",
              "ارفع ذلك المُضاعِف إلى أس عدد الفترات (اضربه في نفسه n مرة).",
              "اضرب المبلغ الابتدائي في ذلك الناتج."
            ],
            "example": "100,000 تنمو 6%/سنة لمدة 3 سنوات: 1.06 x 1.06 x 1.06 = 1.191016، ثم 100,000 x 1.191016 = 119,102.",
            "trick": "للتحقق التقريبي، n سنة بمعدل r% أكثر بقليل من n x r% (3 x 6% = 18%، والجواب الحقيقي 19.1%)."
          },
          {
            "term": "إجمالي عامل النمو عبر عدة فترات",
            "formula": "overall factor = product of each period's (1 + rate)",
            "steps": [
              "حوّل تغير كل فترة إلى مُضاعِف (+10% هي 1.10، -5% هي 0.95).",
              "اضرب كل المُضاعِفات معًا.",
              "اطرح 1 واضرب في 100 لتقرأ إجمالي التغير المئوي."
            ],
            "example": "+10%، -5%، +8%: 1.10 x 0.95 x 1.08 = 1.1286، وهي 0.1286 x 100 = نحو 12.9% إجمالًا.",
            "trick": "اضرب العوامل؛ لا تجمع النسب المئوية أبدًا، لأن كل فترة تبني على سابقتها."
          },
          {
            "term": "معدل النمو السنوي المركب (CAGR)",
            "formula": "CAGR = (final / initial)^(1/n) - 1",
            "steps": [
              "اقسم القيمة النهائية على القيمة الابتدائية للحصول على إجمالي العامل.",
              "خذ الجذر النوني لذلك العامل (لـ4 سنوات، الجذر الرابع، أي ارفعه إلى الأس 1/4).",
              "اطرح 1، ثم اضرب في 100 للحصول على النسبة المئوية السنوية."
            ],
            "example": "من 200,000 إلى 338,000 خلال 4 سنوات: 338,000 / 200,000 = 1.69، الجذر الرابع لـ1.69 = 1.140، ناقص 1 = 0.140، x 100 = 14.0%/سنة.",
            "trick": "إذا لم يكن في حاسبتك زر للجذر، فإن الجذر النوني هو نفسه الرفع إلى الأس 1 مقسومًا على n."
          },
          {
            "term": "متوسط نمو الفترة من إجمالي التغير",
            "formula": "per-period rate = (1 + total change)^(1/n) - 1",
            "steps": [
              "حوّل إجمالي التغير إلى عامل (زيادة إجمالية 44% هي 1.44).",
              "خذ الجذر النوني لذلك العامل (خلال سنتين، الجذر التربيعي).",
              "اطرح 1 واضرب في 100."
            ],
            "example": "44% إجمالًا خلال سنتين: الجذر التربيعي لـ1.44 = 1.20، ناقص 1 = 0.20، x 100 = 20% سنويًا.",
            "trick": "لا تقسم إجمالي النسبة المئوية على النصف فقط؛ فذلك يبالغ فيها. خذ جذر العامل بدلًا من ذلك."
          }
        ]
      },
      {
        "heading": "مسائل الجداول متعددة الخطوات (بأسلوب تنفيذي)",
        "items": [
          {
            "term": "ادمج الخلايا قبل الخطوة الأخيرة",
            "formula": "aggregate the cells first, then apply one formula",
            "steps": [
              "أوجد كل خلية يحتاجها السؤال واجمعها في الإجماليات التي تحتاجها.",
              "نفّذ الإجماليات الجارية أولًا (مثلًا إجمالي الإيراد وإجمالي التكلفة).",
              "طبّق المعادلة النهائية مرة واحدة على تلك الإجماليات."
            ],
            "example": "إيراد الربع الأول إلى الرابع 120، 140، 160، 180 = 600 إجمالًا؛ التكاليف 90، 100، 110، 120 = 420 إجمالًا. الربح = 600 - 420 = 180، الهامش = 180 / 600 x 100 = 30%.",
            "trick": "اجمع الصفوف التي تحتاجها قبل القسمة، حتى لا تنفّذ معادلة النسبة المئوية إلا مرة واحدة."
          },
          {
            "term": "البحث في جدولين ثم الحساب",
            "formula": "pull one figure from each table, then combine",
            "steps": [
              "اقرأ الرقم الأول بعناية من الجدول الأول.",
              "اقرأ الرقم المطابق من الجدول الثاني.",
              "اجمع الاثنين بأي عملية يطلبها السؤال (ضرب، طرح، إلخ)."
            ],
            "example": "وحدات 2,500 من الجدول A بسعر 48 من الجدول B: الإيراد = 2,500 x 48 = 120,000؛ مع تكلفة 84,000، الربح = 120,000 - 84,000 = 36,000.",
            "trick": "تحقق مرتين من أنك طابقت الصف والعمود الصحيحين في كل جدول قبل الضرب."
          },
          {
            "term": "مجموع جزئي ثم نسبة مئوية من الكل",
            "formula": "share % = (sum of qualifying rows / grand total) x 100",
            "steps": [
              "اجمع فقط الصفوف التي يسأل عنها السؤال.",
              "اقسم ذلك المجموع الجزئي على الإجمالي الكلي لكل شيء.",
              "اضرب في 100."
            ],
            "example": "المناطق 40، 55، 30 من إجمالي 250: 40 + 55 + 30 = 125، ثم 125 / 250 = 0.5، x 100 = 50%.",
            "trick": "تأكد من أن الإجمالي الكلي هو الكل، لا مجرد الصفوف التي جمعتها."
          },
          {
            "term": "اربط معدلًا برقم حسبته للتو",
            "formula": "apply the next rate to the intermediate result",
            "steps": [
              "احسب الرقم الوسيط أولًا (مثلًا الربح).",
              "للخصم، اضرب فيما تبقى (خفض بنسبة 25% يعني الضرب في 0.75).",
              "للإضافة، اضرب في 1 زائد المعدل."
            ],
            "example": "ربح 36,000، ثم ضريبة 25%: احتفظ بـ100% - 25% = 75%، إذن 36,000 x 0.75 = 27,000 بعد الضريبة.",
            "trick": "للخصم، اضرب فيما تبقى في خطوة واحدة بدلًا من حساب الخفض ثم طرحه."
          },
          {
            "term": "مقياس لكل وحدة من الإجماليات",
            "formula": "per-unit = total value / total units (combine across rows first)",
            "steps": [
              "اجمع إجمالي القيمة عبر كل الصفوف.",
              "اجمع إجمالي عدد الوحدات عبر كل الصفوف.",
              "اقسم إجمالي القيمة على إجمالي الوحدات مرة واحدة في النهاية."
            ],
            "example": "إيراد 120 + 180 = 300 على وحدات 5 + 10 = 15: متوسط الإيراد لكل وحدة = 300 / 15 = 20.",
            "trick": "اجمع الإجماليات واقسم مرة واحدة؛ لا تحسب متوسط أرقام كل وحدة المنفصلة، لأن ذلك يتجاهل الأحجام المختلفة."
          },
          {
            "term": "تحقق من معقولية حجم جوابك",
            "detail": "بعد عدة خطوات يسهل الانزلاق. قبل أن تلتزم بالجواب، اسأل ما إذا كان معقولًا: لا يمكن أن يتجاوز الهامش 100%، ولا يمكن أن يكون الجزء أكبر من الكل، ويجب أن تطابق الوحدات ما طُلب. إذا بدا شيء غير صحيح، فأعد قراءة أي أساس أراده السؤال.",
            "example": "إذا خرج 'هامش' بقيمة 140%، فأنت على الأرجح قسمت على التكلفة ووجدت هامش تكلفة بدلًا من هامش ربح.",
            "trick": "سؤال سريع 'هل هذا منطقي؟' يلتقط معظم انزلاقات الخطوات المتعددة قبل أن تكلفك الدرجة."
          }
        ]
      },
      {
        "heading": "حيل السرعة والاختصارات",
        "items": [
          {
            "term": "أوجد 10% أولًا، ثم تدرّج إلى أي نسبة مئوية",
            "formula": "10% = value / 10",
            "steps": [
              "حرّك الفاصلة العشرية مكانًا واحدًا إلى اليسار للحصول على 10%.",
              "اضرب رقم الـ10% ذلك في عدد العشرات الذي تحتاجه.",
              "أضف أو اطرح كتلًا أصغر إذا لم تكن النسبة المئوية عشرة مستديرة."
            ],
            "example": "10% من 340 = 34. إذن 30% = 3 x 34 = 102، و70% = 7 x 34 = 238.",
            "trick": "ابنِ أي نسبة مئوية 'لطيفة' من كتل الـ10% بدلًا من الضرب في عدد عشري صعب."
          },
          {
            "term": "5% هي نصف 10%؛ 1% هي عُشر 10%",
            "formula": "5% = 10% / 2;  1% = 10% / 10",
            "steps": [
              "احسب 10% أولًا.",
              "قسّمها على النصف للحصول على 5%.",
              "اقسم الـ10% على 10 للحصول على 1%.",
              "اجمع الكتل التي تحتاجها معًا."
            ],
            "example": "على 340: 10% = 34، 5% = 17، 1% = 3.4. إذن 16% = 34 + 17 + 3.4 = 54.4.",
            "trick": "أي نسبة مئوية صحيحة هي مزيج سريع من العشرات والخمسات والآحاد مجموعة."
          },
          {
            "term": "'من' تعني الضرب",
            "formula": "A% of B = (A / 100) x B",
            "steps": [
              "كلما رأيت 'من'، استبدلها بإشارة ضرب.",
              "حوّل النسبة المئوية أو الكسر إلى عدد عشري.",
              "اضربه في العدد الآخر."
            ],
            "example": "25% من 80 = 0.25 x 80 = 20.",
            "trick": "إنها قابلة للعكس: 25% من 80 تساوي 80% من 25، فاعكسها إن كان الاتجاه الآخر أسهل."
          },
          {
            "term": "الزيادة أو النقصان بمُضاعِف",
            "formula": "+x% means x (1 + x/100);  -x% means x (1 - x/100)",
            "steps": [
              "للزيادة، أضف النسبة المئوية (كعدد عشري) إلى 1؛ وللنقصان، اطرحها من 1.",
              "اضرب القيمة في ذلك المُضاعِف الواحد.",
              "اقرأ الجواب مباشرة، دون إضافة أو طرح إضافي."
            ],
            "example": "+15% هي x1.15: 200 x 1.15 = 230. -20% هي x0.80: 200 x 0.80 = 160.",
            "trick": "عملية ضرب واحدة أفضل من حساب التغير ثم إضافته أو طرحه على حدة."
          },
          {
            "term": "اعكس نسبة مئوية (تراجع عن المُضاعِف)",
            "formula": "original = final / multiplier",
            "steps": [
              "احسب المُضاعِف الذي استخدمه التغير (زيادة 20% هي 1.20، خفض 20% هو 0.80).",
              "اقسم الرقم النهائي على ذلك المُضاعِف.",
              "الناتج هو القيمة قبل التغير."
            ],
            "example": "بعد زيادة 20% أصبح السعر 240: 240 / 1.20 = 200 كانت القيمة الأصلية.",
            "trick": "لإزالة زيادة أو خصم، اقسم على المُضاعِف؛ لا تُعِد إضافة النسبة المئوية فحسب أبدًا."
          },
          {
            "term": "النقاط المئوية مقابل النسبة المئوية",
            "formula": "points = new% - old%   (subtract, do not divide)",
            "steps": [
              "تحقق من أن كلا الرقمين نسبتان مئويتان بالفعل.",
              "إذا قال السؤال 'نقاط'، فاطرح ببساطة أحدهما من الآخر.",
              "إذا قال 'تغير بالنسبة المئوية'، فاقسم الفجوة على النسبة المئوية الابتدائية بدلًا من ذلك."
            ],
            "example": "شريحة ضريبية تنتقل من 20% إلى 25% ترتفع 5 نقاط مئوية، لكنها 25% بالقيمة النسبية (5 / 20 x 100).",
            "trick": "'النقاط' هي طرح؛ و'التغير بالنسبة المئوية' هو قسمة. تبيّن الكلمة أولًا."
          },
          {
            "term": "اضرب في 5 بالطريقة السريعة",
            "formula": "x5 = (x10) / 2",
            "steps": [
              "اضرب العدد في 10 (أضف صفرًا أو حرّك الفاصلة العشرية إلى اليمين).",
              "قسّم الناتج على النصف."
            ],
            "example": "68 x 5 = 680 / 2 = 340.",
            "trick": "مفيد أيضًا: x25 = x100 ثم القسمة على 4 (32 x 25 = 3,200 / 4 = 800)."
          },
          {
            "term": "اعمل بالعكس من الخيارات وقدّر",
            "detail": "في الاختيار من متعدد لا تحتاج دائمًا إلى الجواب الدقيق. قرّب الأرقام إلى أرقام سهلة، واحسب رقمًا تقريبيًا، واستبعد أي خيار يكون حجمه خاطئًا بوضوح قبل إجراء العملية الدقيقة.",
            "example": "18% من 612: 10% نحو 61 و20% نحو 122، إذن القيمة الحقيقية تقع قرب 110 ويمكنك استبعاد أي خيار بعيد.",
            "trick": "يمكنك أيضًا اختبار خيار بإعادة إدخاله في السؤال؛ الخيار الذي يناسب يفوز، غالبًا أسرع من الحل للأمام."
          }
        ]
      },
      {
        "heading": "الكسر <-> النسبة المئوية (يستحق الحفظ)",
        "items": [
          {
            "term": "1/2",
            "detail": "50%"
          },
          {
            "term": "1/3",
            "detail": "33.3% (دورية)"
          },
          {
            "term": "2/3",
            "detail": "66.7% (دورية)"
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
        "heading": "ابدأ من هنا: كيف تعمل الأسئلة اللفظية",
        "items": [
          {
            "term": "ما الذي تختبره هذه الأسئلة حقًا",
            "detail": "تحصل على مقطع نصي قصير، ثم مجموعة من العبارات أو الأسئلة عنه. مهمتك ليست معرفة الموضوع، وليست أن تكون ذكيًا. مهمتك أن تُظهر أنك تستطيع القراءة بعناية والإجابة باستخدام ما تخبرك به الكلمات الموجودة على الصفحة فقط. تعامل مع الأمر كأنك تتحقق من إيصال: تقارن ما يُدّعى بما هو مكتوب، ولا شيء أكثر من ذلك."
          },
          {
            "term": "أنواع الأسئلة الثلاثة التي ستواجهها",
            "detail": "أولًا، صحيح/خطأ/لا يمكن الجزم: تقرر ما إذا كانت العبارة تطابق المقطع. ثانيًا، المرادف في السياق: تختار الكلمة التي تعني نفس معنى كلمة مستخدمة في المقطع. ثالثًا، التفصيل المذكور: تجد حقيقة محددة يقدمها المقطع، مثل اسم أو رقم أو سبب. مهارة القراءة واحدة في الأنواع الثلاثة؛ ما يتغير هو صياغة السؤال فقط."
          },
          {
            "term": "القاعدة الذهبية الوحيدة",
            "detail": "أجب من المقطع ولا شيء غيره. انسَ ما تعرفه أو تعتقده أو تفترض أنه بديهي شخصيًا. إذا لم يقل المقطع ذلك، فأنت لا تعرفه. هذه العادة الواحدة تصحح معظم الإجابات الخاطئة، لأن الاختبار مصمم لمعاقبة القرّاء الذين يملأون الفجوات بهدوء بمعرفتهم الخاصة.",
            "trick": "تخيّل أنك لا تعرف شيئًا على الإطلاق عن الموضوع ولا يمكنك إلا اقتباس النص. إذا ضبطت نفسك تفكر «حسنًا، في الحياة الواقعية...»، فهذه الفكرة غير مسموح بها وعليك التخلي عنها."
          }
        ]
      },
      {
        "heading": "صحيح / خطأ / لا يمكن الجزم: الأحكام الثلاثة",
        "items": [
          {
            "term": "صحيح يعني أن المقطع يثبتها",
            "detail": "اختر صحيح فقط عندما تكرر العبارة ما يقوله المقطع بكلمات مختلفة، أو تنبع منه بشكل مباشر بحيث لا توجد فجوة. إذا اضطررت إلى إضافة حقيقة لا يقدمها المقطع أبدًا لجعل العبارة تعمل، فهي ليست صحيحة.",
            "steps": [
              "اقرأ العبارة مرة واحدة واحتفظ بها في ذهنك.",
              "جد السطر في المقطع الذي يتحدث عن الشيء نفسه.",
              "تحقق مما إذا كان ذلك السطر، بمفرده، يجعل العبارة صحيحة بشكل قاطع.",
              "تأكد من أنك لم تضف أي حقيقة من عندك للوصول إلى ذلك.",
              "إذا أثبتها السطر دون إضافة أي شيء، ضع علامة صحيح."
            ],
            "example": "المقطع: «كل طلب قُدّم يوم الاثنين شُحن في اليوم نفسه.» العبارة: «لم يبقَ أي طلب من طلبات الاثنين دون شحن يوم الاثنين.» هذه هي الحقيقة نفسها مقولة بطريقة أخرى، لذا فالإجابة صحيح."
          },
          {
            "term": "خطأ يعني أن المقطع يناقضها",
            "detail": "اختر خطأ فقط عندما تتعارض العبارة وجهًا لوجه مع شيء يقوله المقطع فعلًا، بحيث لا يمكن أن يكونا صحيحين معًا في الوقت نفسه. يجب أن يكون هناك تصادم حقيقي، وليس مجرد شعور بأن العبارة تبدو خاطئة.",
            "steps": [
              "اقرأ العبارة ولاحظ بالضبط ما تدّعيه.",
              "جد سطر المقطع الذي يغطي النقطة نفسها.",
              "اسأل ما إذا كان المقطع والعبارة يختلفان بشكل مباشر.",
              "إذا لم يكن بإمكانهما أن يكونا صحيحين معًا في وقت واحد، ضع علامة خطأ."
            ],
            "example": "المقطع: «المقهى مغلق أيام الاثنين.» العبارة: «المقهى مفتوح سبعة أيام في الأسبوع.» المقطع يستبعد هذا بشكل مباشر، لذا فالإجابة خطأ."
          },
          {
            "term": "لا يمكن الجزم يعني أن المقطع لا يثبتها ولا ينفيها",
            "detail": "اختر لا يمكن الجزم عندما لا يعطيك المقطع ببساطة ما يكفي للتقرير. يحدث هذا عندما لا تُذكر النقطة أبدًا، أو تُذكر بشكل مبهم جدًا بحيث يتعذر حسمها. عدم المعرفة إجابة صحيحة هنا، وغالبًا ما تكون الإجابة الصحيحة.",
            "steps": [
              "اقرأ العبارة بعناية.",
              "ابحث في المقطع عن أي شيء يثبتها. إذا وجدت دليلًا واضحًا، فالإجابة صحيح.",
              "ابحث عن أي شيء يناقضها. إذا وجدت تعارضًا واضحًا، فالإجابة خطأ.",
              "إذا لم تجد دليلًا ولا تعارضًا، ضع علامة لا يمكن الجزم."
            ],
            "trick": "طبّق اختبار «أشِر إليها». هل يمكنك الإشارة إلى الكلمات الدقيقة التي تثبت العبارة (صحيح) أو الكلمات الدقيقة التي تناقضها (خطأ)؟ إذا لم تستطع الإشارة إلى أيٍّ منهما، فالإجابة لا يمكن الجزم."
          }
        ]
      },
      {
        "heading": "الحكم الأصعب: لا يمكن الجزم مقابل خطأ",
        "items": [
          {
            "term": "المعلومات الناقصة ليست هي نفسها المعلومات الخاطئة",
            "detail": "العبارة التي لا يمكنك تأكيدها ليست خاطئة تلقائيًا. خطأ تتطلب أن يقول المقطع العكس بشكل فعّال. إذا كان المقطع صامتًا فقط بشأن النقطة، فالإجابة الصادقة هي لا يمكن الجزم. الخلط بين هاتين الحالتين هو الخطأ الأكثر شيوعًا الذي يرتكبه الناس.",
            "example": "المقطع: «تفتح المكتبة في الساعة 9am.» العبارة: «تغلق المكتبة في الساعة 6pm.» وقت الإغلاق لم يُذكر أبدًا، لذا لا يمكنك اعتبار هذا خطأ؛ بل هو لا يمكن الجزم."
          },
          {
            "term": "جد التعارض الفعّال قبل أن تختار خطأ",
            "detail": "قبل أن تستقر على خطأ، حدد الجملة الدقيقة التي تتصادم معها العبارة. إذا لم تستطع العثور على جملة تقول العكس، فتراجع إلى لا يمكن الجزم. خطأ بدون تعارض هو تخمين متنكر في هيئة حكم.",
            "trick": "اطرح سؤالًا بسيطًا واحدًا: «هل يقول المقطع فعلًا عكس هذا؟» إذا استطعت إكمال تلك الجملة باقتباس حقيقي، فهي خطأ. إذا كان كل ما يمكنك قوله هو «إنه لا يذكر هذا أبدًا»، فهي لا يمكن الجزم."
          },
          {
            "term": "انتبه للأسباب والعلل المضافة",
            "detail": "كن حذرًا مع العبارات التي تفسر لماذا حدث شيء ما. يمكن للمقطع أن يفيد بأن شيئًا ما وقع دون أن يقول أبدًا ما الذي سبّبه. إذا أضافت العبارة «لأن» لا يقدمها المقطع، فذلك السبب غير مدعوم والإجابة عادةً لا يمكن الجزم.",
            "example": "المقطع: «ارتفعت المبيعات في الربيع.» العبارة: «ارتفعت المبيعات في الربيع بسبب الإعلان الجديد.» السبب لم يُذكر أبدًا، لذا فالإجابة لا يمكن الجزم."
          },
          {
            "term": "انتبه للمقارنات والترتيبات المضافة",
            "detail": "العبارات التي تقارن بين شيئين، أو ترتّب شيئًا بأنه الأفضل أو الأكبر أو الأول، تحتاج إلى دليل على كل طرف من أطراف المقارنة. إذا أعطاك المقطع طرفًا واحدًا فقط، فلا يمكنك الحكم على المقارنة، لذا فالإجابة لا يمكن الجزم.",
            "example": "المقطع: «استقبل الفرع A عدد 300 حجز.» العبارة: «استقبل الفرع A حجوزات أكثر من الفرع B.» رقم الفرع B مفقود، لذا فالإجابة لا يمكن الجزم."
          }
        ]
      },
      {
        "heading": "كلمات النطاق تحسم كل شيء (الكل، بعض، فقط، أبدًا)",
        "items": [
          {
            "term": "طابق قوة العبارة مع المقطع",
            "detail": "كلمات مثل الكل، كل، لا أحد، أبدًا، فقط، بعض، معظم، وأحيانًا تحدد مدى ضخامة الادعاء. فرق صغير في هذه الكلمات يمكن أن يقلب الإجابة بأكملها، لذا فهي تستحق اهتمامًا خاصًا. أكثر العادات موثوقية هي أن تضع خطًا تحت كلمة النطاق في كلٍّ من العبارة وسطر المقطع، ثم تتحقق من توافقهما.",
            "steps": [
              "ضع خطًا تحت كلمة النطاق في العبارة (مثل الكل، بعض، أبدًا).",
              "جد السطر المطابق في المقطع وضع خطًا تحت كلمة نطاقه أيضًا.",
              "قارن بينهما: هل يدّعيان النطاق نفسه؟",
              "إذا ادّعت العبارة أكثر مما يثبته المقطع، فهي ليست صحيح، وعادةً ما تكون لا يمكن الجزم أو خطأ."
            ],
            "trick": "عدم التطابق في القوة علامة تحذير ضخمة. المقطع يقول «معظم» لكن العبارة تقول «الكل»؟ المقطع يقول «بعض» لكن العبارة تقول «لا أحد»؟ تلك الفجوة لا تعطي إجابة صحيح أبدًا تقريبًا."
          },
          {
            "term": "الكلمات القوية (الكل، كل، أبدًا، فقط) يصعب إثباتها ويسهل كسرها",
            "detail": "كلمة مثل «الكل» تكون صحيح فقط إذا غطّى المقطع كل حالة منفردة، وتصبح خطأ في اللحظة التي يذكر فيها المقطع ولو استثناءً واحدًا. مثال مضاد واحد يكفي لإسقاط ادعاء شامل.",
            "example": "المقطع: «اثنان من السائقين تغيّبا عن الإحاطة الأمنية.» العبارة: «حضر جميع السائقين الإحاطة.» الاثنان اللذان تغيّبا استثناء مباشر، لذا فالإجابة خطأ."
          },
          {
            "term": "«معظم» لا تبرر «الكل»",
            "detail": "إذا قال المقطع «معظم» أو «الكثير»، فالعبارة التي تدّعي «الكل» غير مثبتة، لكنها ليست مناقَضة أيضًا، لأن البقية غير المذكورة قد تذهب في أي اتجاه. لذا فالإجابة لا يمكن الجزم، وليست خطأ.",
            "example": "المقطع: «جدّد معظم الأعضاء اشتراكهم.» العبارة: «جدّد جميع الأعضاء.» لا يُذكر أي استثناء و«الكل» غير مثبتة، لذا فالإجابة لا يمكن الجزم."
          },
          {
            "term": "الكلمات اللينة (بعض، معظم، أحيانًا) تتطلب القليل جدًا لإثباتها",
            "detail": "«بعض» تتحقق ولو بحالة واحدة. لذا فالعبارة التي تستخدم «بعض» يسهل وضع علامة صحيح عليها في اللحظة التي يقدم فيها المقطع مثالًا واحدًا على الأقل عليها.",
            "example": "المقطع: «أربعة من المتاجر الاثني عشر أبلغت عن خسارة.» العبارة: «بعض المتاجر أبلغت عن خسارة.» أربعة تُعدّ بعضًا، لذا فالإجابة صحيح."
          }
        ]
      },
      {
        "heading": "المرادف في السياق: اختر الكلمة التي تناسب هنا",
        "items": [
          {
            "term": "اقرأ الجملة كاملة، وليس الكلمة المنفردة فقط",
            "detail": "معظم الكلمات تحمل أكثر من معنى، والجملة المحيطة وحدها هي التي تخبرك أيها المقصود. انظر دائمًا كيف تعمل الكلمة فعلًا في هذه الجملة بالذات قبل أن تختار مطابقًا. المعنى الأكثر شيوعًا في القاموس غالبًا ما يكون الفخ.",
            "steps": [
              "جد الكلمة المستهدفة داخل جملتها الكاملة.",
              "اقرأ الجملة وقرر ما الذي تفعله الكلمة فيها.",
              "غطِّ خيارات الإجابة للحظة.",
              "فكّر في كلمة بديلة بسيطة من عندك تحافظ على معنى الجملة."
            ],
            "trick": "توقّع كلمتك الخاصة أولًا، قبل أن تنظر إلى الخيارات. هذا يمنع خيارًا «مألوفًا لكنه خاطئ» من إغرائك، لأن المعنى الشائع للكلمة عادةً ما يُقدَّم كطُعم."
          },
          {
            "term": "استبدل كل خيار في الجملة",
            "detail": "خذ كل خيار إجابة بدوره، وضعه في الجملة الأصلية مكان الكلمة المستهدفة، واقرأها كاملة. المرادف الصحيح يترك الجملة تعني الشيء نفسه وتبدو طبيعية؛ أما الخاطئ فيغيّر المعنى أو يبدو غريبًا.",
            "steps": [
              "استبدل الكلمة المستهدفة بالخيار الأول واقرأ الجملة كاملة.",
              "اسأل: هل ما زالت تعني الشيء نفسه وتُقرأ بشكل منطقي؟",
              "كرّر مع كل خيار.",
              "أبقِ الخيار الذي يغيّر المعنى أقل ما يمكن."
            ],
            "example": "الجملة: «أشار التقرير إلى انخفاض ملحوظ في الأخطاء.» هنا «ملحوظ» تعني واضح، لذا فإن «انخفاض واضح» يناسب، بينما «انخفاض ملطّخ» لا يناسب بوضوح."
          },
          {
            "term": "طابق النبرة: إيجابية أو سلبية أو محايدة",
            "detail": "حافظ على الشعور نفسه الذي تحمله الكلمة الأصلية. إذا كانت الكلمة تمدح شيئًا (إيجابية) أو تنتقده (سلبية)، فالمرادف الصحيح يجب أن يحمل النكهة نفسها. التحقق من النبرة كثيرًا ما يتيح لك حذف خيارين على الفور.",
            "steps": [
              "قرّر ما إذا كانت الكلمة المستهدفة تبدو إيجابية أو سلبية أو محايدة.",
              "ضع علامة على كل خيار بأنه إيجابي أو سلبي أو محايد أيضًا.",
              "اشطب أي خيار لا تتطابق نبرته.",
              "قارن بين الناجين فقط بالتفصيل."
            ],
            "example": "«مقتصد» و«بخيل» كلاهما يعني الإنفاق القليل، لكن «مقتصد» مادحة و«بخيل» منتقِدة، لذا في جملة تمدح يناسب «مقتصد» فقط."
          }
        ]
      },
      {
        "heading": "العثور على تفصيل مذكور",
        "items": [
          {
            "term": "امسح بحثًا عن كلمة مفتاحية مميّزة بدلًا من إعادة القراءة",
            "detail": "لا تقرأ المقطع كله من جديد للعثور على حقيقة واحدة. اختر أكثر كلمة غير اعتيادية في السؤال، مثل اسم أو رقم أو تاريخ أو مصطلح نادر، ودع عينك تطاردها أسفل الصفحة. هذا يُنزلك على السطر الصحيح بسرعة أكبر بكثير.",
            "steps": [
              "اقرأ السؤال واختر أكثر كلماته تميّزًا.",
              "مرّر عينك أسفل المقطع باحثًا عن تلك الكلمة فقط.",
              "توقّف عندما تكتشفها.",
              "اقرأ ما حولها للعثور على الإجابة."
            ],
            "trick": "الأرقام والأسماء التي تبدأ بحروف كبيرة والأسماء غير الاعتيادية تبرز بصريًا، لذا فهي أسرع المراسي للمسح عنها."
          },
          {
            "term": "اقرأ الجملة التي قبل المطابقة والتي بعدها",
            "detail": "الحقيقة التي تحتاجها كثيرًا ما تجلس بجوار الكلمة المفتاحية مباشرةً وليس على السطر نفسه بالضبط. قراءة الجمل المجاورة تعطيك السياق لتأكيد الإجابة الصحيحة ورفض ما يقترب منها دون أن يطابقها."
          },
          {
            "term": "طابق المعنى، وليس الكلمات المتطابقة",
            "detail": "الإجابة الصحيحة عادةً ما تقول الشيء نفسه الذي يقوله المقطع باستخدام كلمات مختلفة. الإجابات الخاطئة المغرية تعيد استخدام كلمات المقطع نفسها بالضبط لكنها تلوي المعنى. لذا فإن الصياغة المنسوخة علامة تحذير، وليست دليلًا على إجابة صحيحة.",
            "example": "المقطع: «نمت الأرباح رغم ارتفاع التكاليف.» الخيار الفخ: «نمت الأرباح بسبب ارتفاع التكاليف.» إنه يعيد استخدام الكلمات لكنه يقلب المنطق، لذا فهو خاطئ."
          },
          {
            "term": "تحقق من الأرقام والأسماء والتواريخ رقمًا برقم",
            "detail": "أسئلة التفصيل كثيرًا ما تتوقف على رقم أو تسمية واحدة، ويحب كاتبو الاختبارات تبديلها. أعد التحقق من الرقم والوحدة والتهجئة الدقيقة مقابل النص بدلًا من الوثوق بذاكرتك، لأن '15%' و'50%'، أو 'السيد لي' و'السيدة لي'، يسهل الخلط بينها."
          }
        ]
      },
      {
        "heading": "إدارة الوقت وتقنية الامتحان",
        "items": [
          {
            "term": "تصفّح الأسئلة قبل المقطع الطويل",
            "detail": "ألقِ نظرة على ما يُسأل عنه أولًا، حتى تقرأ المقطع وأنت تعرف بالفعل أي التفاصيل تهم. القراءة بهدف تمنعك من المرور على النص نفسه مرارًا وتكرارًا.",
            "trick": "إذا كان لديك وقت لقراءة واحدة فقط، اقرأ العبارات أولًا، ثم اقرأ المقطع مرة واحدة وضع علامة على كل عبارة عندما تصل إلى السطر الذي يحسمها."
          },
          {
            "term": "امنح كل عبارة شريحة زمنية ثابتة",
            "detail": "احسب تقريبًا كم من الوقت يمكنك قضاؤه على كل عبارة، ثم حاول الالتزام به. إذا كانت إحدى العبارات تطول، فضع عليها علامة وانتقل، ثم عُد بعد أن تكون الدرجات السهلة محفوظة بأمان.",
            "steps": [
              "حوّل وقتك الإجمالي إلى ثوانٍ (الدقائق مضروبة في 60).",
              "اقسم ذلك على عدد العبارات للحصول على الثواني لكل عبارة.",
              "استخدم هذا الرقم كميزانيتك التقريبية لكل واحدة.",
              "إذا تجاوزت عبارة ميزانيتها بكثير، فضع عليها علامة وانتقل."
            ],
            "example": "لديك 10 دقائق لـ 20 عبارة. 10 مضروبة في 60 تساوي 600 ثانية. 600 مقسومة على 20 تساوي 30 ثانية لكل واحدة، لذا فإن أي شيء يتجاوز نحو 45 ثانية تُوضع عليه علامة ويُتخطى مؤقتًا."
          },
          {
            "term": "لا تترك فراغًا أبدًا عندما يكون التخمين مجانيًا",
            "detail": "إذا كانت الإجابات الخاطئة لا تحمل عقوبة، فالتزم دائمًا بأفضل اختيار لك بدلًا من تركه فارغًا. مع ثلاثة خيارات، حتى التخمين الخالص في صحيح/خطأ/لا يمكن الجزم يصيب نحو ثلث الوقت (تقريبًا 33 في كل 100)، والتخمين المبني على تفكير يفعل أفضل من ذلك."
          },
          {
            "term": "تعامل مع كل مقطع كعالم مغلق",
            "detail": "كل مقطع قائم بذاته. لا تنقل حقيقة أو اسمًا أو افتراضًا من مقطع سابق إلى التالي. احكم على كل عبارة فقط مقابل المقطع الذي تنتمي إليه، وأعد تصفية ذهنك قبل أن تبدأ نصًا جديدًا.",
            "trick": "لا تحاول موازنة إجاباتك أيضًا. سلسلة من ثلاث «لا يمكن الجزم» متتالية أمر ممكن تمامًا؛ الإجابات ليست موزّعة بالتساوي عمدًا، لذا فإن التخمين بناءً على نمط لا يضرك إلا."
          }
        ]
      }
    ],
    "comp-error": [
      {
        "heading": "روتين التدقيق الخاص بك",
        "items": [
          {
            "term": "روتين التدقيق حقلًا بحقل",
            "detail": "الروتين الثابت يتفوق على المسح العشوائي. اختر السجل المصدر، وحاذِه أمام النسخة، واسلك المسار نفسه في كل مرة حتى لا تشرد عينك ولا تفقد موضعك أبدًا. هذا هو الترتيب الذي يجب اتباعه في كل سؤال.",
            "steps": [
              "حدد أي سجل هو الأصل (المصدر) وتعامل معه وحده باعتباره الصحيح.",
              "عد الحقول في السجلين وتحقق من تطابقها؛ فالحقل الناقص أو الزائد يزيح كل شيء ويخلق حالات عدم تطابق وهمية.",
              "ابدأ من الحقل الأول في الأصل وانظر إلى ذلك الحقل وحده فقط.",
              "انتقل مباشرة إلى الحقل نفسه في النسخة وقارن تلك القيمتين فقط.",
              "إذا تطابقتا، ضع علامة صح ذهنيًا وانتقل؛ وإذا اختلفتا، فضع علامة خطأ على ذلك الحقل.",
              "انتقل إلى الحقل التالي وكرر، دون أن تتخطى أبدًا إلى الأمام.",
              "استمر حتى آخر حقل حتى بعد أن تجد خطأً واحدًا، لأنه قد يكون هناك أكثر من خطأ.",
              "في النهاية، تكون قائمة الحقول التي وضعت عليها علامة هي إجابتك؛ لا تبدأ من جديد."
            ],
            "trick": "استخدم إصبعًا أو قلمًا أو حافة بطاقة لتغطية كل سطر باستثناء الزوج الواحد الذي تقارنه، حتى لا تستطيع عينك ماديًا الانحراف إلى الصف التالي."
          },
          {
            "term": "ارتكز على الأصل، ولا تبدّل الجانبين أبدًا",
            "detail": "اقرأ الأصل أولًا والنسخة ثانيًا دائمًا، بهذا الترتيب، لكل حقل. إذا ظللت تقلب أي سجل تثق به، فإن دماغك يبدأ بهدوء في حساب متوسط الاثنين ويتوقف عن ملاحظة الاختلافات الصغيرة. الاتجاه نفسه في كل مرة يبقي عينك حادة.",
            "trick": "قلها في رأسك كجملة باتجاه واحد: 'يقول الأصل X، هل تطابقه النسخة؟' ولا تعكسها أبدًا."
          },
          {
            "term": "تحقق من الشكل قبل القيم",
            "detail": "قبل مقارنة أي قيم فعلية، ألقِ نظرة على الشكل العام للسجلين: العدد نفسه من الحقول، الترتيب نفسه، لا شيء ناقص أو مكرر. حقل واحد محذوف يدفع كل ما بعده خارج المحاذاة، مما يجعل القيم الصحيحة تبدو خاطئة ويضيّع الوقت. اكتشاف الإزاحة أولًا يوفر عليك الإبلاغ عن سلسلة من الأخطاء الوهمية.",
            "example": "يحتوي الأصل على أربعة حقول بهذا الترتيب: الاسم، المعرّف، التاريخ، المبلغ. وتحتوي النسخة على ثلاثة فقط: الاسم، التاريخ، المبلغ. إذن المعرّف قد حُذف، وكل حقل بعده انزلق مكانًا واحدًا للأعلى (تاريخ النسخة يقع حيث ينبغي أن يكون المعرّف). الخطأ الحقيقي هو المعرّف الناقص، وليس القيم التي تبدو الآن خارج المحاذاة."
          }
        ]
      },
      {
        "heading": "فك ترميز مفتاح الترميز",
        "items": [
          {
            "term": "ترجم الرمز قبل أن تقارنه",
            "detail": "عندما يكون الحقل رمزًا (حرف لقسم، رقم لحالة)، ابحث عنه في المفتاح وحوّله إلى معناه الواضح أولًا، ثم قارن. إذا قارنت رمزين خامين لم تفك ترميزهما، فلن تستطيع التمييز بين خطأ مطبعي حقيقي وقيمة يُسمح ببساطة بأن تكون مختلفة. فك الترميز، ثم احكم.",
            "trick": "دوّن بخفة المعنى المفكوك بجوار الرمز في مسودة عملك أول مرة تراه، حتى لا تبحث في المفتاح مجددًا عن الرمز نفسه بعد صفين."
          },
          {
            "term": "قسّم الرمز المركّب إلى أجزاء",
            "detail": "كثير من الرموز مبنية من أجزاء موصولة معًا، مثل المنطقة ثم السنة ثم رقم متسلسل. تحقق من كل جزء مقابل قسمه الخاص من المفتاح وحده، بدلًا من قراءة الرمز كله ككتلة واحدة. الأخطاء تعيش دائمًا تقريبًا في جزء واحد فقط، وتقسيم الرمز يجعل ذلك الجزء يبرز.",
            "example": "خذ الرمز LN-25-014. تحقق منه في ثلاث قطع صغيرة، لا تخمينًا واحدًا كبيرًا. القطعة الأولى: LN مقابل قائمة المناطق، التي تقول إن LN تعني لندن. القطعة الثانية: 25 مقابل قاعدة السنة، التي تقول إن 25 تعني 2025. القطعة الثالثة: 014 مقابل تسلسل الأرقام المتتابعة. إذا كان المقصود بالقطعة الوسطى أن تكون 26 (2026) فقط، فإن السنة الخاطئة تقفز مباشرة بمجرد أن تتحقق من ذلك الجزء الواحد."
          }
        ]
      },
      {
        "heading": "الأرقام والتواريخ والكسور العشرية",
        "items": [
          {
            "term": "قارن طول الأرقام قبل قيم الأرقام",
            "detail": "الرقم المحذوف أو المضاف نوع مختلف من الخطأ عن الرقم الخاطئ، وهو يختبئ جيدًا لأن الأرقام الأولى لا تزال متطابقة. قبل قراءة القيم، عدّ ببساطة كم رقمًا في كل نسخة. إذا اختلف العددان، فلديك بالفعل حالة عدم تطابق ولا تحتاج إلى القراءة أكثر.",
            "steps": [
              "عدّ كم رقمًا في الرقم الأصلي.",
              "عدّ كم رقمًا في النسخة.",
              "إذا لم يتساوَ العددان، توقف: فقد أُضيف رقم أو حُذف، فهو إذن خطأ.",
              "فقط إذا تطابق العددان تنتقل لمقارنة الأرقام واحدًا تلو الآخر."
            ],
            "example": "الأصل هو 1450، والنسخة هي 14500. عدّ الأصل: 1-4-5-0 أربعة أرقام. عدّ النسخة: 1-4-5-0-0 خمسة أرقام. 4 لا تساوي 5، فهو إذن خطأ، وقد عرفت ذلك دون حتى قراءة القيم."
          },
          {
            "term": "اقرأ الأرقام الطويلة من اليمين إلى اليسار لتلتقط التبديلات",
            "detail": "التبديل هو رقمان متجاوران بدّلا مكانيهما، مثل 1453 المكتوب 1543. لا يزال المجموع يبدو صحيحًا تقريبًا، لذا فإن المسح من اليسار إلى اليمين يفوّته. المقارنة من اليمين (الآحاد أولًا، ثم العشرات، ثم المئات) تجبرك على محاذاة كل خانة فيظهر التبديل.",
            "steps": [
              "حاذِ الرقمين بحيث يكون طرفاهما الأيمنان في مستوى واحد.",
              "قارن الرقم الأيمن في كل منهما (الآحاد)؛ سجّل التطابق أو الاختلاف.",
              "انتقل يسارًا إلى الرقم التالي في كل منهما (العشرات)؛ سجّل التطابق أو الاختلاف.",
              "استمر في الانتقال يسارًا، خانة واحدة في كل مرة، حتى تصل إلى الطرف الأقصى.",
              "إذا اختلف رقمان متجاوران بالضبط وكان كل منهما يحمل قيمة الآخر، فذلك تبديل."
            ],
            "example": "الأصل 1453 مقابل النسخة 1543، بالعمل من اليمين. الآحاد: الأصل 3، النسخة 3، تطابق. العشرات: الأصل 5، النسخة 4، اختلاف. المئات: الأصل 4، النسخة 5، اختلاف. الآلاف: الأصل 1، النسخة 1، تطابق. الرقمان الأوسطان، 5 و4، تبادلا مكانيهما ببساطة، فهو إذن تبديل."
          },
          {
            "term": "قسّم الأرقام الطويلة إلى مجموعات صغيرة",
            "detail": "عينك تتعامل مع حرفين أو ثلاثة دفعة واحدة لكنها تطمس سلسلة من ثمانية أو أكثر، وهنا يختبئ رقم واحد خاطئ. قسّم كل رقم إلى أزواج وقارن كتلة مقابل كتلة بدلًا من ضبابية طويلة واحدة. ابدأ الأزواج من اليمين؛ وإذا تبقى رقم فردي، فإنه يجلس ببساطة وحده في المقدمة.",
            "trick": "30298471 يحتوي على 8 أرقام، فينقسم بالتساوي إلى الأزواج 30 29 84 71. اقرأ أزواج النسخة بالترتيب نفسه وقارن زوجًا مقابل زوج؛ أول كتلة لا تتطابق هي حيث يكمن الخطأ."
          },
          {
            "term": "قسّم التاريخ إلى يوم وشهر وسنة",
            "detail": "أخطاء التاريخ تصيب عادة جزءًا واحدًا بينما يكون الباقي صحيحًا، وتبديل اليوم والشهر زرع كلاسيكي. تعامل مع الشُّرَط المائلة كجدران ثابتة وقارن الأجزاء الثلاثة جزءًا في كل مرة، حتى لا يندمج جزء واحد خاطئ في تاريخ يبدو صحيحًا في مجمله.",
            "steps": [
              "قارن اليوم (الجزء الذي قبل الشرطة المائلة الأولى) في كلا التاريخين.",
              "قارن الشهر (الجزء الذي بين الشرطتين المائلتين) في كلا التاريخين.",
              "قارن السنة (الجزء الذي بعد الشرطة المائلة الأخيرة) في كلا التاريخين.",
              "ضع علامة خطأ على التاريخ إذا اختلف أي من الأجزاء الثلاثة."
            ],
            "example": "الأصل 12/06/2024 مقابل النسخة 12/09/2024. اليوم: 12 مقابل 12، تطابق. الشهر: 06 مقابل 09، اختلاف. السنة: 2024 مقابل 2024، تطابق. الشهر فقط خاطئ، فالشهر إذن هو ما تبلّغ عنه."
          },
          {
            "term": "تعامل مع الفاصلة العشرية والإشارة والرمز على أنها حقيقية",
            "detail": "موضع الفاصلة العشرية، وإشارة الناقص في البداية، وأي رمز عملة أو وحدة، كل منها يغيّر المعنى حتى عندما يكون كل رقم متطابقًا. المسح للأرقام فقط يمرّر هذه دون فحص. تحقق من الفاصلة والإشارة والرمز عن قصد، لا من الأرقام المحيطة بها فقط.",
            "example": "الأصل 4.50 مقابل النسخة 45.0. كلاهما يستخدم الأرقام الثلاثة نفسها، 4 و5 و0، فلمحة للأرقام فقط تقول إنهما متطابقان. لكن الفاصلة تحركت: 4.50 تعني أربعة ونصف، بينما 45.0 تعني خمسة وأربعين. الفاصلة العشرية المنزاحة هي الخطأ، رغم أنه لم يتغير أي رقم."
          }
        ]
      },
      {
        "heading": "الحقول النصية وإنهاء العمل بإتقان",
        "items": [
          {
            "term": "تصيّد الحروف المكررة والمحذوفة في الأسماء",
            "detail": "أخطاء الكلمات تتجمع في بضع مواضع: الحروف المضاعفة (Phillip بحرفي L مقابل Philip بحرف L واحد)، حرف علة مبدّل أو ناقص، وحرف محذوف في النهاية. اقرأ الكلمة ببطء على مقاطع بدلًا من شكل مألوف، لأن دماغك يصحح تلقائيًا الكلمات التي يتعرّف عليها ويتخطى الحرف نفسه الذي تغيّر.",
            "example": "الأصل Philip به حرف L واحد؛ والنسخة Phillip بها حرفا L. عدّ حرف L في كل منهما (واحد مقابل اثنين) يظهر أن النسخة أضافت حرفًا، فهو إذن خطأ.",
            "trick": "اهمس الكلمة على نبرات، Phil-lip، والحرف الزائد أو الناقص عادة ما يعثر لسانك عنده."
          },
          {
            "term": "قرّر إن كانت المسافات والأحرف الكبيرة والصغيرة تُحتسب، ثم كن متسقًا",
            "detail": "أحيانًا تكون المسافة الزائدة، أو الحرف الكبير مقابل الصغير، أو الواصلة الناقصة، عدم تطابق حقيقي، وأحيانًا تتجاهل المهمة التنسيق. قرّر أي قاعدة تنطبق قبل أن تبدأ، ثم طبّق القاعدة نفسها على كل حقل حتى لا تكون أكثر صرامة على بعض الصفوف دون غيرها."
          },
          {
            "term": "عند التعثر، صفِّ التطابقات الواضحة أولًا",
            "detail": "إذا لم يقفز الخطأ إليك، فلا تحدّق في السجل كله. ضع علامة سريعًا على الحقول التي تتطابق بوضوح لتقلّص البحث إلى الحقل أو الحقلين المتبقيين. الخطأ المزروع لا بد أن يكون مختبئًا فيما تبقى، فيمكنك أن تعطيه انتباهك الكامل بدلًا من توزيعه بشكل مبعثر."
          },
          {
            "term": "مرور واحد بعناية، ثم توقف",
            "detail": "تدقيق الأخطاء يقيّم السرعة والدقة معًا. تحقق من كل حقل مرة واحدة، بتأنٍّ، وانتقل؛ لا تعد إلى الحقول التي صفّيتها سابقًا. إعادة قراءة السجل كله تلتهم وقتك ونادرًا جدًا ما تظهر شيئًا فاته مرور أول دقيق.",
            "trick": "إذا بدا حقلان متطابقين بعد نظرة صادقة واحدة، فاقبل ذلك واحفظ الثواني لحقول الأرقام والرموز، حيث تكمن الأخطاء الحقيقية."
          }
        ]
      }
    ],
    "exec-verbal": [
      {
        "heading": "القاعدة الوحيدة التي تتفوق على كل شيء: استخدم النص فقط",
        "items": [
          {
            "term": "النص هو الشيء الوحيد الذي يُعتد به",
            "detail": "أنت تحسم كل عبارة باستخدام الكلمات المكتوبة على الصفحة فقط، حتى لو صادف أنك تعرف الموضوع جيدًا. المعرفة الواقعية، والحس السليم حول كيفية تصرف الشركات، ورأيك الشخصي، كلها ممنوعة. إذا لم يضع النص حقيقة أمامك، فلا يُسمح لك باستخدامها. الاختبار يفحص ما إذا كنت تستطيع الاستدلال بصرامة من النص المعطى، لا غير.",
            "steps": [
              "اقرأ العبارة ولاحظ الإغراء بإقحام ما تعرفه مسبقًا.",
              "أطفئ تلك المعرفة الخارجية عمدًا؛ تظاهر بأنك غريب عن الموضوع.",
              "اسأل: هل هذه الحقيقة مكتوبة فعلًا في النص، بكلمات يمكنني الإشارة إليها؟",
              "إذا كانت صحيحة في العالم الواقعي فقط لكنها ليست على الصفحة، فعاملها على أنها غير معطاة."
            ],
            "trick": "تخيل أنك محامٍ لا يجوز له إلا الاقتباس من الوثيقة التي أمامه. في اللحظة التي تفكر فيها بـ«حسنًا، في الممارسة العملية...»، تُطرد تلك الفكرة من قاعة المحكمة."
          },
          {
            "term": "ثلاثة أحكام، اختبار سريع واحد لكل منها",
            "detail": "كل عبارة تحصل على واحدة من ثلاث تسميات. صحيح يعني أن النص يثبتها. خاطئ يعني أن النص يناقضها. لا يمكن الجزم يعني أن النص لا يفعل أيًا من الأمرين. تختار عن طريق إجراء اختبار، لا عن طريق التخمين ما إذا كانت العبارة تبدو معقولة.",
            "steps": [
              "اسأل أولًا: هل يمكنني الإشارة إلى سطر يثبت العبارة؟ إذا نعم، ضع علامة صحيح.",
              "إذا لا، اسأل: هل يمكنني الإشارة إلى سطر يتعارض مع العبارة؟ إذا نعم، ضع علامة خاطئ.",
              "إذا لم تستطع فعل أي منهما، توقف عن البحث وضع علامة لا يمكن الجزم.",
              "لا تتجاوز هذا بالإقناع الذاتي؛ «لا أستطيع إيجاد دليل في أي اتجاه» هو تعريف لا يمكن الجزم."
            ],
            "trick": "أجرِ الاختبارات بهذا الترتيب بالضبط: أثبت، ثم تعارض، ثم لا شيء. معظم الإجابات الخاطئة تأتي من القفز مباشرة إلى الشعور الحدسي بدلًا من البحث عن سطر."
          },
          {
            "term": "سمِّ السطر قبل أن تلتزم بصحيح أو خاطئ",
            "detail": "يمكن دائمًا ربط أي صحيح أو خاطئ حقيقي بجملة واحدة محددة في النص. قبل أن تثبّت أيًا منهما، اقتبس بصمت الجملة التي تبررها. إذا لم تستطع وضع إصبعك على سطر واحد، فأنت تقرأ في النص أكثر مما فيه والإجابة الصادقة هي لا يمكن الجزم.",
            "steps": [
              "قرر إجابتك المبدئية (صحيح أو خاطئ).",
              "ابحث عن الجملة الدقيقة التي تدعمها واقرأها مرة أخرى.",
              "تحقق من أن استدلالك يبدأ باقتباس شبه حرفي، لا بـ«هذا يعني ضمنًا» أو «بالتأكيد».",
              "إذا لم يدعمك سطر واحد، اخفض الإجابة إلى لا يمكن الجزم."
            ],
            "trick": "إذا بدأ تبريرك بـ«من الواضح» أو «لا بد أن يعني»، فهذا دماغك يملأ فجوة تركها النص فارغة. انتقل إلى لا يمكن الجزم."
          },
          {
            "term": "احذف كلمات الإقناع قبل الحكم",
            "detail": "يرش الكُتّاب النصوص بكلمات رأي مثل بوضوح، بجلاء، بلا ريب، رائدة، عالمية المستوى، والأفضل. هذه تضع نبرة لكنها لا تثبت شيئًا. اشطبها ذهنيًا واحكم فقط على الادعاء الواقعي الصريح المتبقي خلفها.",
            "steps": [
              "اكتشف كلمات النبرة مثل بوضوح، بجلاء، رائدة، الأفضل، عالمية المستوى.",
              "اشطبها في ذهنك وأعد قراءة الجملة المجردة.",
              "احكم على العبارة مقابل تلك الحقيقة المجردة فقط.",
              "لا تعامل أبدًا «بوضوح» أو «بجلاء» كما لو كانت دليلًا."
            ],
            "trick": "«الشركة بوضوح هي رائدة السوق» تحمل نفس الحقيقة التي تحملها «الشركة هي رائدة السوق» مضافًا إليها رأي. عامل «بوضوح» كزخرفة، لا كدليل."
          }
        ]
      },
      {
        "heading": "المذكور مقابل المضمَّن مقابل المفترَض",
        "items": [
          {
            "term": "ميّز بين الثلاثة",
            "detail": "المذكور يعني أن الكلمات موجودة فعلًا. المضمَّن يعني أنه يلزم من الكلمات دون ترك أي فجوة تُملأ. المفترَض يعني أن الحجة تتكئ عليه ضمنًا لكنها لا تذكره أبدًا. الحقائق المذكورة والاستنتاجات المضمَّنة المحكمة الخالية من الفجوات فقط يمكن وضع علامة صحيح عليها. الافتراض الذي يحتاجه النص ليس شيئًا يجوز لك معاملته كمثبت.",
            "steps": [
              "ابحث عن الكلمات في النص المتعلقة بالعبارة.",
              "إذا كانت العبارة تكرر تلك الكلمات فقط، فهي مذكورة، إذن يمكن أن تكون صحيح.",
              "إذا كانت تلزم بفجوة صفرية، فهي مضمَّنة، إذن لا يزال يمكن أن تكون صحيح.",
              "إذا اضطررت إلى إضافة حقيقة بصمت لإنجاحها، فهي مفترَضة، إذن ليست صحيح."
            ],
            "trick": "النص: المصنع عمل بكامل طاقته طوال العام. مذكور: عمل بكامل طاقته. مضمَّن آمن: لم يبقَ خاملًا. مفترَض (غير مسموح): كان الطلب عاليًا بما يكفي لتبريره. الأخير يحتاج حقيقة لم تُعطَ لك أبدًا."
          },
          {
            "term": "اختبار هل-يمكن-أن-يكون-خاطئًا لأي استنتاج",
            "detail": "الاستنتاج آمن فقط عندما لا يمكن أن يكون خاطئًا بينما يبقى كل سطر في النص صحيحًا. إذا استطعت تخيل ولو موقف واحد يبقى فيه النص كله صحيحًا ومع ذلك تفشل العبارة، فاستنتاجك غير آمن وعليك أن تميل نحو لا يمكن الجزم.",
            "steps": [
              "اكتب العبارة التي تُغرى بوضع علامة صحيح عليها.",
              "حاول اختراع قصة قصيرة تبقي كل سطر في النص صحيحًا لكنها تجعل العبارة خاطئة.",
              "إذا استطعت اختراع ولو قصة واحدة كهذه، فالاستنتاج غير آمن: اختر لا يمكن الجزم.",
              "إذا فشلت كل محاولة وأُجبرت العبارة على أن تكون صحيحة، فهي مضمَّنة حقًا: صحيح."
            ],
            "trick": "حاول بنشاط أن تكسر إجابتك. إذا استطعت تصور عالم يصمد فيه النص لكن لا تصمد فيه العبارة، فذلك دليلك على أن الإجابة لا يمكن الجزم."
          },
          {
            "term": "خطوة آمنة واحدة فقط، لا سلسلة أبدًا",
            "detail": "الاستنتاج المشروع قفزة قصيرة واحدة يفرضها النص عليك. في اللحظة التي تحتاج فيها «وبالتالي» ثانية للوصول إلى العبارة، تكون قد خرجت عما يضمنه النص ودخلت في تكهناتك الخاصة.",
            "steps": [
              "حدد الحقيقة الواحدة التي يعطيها النص.",
              "خذ خطوة مباشرة واحدة منها وتوقف.",
              "إذا احتجت رابطًا ثانيًا للوصول إلى العبارة، فالخطوة طويلة جدًا.",
              "عامل أي استنتاج من خطوتين كـ لا يمكن الجزم ما لم يكن كل رابط مذكورًا صراحة في النص."
            ],
            "trick": "النص: يجب على جميع المديرين امتلاك أسهم. خطوة واحدة آمنة: غير المساهم ليس مديرًا. خطوة إضافية غير آمنة: إذن المديرون أثرياء، وهذا يهرّب حقيقة لم يعطها النص أبدًا."
          },
          {
            "term": "المعقول ليس كالمثبت",
            "detail": "تُكتب هذه النصوص بحيث يكون الاستنتاج الأكثر معقولية في كثير من الأحيان هو الذي لم يُثبت فعلًا. إذا كان الوصول إلى الإجابة يعتمد على كونها مرجحة أو منطقية أو ما يفعله المدير عادة، فذلك الاستدلال استدلالك أنت، لا استدلال النص، إذن الإجابة لا يمكن الجزم.",
            "steps": [
              "لاحظ ما إذا كانت العبارة تبدو صحيحة بوضوح.",
              "حاول اقتباس السطر الذي يثبتها.",
              "إذا لم يثبتها سطر وكنت تتكئ على «هذا منطقي»، فتلك فخ.",
              "افترض لا يمكن الجزم عندما يكون المعقول هو سندك الوحيد."
            ],
            "trick": "كلما بدت العبارة أذكى بينما لا تزال غير قادر على إيجاد سطر داعم، زاد احتمال أنها فخ مزروع. كافئ نفسك على اختيار لا يمكن الجزم في تلك الحالات."
          }
        ]
      },
      {
        "heading": "الادعاءات غير المتحقَّق منها تصبح لا يمكن الجزم",
        "items": [
          {
            "term": "الهدف أو التوقع ليس نتيجة",
            "detail": "إذا قال النص إن شركة تهدف إلى أو تخطط لـ أو تتوقع أو يُتوقع أن تفعل شيئًا، فكل ما تعرفه فعلًا هو أن الخطة موجودة، لا أنها حدثت أو ستحدث. أي عبارة عن النتيجة هي لا يمكن الجزم، حتى عندما تبدو الخطة مؤكدة النجاح.",
            "steps": [
              "ابحث عن كلمات الخطة: تهدف إلى، تخطط لـ، تتوقع، يُتوقع، تستهدف.",
              "ضع علامة صحيح فقط على حقيقة أن الخطة أو الهدف موجود.",
              "لا تعامل النتيجة المخطط لها كشيء تم تحقيقه.",
              "صنّف أي عبارة عن النتيجة الفعلية كـ لا يمكن الجزم."
            ],
            "trick": "النص: يهدف المجلس إلى خفض التكاليف 15% العام المقبل. صحيح: يوجد هدف لخفض التكاليف. لا يمكن الجزم: ستنخفض التكاليف، أو انخفضت، بنسبة 15%."
          },
          {
            "term": "الرأي يثبت فقط أن الرأي كان متبنى",
            "detail": "عندما يفيد النص بأن شخصًا يعتقد أو يحاجج أو يدّعي أو يتنبأ بشيء، فالحقيقة الوحيدة التي يمكنك الركون إليها هي أن الشخص يحمل ذلك الرأي. أما صحة الرأي فعلًا فمسألة منفصلة يتركها النص عادة مفتوحة.",
            "steps": [
              "اكتشف فعل الإفادة: يعتقد، يحاجج، يدّعي، يتنبأ، يتوقع.",
              "أكّد صحيح فقط لـ«هذا الشخص يحمل هذا الرأي».",
              "افصل رأي الشخص عمّا هو الحال فعلًا.",
              "ضع علامة لا يمكن الجزم على أي عبارة تعامل الرأي كحقيقة."
            ],
            "trick": "النص: يعتقد المدير المالي أن الطلب سيتعافى. صحيح: المدير المالي يحمل هذا الاعتقاد. لا يمكن الجزم: الطلب سيتعافى."
          },
          {
            "term": "راقب زمن الفعل وكلمات اليقين",
            "detail": "كلمات مثل سوف، كان سـ، قد، ربما، تتوقع، يُتوقع، وتأمل في، كلها تشير إلى شيء لم يحدث بعد، أو شيء مشروط بتحفظ. حول النتائج، تعني هذه عادة لا يمكن الجزم. كلمات مثل قد فعل، فعل، أفاد، سجّل، وارتفع تشير إلى حدث مؤكد، وهذا يمكن أن يدعم صحيح.",
            "steps": [
              "ضع خطًا تحت الفعل الرئيسي في العبارة وفي السطر الداعم.",
              "إذا كان فعلًا مستقبليًا أو متحفظًا (سوف، ربما، قد، تتوقع)، فعامل النتيجة على أنها غير مؤكدة.",
              "إذا كان فعلًا ماضيًا محسومًا (فعل، ارتفع، أفاد)، فيمكن تأكيد الحدث.",
              "عندما يسأل السؤال عن حقيقة محسومة لكن السطر يتحفظ فقط، مِل إلى لا يمكن الجزم."
            ],
            "trick": "الأفعال الصلبة (فعل، ارتفع، أفاد) يمكن أن تكسب صحيح. الأفعال اللينة (ربما، سوف، تتوقع) حول نتيجة تعني دائمًا تقريبًا لا يمكن الجزم."
          },
          {
            "term": "تحرك شيئين معًا ليس سببًا ونتيجة",
            "detail": "إذا قال النص إن شيئين ارتفعا في الوقت نفسه، فهو لم يخبرك أن أحدهما تسبب في الآخر ما لم يذكر الرابط صراحة. أي إجابة تعيد كتابة مصادفة كسبب هي لا يمكن الجزم.",
            "steps": [
              "لاحظ متى يتحرك رقمان في الاتجاه نفسه.",
              "تحقق مما إذا كان النص يقول فعلًا إن أحدهما تسبب في الآخر.",
              "إذا لم يُذكر رابط السببية صراحة، فلا تخترعه.",
              "ضع علامة لا يمكن الجزم على عبارة السبب والنتيجة."
            ],
            "trick": "النص: المبيعات والإنفاق الإعلاني كلاهما ارتفع في الربع الثالث. لا يمكن الجزم: الإنفاق الإعلاني الأعلى تسبب في ارتفاع المبيعات، لأن النص لم يدّعِ الرابط أبدًا."
          }
        ]
      },
      {
        "heading": "فخاخ أدوات الكمية والنطاق والمقارنة",
        "items": [
          {
            "term": "بعض ليس كل، ومعظم ليس كل واحد",
            "detail": "أداة كمية لينة في النص لا يمكن أن تدعم ادعاءً قاطعًا في العبارة. إذا قال النص إن معظم المناطق نمت، فادعاء حول نمو منطقة واحدة مسماة هو لا يمكن الجزم، لأن معظم يترك مجالًا لاستثناءات لا تستطيع استبعادها.",
            "steps": [
              "ضع خطًا تحت أداة الكمية في النص (بعض، معظم، كثير، قليل).",
              "ضع خطًا تحت أداة الكمية في العبارة (كل، كل واحد، هذه بالذات، لا أحد).",
              "تحقق مما إذا كانت كلمة النص تغطي فعلًا كلمة العبارة.",
              "إذا كان معظم أو بعض يُمطّ إلى كل أو إلى حالة محددة، ضع علامة لا يمكن الجزم."
            ],
            "trick": "النص: معظم الأقسام حققت ربحًا. العبارة: قسم اللوجستيات حقق ربحًا. لا يمكن الجزم، لأن اللوجستيات قد يكون أحد المتكبدين للخسارة المختبئين داخل الأقلية."
          },
          {
            "term": "كل، لا أحد، دائمًا، فقط وأبدًا يسهل المبالغة في قراءتها",
            "detail": "كلمة مطلقة في الإجابة تتطلب دعمًا مطلقًا في النص. مثال داعم واحد لا يثبت أبدًا دائمًا أو كل واحد، ومجرد عدم ذكر استثناء لا يثبت أبدًا لا أحد أو أبدًا.",
            "steps": [
              "ضع دائرة حول كل كلمة مطلقة في العبارة: كل، لا أحد، دائمًا، أبدًا، فقط، كل واحد.",
              "لكل منها، اسأل ما إذا كان النص يغطي حرفيًا كل حالة.",
              "إذا بقيت ولو حالة واحدة غير مغطاة، فالعبارة ليست مثبتة كـ صحيح بعد.",
              "تذكر: عدم ذكر استثناء ليس كعدم وجود استثناء."
            ],
            "trick": "مثال مضاد واحد يكفي لجعل كل خاطئ، لكن لوضع علامة صحيح على كل تحتاج أن يغطي النص كل حالة على حدة. المطلقات يسهل كسرها ويصعب إثباتها."
          },
          {
            "term": "طابِق النطاق: مَن، وأين، ومتى",
            "detail": "حقيقة عن قسم واحد لا تنتقل إلى الشركة كلها، وحقيقة عن ربع واحد لا تغطي العام الكامل، وحقيقة عن سوق واحدة لا تمتد إلى كل الأسواق. تأكد من أن موضوع العبارة وحدودها يتطابقان تمامًا مع النص.",
            "steps": [
              "ابحث عن الموضوع والحد في سطر النص (أي وحدة، أي مكان، أي وقت).",
              "ابحث عن الموضوع والحد في العبارة.",
              "قارنهما جنبًا إلى جنب: نفس مَن، نفس أين، نفس متى؟",
              "إذا كانت العبارة أوسع من النص، ضع علامة لا يمكن الجزم."
            ],
            "trick": "النص: المبيعات الأوروبية ارتفعت في الربع الأول. العبارة: المبيعات ارتفعت في الربع الأول. لا يمكن الجزم، لأن الرقم العالمي قد ينخفض حتى مع ارتفاع أوروبا."
          },
          {
            "term": "النسبي ليس مطلقًا",
            "detail": "معدل نمو أعلى لا يعني مبلغًا إجماليًا أعلى، وحصة سوقية أكبر لا تعني إجماليًا أكبر، والنسبة المئوية ليست عددًا من الوحدات أو مبلغًا من المال. لا تبدّل بصمت نسبة بكمية، أو كمية بنسبة.",
            "steps": [
              "لاحظ ما إذا كان النص يعطي معدلًا أو حصة (نسبة مئوية) أو مبلغًا فعليًا (وحدات، مال).",
              "لاحظ أيهما تدّعيه العبارة فعلًا.",
              "إذا حوّلت العبارة نسبة مئوية إلى إجمالي (أو العكس)، فتوقف.",
              "بدون الرقم الابتدائي المفقود لتحويلها، ضع علامة لا يمكن الجزم."
            ],
            "trick": "النص: العلامة A نمت 40%، العلامة B نمت 10%. العبارة: العلامة A باعت وحدات أكثر من العلامة B. لا يمكن الجزم، لأن A قد تكون نمت بسرعة من قاعدة ابتدائية ضئيلة بينما B نمت ببطء من قاعدة ضخمة."
          }
        ]
      },
      {
        "heading": "لا يمكن الجزم مقابل خاطئ: أصعب قرار",
        "items": [
          {
            "term": "خاطئ يحتاج تعارضًا فعالًا، لا صمتًا",
            "detail": "لا تضع علامة خاطئ إلا عندما تطرح العبارة والنص ادعاءين لا يمكن أن يكونا صحيحين معًا في آن واحد. إذا كان النص ببساطة لا يذكر النقطة أبدًا، فتلك معلومات مفقودة، وهي لا يمكن الجزم، لا خاطئ.",
            "steps": [
              "ابحث عن جزء النص الذي يتحدث عن النقطة نفسها التي تتناولها العبارة.",
              "إذا لم يوجد جزء كهذا، فالنص صامت: ضع علامة لا يمكن الجزم.",
              "إذا وُجد جزء، تحقق مما إذا كان يتعارض مباشرة مع العبارة.",
              "التعارض الحقيقي المباشر فقط يكسب خاطئ."
            ],
            "trick": "النص: المكتب يفتح في الساعة 8 صباحًا. العبارة: المكتب يغلق في الساعة 5 مساءً. وقت الإغلاق لم يُذكر أبدًا، إذن هي لا يمكن الجزم، لا خاطئ."
          },
          {
            "term": "التناقض المباشر هو خاطئ حقًا",
            "detail": "عندما تصف العبارة الحقيقة نفسها التي في النص لكن بطريقة تتعارض معها، اختر خاطئ بثقة. يجب أن يكون هناك اصطدام مباشر بين الاثنين على النقطة نفسها بالذات.",
            "steps": [
              "أكّد أن كلًا من النص والعبارة يتحدثان عن الحقيقة نفسها.",
              "تحقق مما إذا كان يمكن أن يكونا صحيحين معًا في الوقت نفسه.",
              "إذا لم يستطيعا الصمود معًا، فذلك تناقض.",
              "ضع علامة خاطئ دون تردد."
            ],
            "trick": "النص: كل موقع اجتاز التدقيق. العبارة: موقع واحد رسب في التدقيق. لا يمكن أن يكونا صحيحين معًا، إذن هي خاطئ."
          },
          {
            "term": "اختبار القلب يفرز بينهما",
            "detail": "اسأل ما إذا كان النص يؤكد فعلًا عكس العبارة. إذا فعل، فالإجابة خاطئ. إذا كان النص صامتًا عن المسألة فحسب، فالإجابة لا يمكن الجزم. الخط الفاصل هو التناقض مقابل الغياب.",
            "steps": [
              "قل لنفسك: النص يذكر فعلًا عكس هذا.",
              "حاول إكمال تلك الجملة باقتباس حقيقي من النص.",
              "إذا استطعت اقتباسه، فالإجابة خاطئ.",
              "إذا لم تجد اقتباسًا كهذا، فالإجابة لا يمكن الجزم."
            ],
            "trick": "العجز عن إثبات عبارة لا يجعلها خاطئة. خاطئ يحتاج أن يقول النص العكس، بكلمات يمكنك الإشارة إليها."
          },
          {
            "term": "الأسباب المضافة والترتيبات والمقارنات تميل إلى لا يمكن الجزم",
            "detail": "إذا أضافت العبارة سببًا، أو ترتيب أفضل-أو-أسوأ، أو مقارنة لا يجريها النص أبدًا، فلا يمكنك عادة وصفها بـ خاطئ، لأن النص لم ينفِها أيضًا. الحكم الآمن هو لا يمكن الجزم ما لم يستبعدها النص صراحة.",
            "steps": [
              "اكتشف الادعاء الإضافي: «لأن»، أو معظم/أفضل/أسوأ، أو مقارنة A مقابل B.",
              "تحقق مما إذا كان النص يوفر ذلك السبب أو الترتيب أو طرفي المقارنة.",
              "إذا لم يفعل، فلا يمكنك إثباته ولا دحضه.",
              "ضع علامة لا يمكن الجزم (لا خاطئ) ما لم يتعارض النص معه بوضوح."
            ],
            "trick": "النص: الإنتاج ارتفع بعد افتتاح الخط الجديد. العبارة: الخط الجديد كان الأكثر إنتاجية في الشركة. لا يمكن الجزم، لأنه لم يُعطَ أي ترتيب."
          }
        ]
      },
      {
        "heading": "التحفظات والشروط والروابط",
        "items": [
          {
            "term": "ادعاء إن-فإن لا يفعل شيئًا حتى يتحقق الشرط",
            "detail": "الشرط لا يخبرك بشيء من تلقاء نفسه. إذا قال النص إن الأرباح ترتفع إذا أُغلقت الصفقة، فلا يمكنك ادعاء أن الأرباح ارتفعت ما لم يؤكد النص أيضًا أن الصفقة أُغلقت فعلًا.",
            "steps": [
              "اكتشف بنية إن-فإن في النص.",
              "ابحث عن جزء «إن» (الشرط) وتحقق مما إذا كان النص يؤكده.",
              "إذا تأكد الشرط، فيمكنك أخذ نتيجة «فإن».",
              "إذا لم يتأكد الشرط، فالنتيجة لا يمكن الجزم."
            ],
            "trick": "لكل إن-فإن، تتبّع الشرط أولًا. لا شرط مؤكد يعني لا نتيجة مؤكدة."
          },
          {
            "term": "أكّد الشرط، لا النتيجة أبدًا",
            "detail": "من «إن A فإن B»، معرفة أن A صحيحة تتيح لك استنتاج B. لكن معرفة أن B صحيحة لا تتيح لك استنتاج A، ومعرفة أن A خاطئة لا تخبرك بشيء عن B. تشغيل الشرط بالمقلوب فخ كلاسيكي.",
            "steps": [
              "اكتب القاعدة كـ«إن A فإن B».",
              "إذا أكّد النص أن A صحيحة، فيمكنك استنتاج B.",
              "إذا أكّد النص فقط أن B صحيحة، فلا يمكنك استنتاج A.",
              "إذا كانت A خاطئة، فلا تستنتج شيئًا عن B."
            ],
            "trick": "النص: إذا نجح العرض، يتوسع الفريق. العبارة: الفريق توسع، إذن العرض نجح. لا يمكن الجزم، لأن الفريق قد يكون توسع لسبب آخر."
          },
          {
            "term": "احترم التحفظات: لكن، إلا، رغم، ما لم",
            "detail": "هذه الكلمات تنحت استثناءات تقلب الإجابة في كثير من الأحيان. اقرأ الجملة كاملة حتى النهاية، لأن جملة ثانية قد تسحب بالضبط ما بدا أن الجملة الأولى تمنحه.",
            "steps": [
              "عندما ترى لكن، إلا، رغم، ما لم، أو بل، واصل القراءة حتى نهاية الجملة.",
              "حدد ما يسحبه التحفظ أو يحدّه.",
              "أعد الحكم على العبارة مقابل الجملة ككل، لا نصفها الأول فقط.",
              "دع الاستثناء يغير حكمك إذا انطبق."
            ],
            "trick": "النص: كل الفروع حققت الهدف، إلا الفرعين المفتتحين الشهر الماضي. العبارة: كل الفروع حققت الهدف. خاطئ، لأن الاستثناء مذكور صراحة."
          },
          {
            "term": "الضروري ليس كالكافي",
            "detail": "«مطلوب لـ» لا تعني «يضمن». إذا كانت الموافقة التنظيمية ضرورية لإطلاق منتج، فامتلاك تلك الموافقة لا يثبت أن الإطلاق حدث، لأن شروطًا أخرى قد تكون لا تزال مفقودة. عامل النتيجة كـ لا يمكن الجزم ما لم يؤكدها النص.",
            "steps": [
              "اكتشف لغة «لازم لـ» أو «مطلوب لـ».",
              "تذكر أن استيفاء شرط واحد لا يجبر النتيجة على الحدوث.",
              "تحقق مما إذا كان النص يؤكد النتيجة نفسها.",
              "إذا تأكد الشرط فقط، ضع علامة لا يمكن الجزم على النتيجة."
            ],
            "trick": "أعد قراءة «X لازم لـ Y» كـ«X وحده يكفي لجعل Y يحدث». إذا بدت إعادة القراءة هذه خاطئة، فلديك فخ الضروري-لا-الكافي، إذن النتيجة لا يمكن الجزم."
          }
        ]
      },
      {
        "heading": "المترادفات ومعنى الكلمة الدقيق في السياق",
        "items": [
          {
            "term": "اقرأ الجملة كاملة، لا الكلمة المستهدفة فقط",
            "detail": "تتغير الكلمة في معناها بالكلمات المحيطة بها، وهذه النصوص تحب استخدام المعنى الأقل شيوعًا للكلمة. اكتشف كيف تُستخدم الكلمة فعلًا في هذه الجملة بالذات قبل أن تمد يدك لمرادف.",
            "steps": [
              "ابحث عن الكلمة المستهدفة واقرأ الجملة الكاملة التي تقع فيها.",
              "اكتشف الوظيفة التي تؤديها الكلمة هنا، في هذا السياق.",
              "تجاهل المعنى الذي تحمله الكلمة عادة في مواضع أخرى.",
              "عندها فقط انظر إلى خيارات الإجابة."
            ],
            "trick": "في «سجّلت الشركة تحسنًا ملحوظًا»، ملحوظ تعني واضح للعيان، لا ملطّخ أو معلَّم. السياق، لا المدخل الأول في القاموس، هو الذي يقرر."
          },
          {
            "term": "تنبأ بكلمتك الخاصة أولًا، ثم طابِق",
            "detail": "غطِّ الخيارات وفكر في كلمة بسيطة تندرج في الجملة بنفس المعنى والنبرة. ثم اختر الخيار الأقرب لكلمتك الخاصة. هذا يمنع خيارًا مألوفًا لكنه خاطئ من إغرائك.",
            "steps": [
              "أخفِ خيارات الإجابة.",
              "اقرأ الجملة وفكر في كلمة استبدال خاصة بك.",
              "الآن اكشف الخيارات وابحث عن الأقرب لكلمتك.",
              "أكّدها بقراءة الجملة بذلك الخيار في مكانه."
            ],
            "trick": "إذا ظهرت كلمتك المتوقعة حرفيًا تقريبًا بين الخيارات، فمن المرجح جدًا أنها الإجابة. تحقق منها بالاستبدال وامضِ."
          },
          {
            "term": "عوّض كل مرشح في الجملة",
            "detail": "أدخل كل خيار في الجملة الأصلية وتحقق من أن المعنى والقواعد والنبرة كلها لا تزال صامدة. المرادف الصحيح يترك الجملة تقول الشيء نفسه؛ المرادف القريب-الخاطئ يحوّل المعنى أو الرسمية عادة.",
            "steps": [
              "خذ الخيار الأول واقرأ الجملة الكاملة وقد استُبدل به.",
              "اسأل ما إذا كانت الجملة لا تزال تعني الشيء نفسه ولا تزال تُقرأ بطبيعية.",
              "كرر لكل خيار.",
              "احتفظ بالخيار الواحد الذي يترك المعنى دون تغيير."
            ],
            "trick": "لـ«مجموعة قوية من الضوابط»، اختبر كلًا منها: «مجموعة متينة من الضوابط» تناسب، «مجموعة فظة من الضوابط» لا تناسب. قراءتها بصوت عالٍ في ذهنك تكشف المناسبات السيئة بسرعة."
          },
          {
            "term": "طابِق النبرة الإيجابية أو السلبية",
            "detail": "حافظ على نفس الشحنة العاطفية للكلمة الأصلية. إذا كانت تمدح، فيجب أن يمدح المرادف؛ وإذا كانت تنتقد، فيجب أن ينتقد المرادف. الكلمة ذات المعنى القاموسي الصحيح لكن النبرة الخاطئة فخ.",
            "steps": [
              "صنّف الكلمة المستهدفة كإيجابية أو سلبية أو محايدة.",
              "صنّف كل خيار بالطريقة نفسها.",
              "اشطب أي خيار لا تطابق نبرته نبرة الهدف.",
              "قارن الناجين فقط بالتفصيل."
            ],
            "trick": "مقتصد وبخيل كلاهما يعني الإنفاق القليل، لكن مقتصد كلمة تقدير وبخيل كلمة انتقاد. في جملة مدح ليستا قابلتين للتبادل، إذن النبرة تكسر التعادل."
          }
        ]
      },
      {
        "heading": "المنهجية والإيقاع تحت ضغط الوقت",
        "items": [
          {
            "term": "اقرأ السؤال أولًا، ثم امسح بحثًا عن الجملة",
            "detail": "اقرأ العبارة قبل النص الطويل لتعرف بالضبط ما تطارده، ثم امسح النص بحثًا عن الجملة الواحدة التي تعتمد عليها. هذا يحوّل قراءة كاملة بطيئة إلى بحث مستهدف سريع ويمنعك من قراءة النص مرارًا وتكرارًا.",
            "steps": [
              "اقرأ العبارة (أو السؤال) أولًا.",
              "انتقِ كلمة مفتاحية مميزة منها: اسم، رقم، تاريخ، أو مصطلح غير عادي.",
              "امسح النص بحثًا عن تلك الكلمة المفتاحية للقفز مباشرة إلى الأسطر ذات الصلة.",
              "اقرأ تلك الأسطر بدقة واحكم."
            ],
            "trick": "الأرقام والأسماء المكتوبة بأحرف كبيرة والكلمات النادرة تبرز عن النص العادي، إذن هي أسرع الأشياء للمسح عنها."
          },
          {
            "term": "اقرأ سطرًا على كل جانب من مطابقتك",
            "detail": "الصياغة التي تحسم الحكم فعلًا تقع غالبًا قبل الكلمة المفتاحية أو بعدها، لا على السطر نفسه. قراءة الجمل المجاورة تلتقط التحفظ أو القيد الذي يقلب الإجابة.",
            "steps": [
              "استقر على السطر الذي يحتوي كلمتك المفتاحية.",
              "اقرأ الجملة التي تسبقه مباشرة.",
              "اقرأ الجملة التي تليه مباشرة.",
              "عندها فقط استقر على حكمك، مع تضمين أي تحفظ."
            ],
            "trick": "«لكن» أو «إلا» مختبئة في الجملة التالية يمكن أن تحوّل صحيح إلى خاطئ. ألقِ دائمًا نظرة على سطر واحد في كل اتجاه قبل الالتزام."
          },
          {
            "term": "احكم على كل عبارة باستقلالية",
            "detail": "لا تدع صحيح أو خاطئ سابقًا يؤثر على التالي، ولا تفترض أن الإجابات موزعة بالتساوي عبر الأحكام الثلاثة. كل عبارة تصمد أو تسقط فقط مقابل النص، إذن سلسلة من ثلاث «لا يمكن الجزم» متتالية أمر طبيعي تمامًا.",
            "steps": [
              "عامل كل عبارة كسؤال جديد تمامًا.",
              "تجاهل ما كانت عليه إجاباتك القليلة الأخيرة.",
              "قاوم أي رغبة في موازنة الأحكام.",
              "احكم بحتًا بناءً على السطر الذي يمكنك إيجاده في النص."
            ],
            "trick": "إذا ضبطت نفسك تفكر «لديّ الكثير من لا يمكن الجزم»، تجاهل ذلك الشعور تمامًا. موازنة الأنماط عادة تخمين، لا استدلال."
          },
          {
            "term": "احذر إعادة الصياغة المغرية",
            "detail": "الخيارات الخاطئة غالبًا تعيد صياغة النص بأمانة شبه تامة لكنها تبدّل أداة كمية، أو توسّع النطاق، أو تصلّب توقعًا إلى حقيقة، أو تعكس شرطًا. قارن الإجابة كلمة بكلمة مقابل الجملة المصدر قبل الوثوق بمطابقة قريبة.",
            "steps": [
              "ضع العبارة بجانب سطر النص الذي يبدو أنها تطابقه.",
              "تحقق من أداة الكمية (بعض مقابل كل)، والنطاق (وحدة واحدة مقابل الشركة كلها)، والفعل (ربما مقابل فعل).",
              "ابحث عن إن-فإن مقلوبة أو سبب مضاف.",
              "إذا غُيّرت ولو كلمة واحدة بطريقة مهمة، فالحكم عادة لا يمكن الجزم أو خاطئ."
            ],
            "trick": "النص: المبيعات قد ترتفع في بعض الأسواق. عبارة الفخ: المبيعات سترتفع في كل الأسواق. تعديلان ضئيلان (قد إلى سوف، بعض إلى كل) يُسقطانها إلى لا يمكن الجزم في أحسن الأحوال."
          },
          {
            "term": "أعد الضبط بين النصوص وخمّن حين لا توجد عقوبة",
            "detail": "عامل كل نص كعالم جديد مغلق ولا تحمل أي حقائق من سابق إلى التالي. حيث لا تُعاقب الإجابات الخاطئة، لا تترك أبدًا فراغًا، لأن التخمين المدروس قد يسجّل نقاطًا بينما الفراغ لا يسجّل أبدًا.",
            "steps": [
              "عندما يبدأ نص جديد، امسح السابق ذهنيًا.",
              "لا تستورد أسماء أو أرقامًا أو افتراضات عبر النصوص.",
              "إذا كان بند واحد يلتهم وقتك، ضع أفضل حكم لديك وعلّمه.",
              "عُد إلى البنود المعلّمة فقط إذا بقي وقت؛ لا تترك أبدًا فراغًا إذا كان التخمين مجانيًا."
            ],
            "trick": "لأي شيء لا تستطيع حقًا ربطه بسطر، لا يمكن الجزم هي أأمن تخمين منفرد، لأن معظم الفخاخ مصممة لمعاقبة إجابات صحيح أو خاطئ المفرطة في الثقة."
          }
        ]
      }
    ],
    "exec-abstract": [
      {
        "heading": "ما الذي تطلبه هذه الألغاز حقًا",
        "items": [
          {
            "term": "لا كلمات، لا رياضيات، مجرد أشكال",
            "detail": "تعرض عليك الأسئلة المجردة (التخطيطية) صفًا من الصور المكوّنة من أشكال ونقاط وأسهم وتظليل. لا توجد عمليات حسابية لتؤديها ولا شيء لتقرأه. هناك قاعدة خفية تربط بين الصور، ومهمتك الوحيدة هي استنتاج تلك القاعدة. وبما أنه لا توجد أرقام تخشاها، يستطيع أي شخص أن يبرع في هذه الأسئلة بمجرد أن يعرف أين ينظر.",
            "trick": "قل لنفسك إن الإجابة هي دائمًا قاعدة بسيطة ومرتبة. تبدو الصور مزدحمة عن قصد، لكن القاعدة الحقيقية عادة ما تكون تغييرًا صغيرًا واحدًا يتكرر مرارًا وتكرارًا."
          },
          {
            "term": "نوعان من الأسئلة، مهارة واحدة",
            "detail": "يعطيك سؤال \"التالي في السلسلة\" صورًا تتغير خطوة بخطوة في اتجاه واحد، وتختار الصورة التي تأتي بعدها. ويعطيك سؤال \"الشاذ عن المجموعة\" صورًا تتبع جميعها القاعدة نفسها باستثناء واحدة، وتختار التي لا تتناسب. كلاهما يحتاج المهارة نفسها تمامًا: اعثر على القاعدة أولًا، ثم إما أن تكملها أو أن تكتشف من يخالفها.",
            "trick": "حدّد أي نوع تواجهه قبل أن تبدأ. بالنسبة للسلسلة، اسأل \"ما الذي يأتي بعد ذلك؟\". وبالنسبة للشاذ عن المجموعة، اسأل \"من الذي يختلف عن الآخرين؟\". المطاردة نفسها، والنهاية مختلفة."
          },
          {
            "term": "انظر إلى ما يتحرك، وتجاهل ما يبقى ثابتًا",
            "detail": "معظم كل صورة هو زخرفة وُضعت هناك لتشتيت انتباهك. القاعدة لا تعيش إلا في الأشياء التي تتغير من صورة إلى أخرى: شيء يدور، أو ينمو، أو يظهر، أو يبدّل لونه. درّب عينك على تخطّي أي شيء يكون متطابقًا في كل مرة والتركيز على الأجزاء التي تختلف.",
            "trick": "غطِّ كل شيء وقارن أول صورتين فقط. الشيء الوحيد المختلف بينهما هو في الغالب القاعدة بأكملها. اعثر عليها هناك، ثم تحقق من ثباتها في البقية."
          },
          {
            "term": "القواعد الحقيقية منتظمة، والتشويش ليس كذلك",
            "detail": "القاعدة الأصيلة تتحرك بطريقة ثابتة ويمكن التنبؤ بها: الدوران نفسه في كل خطوة، أو نقطة إضافية واحدة في كل خطوة، أو لون ينقلب في كل صورة. إذا تغيّرت سمة بمقدار مختلف في كل مرة دون نمط ثابت، فهي طُعم وليست القاعدة. تخلّ عنها واستمر في البحث عن السمة التي تتغير بطريقة مرتبة ومتكررة.",
            "trick": "إذا لم تستطع وصف التغيير بأنه خطوة ثابتة في اتجاه ثابت (على سبيل المثال \"ربع دورة باتجاه عقارب الساعة في كل مرة\")، فهو على الأرجح عامل تشتيت. الثابت يعني حقيقيًا، والعشوائي يعني تشويشًا."
          }
        ]
      },
      {
        "heading": "قائمة مراجعة السمات (راجع هذه الثمانية بالترتيب)",
        "items": [
          {
            "term": "1. الدوران (هل يدور شيء ما؟)",
            "detail": "تحقق مما إذا كان شكل أو سهم أو مؤشر يدور حول مركزه. الدوران الحقيقي يدور بالزاوية نفسها في كل خطوة في الاتجاه نفسه. الخطوات الشائعة هي ربع دورة (90 درجة) أو ثُمن دورة (45 درجة)، إما باتجاه عقارب الساعة أو عكسها. والسهم أو عقرب الساعة أو علامة واحدة على شكل هي أسهل شيء يمكن تتبعه.",
            "trick": "اختر نقطة واضحة واحدة، مثل طرف سهم أو إحدى الزوايا، وتابع تلك النقطة فقط من صورة إلى أخرى. إذا تأرجحت بالمقدار نفسه في كل مرة، فالدوران هو قاعدتك. احذر من الأشكال مثل الدوائر التي تبدو متطابقة عند تدويرها، حيث قد يكون الدوران حاصلًا لكن من المستحيل رؤيته."
          },
          {
            "term": "2. الانعكاس (هل انقلب شيء ما، لا أنه دار؟)",
            "detail": "الانعكاس هو صورة مرآة، مثل تحوّل الحرف F إلى F معكوس. وهو يختلف عن الدوران: التدوير يبقي الشكل نفسه دون تغيير ويوجّهه فقط في اتجاه جديد، بينما القلب يعكسه إلى توأمه المرآوي. والدليل القاطع هو شكل غير متماثل يبدو فجأة مقلوبًا من الخلف للأمام بطريقة لا يمكن للدوران أبدًا أن ينتجها.",
            "trick": "اسأل \"هل يمكنني الحصول على هذا بمجرد تدوير الشكل الأصلي؟\". إذا كانت الإجابة نعم، فهو دوران. وإذا بدا الشكل مقلوبًا من الخلف للأمام ولا يمكن لأي قدر من التدوير أن يحققه، فقد انعكس. الأشكال ذات الجانب الأيسر والأيمن الواضحين (F، R، شكل حرف L) هي حيث تظهر عمليات القلب."
          },
          {
            "term": "3. العدّ (كم عدد الأشياء الموجودة؟)",
            "detail": "عُدّ الأجسام أو النقاط أو الخطوط أو عدد أضلاع الشكل. عادة ما تتبع الأعداد تسلسلًا مرتبًا: واحد أكثر في كل خطوة، أو مضاعفة في كل خطوة، أو عدد مرتبط بشيء آخر (على سبيل المثال، عدد النقاط يطابق عدد الأضلاع). والعدّ من أكثر القواعد شيوعًا ومن أسهلها فواتًا لأنه يتعيّن عليك فعلًا أن تتوقف وتعدّ.",
            "trick": "قل الأعداد بصوت عالٍ كقائمة قصيرة (2، 3، 4 وهكذا). الخطوة الثابتة مثل \"زائد واحد\" أو \"ضرب اثنين\" تقفز إلى الذهن لحظة سماعها، والقائمة أسهل بكثير في حملها في رأسك من الصورة."
          },
          {
            "term": "4. التظليل / التعبئة (ما اللون أو النمط الذي يملؤه؟)",
            "detail": "انظر فيما إذا كانت الأشكال معبأة بالأسود، أو متروكة بيضاء، أو مظللة بالرمادي، أو مخططة، أو منقّطة. غالبًا ما تنقلب التعبئة بين تشغيل وإطفاء في كل صورة (أسود، أبيض، أسود، أبيض)، أو تنتقل حول مجموعة من الأشكال، أو ترتبط بسمة أخرى (على سبيل المثال، الأشكال الكبيرة معبأة دائمًا). ومن السهل اكتشافها بمجرد أن تقرر النظر إلى اللون فقط ولا شيء سواه.",
            "trick": "اقرأ التعبئة فقط عبر الصف بأكمله، متجاهلًا الشكل والحجم. إن إيقاع أسود-أبيض-أسود-أبيض شائع للغاية ويسهل جدًا إغفاله عندما تكون الأشكال نفسها متغيرة أيضًا."
          },
          {
            "term": "5. الحجم (هل ينمو أم يتقلص؟)",
            "detail": "تحقق مما إذا كانت الأشكال تكبر، أو تصغر، أو تتبادل بين كبير وصغير في كل خطوة. أحيانًا يتغير الحجم بثبات في اتجاه واحد. وأحيانًا ينمو عنصر بينما يتقلص آخر في الوقت نفسه، وهو ما يُسمى علاقة عكسية أو مرآوية، وهي خدعة مفضلة لجعل قاعدة سهلة تبدو صعبة.",
            "trick": "إذا وُجد شكلان، راقب ما إذا كانا يتحركان في اتجاهين متعاكسين: فبينما ينتفخ أحدهما، قد يتقلص الآخر. إن اكتشاف هذا الاقتران المتأرجح \"كالأرجوحة\" يمكن أن يحلّ البند بأكمله دفعة واحدة."
          },
          {
            "term": "6. الشكل / دورة الأشكال (هل يتغير الشكل نفسه؟)",
            "detail": "انظر فيما إذا كان النوع الفعلي للشكل يتغير، مثل دائرة إلى مربع إلى مثلث. كثيرًا جدًا ما تمرّ الأشكال عبر حلقة متكررة ثابتة، فبمجرد أن تجد أين تبدأ الحلقة من جديد، يصبح من السهل التنبؤ بالشكل التالي. وقد تكون الحلقة بطول اثنين (مجرد A، B، A، B) أو أطول.",
            "trick": "اكتب الأشكال كحلقة قصيرة، مثل دائرة-مربع-مثلث-دائرة-مربع، واقرأ فقط ما يأتي بعد ذلك. إذا تكررت الحلقة كل 3 صور، فإن الصور 1 و4 و7 تشترك في الشكل نفسه، بحيث يمكنك القفز بمقدار ثلاثة للتأكيد."
          },
          {
            "term": "7. الموضع / الحركة (هل ينتقل شيء ما؟)",
            "detail": "تحقق مما إذا كان عنصر يتحرك حول الإطار: يقفز من زاوية إلى زاوية، أو ينزلق خطوة واحدة على طول حافة، أو يدور حول الزوايا الأربع لمربع موضعًا واحدًا في كل مرة. الحركة حول الزوايا أو حول حافة دائرة شائعة جدًا وسريعة التحقق بمجرد اكتشافها.",
            "trick": "رقّم الزوايا الأربع في ذهنك كمواضع 1، 2، 3، 4 وراقب النقطة أو العلامة وهي تقفز. إذا تحركت زاوية واحدة باتجاه عقارب الساعة في كل مرة، فإن الموضع التالي هو ببساطة الرقم التالي (وبعد 4 يعود إلى 1)."
          },
          {
            "term": "8. الإضافة / الإزالة (هل يظهر شيء ما أو يختفي؟)",
            "detail": "ابحث عن عنصر يُضاف أو يُزال في كل خطوة: خطوط تتراكم واحدة تلو الأخرى، أو نقاط تُجرّد، أو شكل كامل يظهر أو يختفي. وهذا يتداخل مع العدّ، لكنك هنا تركز على أي عنصر بالضبط قد تغير بدلًا من مجرد العدد الإجمالي.",
            "trick": "ضع الصور جنبًا إلى جنب واسأل \"ما الموجود هنا ولم يكن موجودًا من قبل؟\" و\"ما الذي ذهب؟\". العنصر الوحيد الذي يظهر أو يختفي في كل خطوة هو قاعدتك."
          }
        ]
      },
      {
        "heading": "الطريقة: كيف تحلّ أي بند",
        "items": [
          {
            "term": "الخطوة 1: اعثر على ما يتغير",
            "detail": "راجع قائمة المراجعة المكوّنة من ثماني نقاط عبر الصور ودوّن كل سمة لا تبقى ثابتة طوال الوقت. كل ما يبقى متطابقًا هو زخرفة؛ وكل ما يتحرك هو قاعدتك المرشّحة. غالبًا ما تتغير سمة واحدة فقط بطريقة مرتبة، وتلك هي الإجابة بأكملها.",
            "steps": [
              "انظر إلى أول صورتين فقط، جنبًا إلى جنب.",
              "راجع قائمة المراجعة: الدوران، الانعكاس، العدّ، التعبئة، الحجم، الشكل، الموضع، الإضافة/الإزالة.",
              "لكل سمة، قرّر \"ثابتة\" أو \"متغيرة\" بين تينك الصورتين.",
              "اشطب ذهنيًا كل ما وضعت عليه علامة \"ثابتة\"، فهو مجرد زخرفة.",
              "ما يتبقى عليه علامة \"متغيرة\" هو قاعدتك المرشّحة لاختبارها تاليًا."
            ],
            "trick": "ابدأ بأول صورتين فقط، لا بكلها. معظم القواعد تظهر في تلك القفزة الواحدة، ولا تحتاج إلى البقية إلا للتأكيد. هذا يوفّر عليك الغرق في التفاصيل."
          },
          {
            "term": "الخطوة 2: حوّل التغيير إلى قاعدة واضحة واحدة",
            "detail": "صِف التغيير بجملة دقيقة تتضمن اتجاهًا وحجم خطوة، مثل \"يدور 90 درجة باتجاه عقارب الساعة في كل خطوة\" أو \"يكتسب نقطة واحدة في كل خطوة\". إن عبارة غامضة مثل \"إنه يتغير نوعًا ما\" لا يمكن التحقق منها. أما القاعدة الدقيقة فيمكن تطبيقها واختبارها، وهذا ما تحتاجه.",
            "steps": [
              "خذ السمة الواحدة التي رصدت تغيرها.",
              "اذكر اتجاه التغيير (باتجاه عقارب الساعة، ينمو، يُضيف، ينقلب بين تشغيل وإطفاء).",
              "اذكر حجم الخطوة (90 درجة، زائد واحد، مضاعفة، كل صورة أخرى).",
              "اجمعها في جملة قصيرة واحدة يمكنك قولها بصوت عالٍ.",
              "إذا تغيرت سمتان في آنٍ واحد، اكتب جملة منفصلة لكل منهما وتعامل معهما كقاعدتين تعملان جنبًا إلى جنب."
            ],
            "trick": "عندما يتغير شيئان معًا، لا تذعر. حُلّ كلًا منهما بمفرده (على سبيل المثال، الدوران وحده، ثم التعبئة وحدها)، ثم اجمع الإجابات. البنود التي تبدو صعبة هي عادة قاعدتان سهلتان متراكمتان."
          },
          {
            "term": "الخطوة 3: اختبر القاعدة على كل صورة",
            "detail": "يجب أن تنطبق القاعدة الحقيقية على كل الصور، لا على أول صورتين نظرت إليهما فحسب. طبّق قاعدتك على كل صورة بالتتابع. إذا خالفتها ولو صورة واحدة، فقاعدتك خاطئة أو ناقصة، فعدّلها واختبرها من جديد حتى تتناسب مع كل صورة على حدة.",
            "steps": [
              "ابدأ من الصورة الأولى واستخدم قاعدتك للتنبؤ بالصورة الثانية: هل تطابق؟",
              "استخدمها للتنبؤ بالصورة الثالثة، ثم الرابعة، وهكذا حتى النهاية.",
              "إذا طابقت كل صورة، فقد تأكدت قاعدتك ويمكنك الوثوق بها.",
              "إذا لم تطابق صورة واحدة، فقاعدتك خاطئة أو أنك أغفلت قاعدة ثانية.",
              "أصلح القاعدة (أو أضف القاعدة الثانية) وأعد الاختبار من الصورة الأولى."
            ],
            "trick": "بالنسبة للسلسلة، طبّق قاعدتك المؤكدة مرة إضافية بعد الصورة الأخيرة لتستنتج ما ينبغي أن تكون عليه الإجابة، ثم ابحث عن تلك الصورة بالضبط بين الخيارات. وبالنسبة للشاذ عن المجموعة، فإن الصورة التي تخالف قاعدتك المؤكدة هي الإجابة."
          },
          {
            "term": "اعمل بشكل عكسي من الخيارات عند التعثّر",
            "detail": "إذا لم تظهر القاعدة نفسها، فانتقل إلى خيارات الإجابة بدلًا من ذلك. استخدم كل سمة كمرشّح واستبعد كل خيار يخالفها. كثيرًا جدًا ما تموت ثلاثة خيارات على الفور بسبب سمة واضحة واحدة، تاركةً لك الإجابة شبه مُسلّمة في يدك.",
            "steps": [
              "اختر السمة الأكثر وضوحًا الواحدة (غالبًا التعبئة أو العدّ).",
              "تحقق من تلك السمة الواحدة في كل خيار من خيارات الإجابة.",
              "اشطب كل خيار يخطئ في تلك السمة.",
              "انتقل إلى السمة التالية وكرّر على الخيارات المتبقية.",
              "استمر في التصفية حتى يتبقى خيار واحد فقط، وهو إجابتك."
            ],
            "trick": "صفِّ على أسهل سمة أولًا، مثل الأسود مقابل الأبيض أو كم عدد النقاط. عادة ما تمحو مرورة واحدة على سمة بسيطة واحدة معظم الخيارات الخاطئة."
          },
          {
            "term": "اكتشف عوامل التشتيت وتجاهلها",
            "detail": "يضيف واضعو الاختبارات عمدًا سمات تتغير بطرق فوضوية لا معنى لها لسحب انتباهك عن القاعدة الحقيقية. التماثل الذي يبدو مهمًا لكنه لا يؤدي إلى شيء، أو شكل يتغير بمقدار مختلف في كل مرة، هو طُعم. إذا لم يكن لسمة اتجاه ثابت ولا خطوة ثابتة، فأسقطها.",
            "steps": [
              "لكل شيء يبدو أنه يتغير، اسأل ما إذا كان التغيير ثابتًا ومتكررًا.",
              "إذا كان للتغيير اتجاه ثابت وخطوة ثابتة، فأبقِه كقاعدة حقيقية.",
              "إذا كان التغيير مختلفًا في كل خطوة دون نمط، فضع عليه علامة عامل تشتيت.",
              "تجاهل عامل التشتيت تمامًا وابنِ إجابتك على القواعد الثابتة فقط."
            ],
            "trick": "اسأل عن كل تغيير: \"الاتجاه نفسه؟ حجم الخطوة نفسه؟\". إن نعمين تعنيان قاعدة حقيقية. وأي \"لا\" يعني تشويشًا وُضع هناك لإضاعة وقتك."
          },
          {
            "term": "راقب الساعة واستمر في التقدم",
            "detail": "تكافئ هذه الأسئلة السرعة بقدر ما تكافئ الدقة. إذا لم تظهر قاعدة بعد نحو نصف دقيقة، فلا تستمر في التحديق. استخدم طريقة الاستبعاد لتقديم أفضل تخمين لديك، وضع علامة على السؤال، وانتقل. إن إهدار الوقت على نمط صعب واحد يكلّفك عدة درجات سهلة كان بإمكانك جمعها في مكان آخر.",
            "steps": [
              "امنح نفسك نحو 30 إلى 40 ثانية للعثور على القاعدة.",
              "إذا لم تظهر، فانتقل إلى استبعاد الخيارات بدلًا من ذلك.",
              "اختر أفضل خيار باقٍ كإجابتك.",
              "ضع علامة على السؤال حتى تتمكن من العودة إليه إذا سمح الوقت.",
              "انتقل مباشرة إلى البند التالي دون التوقف عنده."
            ],
            "trick": "إن أفضل تخمين موسوم بعلامة خير من إجابة مثالية لا تصل إليها أبدًا. اجمع الدرجات السهلة أولًا، ثم عُد إلى الصعبة فقط إذا تبقى وقت."
          }
        ]
      }
    ]
  }
};

if (typeof window !== "undefined") window.STUDY = STUDY;
if (typeof module !== "undefined" && module.exports) module.exports = STUDY;
