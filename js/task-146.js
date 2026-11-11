// Image Search
// On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

// Given an array of image names and a search term, return an array of image names containing the search term.

// Ignore the case when matching the search terms.
// Return the images in the same order they appear in the input array.
// Tests:
// Passed:1. imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"].
// Passed:2. imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"].
// Passed:3. imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"].
// Passed:4. imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"].

function imageSearch(images, term) {
  return images.filter((i) => i.toLowerCase().includes(term.toLowerCase()));
}

console.log(imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog")); // ["dog.png"]
console.log(imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun")); // ["Sunset.jpg", "sunflower.jpeg"]
console.log(imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG")); // ["Moon.png", "stars.png"]
console.log(
  imageSearch(
    [
      "cat.jpg",
      "dogToy.jpeg",
      "kitty-cat.png",
      "catNip.jpeg",
      "franken_cat.gif",
    ],
    "Cat",
  ),
); // ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]
