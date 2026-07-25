//spread operator(...) is used to expand the elements of an array or object. Used when updating state in react
//rest operator(...) uses same symbol. takes multiple values and combines them in a single array or object

//with arrays
const arr1=[1,2,3];
const arr2=[...arr1]; //copies arr1 value to arr2
arr2.push(4);
console.log(arr1);
console.log(arr2);


//with objects
const user={
    name:"Ramu",
    age:69,
}
const updateUser={
    ...user, //properties of user object is converted into updateUser
    city:"Ktm"
}
console.log(updateUser);


//updating properties 
const cucurella={
    club:"Chelsea",
}
const newCucu={
    ...cucurella,
    club:"Real Madrid"
}
console.log(newCucu.club);


/*rest operator used mainly when the number of values in parameter and argument are uncertain
see function2.js file for more*/
let string="gege";
console.log(...string); //output=> g e g e