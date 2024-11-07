const mongoose = require("mongoose");

const QuoteModels = new mongoose.Schema({
    author: { type: String, require: false },
    quote: { type: String, require: true },
    year: { type: Number, require: false },
});

module.exports = mongoose.model("Quote", QuoteModels);
