// Signature Validation
// Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

// Letters in the message and secret key have these values:
// a to z have values 1 to 26 respectively.
// A to Z have values 27 to 52 respectively.
// All other characters have no value.
// Compute the signature by taking the sum of the message plus the sum of the secret key.
// For example, given the message "foo" and the secret key "bar", the signature would be 57:

// f (6) + o (15) + o (15) = 36
// b (2) + a (1) + r (18) = 21
// 36 + 21 = 57
// Check if the computed signature matches the provided signature.

// Tests:
// Waiting:1. verify("foo", "bar", 57) should return true.
// Waiting:2. verify("foo", "bar", 54) should return false.
// Waiting:3. verify("freeCodeCamp", "Rocks", 238) should return true.
// Waiting:4. verify("Is this valid?", "No", 210) should return false.
// Waiting:5. verify("Is this valid?", "Yes", 233) should return true.
// Waiting:6. verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true.

function verify(message, key, signature) {
  const messageValues = [...message.replace(/[^a-zA-Z]/g, "")].reduce(
    (acc, i) => acc + i.charCodeAt(0) - (i.toUpperCase() === i ? 38 : 96),
    0,
  );
  const keyValues = [...key.replace(/[^a-zA-Z]/g, "")].reduce(
    (acc, i) => acc + i.charCodeAt(0) - (i.toUpperCase() === i ? 38 : 96),
    0,
  );

  return messageValues + keyValues === signature ? true : false;
}

console.log(verify("foo", "bar", 57)); // true
console.log(verify("foo", "bar", 54)); // false
console.log(verify("freeCodeCamp", "Rocks", 238)); // true
console.log(verify("Is this valid?", "No", 210)); // false
console.log(verify("Is this valid?", "Yes", 233)); // true
console.log(
  verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514),
);
// true
