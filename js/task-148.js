// Is It the Weekend?
// Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

// The weekend starts on Saturday.
// If the given date is Saturday or Sunday, return "It's the weekend!".
// Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
// If X is 1, use "day" (singular) instead of "days" (plural).
// Make sure the calculation ignores your local timezone.
// Tests:
// Waiting:1. daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
// Waiting:2. daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
// Waiting:3. daysUntilWeekend("2025-12-06") should return "It's the weekend!".
// Waiting:4. daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
// Waiting:5. daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
// Waiting:6. daysUntilWeekend("2026-11-29") should return "It's the weekend!".

function daysUntilWeekend(dateString) {
  const date = new Date(dateString);
  const daysUntilSaturday = 6 - date.getDay();

  return daysUntilSaturday === 0 || daysUntilSaturday === 6
    ? "It's the weekend!"
    : `${daysUntilSaturday} day${daysUntilSaturday > 1 ? "s" : ""} until the weekend.`;
}

console.log(daysUntilWeekend("2025-11-14")); // "1 day until the weekend"
console.log(daysUntilWeekend("2025-01-01")); // "3 days until the weekend"
console.log(daysUntilWeekend("2025-12-06")); // "It's the weekend!"
console.log(daysUntilWeekend("2026-01-27")); // "4 days until the weekend"
console.log(daysUntilWeekend("2026-09-07")); // "5 days until the weekend"
console.log(daysUntilWeekend("2026-11-29")); // "It's the weekend!"
