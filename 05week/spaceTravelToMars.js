let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};


//1. create class CrewMember and get their name, job, specialSkill, ship will be open
class CrewMember {
  constructor(name, job, specialSkill, ship) {
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = null;
  }
  //5. enterShip method for moving crewmembers to ships
  enterShip(ship){
    this.ship = ship
    ship.crewLength.push(this)
    ship.missionStatement()
  }
}

//3. create class Ship with name, type, ability, crew length(empty array)
class Ship {
  constructor(name, type, ability, crewLength) {
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crewLength = [];
  }
  //8. Ship contains a method missionStatement(), if crewLength is 0 can't perform mission, reports this.ability when a CrewMember enters a ship
  missionStatement(Ship) {
    if (this.crewLength.length === 0) {
      console.log("Can't perform a mission yet.")
    }else{
      console.log(this.ability)
    }
  }
};
//2
const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
//4
const mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
//6
const hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
//7
const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

//9
mav.missionStatement();
hermes.missionStatement();

//10
crewMember1.enterShip(mav);
crewMember2.enterShip(hermes);




//tests
if (typeof describe === 'function') {
  //1. CrewMember class
  describe('CrewMember', function () {
    it('should have a name, a job, a specialSkill and ship upon instantiation', function () {
      //2. New instance of CrewMember Rick Martinez
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function () {
      //3. Ship class
      //4. new instance of Ship called mav
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      //5. enterShip method under CrewMember class
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Ship', function () {
    it('should have a name, a type, an ability and an empty crew upon instantiation', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function () {
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      //6. new instance of Ship called hermes
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      //7. new instance of CrewMember called Commander Lewis
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      //8. missionStatement method under Ship
      //9. test empty ships
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");
      //10. test crewmembers entering ships
      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
