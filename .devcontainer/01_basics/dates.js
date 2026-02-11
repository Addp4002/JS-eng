let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(typeof myDate); //objecr

//let myCreatedDate = new Date(2023,4,30)
//console.log(myCreatedDate.toDateString);

let myCreatedDate = new Date(2023,4,30,5,3)
console.log(myCreatedDate.toLocalString);



let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); //use to compare
console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());