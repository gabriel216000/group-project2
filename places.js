let nowlist = document.getElementById("home");

places.forEach(element => {
 
nowlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="images/bars/cocktailbar.JPG" alt="cocktailbar">
                <div id="info">
                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div id="clock">
                    <p>
                    ${element.happyhours}
                    </p>
                </div>
                </div>
                
            </div>
`

});




let barlist = document.getElementById("bars-container");

places.filter (place=>place.type === "bars" )

.forEach(element => {
 
barlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="images/bars/cocktailbar.JPG" alt="cocktailbar">
                <div id="info">
                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div id="clock">
                    <p>
                    ${element.happyhours}
                    </p>
                </div>
                </div>
                
            </div>
`
    
});

let restaurantlist = document.getElementById("restaurants-container");

places.filter (place=>place.type === "restaurants" ) //arrow function

.forEach(element => {
 
restaurantlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="images/bars/cocktailbar.JPG" alt="cocktailbar">
                <div id="info">
                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div id="clock">
                    <p>
                    ${element.happyhours}
                    </p>
                </div>
                </div>
                
            </div>
`
    
});




           