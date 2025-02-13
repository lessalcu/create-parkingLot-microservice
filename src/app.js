const express = require('express');
const cors = require('cors');
const parkingRoutes = require('./routes/parkingLotRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 🔹 Permitir cualquier origen
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(parkingRoutes);

const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log('Parking Lot Registration microservice running on port ${ PORT }');
});