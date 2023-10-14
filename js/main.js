
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


let up = document.querySelector(".up");
window.onscroll = function () {
    if (window.scrollY == 0) {
        up.style.display = "none";
    } else if (window.scrollY > 100) {
        up.style.display = "block";
        up.addEventListener("click", () => {
            window.scrollTo(0, 0);
        });
    }
}

// Resume List
let resumeList = document.querySelectorAll('.resume-list li span');

document.querySelectorAll(".resume-list li").forEach( (el) => {
    el.addEventListener("click", (eo) => {
        resumeList.forEach((span) => {
            span.parentElement.classList.remove("active");
        });
        el.classList.add("active");
    });  
});

console.log(resumeList);