export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$HnapEWWKQQ0.0Ft33nXxtuJ0fsmd9ywYswEzT4C.6Ul5y6cOU.UEa",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
    },
  },

  traillists: {
    _model: "Traillist",
    lenister: {
      name: "Leinster Traillist",
      userid: "->users.bart",
    },
    munster: {
      name: "Munster Traillist",
      userid: "->users.bart",
    },
    ulster: {
      name: "Ulster Traillist",
      userid: "->users.bart",
    },
    connacht: {
      name: "Connacht Traillist",
      userid: "->users.bart",
    },
  },


  trails: {
    _model: "Trail",
    trail_1: {
      name: "Brandon Hill Summit Walk",
      latitude: 10,
      longitude: 20,
      description: "Hard/Strenuous. Good level of fitness. Forest track and hillside paths and uneven foot",
      traillistid: "->traillists.lenister",
    },
    trail_2: {
      name: "The Barrow Way",
      latitude: 52.703418,
      longitude: -6.9258294,
      description: "Vistors can enjoy a excellent flat walking path. The path offers much of architechual interest to the viistor. T",
      traillistid: "->traillists.lenister",
    },
    trail_3: {
      name: "Dublin Mountains Way",
      latitude: 53.2220016,
      longitude: -6.1558633,
      description:
          "The entire Dublin Mountain Way is a moderate to strenuous 1 to 3 day (40 km) long distance walking trail close to Dublin City in the Dublin Mountains. This scenic and varied walk is becoming a popular National Waymarked Trail in Ireland and suits walkers from beginners to experienced",
      traillistid: "->traillists.lenister",
    },
    trail_4: {
      name: "Poulanass Waterfall",
      latitude: 53.00232,
      longitude: -6.345179,
      description: "Intermediate Hiking Tour. Good Fitness required. Mostly accessible paths.",
      traillistid: "->traillists.lenister",
    },

    trail_5: {
      name: "Glendalough and the Spinc cliffs",
      latitude: 53.022369,
      longitude: -6.63856,
      description: "Level: Hard, Distance: 8.5 miles, Starts/ends: Glendalough Visitor Centre",
      traillistid: "->traillists.lenister",
    },
    trail_6: {
      name: "Carrauntoohil Hike",
      latitude: 51.999456,
      longitude: -9.742691,
      description: "Level: Hard. Level: Hard. Starts/ends: Cronins Yard",
      traillistid: "->traillists.munster",
    },
    trail_7: {
      name: "Clare Coastal Walk Project",
      latitude: 53.41291,
      longitude: -8.24389,
      description: "Intermediate Hiking Tour. Good Fitness required. Easily accessible paths. Suitable for all skill levels",
      traillistid: "->traillists.munster",
    },
    trail_8: {
      name: "Burren Way",
      latitude: 52.721011,
      longitude: -9.121311,
      description: "Intermediate Hiking Tour. Good Fitness required. Easily accessible paths. Suitable for all skill levels",
      traillistid: "->traillists.munster",
    },
    trail_9: {
      name: "Ballyhoura Walking Trails",
      latitude: 52.275278,
      longitude: -8.647778,
      description: "Intermediate Hiking Tour. Good Fitness required. Easily accessible paths. Suitable for all skill levels",
      traillistid: "->traillists.munster",
    },
    trail_10: {
      name: "Slieve Gullion",
      latitude: 54.12183,
      longitude: -6.433384,
      description: "Level: Moderate. Distance: 8 miles. Start/ends: Slieve Gullion Forest Park car park",
      traillistid: "->traillists.ulster",
    },
    trail_11: {
      name: "Cuilcagh Legnabrocky Trail (???Stairway to Heaven???)",
      latitude: 55.24564,
      longitude: -7.8117004,
      description: "Level: Easy-moderate. Distance: 4.6 miles. Starts/ends: Cuilcagh Mountain Park car park",
      traillistid: "->traillists.ulster",
    },
    trail_12: {
      name: "Divis and the Black Mountain ridge trail,",
      latitude: 54.6112828,
      longitude: -6.0184702,
      description: "Divis and the Black Mountain ridge trail. Distance: 4.2 miles. Starts/ends: National Trust car park at Divis and the Black Mountain",
      traillistid: "->traillists.ulster",
    },
    trail_13: {
      name: "Glenariff Forest Park Scenic Trail",
      latitude: 55.013765,
      longitude: -6.108022,
      description: "Level: Moderate. Distance: 6 miles. Starts/ends: Visitors centre at Glenariff Forest Park",
      traillistid: "->traillists.ulster",
    },
    trail_14: {
      name: "Diamond Hill",
      latitude: 53.548204,
      longitude: -9.914732,
      description: "Diamond Hill, Co Galway, Distance: 4.5 miles, Starts/ends: Connemara National Park Visitor Centre",
      traillistid: "->traillists.connacht",
    },
    trail_15: {
      name: "Achill Island",
      latitude: 53.952142,
      longitude: -10.009394,
      description: "Level: Moderate. Distance: 2.8 miles. Starts/ends: The base of Slievemore mountain",
      traillistid: "->traillists.connacht",
    },
  },
  reviews: {
    _model: "Review",
    one: {
      trail: "->trails.trail_1",
      rating: 4,
      lat: "52.160858",
      lng: "-7.152420",
      reviewer: "->users.bart",
      review: "The views from the top are so beautiful",
    },
    two: {
      trail: "->trails.trail_2",
      rating: 3,
      lat: "52.160858",
      lng: "-7.152420",
      reviewer: "->users.bart",
      review: "easy hike, would recommend for all the family",
    },
    three: {
      trail: "->trails.trail_3",
      rating: 2,
      lat: "52.160858",
      lng: "-7.152420",
      reviewer: "->users.bart",
      review: "From a hiking perspective, it could be better",
    },
  },
  events: {
    _model: "Event",
    event_1: {
      name: "Guided Hike of Carrautoohil",
      details: "Croinins Yard, Kilarney",
      price: 43.55,
      date: "24 Jul 2022"

    },
   event_2: {
     name: "Bantry Walking Festival 2022",
     details: "Croinins Yard, Kilarney",
     price: 20.00,
     date: "24 Jul 2022",
    },
    event_3:{
      name: "Wicklow Walk for Ages 45+",
      details: "Roundwood Inn. Roundwood",
      price: 22.91,
      date: "18 Jul 2022",
    },
  },
}


