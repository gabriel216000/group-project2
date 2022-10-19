
//I used html code to get how the info appears on home, bars, resturants and special deals
let nowlist = document.getElementById("home");
//This is for places that's in the home page and shows whats happening now
places.forEach(element => {
 
nowlist.innerHTML+= `
  <div class="one">
    <div class="w3-display-container">
        <img class="images" id="cocktailbar" src="${element.photo}" alt="Happy hour right now">
        <div class="w3-display-topright w3-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="white" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
        </div>
    </div>

                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div class="clock">
                    <p>
                    ${element.happyhours}
                    </p>
                </div>
                <div class="week">
                <div class=weekday>M</div>
                <div class=weekday>T</div>
                <div class=weekday>W</div>
                <div class=weekday>T</div>
                <div class=weekday>F</div>
                <div class=weekday>S</div>
                <div class=weekday>S</div>

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
  <div class="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Bars">
                <div id="info">
                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div class="clock">
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
  <div class="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Restaurant">
                <div id="info">
                <h3>
                    ${element.bar_name}
                </h3>
                <p>
                ${element.address}
                </p>
                <div class="clock">
                    <p>
                    ${element.happyhours}
                    </p>
                </div>
                </div>
                
            </div>
`
    
});


//This only shows the special deals page
let offerlist = document.getElementById("specialdeals");

offer.forEach(element => {
 const bar= places.filter(place=>place.id === element.barId)[0]
    offerlist.innerHTML+= `
      <div class="one">
                    <img class="images" id="cocktailbar" src="${bar?.photo}" alt="Special deals">
                    <div id="info">
                    <h3>
                        ${places.filter(place=>place.id === element.barId)[0]?.bar_name}
                    </h3>
                    <p>
                    ${bar?.address}
                    </p>
                    <div class="clock">
                        <p>
                        ${element.day}
                        </p>

                    </div>
                    </div>
                    
                </div>
    `
    
    });
    

           