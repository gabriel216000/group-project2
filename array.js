//List of all resturants and bars we have on the website
//The bars and resturants each have a type - either bar or resturant so we can sort them 
let places =
[
    {
      id: 1,
      type: "bars",
      bar_name: "The Irishman Pub",
      address: "Klapparstígur 27, 101 Reykjavík",
      happyhours: "12:00-19:00",
      days: "Everyday",
      drinks: {beer: "Beer <br> 850,- kr", wine: "Wine <br> 850,- kr", rose: "Rose <br> 950,- kr", sparklingWine: "Sparkling Wine <br> 950,- kr"},
      photo: './images/bars/irishman.JPG',
    },

    {
        id: 2,
        type: "bars",
        bar_name: "American Bar",
        address: "Austurstræti 8, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 900-950,- kr", wine: "Wine <br> 1000,- kr", cider: "Cider <br> 950,- kr"},
        photo: './images/bars/american.jpg',
      },

      {
        id: 3,
        type: "bars",
        bar_name: "Jungle Coctail Bar",
        address: "Austurstræti 9, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 900/1000,- kr", wine: "Wine <br> 1000,- kr", coctails: "Cocktails <br> 1600,- kr", sparklingWine: "Sparkling Wine <br> 1600,- kr"},
        photo: './images/bars/irishman.JPG', //vantar mytnd fyrir jungle
      },

      {
        id: 4,
        type: "bars",
        bar_name: "Lebowski Bar",
        address: "Laugavegur 20a, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 800/850,- kr", wine: " Wine <br> 800,- kr"},
        photo: './images/bars/lebowski.jpg',
      },

      {
        id: 5,
        type: "bars",
        bar_name: "The English Pub",
        address: "Austurstræti 20a, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 850/950,- kr", wine: "Wine <br> 950,- kr", coctails: "Cocktails <br> 1700,- kr", shots: "Shots <br> 900,- kr"},
        photo: './images/bars/english.jpg',
      },      
      {
        id: 6,
        type: "bars",
        bar_name: "Kaldi Bar",
        address: "Laugavegur 20b, 101 Reykjavík",
        happyhours: "16:00-17:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 900", wine: "Wine <br> 900", coctails: "Cocktails <br> 1800"},
        photo: './images/bars/kaldi.jpg',
      },
      {
        id: 7,
        type: "bars",
        bar_name: "Den Danske Kro",
        address: "Ingólfsstræti 3, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 2for1", wine: "Wine <br> 2for1", Shots: "Shots <br> 600", sparklingWine: "Sparkling Wine <br> 1000"},
        photo: './images/bars/danske.jpg',
      },

      {
        id: 8,
        type: "bars",
        bar_name: "Íslenski Barinn",
        address: "Ingólfsstræti 1a, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 700", wine: "Wine <br> 700"},
        photo: './images/bars/islenski.jpg',
      },
      {
        id: 9,
        type: "bars",
        bar_name: "Stúdentakjallarinn",
        address: "Sæmundargata, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 710-850", Cider: "Cider <br> 800"},
        photo: './images/bars/student.jpg',
      },
      {
        id: 10,
        type: "bars",
        bar_name: "Kokteilbarinn",
        address: "Klapparstígur 28, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 25% off", wine: "Wine <br> 25% off", coctails: "Cocktails <br> 25% off"},
        photo: './images/bars/cocktailbar.JPG',
      },
      
      
      {
        id: 11,
        type: "bars",
        bar_name: "Miami",
        address: "Hverfisgata 33, 101 Reykjavík",
        happyhours: "15:00-19:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 750-890,- kr", wine: "Wine <br> 990,- kr", coctails: "Cocktails <br> 1490,- kr", rose: "Rose <br> 990,- kr", sparklingWine: "Sparkling Wine <br> 990"},
        photo: './images/bars/miami.jpg',
      },




      {
        id: 12,
        type: "restaurants",
        bar_name: "Sæta Svínið",
        address: "Hafnarstræti 1-3, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Every weekday",
        drinks: {beer: "Beer <br> 990, 1090, 1290,- kr", wine: "Wine <br> 1090-1190,- kr", shots: "Shots <br> 700-950,- kr"},
        photo: './images/restaurants/svin.jpg',
      },

      {
        id: 13,
        type: "restaurants",
        bar_name: "Fjallkonan",
        address: "Hafnarstræti 1-3, 101 Reykjavík",
        happyhours: "15:00-17:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 990,- kr", wine: "Wine <br> 1190,- kr", coctails: "Cocktails <br> 1690,- kr"},
        photo: './images/restaurants/fjallkonan.jpg',
      },

      {
        id: 14,
        type: "restaurants",
        bar_name: "Sushi Social",
        address: "Þingholtsstræti 5, 101 Reykjavík",
        happyhours: "17:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 50% off", wine: "Wine <br> 50% off", coctails: "Cocktails <br> 50% off"},
        photo: './images/restaurants/sushi.JPG',
      },

      {
        id: 15,
        type: "restaurants",
        bar_name: "Kol Restaurant",
        address: "Skólavörðustígur 40, 101 Reykjavík",
        happyhours: "12:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 1000,- kr", wine: "Wine <br> 1000,- kr", coctails: "Cocktails <br> 1800,- kr"},
        photo: './images/restaurants/kol.jpg',
      },


      {
        id: 16,
        type: "restaurants",
        bar_name: "Slippbarinn",
        address: "Mýrargata 2, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 600,- kr", wine: "Wine <br> 850,- kr", shots: "Shots <br> 600,- kr"},
        photo: './images/restaurants/slippbarinn.jpg',
      },

      {
        id: 17,
        type: "restaurants",
        bar_name: "Forréttabarinn",
        address: "Nýlendugata 14, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 850,- kr", wine: "Wine <br> 850,- kr"},
        photo: './images/restaurants/for.jpg',
      },

      {
        id: 18,
        type: "restaurants",
        bar_name: "Pünk",
        address: "Hverfisgata 10, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 890", wine: "Wine <br> 990", rose: "Rose <br> 950,- kr", coctails: "Cocktails <br> 1750,- kr"},
        photo: './images/restaurants/punk.jpg',
      },

      {
        id: 19,
        type: "restaurants",
        bar_name: "Ský",
        address: "Ingólfsstræti 1, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 800-850,- kr", wine: "Wine <br> 950,- kr"},
        photo: './images/restaurants/sky.jpg',
      },

      {
        id: 20,
        type: "restaurants",
        bar_name: "Eiríksson Brasserie",
        address: "Laugavegur 77",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "Beer <br> 900,- kr", wine: "Wine <br> 900,- kr"},
        photo: './images/restaurants/eiriksson.jpg',
      },


]

