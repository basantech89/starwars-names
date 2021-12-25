var expect = require("chai").expect;
var starWars = require("./index");

describe("starwars-name", function () {
  describe("all", function () {
    it("should be an array of strings", function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every((item) => typeof item === "string");
      }
    });
  });
});

// A change aaggg
