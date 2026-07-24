// non-primitive datatype which stores multiple values like string,integer

const users={
    name:"Raju",
    age:69,
}
console.log(users.name);
console.log(users["name"]); //can be accessed using square brackets
// use [] notation when the property name is stored in variable, contains space or special characters

let nickname="name"; //name is property 
console.log(users[nickname]); 
console.log(users.nickname); //undefined


/*this keyword refers to the object that is currently calling the function. Using object's name to call the function limits the function to
only one object*/

function greet(){
    console.log("Hello "+ this.name);

}
const user1={
    name:"Hari",
    greet   //function name
};
const user2={
    name:"Ramu",
    greet
}
user1.greet();  //same function works for both objects because 'this' changes depending on which object called it.
user2.greet();