const mongoose = require('mongooose');

const DestinationsSchema = new mongoose.destinations({
  name: {type: String, required: true},
  fly: {type: Boolean},
  climate: {type: String},
  image: {type: String}
});

module.exports = mongoose.model('Destinations', destinationsSchema);
