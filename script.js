window.addEventListener("load", function () {
  window.history.pushState({ noBackExitsApp: true }, "");
});

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.noBackExitsApp) {
    window.history.pushState({ noBackExitsApp: true }, "");
  }
});
let showQRBtn = document.querySelector("#upBtn");
let hideQRBtn = document.querySelector("#qr > button");
let fDate = document.querySelector("#fDate");
let busNum = document.querySelector("#busNum");

showQRBtn.addEventListener("click", () => {
  document.getElementById("qr").style.display = "flex";
});

hideQRBtn.addEventListener("click", () => {
  document.getElementById("qr").style.display = "none";
});

fDate.addEventListener("click", () => {
  let answer = window.confirm("Napewno chcesz ustalić nową date?");
  let d = new Date();
  if (answer) {
    fDate.innerHTML = `${d.toLocaleDateString(
      "fr-CH"
    )}&nbsp;godz.&nbsp;${d.toLocaleTimeString()}`;
  } else {
    //some code
  }
});

busNum.addEventListener("click", () => {
  let promptAnswer = window.prompt("Wpisz numer autobusu:");
  if (promptAnswer) {
    busNum.innerHTML = promptAnswer;
  } else {
    console.log("nie działa");
  }
});

var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  let d = new Date();
  document.getElementById(
    "clock"
  ).innerHTML = `${d.toLocaleTimeString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${d.toLocaleDateString(
    "fr-CH"
  )}`;
}
