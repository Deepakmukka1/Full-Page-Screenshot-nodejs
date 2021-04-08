const puppeteer = require("puppeteer");
(async () => {
  const url = process.argv[2];
  if (url === undefined) {
    console.log("Enter a url");
    return;
  }
  const browser = await puppeteer.launch({ slowMo: 200 });
  const page = await browser.newPage();
  try {
    await page.goto(url);
    await page.screenshot({ path: "final2.png", fullPage: true });
  } catch (error) {
    console.log(error.message);
  }

  await browser.close();
})();
