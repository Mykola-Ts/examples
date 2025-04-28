// Description:
// The code provided has a method hello which is supposed to show only those attributes which have been explicitly set. Furthermore, it is supposed to say them in the same order they were set.

// But it's not working properly.

// Notes
// There are 3 attributes

// name
// age
// sex ('M' or 'F')
// When the same attribute is assigned multiple times the hello method shows it only once. If this happens the order depends on the first assignment of that attribute, but the value is from the last assignment.

// Examples
// Hello.
// Hello. My name is Bob. I am 27. I am male.
// Hello. I am 27. I am male. My name is Bob.
// Hello. My name is Alice. I am female.
// Hello. My name is Batman.
// Task
// Fix the code so we can all go home early.

class Dinglemouse {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.order = [];
  }

  setAge(age) {
    if (!this.order.includes("age")) {
      this.order.push("age");
    }

    this.age = age;
    return this;
  }

  setSex(sex) {
    if (!this.order.includes("sex")) {
      this.order.push("sex");
    }

    this.sex = sex;
    return this;
  }

  setName(name) {
    if (!this.order.includes("name")) {
      this.order.push("name");
    }

    this.name = name;
    return this;
  }

  hello() {
    const message = ["Hello."];

    this.order.forEach((item) => {
      switch (item) {
        case "name":
          message.push(`My name is ${this.name}.`);
          break;

        case "age":
          message.push(`I am ${this.age}.`);
          break;

        case "sex":
          message.push(`I am ${this.sex == "M" ? "male" : "female"}.`);

        default:
          break;
      }
    });

    return message.join(" ");
  }
}

const dm = new Dinglemouse().setName("Bob").setAge(27).setSex("M");
console.log(dm.hello()); // "Hello. My name is Bob. I am 27. I am male."
const dm1 = new Dinglemouse().setAge(27).setSex("M").setName("Bob");
console.log(dm1.hello()); // "Hello. I am 27. I am male. My name is Bob.";
const dm2 = new Dinglemouse().setName("Alice").setSex("F");
console.log(dm2.hello()); // "Hello. My name is Alice. I am female."
const dm3 = new Dinglemouse().setName("Batman");
console.log(dm3.hello()); // "Hello. My name is Batman."
const dm4 = new Dinglemouse().setAge(25).setName("Sally").setAge(39);
console.log(dm4.hello()); // 'Hello. I am 39. My name is Sally.'

// Method 2
class DinglemouseMeyhod2 {
  constructor() {
    this.name = this.age = this.sex = 0;
    this.output = {
      greeting: "Hello.",
    };
  }

  setAge(age) {
    this.age = age;
    this.output.age = `I am ${age}.`;

    return this;
  }

  setSex(sex) {
    this.sex = sex;
    this.output.sex = `I am ${sex == "M" ? "male" : "female"}.`;

    return this;
  }

  setName(name) {
    this.name = name;
    this.output.name = `My name is ${name}.`;

    return this;
  }

  hello() {
    return Object.values(this.output).join(" ");
  }
}

const dmMeyhod2 = new DinglemouseMeyhod2()
  .setName("Bob")
  .setAge(27)
  .setSex("M");
console.log("Meyhod2", dmMeyhod2.hello()); // "Hello. My name is Bob. I am 27. I am male."
const dm1Meyhod2 = new DinglemouseMeyhod2()
  .setAge(27)
  .setSex("M")
  .setName("Bob");
console.log("Meyhod2", dm1Meyhod2.hello()); // "Hello. I am 27. I am male. My name is Bob.";
const dm2Meyhod2 = new DinglemouseMeyhod2().setName("Alice").setSex("F");
console.log("Meyhod2", dm2Meyhod2.hello()); // "Hello. My name is Alice. I am female."
const dm3Meyhod2 = new DinglemouseMeyhod2().setName("Batman");
console.log("Meyhod2", dm3Meyhod2.hello()); // "Hello. My name is Batman."
const dm4Meyhod2 = new DinglemouseMeyhod2()
  .setAge(25)
  .setName("Sally")
  .setAge(39);
console.log("Meyhod2", dm4Meyhod2.hello()); // 'Hello. I am 39. My name is Sally.'
