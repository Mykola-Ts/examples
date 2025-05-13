// Description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  return [...arguments]
    .map((item) => {
      if (item < 0) {
        item = 0;
      } else if (item > 255) {
        item = 255;
      }

      item = item.toString(16).toUpperCase();

      if (item.length < 2) {
        item = item.padStart(2, 0);
      }

      return item;
    })
    .join("");
}

console.log(rgb(255, 255, 255)); // "FFFFFF"
console.log(rgb(255, 255, 300)); // "FFFFFF"
console.log(rgb(0, 0, 0)); // "000000"
console.log(rgb(148, 0, 211)); // "9400D3"
console.log(rgb(0, 0, -20)); // "000000"
console.log(rgb(64, 5, 63)); // "40053F"
console.log(rgb(58, 12, 183)); // "3A0CB7"
