const express = require("express");
const generatePdfControler = require("../controllers/generatePdf.controller");

const router = express.Router();

router.get("pdf", generatePdfControler);

module.exports = router;
