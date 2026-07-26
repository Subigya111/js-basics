const arr=[1,2,3,4,5];  //array declaration
const slice=arr.slice(1,3);  //prints index 1 and index 2 elements. original array is unchanged

const splice=arr.splice(1,3); //modifies the original array. Start at index 1 , remove 3 elements
const splice=arr.splice(1,0,6); //start at index 1, remove 0 elements, insert 6


const arr1=[1,2,3,4,5,6];
console.log(arr1.unshift()); // adds a value at the starting of the array. returns new length of the array   
console.log(arr1.shift()); // removes the starting value of the array. returns the element that was removed


let numbers=[6,7,8,9,10,11];
let sub5=numbers.map(function(number){  //map() is used to create new array by applying a function to every element of existing array
    return (number-5);
});
console.log(sub5);

let nums=[11,22,33,44,55,66];
let divBy11=nums.map((num)=>{ //each number in nums array is 'num'
    return num/11
}); 
console.log(divBy11); //returns empty array because with '{ }' use 'return' keyword
let nums1=nums.map()


let numbers1=[4,6,7,32,3];
let evenNum=numbers1.filter(function(number){  //filter() is used to create a new array containing only elements where certain condition matches
    return (number%2==0); 
});
console.log(evenNum);  // more in arrowFunction.js file


const numbers=[10,20,30];
const total=numbers.reduce(function(accumulator,currentvalue){ // iteration 1: acc=10, curval=20  
    return accumulator+currentvalue; /*'return' becomes next value of accumulator and currentvalue moves forward in array
                                     iteration 2: acc=30, curval=30 */   

}); // no initial value is set. so the value of acc is the first element of the array, i.e. 10. or else acc= inital value, curval= 1st element of array
console.log(total); //60

const numbers=[1,23,4];
const total=numbers.reduce((accu,curval)=>accu+curval,0); //here initial value is 0. iteration 1: accu=0, curval=1. iteration 2: accu=1, curval=23 
console.log(total); //make habit of writing intial value

const shoppingCart=[  //object inside array
    {itemName:"shoes",price:1500},
    {itemName:"trimmer",price:5000},
    {itemName:"laptopStand",price:500},
];
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0); //provide initial value because the value of acc will be an entire object instead of price. 
console.log(total);