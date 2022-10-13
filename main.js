const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section");

const home = document.getElementById("home");

const about = document.getElementById("about");
const contact = document.getElementById("contact");
const bars = document.getElementById("bars");
const restaurants = document.getElementById("restaurants");
const signup = document.getElementById("sign-up");
/* Intro start */ 
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active");
            }, (idx + 1) * 400)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
              setTimeout(()=>{
                span.classList.remove("active");
                span.classList.add("fade");
              }, (idx + 1) * 50)  
            })
        }, 2000);
        setTimeout(()=>{
            intro.style.top = "-100vh";
        }, 2300)
    })
})
/* Intro end*/

let currentPage = home;

let isMenuShowing=false;

function toggleMenu() {

    if (isMenuShowing)
        closeMenu();
    else 
        openMenu();
}

function openMenu() {
    menuButton.classList = ("fa fa-times fa-4x")

    menu.style.display = "flex";

    isMenuShowing = true;

    mainSection.style.opacity = "0.5"
}

function closeMenu() {
    menuButton.classList = ("fa fa-bars fa-4x");

    menu.style.display = "none";

    isMenuShowing = false;

    mainSection.style.opacity = "1"
}

function showHomePage() {
    changePage(home);
}

function showAboutPage() {
    changePage(about);
}
function showContactPage() {
    changePage(contact);
}
function showBarsPage() {
    changePage(bars);
}
function showRestaurantsPage() {
    changePage(restaurants);
}
function showSignupPage() {
    changePage(signup);
}

function changePage(newPage) {
    if ( currentPage !==newPage ) {
        currentPage.style.display = "none";
        newPage.style.display = "block";
        currentPage = newPage;    
    }
    closeMenu();

    sessionStorage.setItem("pageID", currentPage.id)
}

handleRefresh()

function handleRefresh() {
    const prevPageID = sessionStorage.getItem("pageID");
    if(prevPageID) {
        [home, about, contact, bars, restaurants, signup].forEach(section =>{
            if(section.id === prevPageID)
                changePage(section);
        });
    }
}