//singleton

//object literals
//Object.create

const mySym =Symbol("key1")
const jsUser={
    name: "Arghya",
    age: 21,
    [mySym]: "mykey1",
    location: "Bishnupur",
    email: "ad@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]
}
//to access object
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(typeof jsUser.mySym)
console.log(typeof jsUser[mySym])
//change object value

jsUser.email = "rick@gmail.com"
Object.freeze(jsUser)//after this we made changes that will not propagate
jsUser.email = "rickddp@gmail.com"
console.log(jsUser);

//Function
jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());