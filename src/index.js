const uniqueRandomArray = require("unique-random-array");
const starWarsNames = require("./starwars-names.json");
const getRandomItem = uniqueRandomArray(starWarsNames);

function random(number) {
  var randomItems = [];
  for (let index = 0; index < number; index++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
}

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};

// big change dd
// feat -1
// feat -2
// feat -3
// feat -4
