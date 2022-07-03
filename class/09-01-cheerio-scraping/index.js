import axios from "axios";
import cheerio from "cheerio";

async function createBoardAPI(mydata) {
  //  URL 뽑아오기
  const targetUrl = mydata.contents
    .split(" ")
    .filter((el) => el.startsWith("http"))[0];

  // 스크랩핑하기
  const result = await axios.get(targetUrl);

  //   OG 골라내기
  const $ = cheerio.load(result.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}
const frontendData = {
  title: "안녕하세요",
  contents:
    "여기 정말 좋아요 한번 꼭 놀러오세요!! 여기가 어디냐면 https://daum.net 이에요",
};
createBoardAPI(frontendData);
