# Week 01 — My Solution / راه‌حل من

**Author / نویسنده:** BenyaminHossein-zadeh.  
**Language / زبان:** TypeScript.
**Approach / رویکرد:** Iteration (Simulation).

---

## Idea / ایده

ابتدا بررسی می‌کنیم آیا بر `15` بخش‌پذیر است (یعنی هم‌زمان بر `3` و `5` بخش‌پذیر باشد). اگر نبود، سپس بخش‌پذیری بر `5` و بعد بر `3` را بررسی می‌کنیم:

- اگه بر 15 بخش‌پذیر بود (یعنی هم بر 3 و هم بر 5)، `"FizzBuzz"` اضافه می‌شود.
- اگه فقط بر 5 بخش‌پذیر بود، `"Buzz"` اضافه می‌شود.
- اگه فقط بر 3 بخش‌پذیر بود، `"Fizz"` اضافه می‌شود.
- در غیر این صورت، خود عدد به رشته تبدیل شده و اضافه می‌شود.

## Complexity / پیچیدگی

- Time / زمان: O(n) — one pass through all numbers from 1 to n.
- Space / حافظه: O(n) — the output array stores n strings.

## Files / فایل‌ها

- `solution.ts` — main solution / راه‌حل اصلی
