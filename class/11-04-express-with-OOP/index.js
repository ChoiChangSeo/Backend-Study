import express from "express";
import { CashService } from "./cash.js";
import { ProductService } from "./product.js";
const app = express();
const port = 3000;

app.use(express.json());

// 중고상품 구매하기
app.post("/products/buy", (req, res) => {
  // 1. 가진 돈 검증하는 코드(10줄 => 2줄)
  const cashService = new CashService();
  const hasMoney = cashService.checkValue(); // true 또는 false 리턴

  // 2. 판매여부 검증하는 코드 (10줄 정도 => 2줄)
  const checkSoldOut = new ProductService();
  const isSoldOut = checkSoldOut.checkSoldOut(); // true 또는 false 리턴

  // 3. 상품 구매하는 코드
  if (hasMoney && !isSoldOut) {
    res.send("상품 구매 완료");
  }
});

// 중고상품 환불하기
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (10줄 정도)
  const checkSoldOut = new ProductService();
  const isSoldOut = checkSoldOut.checkSoldOut(); // true 또는 false 리턴

  // 2. 상품 환불하는 코드
  if (isSoldOut) {
    res.send("상품 환불 완료");
  }
});

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
