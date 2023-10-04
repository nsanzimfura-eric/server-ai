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
  await page.evaluate(() => {
    const btns = document.getElementById("homePage");
    const select = document.getElementById("select");
    btns && btns.remove();
    select && select.remove();
  });

  // You can inject JavaScript code to retrieve data from local storage
  await page.evaluate(() => {
    const data = JSON.parse(localStorage.getItem("lineData"));
    return data;
  });

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdf;
};

module.exports = convertWebsiteToPDF;
