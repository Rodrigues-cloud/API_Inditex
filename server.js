const express = require('express');
const peticioneRoutes = require('./src/peticiones/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/peticiones', peticioneRoutes);

app.listen(port, () => console.log(`Aplicación escuchando en la puerta ${port}`));