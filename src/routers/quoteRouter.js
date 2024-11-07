const express = require("express");
const { getAllQuotes, postQuotes, deleteQuotes, updateQuotes, getQuote } = require("../controllers/quoteController");
const router = express.Router();

router.get("/quotes", getAllQuotes);
router.post("/quotes", postQuotes);
router.get("/quotes/:id", getQuote);
router.delete('/quotes/:id',deleteQuotes)
router.put('/quotes/:id', updateQuotes)

module.exports = router;
