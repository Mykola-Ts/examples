// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr = []) {
  const nonZeros = arr.filter((item) => item !== 0);
  const zeros = arr.filter((item) => item === 0);

  return nonZeros.concat(zeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]

// Method 2
function moveZerosMethod2(arr = []) {
  return arr.reverse().reduce((acc, item) => {
    if (item === 0) {
      acc.push(item);
    } else {
      acc.unshift(item);
    }

    return acc;
  }, []);
}

console.log("Method2", moveZerosMethod2([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
