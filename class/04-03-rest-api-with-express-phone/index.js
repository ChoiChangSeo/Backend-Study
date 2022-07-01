import {
  phoneNumberValidation,
  createToken,
  sendTokenToPhone,
} from "./phone.js";
import express from "express";
const app = express();
const port = 3001;

app.use(express.json());

app.post("/boards", function (req, res) {
  // 1. 데이터를 등록하는 로직=> DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인해보기
  console.log(req.body);
  // 2. 저장결과 알려주기
  res.send("등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myphone = req.body.phone;
  const isValid = phoneNumberValidation(myphone);
  if (isValid) {
    const mytoken = createToken();

    sendTokenToPhone(myphone, mytoken);
    res.send("인증완료");
  }
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
