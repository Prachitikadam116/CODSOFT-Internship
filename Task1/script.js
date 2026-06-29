// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        alert("👋 Welcome to Prachiti Kadam's Portfolio!");
    }, 500);
});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you for contacting me!\nI'll get back to you soon.");

    form.reset();

});

// ===============================
// Navbar Background Change
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        nav.style.background="#3b2db5";

    }else{

        nav.style.background="rgba(0,0,0,.2)";

    }

});

// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// Typing Effect
// ===============================

const text = "Information Technology Student";
let index = 0;

const heading = document.querySelector(".hero-text h3");

heading.innerHTML = "";

function typing(){

    if(index < text.length){

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,80);

    }

}

typing();

// ===============================
// Fade Animation
// ===============================

const cards = document.querySelectorAll(".card");

function reveal(){

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 100){

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".6s";

});

window.addEventListener("scroll", reveal);

reveal();