// Slug Generator
// Given a string, return a URL-friendly version of the string using the following constraints:

// All letters should be lowercase.
// All characters that are not letters, numbers, or spaces should be removed.
// All spaces should be replaced with the URL-encoded space code %20.
// Consecutive spaces should be replaced with a single %20.
// The returned string should not have leading or trailing %20.
// Tests:
// Waiting:1. generateSlug("helloWorld") should return "helloworld".
// Waiting:2. generateSlug("hello world!") should return "hello%20world".
// Waiting:3. generateSlug(" hello-world ") should return "helloworld".
// Waiting:4. generateSlug("hello  world") should return "hello%20world".
// Waiting:5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".

function generateSlug(str = "") {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/ +/g, "%20");
}

console.log(generateSlug("helloWorld")); // "helloworld"
console.log(generateSlug("hello world!")); // "hello%20world"
console.log(generateSlug(" hello-world ")); // "helloworld"
console.log(generateSlug("hello  world")); // "hello%20world"
console.log(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")); // "h3110%20w0r1d"
