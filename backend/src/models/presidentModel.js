const mongoose = require('mongoose');

const presidentSchema = mongoose.Schema({
  names: {type: String, require: true},
  lastName: {type: String, require: true},
  startingPeriod: {type: String, require: true},
  finalPeriod: {type: String, require: true},
  politicalParty: {type: String, require: true},
  description: {type: String, require: true},
})

module.exports = mongoose.model('presidents-v1', presidentSchema)