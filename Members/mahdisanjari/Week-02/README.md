# Week 02 — My Solution / راه‌حل من

**Author / نویسنده:** mahdisanjari  
**Language / زبان:** JavaScript  
**Approach / رویکرد:** Binary Search (two pointers)

---

## Idea / ایده

<!-- FA -->
چون آرایه از قبل مرتب شده، لازم نیست همه‌ی عنصرها رو چک کنیم. دو تا اشاره‌گر `left` و `right` می‌ذاریم روی ابتدا و انتهای آرایه و در هر مرحله عنصر وسط رو نگاه می‌کنیم:

- اگه عنصر وسط برابر `target` بود، همون ایندکس رو برمی‌گردونیم.
- اگه کوچیک‌تر از `target` بود، یعنی جواب حتماً سمت راسته، پس `left = mid + 1`.
- اگه بزرگ‌تر بود، جواب سمت چپه، پس `right = mid - 1`.

هر مرحله نصف بازه‌ی جست‌وجو حذف می‌شه، پس زمان لگاریتمی می‌شه. حلقه تا وقتی ادامه داره که `left <= right` باشه؛ اگه بازه خالی شد یعنی عدد وجود نداره و `-1` برمی‌گردونیم.

نکته: `mid` رو با `left + Math.floor((right - left) / 2)` حساب کردم به‌جای `Math.floor((left + right) / 2)` تا در آرایه‌های خیلی بزرگ سرریز عددی پیش نیاد (در JS مشکل‌ساز نیست ولی عادت خوبیه و در زبان‌های دیگه مهمه).

<!-- EN -->
The array is already sorted, so we keep two pointers (`left`, `right`) and repeatedly compare the middle element with the target, discarding half of the range each step. If the range becomes empty, the target is not present and we return `-1`.

## Complexity / پیچیدگی

- Time / زمان: O(log n) — هر مرحله اندازه‌ی بازه نصف می‌شه
- Space / حافظه: O(1) — فقط چند متغیر ساده استفاده شده

## Files / فایل‌ها

- `solution.js` — main solution / راه‌حل اصلی

## Notes (optional) / یادداشت (اختیاری)

- `nums = [5], target = 5` → با یک بار مقایسه `0` برمی‌گردونه.
- `nums = [-1,0,3,5,9,12], target = 2` → بازه خالی می‌شه و `-1` برمی‌گردونه.
- نسخه‌ی بازگشتی (recursive) هم ممکنه ولی حافظه‌ش به‌خاطر call stack می‌شه O(log n)، برای همین نسخه‌ی حلقه‌ای رو انتخاب کردم.
