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

  const heading = this.createHeading(planetDetails);
  const infoList = this.createInfoList(planetDetails);

  this.element.appendChild(heading);
  this.element.appendChild(infoList);
};

PlanetDetailsView.prototype.createHeading = function (planetDetails) {
const heading = document.createElement('h2');
heading.textContent = planetDetails.name;
return heading;

};

PlanetDetailsView.prototype.createInfoList = function (planetDetails) {
  const infoList = document.createElement('ul');

  const orbit = document.createElement('li');
  orbit.textContent = `Orbit: ${planetDetails.orbit}`
  infoList.appendChild(orbit);

  const day = document.createElement('li');
      day.textContent = `Day: ${planetDetails.day}`
      infoList.appendChild(day);

  const volume = document.createElement('li');
  volume.textContent = `Volume: ${planetDetails.volume}`
  infoList.appendChild(volume);

  const surfaceArea = document.createElement('li');
  surfaceArea.textContent = `Surface Area: ${planetDetails.surfaceArea}`
  infoList.appendChild(surfaceArea);

  const gravity = document.createElement('li');
  gravity.textContent = `Gravity: ${planetDetails.gravity}`
  infoList.appendChild(gravity);

  const moons = document.createElement('li');
  moons.textContent = `Moons: ${planetDetails.moons}`
  infoList.appendChild(moons);

  return infoList;
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
