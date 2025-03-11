// Description:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names = []) {
  const qtyNames = names.length;

  switch (qtyNames) {
    case 0:
      return "no one likes this";

    case 1:
      return `${names[0]} likes this`;

    case 2:
      return `${names[0]} and ${names[1]} like this`;

    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    default:
      return `${names[0]}, ${names[1]} and ${qtyNames - 2} others like this`;
  }
}

console.log(likes([])); // no one likes this
console.log(likes(["Peter"])); // Peter likes this
console.log(likes(["Jacob", "Alex"])); // Jacob and Alex like this
console.log(likes(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this
console.log(likes(["Max", "Alex", "Jacob", "Alex", "Jacob", "Mark"])); // Max, Alex and 2 others like this

// Method 2
function likesMethod2(names = []) {
  const qtyNames = names.length;
  const templates = [
    "no one likes this",
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${qtyNames - 2} others like this`,
  ];

  if (qtyNames >= 4) return templates[4];

  return templates[qtyNames];
}

console.log("Method2", likesMethod2([])); // no one likes this
console.log("Method2", likesMethod2(["Peter"])); // Peter likes this
console.log("Method2", likesMethod2(["Jacob", "Alex"])); // Jacob and Alex like this
console.log("Method2", likesMethod2(["Max", "John", "Mark"])); // Max, John and Mark like this
console.log("Method2", likesMethod2(["Alex", "Jacob", "Mark", "Max"])); // Alex, Jacob and 2 others like this
console.log(
  "Method2",
  likesMethod2(["Max", "Alex", "Jacob", "Alex", "Jacob", "Mark"])
); // Max, Alex and 2 others like this
