# Week 01 — My Solution / راه‌حل من

**Author / نویسنده:** mahdisanjari  
**Language / زبان:** JavaScript  
**Approach / رویکرد:** Single loop + modulo

---

## Idea / ایده

<!-- FA -->
از ۱ تا `n` یک حلقه می‌زنیم و برای هر عدد شرط‌ها رو به ترتیب چک می‌کنیم:

- اول بخش‌پذیری بر ۱۵ (یعنی هم ۳ هم ۵) → `"FizzBuzz"`
- بعد بخش‌پذیری بر ۳ → `"Fizz"`
- بعد بخش‌پذیری بر ۵ → `"Buzz"`
- در غیر این صورت خود عدد به‌صورت رشته

ترتیب شرط‌ها مهمه؛ اگه اول ۳ رو چک کنیم، حالت `FizzBuzz` هیچ‌وقت اتفاق نمی‌افته.

<!-- EN -->
One pass from 1 to `n`, checking divisibility by 15 first (so the combined case is not swallowed by the 3-case), then 3, then 5, otherwise the number itself as a string.

## Complexity / پیچیدگی

- Time / زمان: O(n)
- Space / حافظه: O(n) — برای آرایه‌ی خروجی (خارج از خروجی، O(1))

## Files / فایل‌ها

- `solution.js` — main solution / راه‌حل اصلی

## Notes (optional) / یادداشت (اختیاری)

- به‌جای `i % 15` می‌شد `i % 3 === 0 && i % 5 === 0` نوشت؛ خروجی یکیه.
