const { faker } = require("@faker-js/faker");
const axios = require("axios").default;

const SF_CHARACTERS = [
  "Adon",
  "Birdie",
  "Eagle",
  "Geki",
  "Gen",
  "Joe",
  "Ken",
  "Lee",
  "Mike",
  "Retsu",
  "Ryu",
  "Sagat",
  "Akuma (Gouki)",
  "Balrog",
  "Blanka",
  "Cammy",
  "Chun-Li",
  "Dee Jay",
  "Dhalsim",
  "E. Honda",
  "Fei Long",
  "Guile",
  "M. Bison",
  "T. Hawk",
  "Vega",
  "Violent Ken",
  "Zangief",
  "Cody",
  "Dan",
  "Decapre",
  "Evil Ryu",
  "Gouken",
  "Guy",
  "Ingrid",
  "Juli and Juni",
  "Karin",
  "Maki",
  "Nash",
  "R. Mika",
  "Rolento",
  "Rose",
  "Sakura",
  "Shin Akuma",
  "Sodom",
  "Zeku",
  "Alex",
  "Dudley",
  "Elena",
  "Gill",
  "Hugo",
  "Ibuki",
  "Kolin",
  "Makoto",
  "Necro",
  "Oro",
  "Poison",
  "Q",
  "Remy",
  "Sean",
  "Twelve",
  "Urien",
  "Yun",
  "Yang",
  "Abel",
  "C. Viper",
  "Ed",
  "El Fuerte",
  "Hakan",
  "Juri",
  "Oni",
  "Rufus",
  "Seth",
  "Abigail",
  "Akira",
  "Eleven",
  "F.A.N.G.",
  "Falke",
  "G",
  "Kage",
  "Laura",
  "Lucia",
  "Menat",
  "Necalli",
  "Rashid",
  "Ace",
  "Allen",
  "Bison II and Shin-Bison",
  "Blair",
  "C. Jack",
  "Cycloid-β and Cycloid-γ",
  "D. Dark",
  "Darun",
  "Garuda",
  "Hayate",
  "Hokuto and Bloody Hokuto",
  "Kairi",
  "Nanase",
  "Pullum",
  "Shadowgeist",
  "Sharon",
  "Skullomania",
  "V. Rosso",
  "Blade",
  "Arkane, Khyber and F7",
  "Sawada",
  "Cyborg",
  "Shin",
];

export const getRandomSFCharacter = () => {
  const randomIndex = Math.floor(Math.random() * SF_CHARACTERS.length);
  return SF_CHARACTERS[randomIndex];
};

export const textGenerator = () => {
  const listOfQueries = [
    `Tell me my cause of death involving a ${faker.animal.insect()} and a ${faker.random.word()}`,
    `Tell me a joke involving a ${faker.hacker.noun()}`,
  ];

  return listOfQueries;
};

export const getRandomChuckNorrisJoke = async () => {
  try {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log("response", res);
    return res.data.value;
  } catch (e) {
    return "oops there was an error getting your chuck norris joke";
  }
};
