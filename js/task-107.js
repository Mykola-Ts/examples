// Validate a key:value string with RegExp

// Description:
// Write a regexp to validate a key-value string in the format:

// name:xxx,age:111,skill:xxx
// Rules
// 1. name/age/skill may be in any order, example:

// 'name:xxx,age:111,skill:xxx'
// 'skill:xxx,name:xxx,age:111'
// 'name:xxx,skill:xxx,age:111'

// 2. name / skill have to be made up of letters([A - Za - z] +)

// 3. age has to be a number (0 is valid) ([0-9]+)

// 4. there can be no leading or trailing commas ,

// 5. name / age / skill must be present exactly once each

const reg =
  /^(?=.*(?:^|,)name:[A-Za-z]+(?:,|$))(?=.*(?:^|,)age:\d+(?:,|$))(?=.*(?:^|,)skill:[A-Za-z]+(?:,|$))(?!.*(?:^|,)name:.*(?:^|,)name:)(?!.*(?:^|,)age:.*(?:^|,)age:)(?!.*(?:^|,)skill:.*(?:^|,)skill:)(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)(?:,(?:name:[A-Za-z]+|age:\d+|skill:[A-Za-z]+)){2}$/;

console.log(reg.test("name:Tomek,age:31,skill:JavaScript")); // true
console.log(reg.test("age:50,name:Adam,skill:JavaScript")); // true
console.log(reg.test("age:30,skill:Perl,name:Konrad")); // true
console.log(reg.test("skill:JavaScript,age:36,name:Pawel")); // true
console.log(reg.test("name:Daria,skill:Perl,age:42")); // true
console.log(reg.test("skill:PHP,name:Jakub,age:56")); // true
console.log(reg.test("name:xyz,name:xyz,name:xyz")); // false
console.log(reg.test("skill:xyz,name:xyz,skill:xyz")); // false
console.log(reg.test("skill:xyz,name:xyz,skill:xyz,skill:xyz")); // false
console.log(reg.test("name:Tomek,age:30,skill:PHP,name:Kemot")); // false
console.log(reg.test("name:,age:20,skill:")); // false
console.log(reg.test("name:Adam,age:dd,skill:")); // false
console.log(reg.test("age:15,name:5555,skill:123")); // false
console.log(reg.test("example text")); // false
console.log(reg.test("name,age,skill")); // false
console.log(reg.test("name:Adam,age:60")); // false
console.log(reg.test("skill:PHP,name:Michal")); // false
console.log(reg.test("name:Tomek,age:30,skill:PHP,")); // false
console.log(reg.test(",name:Tomek,age:30,skill:PHP")); // false
console.log(reg.test("name:abc,age:123,name:xyz")); // false
console.log(reg.test("age:abc,age:123,name:xyz")); // false
console.log(reg.test("skill:abc,age:123,skill:xyz")); // false
console.log(reg.test("age:50name:Adamskill:JavaScript")); // false
console.log(reg.test("age:50,name:Adamskill:JavaScript")); // false

// Method2
const reg2 = /^(?!\b(\w+:).*\1)(((name|skill):[A-Za-z]+|age:\d+),?\b){3}$/;

console.log("Method2", reg2.test("name:Tomek,age:31,skill:JavaScript")); // true
console.log("Method2", reg2.test("age:50,name:Adam,skill:JavaScript")); // true
console.log("Method2", reg2.test("age:30,skill:Perl,name:Konrad")); // true
console.log("Method2", reg2.test("skill:JavaScript,age:36,name:Pawel")); // true
console.log("Method2", reg2.test("name:Daria,skill:Perl,age:42")); // true
console.log("Method2", reg2.test("skill:PHP,name:Jakub,age:56")); // true
console.log("Method2", reg2.test("name:xyz,name:xyz,name:xyz")); // false
console.log("Method2", reg2.test("skill:xyz,name:xyz,skill:xyz")); // false
console.log("Method2", reg2.test("skill:xyz,name:xyz,skill:xyz,skill:xyz")); // false
console.log("Method2", reg2.test("name:Tomek,age:30,skill:PHP,name:Kemot")); // false
console.log("Method2", reg2.test("name:,age:20,skill:")); // false
console.log("Method2", reg2.test("name:Adam,age:dd,skill:")); // false
console.log("Method2", reg2.test("age:15,name:5555,skill:123")); // false
console.log("Method2", reg2.test("example text")); // false
console.log("Method2", reg2.test("name,age,skill")); // false
console.log("Method2", reg2.test("name:Adam,age:60")); // false
console.log("Method2", reg2.test("skill:PHP,name:Michal")); // false
console.log("Method2", reg2.test("name:Tomek,age:30,skill:PHP,")); // false
console.log("Method2", reg2.test(",name:Tomek,age:30,skill:PHP")); // false
console.log("Method2", reg2.test("name:abc,age:123,name:xyz")); // false
console.log("Method2", reg2.test("age:abc,age:123,name:xyz")); // false
console.log("Method2", reg2.test("skill:abc,age:123,skill:xyz")); // false
console.log("Method2", reg2.test("age:50name:Adamskill:JavaScript")); // false
console.log("Method2", reg2.test("age:50,name:Adamskill:JavaScript")); // false
