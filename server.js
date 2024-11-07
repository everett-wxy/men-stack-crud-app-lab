const express = require("express");
const connectDB = require("./src/config/db");
const PORT = 3000;
const app = express();
require("dotenv").config();
connectDB();
const quoteRouter = require('./src/routers/quoteRouter');

app.use('/', quoteRouter);

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
