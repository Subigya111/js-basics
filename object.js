//non-primitive datatype which stores multiple values like string,integer

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