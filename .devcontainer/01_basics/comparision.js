console.log(2>1);
//console.log("2">1); data type is not same
//console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0); //comparison convert null to a number null --> zero : so true
console.log(null<0);
//strict check
console.log("2"==2); // conversion happen so right
console.log("2"===2); // conversion don't happen , also check data type which different
// always avoaid above types