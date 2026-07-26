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

// example with filter() method
const numbers=[12,3,45,64,6,31,18];
const lessThan20=numbers.filter((number)=>  number<=20); //filters numbers less than 20
console.log(lessThan20);

const moreThan20=numbers.filter((number)=>{
     number >= 20        //returns empty array because with '{ }' use 'return' keyword
});
console.log(moreThan20);

const books = [
    { id: 1, bookName: "Atomic Habits", genre: "Self-Help",publishDate: "2018" },

    { id: 2, bookName: "Deep Work", genre: "Self-Help",publishDate: "2016" },

    { id: 3, bookName: "The Hobbit", genre: "Fantasy",publishDate: "1937" },

    { id: 4, bookName: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy",publishDate: "1997" },

    { id: 5, bookName: "Clean Code", genre: "Programming",publishDate: "2008" },

    { id: 6, bookName: "You Don't Know JS", genre: "Programming",publishDate: "2015" }
];
const oneBook= books.filter((book)=>book.publishDate >= 2000 && book.genre==='Self-Help');
console.log(oneBook);