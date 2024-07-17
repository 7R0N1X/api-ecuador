const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  capital: { type: String, required: true },
  surface: { type: Number, required: true },
  population: { type: Number, required: true },
  languages: { type: [String], required: true },
  timeZone: { type: String, required: true },
  currency: { type: String, required: true },
  currencyCode: { type: String, required: true },
  currencySymbol: { type: String, required: true },
  isoCode: { type: [String], required: true },
  phonePrefix: { type: String, required: true },
  subRegion: { type: String, required: true },
  region: { type: String, required: true },
  borders: { type: [String], required: true },
  flag: { type: String, required: true },
  shield: { type: String, required: true },
});

module.exports = mongoose.model('country-v1', countrySchema);