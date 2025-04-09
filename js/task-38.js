// Description:
// Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, but he doesn't like to just give them away. He texts Maya a number and she needs to find out the hidden word. The words can contain only the letter:

// "a", "b", "d", "e", "i", "l", "m", "n", "o", and "t".
// Luckily, Maya has the key:

// "a" : 6
// "b" : 1
// "d" : 7
// "e" : 4
// "i" : 3
// "l" : 2
// "m" : 9
// "n" : 8
// "o" : 0
// "t" : 5
// You can help Maya by writing a function that will take a number between 100 and 999999 and return a string with the word.

// The input is always a number, contains only the numbers in the key. The output should be always a string with one word, all lowercase.

// Maya won't forget to thank you at the end of her article :)

function hiddenWord(num) {
  if (!num) return;

  const KEY = {
    0: "o",
    1: "b",
    2: "l",
    3: "i",
    4: "e",
    5: "t",
    6: "a",
    7: "d",
    8: "n",
    9: "m",
  };

  return num
    .toString()
    .split("")
    .map((item) => KEY[item])
    .join("");
}

console.log(hiddenWord(637)); // "aid"
console.log(hiddenWord(7415)); // "debt"
console.log(hiddenWord(49632)); // "email"
console.log(hiddenWord(942547)); // "melted"
console.log(hiddenWord(999999)); // "mmmmmm"
console.log(hiddenWord(973476153)); // "mdiedabti"

// Method 2
function hiddenWordMethod2(num) {
  if (!num) return;

  const KEY = { a: 6, b: 1, d: 7, e: 4, i: 3, l: 2, m: 9, n: 8, o: 0, t: 5 };

  return num
    .toString()
    .split("")
    .map((item) => {
      for (const i in KEY) {
        if (KEY[i] === Number(item)) return i;
      }
    })
    .join("");
}

console.log("Method2", hiddenWordMethod2(637)); // "aid"
console.log("Method2", hiddenWordMethod2(7415)); // "debt"
console.log("Method2", hiddenWordMethod2(49632)); // "email"
console.log("Method2", hiddenWordMethod2(942547)); // "melted"
console.log("Method2", hiddenWordMethod2(999999)); // "mmmmmm"
console.log("Method2", hiddenWordMethod2(973476153)); // "mdiedabti"

// Method 3
function hiddenWordMethod3(num) {
  if (!num) return;

  const KEY = ["o", "b", "l", "i", "e", "t", "a", "d", "n", "m"];

  return num
    .toString()
    .split("")
    .map((item) => KEY[item])
    .join("");
}

console.log("Method3", hiddenWordMethod3(637)); // "aid"
console.log("Method3", hiddenWordMethod3(7415)); // "debt"
console.log("Method3", hiddenWordMethod3(49632)); // "email"
console.log("Method3", hiddenWordMethod3(942547)); // "melted"
console.log("Method3", hiddenWordMethod3(999999)); // "mmmmmm"
console.log("Method3", hiddenWordMethod3(973476153)); // "mdiedabti"
