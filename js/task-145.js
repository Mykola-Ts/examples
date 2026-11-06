// SpOoKy~CaSe
// Given a string representing a variable name, convert it to "spooky case" using the following constraints:

// Replace all underscores (_), and hyphens (-) with a tilde (~).
// Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.
// For example, given hello_world, return HeLlO~wOrLd.

// Tests:
// Waiting:1. spookify("hello_world") should return "HeLlO~wOrLd".
// Waiting:2. spookify("Spooky_Case") should return "SpOoKy~CaSe".
// Waiting:3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt".
// Waiting:4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L".
// Waiting:5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS".

function spookify(boo = "") {
  let count = 1;
  const symbols = boo.split("");

  for (let i = 0; i < symbols.length; i += 1) {
    if (symbols[i].match(/[a-zA-Z]/)) {
      symbols[i] =
        count % 2 ? symbols[i].toUpperCase() : symbols[i].toLowerCase();
      count += 1;
    }
  }

  return symbols.join("").replace(/[-_]/g, "~");
}

console.log(spookify("hello_world")); // "HeLlO~wOrLd"
console.log(spookify("Spooky_Case")); // "SpOoKy~CaSe"
console.log(spookify("TRICK-or-TREAT")); // "TrIcK~oR~tReAt"
console.log(spookify("c_a-n_d-y_-b-o_w_l")); // "C~a~N~d~Y~~b~O~w~L"
console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")); // "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"
