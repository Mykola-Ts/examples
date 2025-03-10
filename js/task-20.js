// Description:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function getDomainName(url) {
  if (!url.startsWith("http")) {
    url = "http://" + url;
  }

  const hostname = new URL(url).hostname;

  return hostname.replace(/^www\./, "").split(".")[0];
}

console.log(getDomainName("http://github.com/carbonfive/raygun")); // github
console.log(getDomainName("http://www.zombie-bites.com")); // zombie-bites
console.log(getDomainName("https://www.cnet.com")); // cnet
console.log(getDomainName("google.co.jp")); // google
console.log(getDomainName("www.xakep.ru")); // xakep
console.log(getDomainName("https://youtube.com")); // youtube

// Method 2
function getDomainNameMethod2(url) {
  return url
    .split(".com")[0]
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

console.log(
  "Method2",
  getDomainNameMethod2("http://github.com/carbonfive/raygun")
); // github
console.log("Method2", getDomainNameMethod2("http://www.zombie-bites.com")); // zombie-bites
console.log("Method2", getDomainNameMethod2("https://www.cnet.com")); // cnet
console.log("Method2", getDomainNameMethod2("google.co.jp")); // google
console.log("Method2", getDomainNameMethod2("www.xakep.ru")); // xakep
console.log("Method2", getDomainNameMethod2("https://youtube.com")); // youtube
