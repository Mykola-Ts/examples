// Human Readable Time

// Description:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds = 0) {
  if (seconds > 359999) return;

  const time = [];
  const toFormatTime = (sec) => Math.floor(sec).toString().padStart(2, "0");

  for (let i = 3600; i >= 1; i /= 60) {
    time.push(toFormatTime(seconds / i));
    seconds = seconds % i;
  }

  return time.join(":");
}

console.log(humanReadable(0)); // "00:00:00"
console.log(humanReadable(59)); // "00:00:59"
console.log(humanReadable(60)); // "00:01:00"
console.log(humanReadable(90)); // "00:01:30"
console.log(humanReadable(3599)); // "00:59:59"
console.log(humanReadable(3600)); // "01:00:00"
console.log(humanReadable(45296)); // "12:34:56"
console.log(humanReadable(86399)); // "23:59:59"
console.log(humanReadable(86400)); // "24:00:00"
console.log(humanReadable(359999)); // "99:59:59"
