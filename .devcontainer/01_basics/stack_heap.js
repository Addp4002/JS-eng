//stack(primitive), Heap (non primitive)
 //stack ---> we will get copied value
let myYoutubename ="Arghyayoutubedotcom"
let anothername = myYoutubename
console.log(anothername)
anothername = "rick"

console.log(myYoutubename);
console.log(anothername);

//Heap -----. we will get reference (changes in original value)
let userOne ={
    email:"user@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
  userTwo.email="arghya@google.com"
   
console.log(userOne.email);
console.log(userTwo.email);