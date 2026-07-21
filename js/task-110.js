// Zero or more hands

// Description:
// Touch typing is a typing technique where each hand is responsible for specific keys on the keyboard.

// In this kata, you will simulate this behaviour using a simplified keyboard layout based on a QWERTY keyboard.

// Keyboard layout
// Left hand letters
// qwert
// asdfg
// zxcvb

// Right hand letters
// yuiop
// hjkl
// nm

// Task
// Write a function that receives a single lowercase word ( without any spaces ), and returns:

// NONE if the word is empty
// LEFT if the word can be typed using only the left hand
// RIGHT if the word can be typed using only the right hand
// BOTH if the word requires both hands
// The word will be encoded as an iterable, yielding strings of single letters.

// Rules
// Input contains only lowercase letters a to z
// Use only the keyboard layout provided above
// The word can be infinite ( this will only be tested with words with a finite prefix typed on both sides of the keyboard )
// Preloaded
// Use Hand = [ NONE, LEFT, RIGHT, BOTH ] defined in Preloaded.
// Hand supplies a well-defined mapping to and from numbers. Its use is optional.
// The return value must be one of NONE, LEFT, RIGHT, BOTH.

// Examples
// ""       ->  NONE
// "gaffe"  ->  LEFT
// "cards"  ->  LEFT
// "milk"   ->  RIGHT
// "pill"   ->  RIGHT
// "type" -> BOTH

function whichHand(word = "") {
  const HAND = ["NONE", "LEFT", "RIGHT", "BOTH"];
  const leftHandLetters = "qwertasdfgzxcvb";
  const rightHandLetters = "yuiophjklnm";

  let hasLeft = false;
  let hasRight = false;

  for (const letter of word) {
    if (leftHandLetters.includes(letter)) {
      hasLeft = true;
    }

    if (rightHandLetters.includes(letter)) {
      hasRight = true;
    }

    if (hasLeft && hasRight) {
      return HAND[3];
    }
  }

  if (!hasLeft && !hasRight) {
    return HAND[0];
  }

  if (hasLeft) {
    return HAND[1];
  }

  return HAND[2];
}

console.log("expected NONE", "equal", whichHand("")); // "NONE"
console.log("expected LEFT", "equal", whichHand("gaffe")); // "LEFT"
console.log("expected LEFT", "equal", whichHand("cards")); // "LEFT"
console.log("expected RIGHT", "equal", whichHand("milk")); // "RIGHT"
console.log("expected BOTH", "equal", whichHand("type")); // "BOTH"
console.log("expected RIGHT", "equal", whichHand("mom")); // "RIGHT"
console.log("expected LEFT", "equal", whichHand("dad")); // "LEFT"
console.log("expected RIGHT", "equal", whichHand("pop")); // "RIGHT"
console.log("expected RIGHT", "equal", whichHand("link")); // "RIGHT"
console.log("expected LEFT", "equal", whichHand("gas")); // "LEFT"
console.log("expected RIGHT", "equal", whichHand("lollipop")); // "RIGHT"
console.log("expected LEFT", "equal", whichHand("stewardesses")); // "LEFT"
