const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const parkingLotRoutes = require('./routes/parkingLotRoutes');
require('dotenv').config();

const app = express();

// Permitir CORS para todas las solicitudes
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); 
app.use(bodyParser.json());
app.use(parkingLotRoutes);

module.exports = app;
