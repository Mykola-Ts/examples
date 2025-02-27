// Description:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: y isn't considered a vowel.

function disemvowel(str = "") {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!

// Method2
function disemvowelMethod2(str = "") {
  const vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter((item) => !vowels.includes(item.toLowerCase()))
    .join("");
}

console.log("Method2", disemvowelMethod2("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!
