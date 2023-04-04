// var Player1 = prompt ("Write your name here...");
// var Player2 = prompt ("Write your friend's name here...");

var randomNumber1 = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").src = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random()*6)+1;
    document.querySelector(".img2").src = "images/dice"+randomNumber2+".png";

if (randomNumber1>randomNumber2){
    document.querySelector ("h1").textContent = "Player1+ Wins 🚩"
} else if (randomNumber1<randomNumber2){
    document.querySelector ("h1").textContent = "Player2+ Wins 🚩"
} else (document.querySelector ("h1").innerHTML= "Draw <br>😐<br> try again");