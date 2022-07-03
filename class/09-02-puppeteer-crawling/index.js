import puppetter from "puppeteer";

async function startCrawling() {
  const browser = await puppetter.launch({ headless: false });
  const page = await browser.newPage();
  await page.viewport({ width: 1280, height: 720 });
  await page.goto("https://www.goodchoice.kr/product/search/2");
  await page.waitForTimeout(1000);

  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  );
  await page.waitForTimeout(1000);
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );
  await page.waitForTimeout(1000);
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  await page.waitForTimeout(1000);
  console.log(stage, location.trim(), price);

  await browser.close();
}
startCrawling();
