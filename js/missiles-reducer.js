const mainList = document.querySelector(".main-list");
const missilesListTitle = document.querySelector(".missiles-list-title");
const natoMissilesList = document.querySelector(".nato-missiles-list");
const russiaMissilesList = document.querySelector(".russia-missiles-list");
const missilesItem = document.querySelector(".missiles-item");
const iframe = document.getElementById("main-iframe");

// console.log(russiaMissilesList)
mainList.addEventListener('click', onOffMissilesList)

function onOffMissilesList(event) {
  console.log(event.target.textContent)

  if (event.target.textContent === "missiles NATO") {
    natoMissilesList.classList.toggle("active")
    natoMissilesList.classList.toggle("")
  }
  if (event.target.textContent === "missiles russia") {
    russiaMissilesList.classList.toggle("active")
    russiaMissilesList.classList.toggle("")
  }

  setMissileReducer(event)
}

function setMissileReducer(event) {
  // console.log(event.target.textContent)
  // ---NATO MISSILES---
  if (event.target.textContent === "aim 120") {
    iframe.setAttribute("src", "./aim-120.html")
  }
  if (event.target.textContent === "aim-9") {
    iframe.setAttribute("src", "./AIM-9X-Sidewinder.html")
  }
  if (event.target.textContent === "aim 120b") {
    iframe.setAttribute("src", "./aim120b.html")
  }
  if (event.target.textContent === "aim 120c") {
    iframe.setAttribute("src", "./aim120c.html")
  }
  if (event.target.textContent === "aim-7") {
    iframe.setAttribute("src", "./aim7msparrow.html")
  }
  if (event.target.textContent === "r 27") {
    iframe.setAttribute("src", "./r27.html")
  }


  //  ----rUSSIA MISSILES-----
  if (event.target.textContent === "p 60") {
    iframe.setAttribute("src", "./p60.html")
  }
}

