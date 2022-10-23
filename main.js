const menu = document.getElementById("menu");
const home = document.getElementById("home");
const hamburger = document.getElementsByClassName('hamburger-lines');

/* intro start */ 
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

const visited = localStorage.getItem('visited');

if (!visited) {
    intro.style.display = "block";
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

 localStorage.setItem('visited', 1);
 
} 
/* intro end*/

/*hamburger menu, open-close*/ 
const specialDeals = document.getElementById("special-deals");
const favourites = document.getElementById("favourites");
const contactUs = document.getElementById("contact-us");
const signIn = document.getElementById("sign-in");

const menuButton = document.getElementById('menu');

const bars = document.getElementById("bars")
const restaurants = document.getElementById("restaurants")


let currentPage = home;

let isMenuShowing=false;

function toggleMenu() {
    if( isMenuShowing )
        closeMenu();
    else 
        openMenu();
}

function openMenu() {
    menuButton.classList = ("menu-list")

    menu.style.display = "flex";

    isMenuShowing = true;

    home.style.opacity = "0.5"
}

/*"fa fa-bars fa-4x" er tengt við upprunulega takkann*/
function closeMenu() {
    menuButton.classList = ("hamburger-lines");

    menu.style.display = "none";

    isMenuShowing = false;

    home.style.opacity = "1"
}

/*hamburger menu, hver síða fyrir sig*/ 
function showSpecialDealsPage() {
    changePage(specialDeals);
    document.getElementById("happytext").innerText ="SPECIAL DEALS"
    document.getElementById("now").style.color = "rgba(32, 32, 32, 1)"
}
function showFavouritesPage() {
    changePage(favourites);
}
function showContactUsPage() {
    changePage(contactUs);
    document.getElementById("happytext").innerText ="CONTACT US"
    document.getElementById("now").innerText ="IS THERE ANYTHING WE CAN DO BETTER? \n\ PLEASE LET US KNOW"
}
function showSignInPage() {
    changePage(signIn);
    document.getElementById("happytext").innerText ="Sign In"
    document.getElementById("now").innerText ="Welcome back!"
}
function showHomePage() {
    changePage(home);
}
function showBars() {
    document.getElementById("happytext").innerText ="BARS"
    document.getElementById("now").style.visibility ="hidden"
}
function showRestaurants() {
    document.getElementById("happytext").innerText ="RESTAURANTS"
    document.getElementById("now").style.visibility ="hidden"
}

/*hamburger menu, þegar þú opnar nýja síðu þá fer dropdown menuið*/ 
function changePage(newPage) {
    document.getElementById("happytext").innerText ="HAPPY HOUR"
    document.getElementById("now").style.visibility ="visible"
    document.querySelector('.navbar-container input[type="checkbox"]').checked = false
    if( currentPage !==newPage ) {
        currentPage.style.display = "none";
        if (newPage.id==="home") {
            newPage.style.display = "flex";
        }
        else {
            newPage.style.display = "block";
        }
        currentPage = newPage;    
    }
    closeMenu();
    sessionStorage.setItem("pageID", currentPage.id)
}

/*refreshar síðu og þú ert ennþá inná sömu síðu en kastar þér ekki á homepage*/ 
handleRefresh()

function handleRefresh() {
    const prevPageID = sessionStorage.getItem("pageID");
    if( prevPageID ) {
        [].forEach(section =>{
            if( section.id === prevPageID )
                changePage(section);
        });
    }
}

