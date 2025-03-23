// Description:
// Your task is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible".It means that the function should not return 61 seconds, but 1 minute and 1 second instead.Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds = 0) {
  if (seconds < 0) throw new Error("The value must be a non-negative integer");

  if (seconds === 0) return "now";

  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const YEAR = DAY * 365;
  let duration = [];

  if (seconds >= YEAR) {
    const years = Math.floor(seconds / YEAR);
    duration.push(`${years} ${years === 1 ? "year" : "years"}`);
    seconds -= years * YEAR;
  }

  if (seconds >= DAY) {
    const days = Math.floor(seconds / DAY);
    duration.push(`${days} ${days === 1 ? "day" : "days"}`);
    seconds -= days * DAY;
  }

  if (seconds >= HOUR) {
    const hours = Math.floor(seconds / HOUR);
    duration.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
    seconds -= hours * HOUR;
  }

  if (seconds >= MINUTE) {
    const minutes = Math.floor(seconds / MINUTE);
    duration.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
    seconds -= minutes * MINUTE;
  }

  if (seconds > 0) {
    duration.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);
  }

  const durationLength = duration.length;

  return durationLength <= 1
    ? duration.join("")
    : `${duration.slice(0, durationLength - 1).join(", ")} and ${
        duration[durationLength - 1]
      }`;
}

console.log(formatDuration(1)); // 1 second
console.log(formatDuration(62)); // 1 minute and 2 seconds
console.log(formatDuration(120)); // 2 minutes
console.log(formatDuration(3600)); // 1 hour
console.log(formatDuration(3662)); // 1 hour, 1 minute and 2 seconds
console.log(formatDuration(132030240)); // 4 years, 68 days, 3 hours and 4 minutes
console.log(formatDuration(4272720)); // 49 days, 10 hours and 52 minutes

// Method 2
function formatDurationMethod2(seconds = 0) {
  if (seconds === 0) return "now";

  const { MINUTE, HOUR, DAY, YEAR } = {
    MINUTE: 60,
    HOUR: 3600,
    DAY: 86400,
    YEAR: 31536000,
  };
  const listFormatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  const units = [
    ["year", YEAR],
    ["day", DAY],
    ["hour", HOUR],
    ["minute", MINUTE],
    ["second", 1],
  ];
  const duration = units
    .map(([name, value]) => {
      const amount = Math.floor(seconds / value);
      seconds %= value;

      return amount > 0 ? `${amount} ${name}${amount > 1 ? "s" : ""}` : null;
    })
    .filter(Boolean);

  return listFormatter.format(duration);
}

console.log("Method2", formatDurationMethod2(1)); // 1 second
console.log("Method2", formatDurationMethod2(62)); // 1 minute and 2 seconds
console.log("Method2", formatDurationMethod2(120)); // 2 minutes
console.log("Method2", formatDurationMethod2(3600)); // 1 hour
console.log("Method2", formatDurationMethod2(3662)); // 1 hour, 1 minute and 2 seconds
console.log("Method2", formatDurationMethod2(132030240)); // 4 years, 68 days, 3 hours and 4 minutes
console.log("Method2", formatDurationMethod2(4272720)); // 49 days, 10 hours and 52 minutes
