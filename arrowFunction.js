const user={
    name:"rani",
    age:40,
    greet(){
        console.log(this);
    }
}
user.greet(); //output is { name: 'rani', age: 40, greet: [Function: greet] }
user.name="kajol"; 
user.greet(); //output is { name: 'kajol', age: 40, greet: [Function: greet] }


//normal function syntax
function functionName(parameters){
    //code
};

/*arrow function syntax. We cannot write 'this' keyword to access object's properties using arrow function.
Write normal function for it*/

const add5=(num1,num2)=>{
    return num1+num2;
}
console.log(add5(3,5)); 

//no need to write return keyword. Also known as implicit return. returns the value itself
const add5=(num1,num2)=> (num1+num2);
console.log(add5(3,5));

//example with filter() method
const numbers=[12,3,45,64,6,31,18];
const lessThan20=numbers.filter(number =>  number<=20); //filters numbers less than 20
console.log(lessThan20);