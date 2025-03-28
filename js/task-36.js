// Description:
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// ^ — початок рядка
// (?=.*[a-z]) — хоча б одна маленька літера
// (?=.*[A-Z]) — хоча б одна велика літера
// (?=.*\d) — хоча б одна цифра
// [A-Za-z\d]{6,} — лише літери та цифри, мінімум 6 символів
// $ — кінець рядка

console.log(REGEXP.test("Pass123")); // true
console.log(REGEXP.test("password")); // false
console.log(REGEXP.test("PASSWORD1")); // false
console.log(REGEXP.test("Pa1")); // false
console.log(REGEXP.test("Valid123")); // true
console.log(REGEXP.test("Invalid_123")); // false
