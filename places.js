
//I used html code to get how the info appears on home, bars, resturants and special deals
let nowlist = document.getElementById("home");
//This is for places that's in the home page and shows whats happening now
places.forEach(element => {
 
nowlist.innerHTML+= `
  <div class="one">
                <img class="images" id="cocktailbar" src="${element.photo}" alt="Happy hour right now">


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
                <div class="week">
                <div class="happyday">M</div>
                <div class="happyday">T</div>
                <div class="happyday">W</div>
                <div class="happyday">T</div>
                <div class="happyday">F</div>
                <div class="happyday ${element.days}">S</div>
                <div class="happyday ${element.days}">S</div>
               </div> 

               </div>
                
            </div>
`
});



//Here I put a filter for the bar, now this page only shows the bars
 //HTML code inside js to get the cards to use the array.js data 
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
                <div class="week">
                <div class="happyday">M</div>
                <div class="happyday">T</div>
                <div class="happyday">W</div>
                <div class="happyday">T</div>
                <div class="happyday">F</div>
                <div class="happyday ${element.days}">S</div>
                <div class="happyday ${element.days}">S</div>
               </div> 
               
                </div>
                
            </div>
`   
});


//This filter only shows the places with the type name restaurant
 //HTML code inside js to get the cards to use the array.js data 

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
                <div class="week">
                <div class="happyday">M</div>
                <div class="happyday">T</div>
                <div class="happyday">W</div>
                <div class="happyday">T</div>
                <div class="happyday">F</div>
                <div class="happyday ${element.days}">S</div>
                <div class="happyday ${element.days}">S</div>
               </div> 
               
                </div>
                
            </div>
`
    
});


//This only shows the special deals page
let offerlist = document.getElementById("specialdeals");

offer.forEach(element => {
 const bar= places.filter(place=>place.id === element.barId)[0]

let offerday = "" 
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
for (let i = 0; i < 7;i++){
    //Taking the first letter of every word (day) and turn it into uppercase so it looks like on the other pages
    const dayLetter= days[i][0].toUpperCase() 
    //If the array includes one of the days it appears in purple
    if (element.day.includes(days[i])){
       offerday +=  `<div class="happyday">${dayLetter}</div>`
    }

    else { 
        offerday +=  `<div class="happyday weekdays">${dayLetter}</div>`

    }
}
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
                    <div class="week">
                        <p>
                        ${offerday}
                        </p>
                    </div>
                    <div class="clock">
                    <p>
                    ${element.time}
                    </div>
                    
                </div>
    `
    
    });
    

           