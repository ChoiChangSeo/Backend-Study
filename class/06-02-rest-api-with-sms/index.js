import {
  phoneNumberValidation,
  createToken,
  sendTokenToPhone,
} from "./phone.js";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
// example/api-docs/ swaggerUi.serve ui 제공, 상세데이터는 swaggerDocument에 넣어야함(swagger.json 파일 만들어야함)

app.get("/boards", function (req, res) {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목",
      contents: "내용",
    },
    { number: 2, writer: "영희", title: "영희제목이야", contents: "영희내용" },
    {
      number: 3,
      writer: "고등어",
      title: "고등어제목",
      contents: "고등어내용",
    },
  ];
  // 2. 꺼내온 결과 응답 주기
  res.send(result);
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
