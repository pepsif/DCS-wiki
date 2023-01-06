const missilesListTitle = document.querySelector(".missiles-list-title");
const missilesList = document.querySelector(".nato-missiles-list");
const missilesItem = document.querySelector(".missiles-item");
const iframe = document.getElementById("main-iframe");

console.log(iframe.getAttribute("src"))
missilesList.addEventListener('click', setMissile)

function setMissile(event) {
       if(event.target.textContent === "aim 120") {
         iframe.setAttribute("src","./aim-120.html")
       }
       if(event.target.textContent === "sidewinder") {
        iframe.setAttribute("src","./AIM-9X-Sidewinder.html")
      }
      if(event.target.textContent === "aim 120b") {
        iframe.setAttribute("src","./aim120b.html")
      }
      if(event.target.textContent === "aim 120c") {
        iframe.setAttribute("src","./aim120c.html")
      }
      if(event.target.textContent === "AIM-7М Sparrow") {
        iframe.setAttribute("src","./aim7msparrow.html")
      }
                
}







let count = 0; // missiles NATO counter on off
missilesListTitle.onclick = () => {

    let items = missilesList.children;
    if (count === 0) {
        for (items of missilesList.children) {
            items.style.display = "block";
        }
        count += 1;
    } else if (count === 1) {
        for (items of missilesList.children) {
            items.style.display = "none";
        }
        count = 0;
    }
}

