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


let numbers1=[4,6,7,32,3];
let evenNum=numbers1.filter(function(number){  //filter() is used to create a new array containing only elements where certain condition matches
    return (number%2==0); 
});
console.log(evenNum);


const numbers=[10,20,30,40,50];
const total=numbers.reduce(function(sum,num){  //reduce() is used when you want to take all elements from an array and combine them into a single value
    return sum+num;
});
console.log(total);