const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce ((sum, journey) => {
    return sum + journey.distance;
  }, 0 );
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTansport = this.journeys.map(journey => journey.transport);
  return uniqueTransportSet = Array.from(new Set(uniqueTansport));

};



module.exports = Traveller;
