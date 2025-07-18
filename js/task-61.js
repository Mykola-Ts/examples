// Description:
// Write a function which, given a function that returns the nth element of a sequence (starting at 0), returns an object that generates the sequence's elements indefinitely. Your sequence object must have two methods:

// #take(n) (JS: take(n)): get n elements from the sequence
// #take_while(pred) (JS: takeWhile(pred)): get all elements until the sequence generates one that fails the predicate pred()
// Example:

// sequence(n => n).takeWhile(n => n < 10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// sequence(n => n * n).take(10); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

function sequence(fun) {
  return {
    take(number) {
      const result = [];

      for (let i = 0; i < number; i += 1) {
        result.push(fun(i));
      }

      return result;
    },

    takeWhile(callback) {
      const result = [];
      let number = 0;

      while (callback(fun(number))) {
        result.push(fun(number));
        number += 1;
      }

      return result;
    },
  };
}

console.log(sequence((n) => n).takeWhile((n) => n < 10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sequence((n) => n * n).take(10)); // [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(sequence((n) => n * n).take(5)); // [0, 1, 4, 9, 16]
console.log(sequence((n) => n).take(5)); // [0, 1, 2, 3, 4]
console.log(sequence((n) => n * 4).takeWhile((n) => n < 20)); // [0, 4, 8, 12, 16]
console.log(sequence((n) => n * n * 2).takeWhile((n) => n < 100)); // [0, 2, 8, 18, 32, 50, 72, 98]
