window.addEventListener("load", function () {
  window.history.pushState({ noBackExitsApp: true }, "");
});

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.noBackExitsApp) {
    window.history.pushState({ noBackExitsApp: true }, "");
  }
});
let showQRBtn = document.querySelector("#upBtn");

showQRBtn.addEventListener("click", () => {});

var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById(
    "clock"
  ).innerHTML = `${d.toLocaleTimeString()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${d.toLocaleDateString(
    "fr-CH"
  )}`;
}