//Array for places with special deals
let offer =[

  {
      id: 1,
      barId: 7,
      day: ["thursday"],
      time: "allday",
      offer: {coctails: "Cocktails <br> 1600,- kr"}
  },

  {
      id: 2,
      barId: 15,
      day: ["wednesday"],
      time: "15:00-19:00",
      offer: {coctails: "Mojito <br> 1000,- kr"}
  },

  {
      id: 3,
      barId: 15,
      day: ["thursday"],
      time: "15:00-19:00",
      offer: {coctails: "Gin'n Tonic <br> 1490,- kr"}
  },

 /*{
    id: 4,
     barId: 0,
      type: "bar",
      bar_name: "Bastard Brew and Food",
      address: "Vegamótastígur 4, 101 Reykajvík",
      day: ["monday"],
      time: "12:00-22:00",
      offer: {beer: "500kr off", beer: "500kr off"}
      //Vantar mynd
  },*/

  {
      id: 5,
      barId: 10,
      day: ["sunday", "monday", "tuesday", "wednesday", "thursday"],
      time: "22:00-24:00",
      offer: "Late night happy hour"
  },

  {
      id: 6,
      barId: 2,
      day: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
      time: "16:00-19:00",
      offer: {coctails: "2f1 Moscow Mule <br> 2f1 Aperol Spritz"}
  },

] 

