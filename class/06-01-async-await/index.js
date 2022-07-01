import axios from "axios";

// 비동기방식
const fetchPost = () => {
  const result1 = axios.get("https://koreanjson.come/posts/1");
  console.log("=====================");
  console.log("결과야1", result1);
  console.log("=====================");
};
fetchPost();

// 동기방식
const fetchPost2 = async () => {
  const result = await axios.get("https://koreanjson.come/posts/1");
  console.log("=====================");
  console.log("결과야2", result);
  console.log("=====================");
};
fetchPost2();
