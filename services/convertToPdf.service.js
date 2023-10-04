const puppeteer = require("puppeteer");

const convertWebsiteToPDF = async (url) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  // await page.waitForSelector("img");
  const btns = document.getElementById("homePage");
  const select = document.getElementById("select");
  btns && btns.remove();
  select && select.remove();

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdf;
};

module.exports = convertWebsiteToPDF;
