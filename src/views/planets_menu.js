const PubSub = require('../helpers/pub_sub.js');

const PlanetsMenu = function(htmlElement) {
  this.element = htmlElement;
};

PlanetsMenu.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {



  })
};

module.exports = PlanetsMenu;
