const PubSub = require('../helpers/pub_sub.js');

const PlanetsMenu = function(htmlElement) {
  this.element = htmlElement;
};

PlanetsMenu.prototype.bindEvents = function () {


  PubSub.subscribe('SolarSystem:all-planets-ready', (event) => {
  const allPlanets = event.detail;
  });

    this.element.addEventListener('click', (event) => {
      const selectedPlanetName = event.target.id;
      PubSub.publish('PlanetsMenu:select-planet', selectedPlanetName);
    });

};

// PlanetsMenu.prototype.populateMenu = function (planetData) {
//   planetData.forEach((planet, index)=>{
//
//     const planetAnchor = document.querySelector(planet.name);
//     console.log(planetAnchor);
//
//   });
//
// };


module.exports = PlanetsMenu;
