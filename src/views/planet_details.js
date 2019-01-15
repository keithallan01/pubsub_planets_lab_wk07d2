const PubSub = require('../helpers/pub_sub.js')

const PlanetDetailsView = function(htmlElement){
  this.element = htmlElement;
}

PlanetDetailsView.prototype.bindEvents = function () {
  PubSub.subscribe('Planets:selected-planet-ready', (event) => {
    const planet = event.detail;
    console.log(event);
  })
};



module.exports = PlanetDetailsView;
