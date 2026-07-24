/* destructuring is used when we want to access the object's property multiple times. We don't need to write the object's name
multiple times*/

const worldcup={
    winner:"Spain",
    second:"Argentina",
}
console.log(worldcup.winner); //normal property accessing
const{winner,second}=worldcup; //object destructuring
console.log(winner);
const{winner:first,second:runnerup}=worldcup; //replacing property names
console.log(first);
console.log(runnerup);


//array destructuring

const arr=[1,2,3];
const [a,b,c]=arr;
console.log(a);  //a=1, b=2, c=3