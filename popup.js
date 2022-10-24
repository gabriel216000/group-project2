let popup = document.getElementById("popup");
function noRefresh(e){ //e=event
    e.preventDefault() //kalla á prevent default
}
const formElement = document.querySelector("form") //ná í form
formElement.addEventListener("submit",noRefresh) //hlusta á submit, kalla á no refresh

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}