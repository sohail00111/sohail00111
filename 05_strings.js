const name = " sohaoil"
const repocount = 50 



//console.log (name + repocount + " Value");

console.log ('Hello my name is $ {name} and my repo count is $ {repocount} ');

const gameName = String('sohail')

//const gameName = new string ('sohail')
console .log (gameName [0]) ;
console.log (gameName.__proto__);


console.log (gameName.length);
console.log(gameName.toUpperCase ());

console.log (gameName.charAt(2));
console.log (gameName .indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6 , 4)
console.log (anotherString);
const newStringOne = "  sohail  "
console .log (newStringOne);
console.log(newStringOne.trim());
const url = "https://sohail.com/sohail%20larik"
console .log(url.replace('%20' , '_'))

//console.log(url.includes(larik));

console.log (gameName.split('_'));