//primitive (call by value)
//7 types : string,num,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId); //false not equal but input value same 

const bigNumber = 23463863765339289642n

//Reference types(non primitive)
//types : Array,Object, Function

//Array
const heros=["shaktiman","spidy","ironman"]

//objects

let myObj={  
    name: "Arghya",
    age:22,
}

//function

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)  // this function use to determine the datatype
// datatype 
// null --> object, undefined---> undefined,
         // num --> num, string--->string,//function ---> object function