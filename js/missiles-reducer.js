const missilesList = document.getElementById("accordion");
const iframe = document.getElementById("main-iframe");

missilesList.addEventListener('click',missilesReducer)

function missilesReducer(event) {
    if(event.target.textContent === "aim 120") {
        iframe.setAttribute("src","./aim-120.html")
    }
console.log(event.target,iframe.getAttribute("src"))
}

console.log(iframe.getAttribute("src"))