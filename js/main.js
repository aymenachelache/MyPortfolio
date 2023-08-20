
// NavBar Mobile

// let bars = document.querySelector(".bars");
let nav = document.querySelector("ul.nav");
let header = document.querySelector(".header");

function navBar() {
    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
}