//Defining the parameters needed to access the db
const MongoClient = require("mongodb").MongoClient;
const url = require("../config/mongooseConnect").MongoURI;
//exporting the insert statements to get data into the db
module.exports = {
  Insert: MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("animalrentalexpress");
    const animalObj = [
      {
        name: "Gauthier",
        animal_common_name: "Civet, common palm",
        scientific_name: "Paradoxurus hermaphroditus",
        weight: "386",
        size: "L",
      },
      {
        name: "Hermy",
        animal_common_name: "Black curlew",
        scientific_name: "Haematopus ater",
        weight: "469",
        size: "XL",
      },
      {
        name: "Trenna",
        animal_common_name: "Wallaroo, common",
        scientific_name: "Macropus robustus",
        weight: "389",
        size: "L",
      },
      {
        name: "Lynda",
        animal_common_name: "Dove, rock",
        scientific_name: "Columba livia",
        weight: "73",
        size: "XS",
      },
      {
        name: "Alvira",
        animal_common_name: "Sparrow, house",
        scientific_name: "Passer domesticus",
        weight: "268",
        size: "M",
      },
      {
        name: "Annabela",
        animal_common_name: "Rhinoceros, square-lipped",
        scientific_name: "Ceratotherium simum",
        weight: "218",
        size: "L",
      },
      {
        name: "Chelsea",
        animal_common_name: "Bustard, denham's",
        scientific_name: "Neotis denhami",
        weight: "259",
        size: "S",
      },
      {
        name: "Stacee",
        animal_common_name: "White-browed sparrow weaver",
        scientific_name: "Plocepasser mahali",
        weight: "194",
        size: "L",
      },
      {
        name: "Sophie",
        animal_common_name: "Weaver, white-browed sparrow",
        scientific_name: "Plocepasser mahali",
        weight: "213",
        size: "XS",
      },
      {
        name: "Forbes",
        animal_common_name: "Reedbuck, bohor",
        scientific_name: "Redunca redunca",
        weight: "175",
        size: "S",
      },
      {
        name: "Daron",
        animal_common_name: "Monkey, rhesus",
        scientific_name: "Macaca mulatta",
        weight: "327",
        size: "XL",
      },
      {
        name: "Rowen",
        animal_common_name: "Common raccoon",
        scientific_name: "Procyon lotor",
        weight: "423",
        size: "M",
      },
      {
        name: "Cathlene",
        animal_common_name: "Cardinal, red-capped",
        scientific_name: "Paroaria gularis",
        weight: "195",
        size: "2XL",
      },
      {
        name: "Leonard",
        animal_common_name: "Eastern grey kangaroo",
        scientific_name: "Macropus giganteus",
        weight: "472",
        size: "L",
      },
      {
        name: "Grove",
        animal_common_name: "Anteater, giant",
        scientific_name: "Myrmecophaga tridactyla",
        weight: "267",
        size: "XL",
      },
      {
        name: "Mada",
        animal_common_name: "Black-tailed deer",
        scientific_name: "Odocoileus hemionus",
        weight: "434",
        size: "L",
      },
      {
        name: "Court",
        animal_common_name: "Bird, red-billed tropic",
        scientific_name: "Phaethon aethereus",
        weight: "98",
        size: "M",
      },
      {
        name: "Cole",
        animal_common_name: "Goldeneye, barrows",
        scientific_name: "Bucephala clangula",
        weight: "263",
        size: "XL",
      },
      {
        name: "Sullivan",
        animal_common_name: "Cockatoo, sulfur-crested",
        scientific_name: "Cacatua galerita",
        weight: "94",
        size: "L",
      },
      {
        name: "Kattie",
        animal_common_name: "Western patch-nosed snake",
        scientific_name: "Salvadora hexalepis",
        weight: "224",
        size: "2XL",
      },
      {
        name: "Shannen",
        animal_common_name: "Ringtail cat",
        scientific_name: "Bassariscus astutus",
        weight: "225",
        size: "3XL",
      },
      {
        name: "Avril",
        animal_common_name: "Fox, pampa gray",
        scientific_name: "Pseudalopex gymnocercus",
        weight: "287",
        size: "L",
      },
      {
        name: "Mattias",
        animal_common_name: "Snake, buttermilk",
        scientific_name: "Coluber constrictor",
        weight: "67",
        size: "XS",
      },
      {
        name: "Earlie",
        animal_common_name: "Argalis",
        scientific_name: "Ovis ammon",
        weight: "265",
        size: "M",
      },
      {
        name: "Timothy",
        animal_common_name: "Stanley crane",
        scientific_name: "Anthropoides paradisea",
        weight: "257",
        size: "2XL",
      },
      {
        name: "Flor",
        animal_common_name: "Agama lizard (unidentified)",
        scientific_name: "Agama sp.",
        weight: "43",
        size: "XL",
      },
      {
        name: "Anneliese",
        animal_common_name: "Indian star tortoise",
        scientific_name: "Geochelone elegans",
        weight: "122",
        size: "3XL",
      },
      {
        name: "Maryrose",
        animal_common_name: "Crow, pied",
        scientific_name: "Corvus albus",
        weight: "354",
        size: "M",
      },
      {
        name: "Jayson",
        animal_common_name: "Heron, boat-billed",
        scientific_name: "Cochlearius cochlearius",
        weight: "94",
        size: "L",
      },
      {
        name: "Carlin",
        animal_common_name: "Stork, black-necked",
        scientific_name: "Ephippiorhynchus mycteria",
        weight: "243",
        size: "XL",
      },
      {
        name: "Olivette",
        animal_common_name: "Capuchin, weeper",
        scientific_name: "Cebus nigrivittatus",
        weight: "131",
        size: "XL",
      },
      {
        name: "Wernher",
        animal_common_name: "Gray langur",
        scientific_name: "Semnopithecus entellus",
        weight: "206",
        size: "2XL",
      },
      {
        name: "Carlos",
        animal_common_name: "Brush-tailed bettong",
        scientific_name: "Bettongia penicillata",
        weight: "62",
        size: "L",
      },
      {
        name: "Frederick",
        animal_common_name: "Western palm tanager (unidentified)",
        scientific_name: "unavailable",
        weight: "377",
        size: "L",
      },
      {
        name: "Melisa",
        animal_common_name: "Royal tern",
        scientific_name: "Thalasseus maximus",
        weight: "71",
        size: "XL",
      },
      {
        name: "Fletcher",
        animal_common_name: "Galah",
        scientific_name: "Eolophus roseicapillus",
        weight: "462",
        size: "XL",
      },
      {
        name: "Daveta",
        animal_common_name: "Small-spotted genet",
        scientific_name: "Genetta genetta",
        weight: "445",
        size: "2XL",
      },
      {
        name: "Danita",
        animal_common_name: "Capuchin, white-fronted",
        scientific_name: "Cebus albifrons",
        weight: "492",
        size: "2XL",
      },
      {
        name: "Quinton",
        animal_common_name: "Scaly-breasted lorikeet",
        scientific_name: "Trichoglossus chlorolepidotus",
        weight: "400",
        size: "M",
      },
      {
        name: "Annissa",
        animal_common_name: "Blue crane",
        scientific_name: "Anthropoides paradisea",
        weight: "151",
        size: "XL",
      },
      {
        name: "Vanny",
        animal_common_name: "Butterfly, tropical buckeye",
        scientific_name: "Junonia genoveua",
        weight: "267",
        size: "L",
      },
      {
        name: "Brigham",
        animal_common_name: "Weaver, white-browed sparrow",
        scientific_name: "Plocepasser mahali",
        weight: "47",
        size: "XL",
      },
      {
        name: "Milicent",
        animal_common_name: "Galapagos penguin",
        scientific_name: "Spheniscus mendiculus",
        weight: "176",
        size: "XS",
      },
      {
        name: "Kristy",
        animal_common_name: "Alligator, american",
        scientific_name: "Alligator mississippiensis",
        weight: "99",
        size: "M",
      },
      {
        name: "Lelia",
        animal_common_name: "Vulture, king",
        scientific_name: "Sarcorhamphus papa",
        weight: "30",
        size: "S",
      },
      {
        name: "Gwynne",
        animal_common_name: "Dik, kirk's dik",
        scientific_name: "Madoqua kirkii",
        weight: "32",
        size: "L",
      },
      {
        name: "Allyn",
        animal_common_name: "Oryx, beisa",
        scientific_name: "Oryx gazella",
        weight: "355",
        size: "XL",
      },
      {
        name: "Kamila",
        animal_common_name: "Cuis",
        scientific_name: "Microcavia australis",
        weight: "119",
        size: "3XL",
      },
      {
        name: "Gaynor",
        animal_common_name: "Southern tamandua",
        scientific_name: "Tamandua tetradactyla",
        weight: "345",
        size: "3XL",
      },
      {
        name: "Wenonah",
        animal_common_name: "Sarus crane",
        scientific_name: "Grus antigone",
        weight: "172",
        size: "XS",
      },
    ];
    dbo.collection("animals").insertMany(animalObj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    const rentalsObj = [
      {
        name: "Gauthier",
        email: "admin@admin.com",
        date: "2014-04-30T14:12:00Z",
        text: "Needed for exotic animal display",
      },
      {
        name: "Hermy",
        email: "admin@admin.com",
        date: "2014-04-25T14:12:00Z",
        text: "Needed for educational demonstration",
      },
      {
        name: "Trenna",
        email: "admin@admin.com",
        date: "2014-04-29T14:12:00Z",
        text: "Needed for educational demonstration",
      },
      {
        name: "Lynda",
        email: "admin@admin.com",
        date: "2014-04-27T14:12:00Z",
        text: "Needed to have a school demonstration",
      },
      {
        name: "Alvira",
        email: "admin@admin.com",
        date: "2014-04-29T14:12:00Z",
        text: "Needed for birthday party",
      },
    ];
    dbo.collection("rentals").insertMany(rentalsObj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
    const usersObj = [
      {
        name: "Admin",
        email: "admin@admin.com",
        password: "123456",
        date: "2014-04-22T14:12:00Z",
      },
    ];
    dbo.collection("users").insertMany(usersObj, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
    });
  }),
};
