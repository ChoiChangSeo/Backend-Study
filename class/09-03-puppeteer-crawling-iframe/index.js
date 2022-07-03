import puppetter from "puppeteer";

async function startCrawling() {
  const browser = await puppetter.launch({ headless: false });
  const page = await browser.newPage();
  page.viewport({ width: 1280, height: 720 });
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930");
  await page.waitForTimeout(1000);
  const framePage = await page
    .frames()
    .find((el) => el.url().includes("/item/sise_day.naver?code=005930"));

  for (let i = 3; i <= 7; i++) {
    await page.waitForTimeout(500);
    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    );

    const date = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1)`,
      (el) => el.textContent
    );
    console.log(price, date);
  }

  await browser.close();
}
startCrawling();
