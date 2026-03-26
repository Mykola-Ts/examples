// Multiplication table

// Description:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

function multiplicationTable(size = 0) {
  const result = [];

  for (let i = 1; i <= size; i += 1) {
    const resNum = [];

    for (let j = 1; j <= size; j += 1) {
      resNum.push(j);
    }

    result.push(resNum.map((item) => item * i));
  }

  return result;
}

console.log(multiplicationTable(3)); // [[1,2,3],[2,4,6],[3,6,9]]
