"use strict";

saveOne = document.getElementById("saveone");
saveTwo = document.getElementById("savetwo");
scoresRightHand = document.getElementById("scoresright");
scoresLeftHand = document.getElementById("scoresleft");
var count = 0;

function buttonone() {
  count = count + 1;
  saveOne.innerText = count;
}

function buttontwo() {
  count = count + 1;
  saveTwo.innerText = count;
}

function reset() {
  count = 0;
  saveOne.innerText = count;
}

function resetleft() {
  count = 0;
  saveTwo.innerText = count;
  console.log(saveTwo.innerText);
}

var textt = 'Scores:' + "-";

function resetscore() {
  scoresRightHand.innerText = textt;
}

function resetscoreleft() {
  scoresLeftHand.innerText = textt;
}

function save() {
  score = count + "-";
  scoresRightHand.innerText += score;
  saveOne.innerText = 0;
  count = 0;
}

function saveleft() {
  score = count + "-";
  scoresLeftHand.innerText += score;
  saveTwo.innerText = 0;
  count = 0;
}