const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const parkingLotRoutes = require('./routes/parkingLotRoutes');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: "*", // Permite cualquier origen
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());
app.use(parkingLotRoutes);

module.exports = app;
