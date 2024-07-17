const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const countryRoutes = require('./routes/countryRoutes');
const presidentRoutes = require('./routes/presidentRoutes')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.log(err));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/', express.static(path.join(__dirname, '../public/web')));

app.use('/api/country', countryRoutes);
app.use('/api/presidents', presidentRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor activo en puerto ${port}`);
});
