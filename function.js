function name(){
    console.log('chaitey');  //simple function
}
name();

function divide(num1,num2){
    return num1/num2;
    console.log("blabla");  //no statement gets executed after return statement
}
let result=divide(4,2);
console.log(result);

function getUsername(username){
    if(!username){
        return ("Enter a username");
    }
    return username+ " just logged in" ;
}
console.log(getUsername());

