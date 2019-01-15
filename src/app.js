const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetsMenu = require('./views/planets_menu.js')
const PlanetDetailsView = require('./views/planet_details.js')

document.addEventListener('DOMContentLoaded', () => {

  const planetsMenuNav = document.querySelector('nav.planets-menu');
  const planetsMenuDisplay = new PlanetsMenu(planetsMenuNav);
  planetsMenuDisplay.bindEvents();

  const planetsDetailsElement = document.querySelector('section.planet-details');
  const planetsDetailsDisplay = new PlanetDetailsView(planetsDetailsElement);
  planetsDetailsDisplay.bindEvents(); 




  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
  planetsDataModel.bindEvents();

});
