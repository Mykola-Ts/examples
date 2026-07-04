// Validate a PIN code

// Description:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -- > false

function validatePIN(pin = "") {
  if (pin.length !== 4 && pin.length !== 6) return false;

  return !pin.replaceAll(/\d/g, "").length ? true : false;
}

console.log(validatePIN("1234")); // true
console.log(validatePIN("1")); // false
console.log(validatePIN("12")); // false
console.log(validatePIN("123")); // false
console.log(validatePIN("12345")); // false
console.log(validatePIN("1234567")); // false
console.log(validatePIN("-1234")); // false
console.log(validatePIN("1.234")); // false
console.log(validatePIN("-1.234")); // false
console.log(validatePIN("00000000")); // false
console.log(validatePIN("a234")); // false

// Method2
function validatePINMethod2(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log("Method2", validatePINMethod2("1234")); // true
console.log("Method2", validatePINMethod2("1")); // false
console.log("Method2", validatePINMethod2("12")); // false
console.log("Method2", validatePINMethod2("123")); // false
console.log("Method2", validatePINMethod2("12345")); // false
console.log("Method2", validatePINMethod2("1234567")); // false
console.log("Method2", validatePINMethod2("-1234")); // false
console.log("Method2", validatePINMethod2("1.234")); // false
console.log("Method2", validatePINMethod2("-1.234")); // false
console.log("Method2", validatePINMethod2("00000000")); // false
console.log("Method2", validatePINMethod2("a234")); // false
