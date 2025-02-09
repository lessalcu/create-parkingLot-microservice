const pool = require('../config/db');

const createParkingLot = async (name, address, total_space) => {
    const [result] = await pool.query(
        'INSERT INTO ParkingLot (name, address, total_space, capacity) VALUES (?, ?, ?, ?)',
        [name, address, total_space, total_space] // capacity = total_space
    );
    return result.insertId;
};

module.exports = { createParkingLot };
