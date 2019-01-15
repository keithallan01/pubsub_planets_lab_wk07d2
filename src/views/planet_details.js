const PubSub = require('../helpers/pub_sub.js')

const PlanetDetailsView = function(htmlElement){
  this.element = htmlElement;
}

PlanetDetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
  })
};

PlanetDetailsView.prototype.render = function (planetDetails) {
  this.element.innerHTML = '';

};

module.exports = PlanetDetailsView;

// // A planet details list looks like this:
// name: 'Uranus',
// orbit: 30688.5,
// day: -0.718,
// surfaceArea: 15.91,
// volume: 63.086,
// gravity: 0.886,
// moons: 27,
// image: 'images/uranus.jpg'
