const puppeteer = require("puppeteer");
const { hostname } = require("../constants/constants");

const convertWebsiteToPDF = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(hostname, {
    waitUntil: "networkidle2",
  });
  await page.waitForSelector("img");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdf;
};

module.exports = convertWebsiteToPDF;
