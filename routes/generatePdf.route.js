const express = require("express");
const generatePdfControler = require("../controllers/generatePdf.controller");

const router = express.Router();

router.get("/generate-pdf", generatePdfControler);

module.exports = router;
