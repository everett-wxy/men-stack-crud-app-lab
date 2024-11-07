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
        // const newQuotes = await Quote.create({
        //     author: req.body.author,
        //     quote: req.body.quote,
        //     year: req.body.year,
        // });
        const newQuotes = await Quote.create(req.body);
        console.log("New quote create: ", newQuotes);
        res.status(201).json(newQuotes); // Send the created quote back with a 201 status
    } catch (error) {
        console.error("Error creating new quotes: ", error);
        throw error;
    }
};

const deleteQuotes = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteQuote = await Quote.findByIdAndDelete(id);
        if (!deleteQuote) {
            return res.status(400).json({ message: "Quote not found" });
        }
        res.status(200).json({ message: "Quote deleted successfully" });
    } catch (error) {
        console.error("Error creating new quotes: ", error);
        throw error;
    }
};

const updateQuotes = async (req, res) => {
    try {
        const { id } = req.params;
        const updateQuote = await Quote.findByIdAndUpdate(id, req.body);
        if (!updateQuote) {
            return res.status(400).json({ message: "Quote not found" });
        }
        const updatedQuote = await Quote.findById(id);
        res.status(200).json(updatedQuote);
    } catch (error) {
        console.error("Error update quotes ", error);
    }
};

module.exports = { getAllQuotes, postQuotes, deleteQuotes, updateQuotes };
