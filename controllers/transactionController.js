const Transaction = require('../models/Transaction');

// Add a new transaction
exports.addTransaction = (req, res) => {
    const newTransaction = req.body;
    Transaction.create(newTransaction, (err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to add transaction", error: err.message });
        }
        res.status(201).json({ message: "Transaction added successfully" });
    });
};

// Get all transactions
exports.getTransactions = (req, res) => {
    Transaction.findAll((err, transactions) => {
        if (err) {
            return res.status(500).json({ message: "Failed to retrieve transactions", error: err.message });
        }
        res.json(transactions);
    });
};

// Get a transaction by ID
exports.getTransactionById = (req, res) => {
    const id = req.params.id;
    Transaction.findById(id, (err, transaction) => {
        if (err) {
            return res.status(500).json({ message: "Failed to retrieve transaction", error: err.message });
        }
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(transaction);
    });
};

// Update a transaction by ID
exports.updateTransaction = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    
    Transaction.update(id, updatedData, (err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to update transaction", error: err.message });
        }
        res.json({ message: "Transaction updated successfully" });
    });
};

// Delete a transaction by ID
exports.deleteTransaction = (req, res) => {
    const id = req.params.id;
    
    Transaction.delete(id, (err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to delete transaction", error: err.message });
        }
        res.json({ message: "Transaction deleted successfully" });
    });
};
