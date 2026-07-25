function calculateTotal(...num){
    return num;
}
console.log(calculateTotal(200,300,400,894,902)); //output: [200,300,400,894,902]. all inside array


// passing object in function
const user={
    name:"subigya",
    age:22,
}
function passObject(object){
    console.log(object.name);
    console.log(object.age);
}
passObject(user); //write object name as argument
passObject({
    name:"swayam",  //can pass argument directly by making object
    age:23,         
})


//passing array
const myArray=[1,2,3,4,5];
function passArray(array){
    console.log(array);
}
passArray(myArray);
passArray([
    11,22,33,44,55  //can pass argument directly
])