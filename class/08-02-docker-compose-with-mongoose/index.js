import {
  phoneNumberValidation,
  createToken,
  sendTokenToPhone,
} from "./phone.js";
import {
  checkValidationEmail,
  sendWelcomeToEmail,
  getWelcomeTemplate,
} from "./welcome.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Board } from "./models/board.model.js";

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.get("/boards", async (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // Board.find({writer:"철수"})
  const result = await Board.find({ writer: "창서" });
  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", async (req, res) => {
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장
  const board = new Board({
    ...req.body,
  });
  await board.save();
  // 2. 꺼내온 결과 응답 주기
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

app.post("/users", (req, res) => {
  const myuser = req.body.user;
  const isValid = checkValidationEmail(myuser.email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const result = getWelcomeTemplate(myuser);
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeToEmail(myuser.email, result);
  }
});

// 몽고DB 접속!! mongoose.connect("mongodb://아이피주소:포트번호/fisrtPJ");
mongoose.connect("mongodb://my-database:27017/fisrtPJ");

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
