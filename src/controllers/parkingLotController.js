const ParkingLot = require('../models/parkingLotModel');

const createParkingLot = async (req, res) => {
    try {
        const { name, address, capacity } = req.body;
        if (!name || !address || !capacity) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        const id = await ParkingLot.createParkingLot(name, address, capacity);
        res.status(201).json({ message: 'Parqueadero creado con éxito', id });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el parqueadero', error });
    }
};

module.exports = { createParkingLot };
