const express = require('express')
const routes = express.Router()
const presidentControllers = require('../controllers/presidentControllers')

routes
  .get('/', presidentControllers.getInfo)
  .post('/', presidentControllers.createInfo)

module.exports = routes