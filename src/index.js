const express = require('express')
const mongoose = require('mongoose')
const app = express()
const countryRoutes = require('./routes/countryRoutes')

mongoose.connect('mongodb://localhost:27017/api-ecuador')
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.log(err));

app.use('/api/country', countryRoutes)

app.listen(3000, () => {
  console.log(`Servidor activo en el puerto 3000`);
})