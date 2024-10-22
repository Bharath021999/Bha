require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const summaryRoutes = require('./routes/summaryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use('/transactions', transactionRoutes);
app.use('/api/transactions', transactionRoutes); // Correctly mount the transaction routes

app.use('/api/categories', summaryRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
