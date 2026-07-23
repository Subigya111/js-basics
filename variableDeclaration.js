// console.log is equivalent of print statement in js

//var is not used to declare variables in modern js 

let age =25;
age =30;    // can reassign the value again
console.log(age);   // output :30

let age1 =25;
let age1=30; // cannot redeclare again
// console.log(age1); throws error

if (true){
    let age2=90;
    console.log(age2);  // block scoped. age2 is only accessible within if block
}
// console.log(age2);  throws error

//const is same as let except it's value cannot be reassigned.

