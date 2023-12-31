const convertWebsiteToPDF = require("../services/convertToPdf.service");

const generatePdfControler = async (req, res) => {
  const { url } = req.query;
  try {
    const pdf = await convertWebsiteToPDF(url);
    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=market_insights.pdf`,
    });
    res.send(pdf);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating PDF.");
  }
};

module.exports = generatePdfControler;
