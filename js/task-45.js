// Description:
// This cipher involves taking each character of a string and multiplying their char codes by 6.

// For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

// You must write two functions:
// `encode` to encode a given string,
// `decode` to decode a given string.

const CHAR_CODE_MULTIPLIER = 6;

function encode(str = "") {
  return str
    .split("")
    .map((item) =>
      String.fromCharCode(item.charCodeAt() * CHAR_CODE_MULTIPLIER)
    )
    .join("");
}

function decode(str = "") {
  return str
    .split("")
    .map((item) =>
      String.fromCharCode(item.charCodeAt() / CHAR_CODE_MULTIPLIER)
    )
    .join("");
}

console.log(encode("Hello World!")); // "ưɞʈʈʚÀȊʚʬʈɘÆ"
console.log(decode("ưɞʈʈʚÀȊʚʬʈɘÆ")); // "Hello World!"
console.log(encode("Lorem ipsum dolor sit amet consectetur adipisicing elit.")); // "ǈʚʬɞʎÀɶʠʲʾʎÀɘʚʈʚʬÀʲɶʸÀɆʎɞʸÀɒʚʔʲɞɒʸɞʸʾʬÀɆɘɶʠɶʲɶɒɶʔɪÀɞʈɶʸĔ"
console.log(decode("ǈʚʬɞʎÀɶʠʲʾʎÀɘʚʈʚʬÀʲɶʸÀɆʎɞʸÀɒʚʔʲɞɒʸɞʸʾʬÀɆɘɶʠɶʲɶɒɶʔɪÀɞʈɶʸĔ")); // "Lorem ipsum dolor sit amet consectetur adipisicing elit."
