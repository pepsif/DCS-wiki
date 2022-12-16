const missilesListTitle = document.querySelector(".missiles-list-title");
const missilesList = document.querySelector(".missiles-list")
const iframe = document.getElementById("main-iframe");

let count = 0;
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

