const name = "Tanzin";
const repoCount = 50;
// console.log(`My name is ${name} & My repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");
// console.log(gameName);

// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf('z'));

let newString = gameName.substring(0,4);
newString = gameName.substring(0, 5);
newString = gameName.substring(0,  6);
console.log(newString);

let anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));
