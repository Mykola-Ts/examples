// Description:
// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!

function grabscrab(anagram = "", dictionary = []) {
  return dictionary.filter((word) => sortWord(word) === sortWord(anagram));
}

function sortWord(word = "") {
  return word
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"])); // ["sport", "ports"]
console.log(grabscrab("trisf", ["first"])); // ["first"]
console.log(grabscrab("oob", ["bob", "baobab"])); // []
console.log(grabscrab("ainstuomn", ["mountains", "hills", "mesa"])); // ["mountains"]
console.log(grabscrab("oolp", ["donkey", "pool", "horse", "loop"])); // ["pool", "loop"]
console.log(grabscrab("ourf", ["one", "two", "three"])); // []
