const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

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

app.post("/boards", function (req, res) {
  // 1. 데이터를 등록하는 로직=> DB에 접속해서 데이터 저장하기
  // 프론트엔드로부터 데이터 받아오기
  // 콘솔로 찍어서 확인해보기
  console.log(req.body);
  // 2. 저장결과 알려주기
  res.send("등록에 성공하였습니다.");
});

// app.get("/boards/:id", function (req, res) {
//   res.send("Hello World OH");
// });

// app.put("/boards:id", function (req, res) {
//   res.send("Hello World OH");
// });

// app.delete("/boards:id", function (req, res) {
//   res.send("Hello World OH");
// });

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
