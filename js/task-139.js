// Battle of Words
// Given two sentences representing your team and an opposing team, where each word from your team battles the corresponding word from the opposing team, determine which team wins using the following rules:

// The given sentences will always contain the same number of words.
// Words are separated by a single space and will only contain letters.
// The value of each word is the sum of its letters.
// Letters a to z correspond to the values 1 through 26. For example, a is 1, and z is 26.
// A capital letter doubles the value of the letter. For example, A is 2, and Z is 52.
// Words battle in order: the first word of your team battles the first word of the opposing team, and so on.
// A word wins if its value is greater than the opposing word's value.
// The team with more winning words is the winner.
// Return "We win" if your team is the winner, "We lose" if your team loses, and "Draw" if both teams have the same number of wins.

// Tests:
// Waiting:1. battle("hello world", "hello word") should return "We win".
// Waiting:2. battle("Hello world", "hello world") should return "We win".
// Waiting:3. battle("lorem ipsum", "kitty ipsum") should return "We lose".
// Waiting:4. battle("hello world", "world hello") should return "Draw".
// Waiting:5. battle("git checkout", "git switch") should return "We win".
// Waiting:6. battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".
// Waiting:7. battle("We must never surrender", "Our team must win") should return "Draw".

function battle(ourTeam = "", opponent = "") {
  const LETTER_VALUES = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,

    A: 2,
    B: 4,
    C: 6,
    D: 8,
    E: 10,
    F: 12,
    G: 14,
    H: 16,
    I: 18,
    J: 20,
    K: 22,
    L: 24,
    M: 26,
    N: 28,
    O: 30,
    P: 32,
    Q: 34,
    R: 36,
    S: 38,
    T: 40,
    U: 42,
    V: 44,
    W: 46,
    X: 48,
    Y: 50,
    Z: 52,
  };
  const opponentWords = opponent.split(" ");
  const result = ourTeam.split(" ").reduce((acc, i, idx) => {
    const ourTeamWordsValue = [...i].reduce(
      (acc, i) => (acc += LETTER_VALUES[i]),
      0,
    );
    const opponentWordsValue = [...opponentWords[idx]].reduce(
      (acc, i) => (acc += LETTER_VALUES[i]),
      0,
    );

    if (ourTeamWordsValue === opponentWordsValue) {
      return acc;
    }

    return (acc += ourTeamWordsValue > opponentWordsValue ? 1 : -1);
  }, 0);

  if (!result) {
    return "Draw";
  }

  return result > 0 ? "We win" : "We lose";
}

console.log(battle("hello world", "hello word")); // "We win"
console.log(battle("Hello world", "hello world")); // "We win"
console.log(battle("lorem ipsum", "kitty ipsum")); // "We lose"
console.log(battle("hello world", "world hello")); // "Draw"
console.log(battle("git checkout", "git switch")); // "We win"
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries")); // "We lose"
console.log(battle("We must never surrender", "Our team must win")); // "Draw"

// Method2
function battleMethod2(ourTeam = "", opponent = "") {
  const getWordValue = (word) =>
    [...word].reduce((acc, char) => {
      const value = char.toLowerCase().charCodeAt(0) - 96;

      return acc + (char === char.toUpperCase() ? value * 2 : value);
    }, 0);

  const ourWords = ourTeam.split(" ");
  const opponentWords = opponent.split(" ");
  let result = 0;

  ourWords.forEach((word, idx) => {
    const ourValue = getWordValue(word);
    const opponentValue = getWordValue(opponentWords[idx]);

    if (ourValue > opponentValue) result += 1;
    else if (ourValue < opponentValue) result -= 1;
  });

  if (!result) {
    return "Draw";
  }

  return result > 0 ? "We win" : "We lose";
}

console.log("Method2", battleMethod2("hello world", "hello word")); // "We win"
console.log("Method2", battleMethod2("Hello world", "hello world")); // "We win"
console.log("Method2", battleMethod2("lorem ipsum", "kitty ipsum")); // "We lose"
console.log("Method2", battleMethod2("hello world", "world hello")); // "Draw"
console.log("Method2", battleMethod2("git checkout", "git switch")); // "We win"
console.log(
  "Method2",
  battleMethod2("Cheeseburger with fries", "Cheeseburger with Fries"),
); // "We lose"
console.log(
  "Method2",
  battleMethod2("We must never surrender", "Our team must win"),
); // "Draw"
