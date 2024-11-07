const express = require("express");
const { getAllQuotes, postQuotes, deleteQuotes, updateQuotes } = require("../controllers/quoteController");
const router = express.Router();

router.get("/", getAllQuotes);
router.post("/create", postQuotes);
router.delete('/delete/:id',deleteQuotes)
router.put('/user/:id', updateQuotes)

module.exports = router;
