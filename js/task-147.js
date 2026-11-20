// Weekday Finder
// Given a string date in the format YYYY-MM-DD, return the day of the week.

// Valid return days are:

// "Sunday"
// "Monday"
// "Tuesday"
// "Wednesday"
// "Thursday"
// "Friday"
// "Saturday"
// Be sure to ignore time zones.

// Tests:
// Waiting:1. getWeekday("2025-11-06") should return Thursday.
// Waiting:2. getWeekday("1999-12-31") should return Friday.
// Waiting:3. getWeekday("1111-11-11") should return Saturday.
// Waiting:4. getWeekday("2112-12-21") should return Wednesday.
// Waiting:5. getWeekday("2345-10-01") should return Monday.

function getWeekday(dateString) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

console.log(getWeekday("2025-11-06")); // Thursday
console.log(getWeekday("1999-12-31")); // Friday
console.log(getWeekday("1111-11-11")); // Saturday
console.log(getWeekday("2112-12-21")); // Wednesday
console.log(getWeekday("2345-10-01")); // Monday

// Method2
function getWeekdayMethod2(dateString) {
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);

  return WEEK_DAYS[date.getDay()];
}

console.log("Method2", getWeekdayMethod2("2025-11-06")); // Thursday
console.log("Method2", getWeekdayMethod2("1999-12-31")); // Friday
console.log("Method2", getWeekdayMethod2("1111-11-11")); // Saturday
console.log("Method2", getWeekdayMethod2("2112-12-21")); // Wednesday
console.log("Method2", getWeekdayMethod2("2345-10-01")); // Monday
