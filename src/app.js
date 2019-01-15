const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetsMenu = require('./views/planets_menu.js')

document.addEventListener('DOMContentLoaded', () => {
  
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

  const planetsMenuNav = document.querySelector('planets-menu');
  const planetsMenuDisplay = new PlanetsMenu(planetsMenuNav);
  planetsMenuDisplay.bindEvents();

});
