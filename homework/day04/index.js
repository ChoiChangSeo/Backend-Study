import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
const port = 3000;

app.get("/users", (req, res) => {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "철수",
      phone: "01012345678",
      personal: "220110-2222222",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});

app.get("/starbucks", (req, res) => {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "라떼", kcal: 15 },
    { name: "초코초", kcal: 25 },
    { name: "민초단", kcal: 35 },
    { name: "히든커피", kcal: 45 },
  ];
  res.send(result);
});
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
