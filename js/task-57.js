// Description:
// *************************
// *  Create a frame!      *
// *           __     __   *
// *          /  \~~~/  \  *
// *    ,----(     ..    ) *
// *   /      \__     __/  *
// *  /|         (\  |(    *
// * ^  \  /___\  /\ |     *
// *    |__|   |__|-..     *
// *************************
// Given an array of strings and a character to be used as border, output the frame with the content inside.

// Notes:

// Always keep a space between the input string and the left and right borders.
// The biggest string inside the array should always fit in the frame.
// The input array is never empty.
// Example
// frame(['Create', 'a', 'frame'], '+')

// Output:

// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++

function frame(text = [], char = "") {
  const SIDE_BORDER_LENGTH = 2;
  const maxLength = text.reduce(
    (acc, item) => (item.length > acc ? item.length : acc),
    0
  );
  const result = text.map(
    (item) => `${char} ${item.padEnd(maxLength, " ")} ${char}`
  );
  const border = char.repeat(maxLength + SIDE_BORDER_LENGTH * 2);

  result.unshift(border);
  result.push(border);

  return result.join("\n");
}

console.log(frame(["Create", "a", "frame"], "+"));
// ++++++++++
// + Create +
// + a      +
// + frame  +
// ++++++++++
console.log(frame(["Small", "frame"], "~"));
// ~~~~~~~~~
// ~ Small ~
// ~ frame ~
// ~~~~~~~~~
console.log(frame(["This is a very long single frame"], "-"));
// ------------------------------------
// - This is a very long single frame -
// ------------------------------------
