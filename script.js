
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
    .then(drones => drones.forEach(showDrone))
    .then()


function showDrone(drone) {
    console.log(drone);
    let template = document.querySelector('template').content;
    let clone = template.cloneNode(true);

    let editBtn = clone.querySelector("#editBTN")
    let product = clone.querySelector(".product")
    let form = clone.querySelector(".form")
    let submit = clone.querySelector("#subbtn")

    clone.id = drone._id
    clone.querySelector(".cat-name").innerHTML = drone.catname;
    clone.querySelector(".cat-name2").innerHTML = drone.catname;
    clone.querySelector(".prod-title").innerHTML = drone.title;
    clone.querySelector(".prod-desc").innerHTML = drone.description;
    clone.querySelector(".link").innerHTML = drone.link;
    clone.querySelector(".price").innerHTML = drone.price;
    clone.querySelector(".EditBtn").innertext = "bruhmoment";
    clone.querySelector(".prod-img").src = "https://examproject-2dfd.restdb.io/media/" + drone.image[0];
    editBtn.addEventListener("click", (clone) => {
        console.log("clone")
        editBtn.classList.add("hide")
        form.classList.remove("hide");
        product.classList.add("hide")

    });

    submit.addEventListener("click", function (e) {
        let article = e.currentTarget.parentElement;
        let drone_id = article.id;
        fetch("https://examproject-2dfd.restdb.io/rest/Drones/" + drone_id.toString(),
            { method: "get", headers: headers }).then((e) => e.json()).then(drone => {
                drone.price = article.querySelector(".form_price")
                drone.title = article.querySelector(".form_name");
                drone.description = article.querySelector(".form_description");
                drone.link = article.querySelector(".form_link");
                return drone;
            }).then((drone) => {
                fetch("https://examproject-2dfd.restdb.io/rest/Drones/", {
                    method: "put",
                    headers: headers, body: JSON.stringify(drone)
                })
            });
    })

    document.querySelector("main").appendChild(clone);


};



/*
function transformToform(drone) {
    editBtn.classList.add("hide")
    form.classList.remove("hide");
    product.classList.add("hide")
}
/*
submit.addEventListener("click", function (e) {
    let article = e.currentTarget.parentElement.parentElement; // I'm guessing here.
    let drone_id = article.id;
    fetch("https://examproject-2dfd.restdb.io/rest/Drones/" + drone_id.toString(),
        { method: "get", headers: headers }).then((e) => e.json()).then(drone => {
            drone.price = article.querySelector(".form_price")
            drone.title = article.querySelector(".form_name");
            drone.description = article.querySelector(".form_description");
            drone.link = article.querySelector(".form_link");
            return drone;
        }).then((drone) => {
            fetch("https://examproject-2dfd.restdb.io/rest/Drones/", {
                method: "put",
                headers: headers, body: JSON.stringify(drone)
            })
        });
})
*/

//editBtn.addEventListener("click", transformToform)





