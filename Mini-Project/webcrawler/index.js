import puppetter from "puppeteer";
import mongoose from "mongoose";
import { Starbucks } from "./models/starbuck.model.js";

mongoose.connect("mongodb://localhost:27017/mini-project");

async function startCrawling() {
  const browser = await puppetter.launch({ headless: false });
  const page = await browser.newPage();
  page.viewport({ width: 1200, hegiht: 720 });
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do");
  await page.waitForTimeout(1000);
  for (let i = 1; i <= 10; i++) {
    await page.waitForTimeout(500);
    const image = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.getAttribute("src")
    );
    const name = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );
    const result = [image, name];
    const starbucksList = new Starbucks({
      name: result.name,
      img: result.image,
    });
    await starbucksList.save();
  }
  await browser.close();
}
startCrawling();
