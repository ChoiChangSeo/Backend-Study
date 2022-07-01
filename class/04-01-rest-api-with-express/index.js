// yarn init 후에 express 프레임워크 설치

const express = require("express");
const app = express();
// 포트는 0-65535 사이에 숫자로 열 수 있는데 네트워크 프로그램 포트는 겹치면 안됨
const port = 3000;

// postman에서 api 요청을하면 정상적으로 출력이 됨
app.get("/", function (req, res) {
  res.send("Hello World OH");
});

// 서버를 열어두지 않으면 요청받을 수 없기 때문에 24시간 서버를 켜두기 위해 배포를 함
app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
