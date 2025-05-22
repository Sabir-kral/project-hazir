let user = JSON.parse(localStorage.getItem("activeUser"));
let names = document.querySelector(".name");
names.innerHTML = user.username;
names.style.display = "inline" ;
let person = document.querySelector(".bi-person") ;
person.style.display = "inline";
function opens() {
    window.open("./login.html")
}
function out() {
    person.style.display = "none"
    names.style.display = "none"
    let logOut = document.querySelector(".logOut")
    let logIn = document.querySelector(".logIn")
    logOut.style.display = "none"
    logIn.style.display = "inline"
    localStorage.removeItem("activeUsers")
    logOut.style.display = "none"
}
function openss() {
    window.open("./user.html")
}
function cart() {
    window.open("./cart.html")
}
let body = document.querySelector("body")
let products =JSON.parse(localStorage.getItem("products"));

products.forEach(element => {
let img = document.createElement("img")
img.src = element.img;
img.style.width = "5vw"
let p = document.createElement("p")
p.innerText = element.model;
let p2 = document.createElement("p")
p2.innerText = element.price;
let rating = document.createElement("i")
rating.classList.add("bi bi-star-fill")
rating*element.rating[0];
let button = document.createElement("button")
button.style.color = "white"
button.style.backgroundColor = "black"
button.style.width = "5vw"
button.innerText = "add to cart"
    


});