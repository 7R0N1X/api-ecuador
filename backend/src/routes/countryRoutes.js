const express = require('express')
const routes = express.Router()
const countryControllers = require('../controllers/countryControllers')

routes
  .get('/', countryControllers.getInfo)
  .post('/', countryControllers.createInfo)

module.exports = routes