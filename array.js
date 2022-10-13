let places =
[
    {
      id: 1,
      type: "bars",
      bar_name: "The Irishman Pub",
      address: "Klapparstígur 27, 101 Reykjavík",
      happyhours: "12:00-19:00",
      days: "Everyday",
      drinks: {beer: "850,- kr", wine: "850,- kr", rose: "950,- kr", sparklingWine: "950,- kr"},
      photo: "",
    },

    {
        id: 2,
        type: "bars",
        bar_name: "American Bar",
        address: "Austurstræti 8, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "900-950,- kr", wine: "1000,- kr", cider: "950,- kr"},
        photo: "",
      },

      {
        id: 3,
        type: "bars",
        bar_name: "Jungle Coctail Bar",
        address: "Austurstræti 9, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "900/1000,- kr", wine: "1000,- kr", coctails: "1600,- kr", sparklingWine: "1600,- kr"},
        photo: "",
      },

      {
        id: 4,
        type: "bars",
        bar_name: "Lebowski Bar",
        address: "Laugavegur 20a, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "800-850,- kr", wine: "800,- kr"},
        photo: "",
      },

      {
        id: 5,
        type: "bars",
        bar_name: "The English Pub",
        address: "Austurstræti 20a, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "850-950,- kr", wine: "950,- kr", coctails: "1700,- kr", shots: "900,- kr"},
        photo: "",
      },      
      {
        id: 6,
        type: "bars",
        bar_name: "Kaldi Bar",
        address: "Laugavegur 20b, 101 Reykjavík",
        happyhours: "16:00-17:00",
        days: "Everyday",
        drinks: {beer: "900", wine: "900", coctails: "1800"},
        photo: "",
      },
      {
        id: 7,
        type: "bars",
        bar_name: "Den Danske Kro",
        address: "Ingólfsstræti 3, 101 Reykjavík",
        happyhours: "16:00-19:00",
        days: "Everyday",
        drinks: {beer: "2for1", wine: "2for1", Shots: "600", sparklingWine: "1000"},
        photo: "",
      },

      {
        id: 8,
        type: "bars",
        bar_name: "Íslenski Barinn",
        address: "Ingólfsstræto 1a, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "700", wine: "700"},
        photo: "",
      },
      {
        id: 9,
        type: "bars",
        bar_name: "Stúdentakjallarinn",
        address: "Háskóli Íslands, Háskólatorg, 107 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "710-850", Cider: "800"},
        photo: "",
      },
      {
        id: 10,
        type: "bars",
        bar_name: "Kokteilbarinn",
        address: "Klapparstígur 28, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "25% off", wine: "25% off", coctails: "25% off"},
        photo: "",
      },
      
      
      {
        id: 11,
        type: "bars",
        bar_name: "Miami",
        address: "Hverfisgata 33, 101 Reykjavík",
        happyhours: "15:00-19:00",
        days: "Everyday",
        drinks: {beer: "750-890,- kr", wine: "990,- kr", coctails: "1490,- kr", rose: "990,- kr", sparklingWine: "990"},
        photo: "",
      },




      {
        id: 12,
        type: "restaurants",
        bar_name: "Sæta Svínið",
        address: "Hafnarstræti 1-3, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Every weekday",
        drinks: {beer: "990, 1090, 1290,- kr", wine: "1090-1190,- kr", shots: "700-950,- kr"},
        photo: "",
      },

      {
        id: 13,
        type: "restaurants",
        bar_name: "Fjallkonan",
        address: "Hafnarstræti 1-3, 101 Reykjavík",
        happyhours: "15:00-17:00",
        days: "Everyday",
        drinks: {beer: "990,- kr", wine: "1190,- kr", coctails: "1690,- kr"},
        photo: "",
      },

      {
        id: 14,
        type: "restaurants",
        bar_name: "Sushi Social",
        address: "Þingholtsstræti 5, 101 Reykjavík",
        happyhours: "17:00-18:00",
        days: "Everyday",
        drinks: {beer: "50% off", wine: "50% off", coctails: "50% off"},
        photo: "",
      },

      {
        id: 15,
        type: "restaurants",
        bar_name: "Kol Restaurant",
        address: "Skólavörðustígur 40, 101 Reykjavík",
        happyhours: "12:00-18:00",
        days: "Everyday",
        drinks: {beer: "1000,- kr", wine: "1000,- kr", coctails: "1800,- kr"},
        photo: "",
      },


      {
        id: 16,
        type: "restaurants",
        bar_name: "Slippbarinn",
        address: "Mýrargata 2, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "600,- kr", wine: "850,- kr", shots: "600,- kr"},
        photo: "",
      },

      {
        id: 17,
        type: "restaurants",
        bar_name: "Forréttabarinn",
        address: "Nýlendugata 14, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "850,- kr", wine: "850,- kr"},
        photo: "",
      },

      {
        id: 18,
        type: "restaurants",
        bar_name: "Pünk",
        address: "Hverfisgata 10, 101 Reykjavík",
        happyhours: "16:00-18:00",
        days: "Everyday",
        drinks: {beer: "890", wine: "990", rose: "950,- kr", coctails: "1750,- kr"},
        photo: "",
      },

      {
        id: 19,
        type: "restaurants",
        bar_name: "Ský",
        address: "Ingólfsstræti 1, 101 Reykjavík",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "800-850,- kr", wine: "950,- kr"},
        photo: "",
      },

      {
        id: 20,
        type: "restaurants",
        bar_name: "Eiríksson Brasserie",
        address: "Laugavegur 77",
        happyhours: "15:00-18:00",
        days: "Everyday",
        drinks: {beer: "900,- kr", wine: "900,- kr"},
        photo: "",
      },


]


let offer =[

  {
      id: 1,
      barId: 7,
      day: ["thursday"],
      time: "allday",
      offer: {coctails: "1600,- kr"}
  },

  {
      id: 2,
      barId: 15,
      day: ["wednesday"],
      time: "15:00-19:00",
      offer: {coctails: "Mojito 1000,- kr"}
  },

  {
      id: 3,
      barId: 15,
      day: ["thursday"],
      time: "15:00-19:00",
      offer: {coctails: "Gin'n Tonic 1490,- kr"}
  },

  {
      id: 4,
      barId: 0,
      type: "bar",
      bar_name: "Bastard Brew and Food",
      address: "Vegamótastígur 4, 101 Reykajvík",
      day: ["monday"],
      time: "12:00-22:00",
      offer: {beer: "500kr off", beer: "500kr off"}
  },

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
      offer: {coctails: "2f1 Moscow Mule, 2f1 Aperol Spritz"}
  },

] 

