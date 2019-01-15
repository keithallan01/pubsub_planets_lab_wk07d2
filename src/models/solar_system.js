const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.publish('SolarSystem:all-planets-ready', this.planets);
  // PubSub.subscribe('PlanetsMenu:planet-selected', (event) => {
  //   const selectedPlanetIndex = event.detail;
  //   console.log(this.planets.selectedPlanetIndex)
  // });
};

module.exports = SolarSystem;
