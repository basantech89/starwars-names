var uniqueRandomArray = require("unique-random-array");
var starWarsNames = require("./starwars-names.json");
var getRandomItem = uniqueRandomArray(starWarsNames);

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
