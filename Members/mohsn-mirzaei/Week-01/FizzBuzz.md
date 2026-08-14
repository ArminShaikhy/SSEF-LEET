# Week 01 — My Solution / راه‌حل من

**Author / نویسنده:** mohsn-mirzaei  
**Language / زبان:** JavaScript  
**Approach / رویکرد:** Simulation / brute force iteration

---

## Idea / ایده

<!-- FA: خیلی خلاصه توضیح بدید چطور حل کردید. -->
<!-- EN: Briefly explain how you solved it. -->

از عدد ۱ تا n روی هر عدد حلقه می‌زنیم. برای هر عدد `i`، باقیمانده‌ی تقسیمش بر ۳ و ۵ رو با `%` چک می‌کنیم:

- اگه هم بر ۳ و هم بر ۵ بخش‌پذیر بود، `"FizzBuzz"` اضافه می‌شه.
- اگه فقط بر ۳ بخش‌پذیر بود، `"Fizz"` اضافه می‌شه.
- اگه فقط بر ۵ بخش‌پذیر بود، `"Buzz"` اضافه می‌شه.
- در غیر این صورت، خود عدد به رشته تبدیل شده و اضافه می‌شه.

نکته‌ی مهم: شرط "هر دو" باید قبل از شرط‌های تکی چک بشه، وگرنه هیچ‌وقت اجرا نمی‌شه.

We loop from 1 to n. For each number `i`, we check divisibility by 3 and 5 using `%`. The combined "divisible by both" condition must be checked first, otherwise it's unreachable since the single-condition checks would catch it first.

## Complexity / پیچیدگی

- Time / زمان: O(n) — one pass through all numbers from 1 to n, no nested loops
- Space / حافظه: O(n) — the output array grows linearly with n

## Files / فایل‌ها

- `FizzBuzz.js` — main solution / راه‌حل اصلی

## Notes (optional) / یادداشت (اختیاری)

<!-- Edge cases, alternatives, questions for review -->
<!-- موارد خاص، راه‌حل‌های جایگزین، سوال برای ریویو -->

- Manually traced through n=5 and n=15 by hand before coding to verify the logic against the problem's examples.
- Edge case: n=1 should just return `["1"]` (no Fizz/Buzz possible).
