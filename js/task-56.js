// Description:
// Task:
// This kata requires you to write an object that receives a file path and does operations on it. NOTE FOR PYTHON USERS: You cannot use modules os.path, glob, and re
// The purpose of this kata is to use string parsing, so you're not supposed to import external libraries. I could only enforce this in python.

// Testing:
// const fm = new FileMaster('/Users/person1/Pictures/house.png');
// fm.extension(); // output: 'png'
// fm.filename(); // output: 'house'
// fm.dirpath(); // output: '/Users/person1/Pictures/'

// Notes:
// I have other kata that need to be tested. You may find them here and here
// Please post any questions or suggestion in the discourse section. Thank you!
// Thank to all users who contributed to this kata! I appreciate your input!

class FileMaster {
  constructor(filepath) {
    this.filepath = filepath;
  }

  extension() {
    return this.filepath.split(".").pop();
  }

  filename() {
    return this.filepath.split("/").pop().split(".").shift();
  }

  dirpath() {
    const arr = this.filepath.split("/");
    arr.pop();

    return `${arr.join("/")}/`;
  }
}

const fm = new FileMaster("/Users/person1/Pictures/house.png");
console.log(fm.extension()); // output: 'png'
console.log(fm.filename()); // output: 'house'
console.log(fm.dirpath()); // output: '/Users/person1/Pictures/'
