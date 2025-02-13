const express = require('express');
const cors = require('cors');
const reservationRoutes = require('./routes/reservationRoutes'); // 📌 Asegúrate de que este archivo exista y maneje las rutas de reservas
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 🟢 Habilitar CORS para permitir solicitudes desde el frontend
app.use(cors({
    origin: "http://localhost:3000", // Permite solo solicitudes desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(reservationRoutes); // 📌 Asegúrate de que este archivo contiene las rutas

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Reservation Creation microservice running on port ${PORT}`);
});
