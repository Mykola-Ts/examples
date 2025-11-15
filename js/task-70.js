// Only one

// Description:
// Task: Write function only_one which return True if ONLY ONE of the boolean flag is True, otherwise return False. If there are no boolean flag, return False

//   onlyOne() --> false
//   onlyOne(true, false, false) --> true
//   onlyOne(true, false, false, true) --> false
//   onlyOne(false, false, false, false) --> false

function onlyOne() {
  return [...arguments].filter(Boolean).length === 1;
}

console.log(onlyOne()); // false
console.log(onlyOne(true, false, false)); // true
console.log(onlyOne(true, false, false, true)); // false
console.log(onlyOne(false, false, false, false)); // false
