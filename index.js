
var randNum1 = Math.floor(Math.random() * 6) + 1; //1-6

var randDiceImg = "dice" + randNum1 + ".png"; //dice1.png - dice6.png

var randImgSrc = "images/" + randDiceImg; //images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randImgSrc);


var randNum2 = Math.floor(Math.random() * 6) + 1;

var randImgSrc2 = "images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);


//If player 1 wins
if (randNumb1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randNum2 > randNumb1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
