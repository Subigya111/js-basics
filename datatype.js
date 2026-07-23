// primitive => built-in datatype that stores a  single,actual value directly in memory 
// non-primitive=>does not store the value itself, but a reference(memory address) pointing to where value is stored

// let int a =80;  error... no need to specify datatype


//Symbol is primitive datatype which helps us create a value that is unique, so that it doesn't conflict with other values

const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1===id2);   //false=> each Symbol is unique

const id=Symbol("id");
let user={
    name:"Subigya",
    [id]:1, //Symbol property
    id:2,  //normal property
}
console.log(user.name);
console.log(user.id); //accessing normal property
console.log(user[id]); //accessing Symbol property
