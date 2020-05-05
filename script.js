
const baseURL = "https://examproject-2dfd.restdb.io/rest/Drones";
const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5eb14f804064fd380416528c",
    "cache-control": "no-cache"
};

fetch(baseURL, {
    method: "get",
    headers: headers
})
    .then(e => e.json())
    .then(drones => drones.forEach(showDrone));


function showDrone(drone) {
    console.log(drone);
    let template = document.querySelector('template').content;
    let clone = template.cloneNode(true);
    clone.querySelector(".cat-name").innerHTML = drone.catname;
    clone.querySelector(".prod-title").innerHTML = drone.title;
    clone.querySelector(".prod-desc").innerHTML = drone.description;
    clone.querySelector(".link").innerHTML = drone.link;
    clone.querySelector(".price").innerHTML = drone.price;
    clone.querySelector(".prod-img").src = "https://examproject-2dfd.restdb.io/media/" + drone.image[0];
    document.querySelector("main").appendChild(clone);
};

