// Description:
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.

function score(dice = []) {
  const RULES = {
    1: {
      triplet: 1000,
      single: 100,
    },
    2: {
      triplet: 200,
      single: 0,
    },
    3: {
      triplet: 300,
      single: 0,
    },
    4: {
      triplet: 400,
      single: 0,
    },
    5: {
      triplet: 500,
      single: 50,
    },
    6: {
      triplet: 600,
      single: 0,
    },
  };
  let totalPoints = 0;

  for (let i = 1; i <= 6; i += 1) {
    let qty = dice.filter((item) => item === i).length;

    if (qty >= 3) {
      totalPoints += RULES[i].triplet;
      qty -= 3;
    }

    if ((i === 1 || i === 5) && qty) {
      totalPoints += RULES[i].single * qty;
    }
  }

  return totalPoints;
}

console.log(score([5, 1, 3, 4, 1])); // 250
console.log(score([1, 1, 1, 3, 1])); // 1100
console.log(score([2, 4, 4, 5, 4])); // 450

// Method2
function scoreMethod2(dice = []) {
  const RULES = {
    1: {
      triplet: 1000,
      single: 100,
    },
    2: {
      triplet: 200,
      single: 0,
    },
    3: {
      triplet: 300,
      single: 0,
    },
    4: {
      triplet: 400,
      single: 0,
    },
    5: {
      triplet: 500,
      single: 50,
    },
    6: {
      triplet: 600,
      single: 0,
    },
  };

  const counts = dice.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;

    return acc;
  }, {});

  let totalPoints = 0;

  for (let i = 1; i <= 6; i += 1) {
    let qty = counts[i] || 0;

    if (qty >= 3) {
      totalPoints += RULES[i].triplet;
      qty -= 3;
    }

    if ((i === 1 || i === 5) && qty) {
      totalPoints += RULES[i].single * qty;
    }
  }

  return totalPoints;
}

console.log("Method2", scoreMethod2([5, 1, 3, 4, 1])); // 250
console.log("Method2", scoreMethod2([1, 1, 1, 3, 1])); // 1100
console.log("Method2", scoreMethod2([2, 4, 4, 5, 4])); // 450
