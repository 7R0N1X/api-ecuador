const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config();
const countryRoutes = require('./routes/countryRoutes')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.log(err));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.use('/', (req, res) => {
  res.send('Bienvenido a API Ecuador')
})

app.use('/api/country', countryRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Servidor activo en el puerto ${process.env.PORT}`);
})