const pool = require('../config/db');

const createParkingLot = async (name, address, capacity) => {
    const [result] = await pool.query(
        'INSERT INTO ParkingLot (name, address, capacity) VALUES (?, ?, ?)',
        [name, address, capacity]
    );
    return result.insertId;
};

module.exports = { createParkingLot };
