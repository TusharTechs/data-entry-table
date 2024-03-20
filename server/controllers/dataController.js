const Data = require('../models/dataModel');

// Add data
exports.addData = async (req, res) => {
    try {
        const { name, email, age, phone } = req.body;
        const newData = new Data({ name, email, age, phone });
        await newData.save();
        res.status(201).json({ message: 'Data added successfully' });
        // Increment count
        newData.count++;
        await newData.save();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Data
exports.updateData = async (req, res) => {
    try {
        const { name, email, age, phone } = req.body;
        const updatedData = await Data.findByIdAndUpdate(req.params.id, { name, email, age, phone }, { new: true });
        res.json({ message: 'Data updated successfully', updatedData });
        // Increment count
        updatedData.count++; 
        await updatedData.save();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get data
exports.getData = async (req, res) => {
    try {
        const allData = await Data.find();
        res.json(allData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get data by ID
exports.getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};