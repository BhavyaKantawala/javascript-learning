const name = "Bhavya"
const repocount = 3;

// console.log(name + repocount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('bhavya-0078e')

// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('v'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-3)
console.log(anotherString);

const newStringOne = "   bhavya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bhavya.com/bhavya%20kantawala"
console.log(url.replace('%20', '-'));

console.log(url.includes('bhavya'))

console.log(gamename.split('-'));