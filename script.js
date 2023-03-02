let fDate = document.querySelector("#fDate");
let showQRBtn = document.querySelector("#upBtn");
let hideQRBtn = document.querySelector("#qr > button");
let busNum = document.querySelector("#busNum");
let chooseBus = document.querySelector(".form-control");
alert("Hej ✋ taka mała sprawa ❗. Za każdym razem gdy coś aktualizuje, muszę wydawać po 20 / 30 zł na bilety dla testów. Jak komuś się chce, można jakieś dotacje blikiem strzelić. Dla przypominania bilet miesięczny ulgowy to 82 zł i działa od maja 2022 czyli 7 miesięcy 7x80=560zł oszczedności wiec 😎, a tez nie chce być w plecy za każdym razem gdy coś naprawiam, a przecież tyle ludzi z tego korzysta. (każdy grosik sie liczy) Miłego Dnia! 😍😘🥰 ~ TheLoloS")

if (!localStorage.getItem("nick")) {
  let promptNick = window.prompt("Podaj Swój nick (wymyśl jakis to tylko w celu prowadzenia statystyk i każdo razowo podawaj ten sam)");
  const data = {
    name: promptNick,

  };

  // wysłanie żądania POST z danymi w formacie JSON
  fetch('https://api.jsonbin.io/v3/b', {
    method: 'POST',
    headers: {
      'X-Master-Key': '$2b$10$C4mxyX72zzGWQEjTK3xWkuMfXFon/AOasVzW5iZcqjENUnlTidga6',
      'Content-Type': 'application/json',
      'X-Bin-Name': promptNick
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => localStorage.setItem("nick", promptNick))
    .catch(error => console.error(error));

}


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
  let stopCount = document.querySelector("#stopCount");
  title1.innerHTML = Ticket[selectedTicket].title;
  title2.innerHTML = Ticket[selectedTicket].subTitle1;
  title3.innerHTML = Ticket[selectedTicket].subTitle2;
  fotterText.innerHTML = Ticket[selectedTicket].subText;
  stopCount.innerHTML = Ticket[selectedTicket].stopCounts
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
  autobusemy wybranej linii. Ważny od momentu zakupu. 
  Nie uprawnia do przesiadek.`,
    stopCounts: `do 3 przystanków`
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 4 - 7 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 4 do 7 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 7 przystanków`
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 8 - 12 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 8 do 12 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 12 przystanków`
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY 13 - 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 13 do 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 18 przystanków`
  },
  {
    title: "Normalny",
    subTitle1: "JEDNORAZOWY POWYŻEJ 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd powyżej 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `Do końca kursu`
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY DO 3 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd do 3 przystanków,
  autobusemy wybranej linii. Ważny od momentu zakupu. 
  Nie uprawnia do przesiadek.`,
    stopCounts: `do 3 przystanków`
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 4 - 7 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 4 do 7 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 7 przystanków`
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 8 - 12 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 8 do 12 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 12 przystanków`
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY 13 - 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd od 13 do 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `do 18 przystanków`
  },
  {
    title: "Ulgowy",
    subTitle1: "JEDNORAZOWY POWYŻEJ 18 PRZYSTANKÓW",
    subTitle2: "MZK JASTRZĘBIE-ZDRÓJ",
    subText: `&nbsp; Bilet jednorazowy, na przejazd powyżej 18 przystanków,
autobusemy wybranej linii. Ważny od momentu zakupu. 
Nie uprawnia do przesiadek.`,
    stopCounts: `Do końca kursu`
  },

];
let idTicket = document.querySelector("#idTicket");
idTicket.innerHTML += String(Math.floor(Math.random() * 100000000000));
