var diceName1 = Math.floor(Math.random() * 6) + 1;
var diceimage1 = "images/dice" + diceName1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceimage1);

var diceName2 = Math.floor(Math.random() * 6) + 1;
var diceimage2 = "images/dice" + diceName2 + ".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", diceimage2);

if (diceName1 > diceName2) {
  document.querySelector("h1").innerHTML = "Player 1 win !";
} else if (diceName1 < diceName2) {
  document.querySelector("h1").innerHTML = "Player 2 win !";
} else if (diceName1 == diceName2) {
  document.querySelector("h1").innerHTML = "Draw~";
}
