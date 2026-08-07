/*  PROJECT 1 -->  JS code to change the background color when we click a button. There are four buttons with color grey,white,blue and yellow. Whenever we click
each button, the background color gets changed */ 

const buttons =document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e); //event object created by browser when event occurs
    console.log(e.type) //what type of event. click,mouse scroll,refresh, etc
    console.log(e.target); //tells which particular DOM element (HTML tag) triggered the event
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  });
});

// PROJECT 2 --> JS code to calculate bmi. There is a form with input type for height and weight and a submit button calculate which calculates bmi //

const form= document.querySelector("form");
const height=parseInt(document.querySelector("#height").value);//this will store empty value of height as soon as page loads. Dont write here
form.addEventListener('submit',function(e){
  e.preventDefault(); //stops browser from sending data. stops browser's default form submission behaviour
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const result=document.querySelector("#results");
  if(height===''||height<0){
    result.innerHTML="Enter valid height";
  }
  if(weight===''||weight<0){
    result.innerHTML="Enter valid weight";
  }
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  result.innerHTML=`<span>${bmi}</span>`;

});


// PROJECT 3 --> JS code to display digital clock inside a box
const clock=document.getElementById("clock");

setInterval(function(){
  let date = new Date();
  clock.innerText=date.toLocaleTimeString();
},1000)

// PROJECT 4 --> JS code implementing simple game of guess the number 

const randomNum=parseInt(Math.random()*100+1);
// console.log(randomNum);
const form=document.querySelector("form");
const guessRem=document.querySelector(".lastResult");
let guessRemNum=guessRem.innerText;
const hiOrLow=document.querySelector(".lowOrHigh");
let prevGuess=document.querySelector(".guesses");
    form.addEventListener('submit',function(e){
        e.preventDefault();

        const guessNum=parseInt(document.querySelector(".guessField").value);
        prevGuess.innerHTML+=`${guessNum} `;
        // console.log(prevGuess);
        // console.log(guessRem);
        if(guessNum==randomNum){
        console.log("You guessed the number");
        return;
        }
        else if(guessNum<randomNum){
            console.log("Guess high");
        }
        else if(guessNum>randomNum){
            console.log("Guess low");
        }

        guessRemNum=guessRemNum-1;
        guessRem.innerText=guessRemNum;

    });




