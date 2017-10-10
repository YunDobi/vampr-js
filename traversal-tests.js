const chai = require('chai');
const expect = chai.expect;

const Vampire = require('./vampire.js');

describe("vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("search for vampire with name", () => {

    let offspring1;
    let offspring2;
    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
    });
    
    it("should return the vampire with that name", () => {
      expect(rootVampire.vampireWithName("")).to.equal(null);
      expect(rootVampire.vampireWithName(rootVampire.name).name).to.equal(rootVampire.name);
      expect(rootVampire.vampireWithName(offspring1.name).name).to.equal(offspring1.name);
      expect(rootVampire.vampireWithName(offspring2.name).name).to.equal(offspring2.name);
    });

  });

  describe("total descendants", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should give the total descendents", () => {
      expect(rootVampire.totalDescendents).to.equal(8);
      expect(offspring1.totalDescendents).to.equal(0);
      expect(offspring2.totalDescendents).to.equal(1);
      expect(offspring3.totalDescendents).to.equal(4);
    });
  });

});