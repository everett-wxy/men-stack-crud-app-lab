const express = require("express");
const Quote = require("../models/QuotesModel");

const getAllQuotes = async (req, res) => {
    try {
        const allQuotes = await Quote.find({});
        console.log("All Quotes: ", allQuotes);
        res.json(allQuotes);
    } catch (error) {
        console.error("Error fetching quotes: ", error);
        throw error;
    }
};

const postQuotes = async (req, res) => {
    try {
        const newQuotes = await Quote.create({
            author: req.body.author,
            quote: req.body.quote,
            year: req.body.year,
        });
        console.log("New quote create: ", newQuotes);
        res.status(201).json(newQuotes); // Send the created quote back with a 201 status
    } catch (error) {
        console.log("Error creating new quotes: ", error);
        throw error;
    }
};

module.exports = { getAllQuotes, postQuotes };
