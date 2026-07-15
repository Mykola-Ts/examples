// Are all elements equal?

// Description:
// Task
// Create (a) method(s) eqAll that determines if all elements of a list are equal.
// list can be a String or an Array; return value is a Boolean.
// Your method(s) should not be enumerable. Equality should be strict (===).

// Examples
// "aaaaa".eqAll() => true
// "abcde".eqAll() => false
// [0,0,0].eqAll() => true
// [0,1,2].eqAll() => false

// "".eqAll() => true
// [].eqAll() => true
// Bonus points
// Bonus points for supporting any (finite) iterable!
// This will be tested with Sets and custom Objects.
// Note that these may lack a length property, and may not be indexable into.

Object.defineProperty(String.prototype, "eqAll", {
  value: function eqAll() {
    return [...new Set([...this])].length > 1 ? false : true;
  },
});

Object.defineProperty(Array.prototype, "eqAll", {
  value: function eqAll() {
    return this.every((i) => this[0] === i);
  },
});

console.log("expected true", "equal", "aaaaa".eqAll()); // true
console.log("expected false", "equal", "abcde".eqAll()); // false
console.log("expected true", "equal", "".eqAll()); // true
console.log("expected true", "equal", [0, 0, 0].eqAll()); // true
console.log("expected false", "equal", [0, 1, 2].eqAll()); // false
console.log("expected true", "equal", [].eqAll()); // true
console.log("expected true", "equal", [0, 0, 0, 0].eqAll()); // true
console.log("expected false", "equal", [0, false].eqAll()); // false
console.log("expected false", "equal", [undefined, undefined, true].eqAll()); // false
console.log(
  "expected true",
  "equal",
  [undefined, undefined, undefined].eqAll(),
); // true
console.log("expected false", "equal", [null, null, true].eqAll()); // false
console.log("expected true", "equal", [null, null, null].eqAll()); // true
console.log("expected false", "equal", [false, false, true].eqAll()); // false
console.log("expected true", "equal", [false, false, false].eqAll()); // true
console.log("expected false", "equal", ["", "", true].eqAll()); // false
console.log("expected true", "equal", ["", "", ""].eqAll()); // true
console.log("expected false", "equal", [0, 0, true].eqAll()); // false
console.log("expected false", "equal", [0n, 0n, true].eqAll()); // false
console.log("expected true", "equal", [0n, 0n, 0n].eqAll()); // true
console.log("expected false", "equal", [-0, -0, true].eqAll()); // false
console.log("expected true", "equal", [-0, -0, -0].eqAll()); // true
console.log("expected false", "equal", [0n, 0n, true].eqAll()); // false
console.log("expected true", "equal", [0n, 0n, 0n].eqAll()); // true
console.log("expected true", "equal", [0, 0, -0, -0].eqAll()); // true
console.log("expected true", "equal", [0n, 0n, 0n, 0n].eqAll()); // true
console.log("expected false", "equal", [NaN, NaN, true].eqAll()); // false
console.log("expected false", "equal", [NaN, NaN, NaN].eqAll()); // false
