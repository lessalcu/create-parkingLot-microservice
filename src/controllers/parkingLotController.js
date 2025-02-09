const ParkingLot = require('../models/parkingLotModel');

const createParkingLot = async (req, res) => {
    try {
        const { name, address, total_space } = req.body;
        if (!name || !address || !total_space) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        
        const id = await ParkingLot.createParkingLot(name, address, total_space);
        res.status(201).json({ message: 'Parking lot created successfully', id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating the parking lot', error });
    }
};

module.exports = { createParkingLot };
