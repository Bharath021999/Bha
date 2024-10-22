const db = require('../config/db');

const Category = {
    findAll: (callback) => {
        const query = `SELECT * FROM categories`;
        db.all(query, [], callback);
    },
    create: (category, callback) => {
        const query = `INSERT INTO categories (name, type) VALUES (?, ?)`;
        db.run(query, [category.name, category.type], callback);
    }
};

module.exports = Category;
