const name = "Arghya"
const repoCount = 50
//console.log(name+repoCount+ "value"); //outdated syntax

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);


const gameName=new String('Arghya-dpt')
console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
//sub string
const newString = gameName.substring(0,4) //negative cannot
console.log(newString);

const anotherString=gameName.slice(-5,4)
console.log(anotherString);

//trim use to delete additional space
const newStringOne = "  Arghya  "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace
const url = "https://arghya.com/arghya%20dpt"
console.log(url.replace('%20','-'))
console.log(url.includes('Rishita')) //not present

console.log(gameName.split('-')) //split based on '-'

