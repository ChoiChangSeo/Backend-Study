import axios from "axios";
import cheerio from "cheerio";

export async function createBoardAPI(prefer) {
  //  URL 뽑아오기
  const targetUrl = prefer;

  // 스크랩핑하기
  const result = await axios.get(targetUrl);
  const object = {};
  //   OG 골라내기
  const $ = cheerio.load(result.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      object[key] = value;
    }
  });
  const obj = { ...object };
  return obj;
}
