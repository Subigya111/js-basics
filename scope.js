function one(){
    const username="subigya";

    function two(){
        const website="google";
        console.log(username);
    }
    two();
    console.log(website); //cannot access because it is outside function two()
} 
console.log(username); //cannot access because outside function one()
one();
