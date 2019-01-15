const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetsMenu = require('./views/planets_menu.js')

document.addEventListener('DOMContentLoaded', () => {

  const planetsMenuNav = document.querySelector('nav.planets-menu');
  const planetsMenuDisplay = new PlanetsMenu(planetsMenuNav);
  planetsMenuDisplay.bindEvents();






  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

});
