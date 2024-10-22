// const db = require('../config/db');

// const Transaction = {
//     create: (transaction, callback) => {
//         const query = `INSERT INTO transactions (type, category_id, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
//         db.run(query, [transaction.type, transaction.category_id, transaction.amount, transaction.date, transaction.description], callback);
//     },
//     findById: (id, callback) => {
//         const query = `SELECT * FROM transactions WHERE id = ?`;
//         db.get(query, [id], callback);
//     },
//     findAll: (callback) => {
//         const query = `SELECT * FROM transactions`;
//         db.all(query, [], callback);
//     },
//     updateById: (id, transaction, callback) => {
//         const query = `UPDATE transactions SET type = ?, category_id = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
//         db.run(query, [transaction.type, transaction.category_id, transaction.amount, transaction.date, transaction.description, id], callback);
//     },
//     deleteById: (id, callback) => {
//         const query = `DELETE FROM transactions WHERE id = ?`;
//         db.run(query, [id], callback);
//     }
// };

// module.exports = Transaction;
const db = require('../config/db');

// Transaction model
const Transaction = {
    create: (transaction, callback) => {
        const query = 'INSERT INTO transactions (type, category_id, amount, date, description) VALUES (?, ?, ?, ?, ?)';
        db.run(query, [transaction.type, transaction.category_id, transaction.amount, transaction.date, transaction.description], callback);
    },
    findAll: (callback) => {
        const query = 'SELECT * FROM transactions';
        db.all(query, callback);
    },
    findById: (id, callback) => {
        const query = 'SELECT * FROM transactions WHERE id = ?';
        db.get(query, [id], callback);
    },
    update: (id, updatedData, callback) => {
        const query = 'UPDATE transactions SET type = ?, category_id = ?, amount = ?, date = ?, description = ? WHERE id = ?';
        db.run(query, [updatedData.type, updatedData.category_id, updatedData.amount, updatedData.date, updatedData.description, id], callback);
    },
    delete: (id, callback) => {
        const query = 'DELETE FROM transactions WHERE id = ?';
        db.run(query, [id], callback);
    }
};

module.exports = Transaction;
