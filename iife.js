/*immediately invoked function expression. runs as soon as javascript reaches it. 
Function is written as an expression instead of normal function declaration.
Main use was to create private scope as there was only 'var' keyword but now with 'let' and 'const', iife is rarely used*/


(function () {
    var message = "Hello";
    console.log(message); 
})();
console.log(message); //error. cannot print outside function