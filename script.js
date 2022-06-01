let fDate = document.querySelector("#fDate");
let showQRBtn = document.querySelector("#upBtn");
let hideQRBtn = document.querySelector("#qr > button");
let busNum = document.querySelector("#busNum");
let chooseBus = document.querySelector(".form-control");

window.addEventListener("load", function () {
  window.history.pushState({ noBackExitsApp: true }, "");
  localStorage.getItem("newDate")
    ? (fDate.innerHTML = localStorage.getItem("newDate"))
    : null;
  localStorage.getItem("numberBus")
    ? (busNum.innerHTML = localStorage.getItem("numberBus"))
    : null;
  localStorage.getItem("selectedTicket")
    ? changeTicket(Number(localStorage.getItem("selectedTicket")))
    : null;
});

window.addEventListener("popstate", function (event) {
  if (event.state && event.state.noBackExitsApp) {
    window.history.pushState({ noBackExitsApp: true }, "");
  }
});

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
    localStorage.setItem(
      "newDate",
      `${d.toLocaleDateString(
        "fr-CH"
      )}&nbsp;godz.&nbsp;${d.toLocaleTimeString()}`
    );
  } else {
    //some code
  }
});

chooseBus.addEventListener("change", (e, i) => {
  changeTicket(Number(e.target.value));
});

busNum.addEventListener("click", () => {
  let promptAnswer = window.prompt("Wpisz numer autobusu:");
  if (promptAnswer) {
    busNum.innerHTML = promptAnswer;
    localStorage.setItem("numberBus", promptAnswer);
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

const changeTicket = (selectedTicket) => {
  let title1 = document.querySelector("h1");
  let title2 = document.querySelector("#countB");
  let title3 = document.querySelector("#countC");
  let fotterText = document.querySelector("#fotterText");
  title1.innerHTML = Ticket[selectedTicket].title;
  title2.innerHTML = Ticket[selectedTicket].subTitle1;
  title3.innerHTML = Ticket[selectedTicket].subTitle2;
  fotterText.innerHTML = Ticket[selectedTicket].subText;
  localStorage.setItem("selectedTicket", selectedTicket);
  document.querySelector(".form-control").selectedIndex =
    Number(localStorage.getItem("selectedTicket")) + 1;
};
const Ticket = [
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY DO 3 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd do 3 przystanków,
  autobusemy wybranej linii. Ważny od momentu zakupu. <br />
  Nie uprawnia do przesiadek.`,
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 4 - 7 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 4 do 7 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 8 - 12 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 8 do 12 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 13 - 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 13 do 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY POWYŻEJ 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd powyżej 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY DO 3 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd do 3 przystanków,
  autobusemy wybranej linii. Ważny od momentu zakupu. <br />
  Nie uprawnia do przesiadek.`,
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 4 - 7 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 4 do 7 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 8 - 12 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 8 do 12 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 13 - 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 13 do 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY POWYŻEJ 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd powyżej 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. <br />
Nie uprawnia do przesiadek.`,
  },
];
let idTicket = document.querySelector("#idTicket");
idTicket.innerHTML += String(Math.floor(Math.random() * 100000000000));
