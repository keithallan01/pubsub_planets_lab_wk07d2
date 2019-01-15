const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
    PubSub.publish('SolarSystem:all-planets-ready', this.planets);
    PubSub.subscribe('PlanetsMenu:select-planet', (event) => {
      const selectedPlanetName = event.detail;
      this.publishPlanetDetails(selectedPlanetName);
    });
};

SolarSystem.prototype.publishPlanetDetails = function (planetName) {
  const selectedPlanetInfo = this.planets.forEach((planet) => {
      if (planet.name === planetName) {
       return planet
      }
  });
  PubSub.publish('Planets:selected-planet-ready', selectedPlanetInfo);
};

module.exports = SolarSystem;
