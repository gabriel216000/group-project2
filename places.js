
//I used html code to get how the info appears on home, bars, resturants and special deals
let nowlist = document.getElementById("home");
//This is for places that's in the home page and shows whats happening now
places.forEach(element => {
 
nowlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Happy hour right now">


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



//Here I put a filter for the bar, now this page only shows the bars
let barlist = document.getElementById("bars-container");

places.filter (place=>place.type === "bars" )

.forEach(element => {
 
barlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Bars">
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

//This filter only shows the places with the type name restaurant

let restaurantlist = document.getElementById("restaurants-container");

places.filter (place=>place.type === "restaurants" ) //arrow function

.forEach(element => {
 
restaurantlist.innerHTML+= `
  <div id="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Restaurant">
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

let offerlist = document.getElementById("specialdeals");

offer.forEach(element => {
 const bar= places.filter(place=>place.id === element.barId)[0]
    offerlist.innerHTML+= `
      <div id="one">
                    <img class="images" id="cocktailbar" src="${bar?.photo}" alt="Special deals">
                    <div id="info">
                    <h3>
                        ${places.filter(place=>place.id === element.barId)[0]?.bar_name}
                    </h3>
                    <p>
                    ${bar?.address}
                    </p>
                    <div id="clock">
                        <p>
                        ${element.day}
                        </p>
                    </div>
                    </div>
                    
                </div>
    `
    
    });
    

           