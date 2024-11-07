const express = require("express");
const { getAllQuotes, postQuotes } = require("../controllers/quoteController");
const router = express.Router();

router.get("/", getAllQuotes);
router.post("/create", postQuotes);

module.exports = router;
