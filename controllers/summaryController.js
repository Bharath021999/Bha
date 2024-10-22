const db = require('../config/db');
const Category = require('../models/category');

exports.getSummary = (req, res) => {
    // Calculate total income, expenses, and balance here
    res.json({ totalIncome: 1000, totalExpenses: 500, balance: 500 }); // Example
};

// This function will be added to handle adding a new category
exports.addCategory = (req, res) => {
    const { name, type } = req.body;

    const newCategory = { name, type };

    Category.create(newCategory, (err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to add category", error: err.message });
        }
        res.status(201).json({ message: "Category added successfully" });
    });
};
