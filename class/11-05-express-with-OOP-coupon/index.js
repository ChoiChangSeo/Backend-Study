import express from "express";
import { CouponController } from "./mvc/controller/coupon.controller.js";
import { ProductController } from "./mvc/controller/product.controller.js";

const app = express();
const port = 3000;

app.use(express.json());

// 상품 API
const productController = new ProductController();
// 중고상품 구매하기
app.post("/products/buy", productController.buyProduct());
// 중고상품 환불하기
app.post("/products/refund", productController.refundProduct());

// 쿠폰 API
const couponController = new CouponController();
// 쿠폰(상품권) 구매하기
app.post("coupons/buy", couponController.buyCoupon());

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
