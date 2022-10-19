const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const mainSection = document.getElementById("main-section");

/* intro start */ 
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
/* intro end*/


/*hamburger menu, open-close*/ 
const specialDeals = document.getElementById("special-deals");
const favourites = document.getElementById("favourites");
const contactUs = document.getElementById("contact-us");
const signIn = document.getElementById("sign-in");
const bars = document.getElementById("bars")
const restaurants = document.getElementById("restaurants")

const home = document.getElementById("home");
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

/*hamburger menu, hver síða fyrir sig*/ 
function showSpecialDealsPage() {
    changePage(specialDeals);
}
function showFavouritesPage() {
    changePage(favourites);
}
function showContactUsPage() {

    changePage(contactUs);
}
function showSignInPage() {
    changePage(signIn);
}
function showHomePage() {
    changePage(home);
}
function showBars() {
    changePage(bars);
}
function showRestaurants() {
    changePage(restaurants);
}

/*hamburger menu, þegar þú opnar nýja síðu þá fer dropdown menuið*/ 
function changePage(newPage) {
    if ( currentPage !==newPage ) {
        console.log (newPage)
        currentPage.style.display = "none";
        newPage.style.display = "block";
        console.log (newPage)
        currentPage = newPage;    
    }
    closeMenu();

    sessionStorage.setItem("pageID", currentPage.id)
}


/*refreshar síðu og þú ert ennþá inná sömu síðu en kastar þér ekki á homepage*/ 
handleRefresh()

function handleRefresh() {
    const prevPageID = sessionStorage.getItem("pageID");
    if(prevPageID) {
        [specialDeals, favourites, contactUs, signIn].forEach(section =>{
            if(section.id === prevPageID)
                changePage(section);
        });
    }
}