import express from "express";
import { CouponController } from "./mvc/controller/coupon.controller.js";
import { ProductController } from "./mvc/controller/product.controller.js";
import { CashService } from "./mvc/controller/services/cash.service.js";
import { PointService } from "./mvc/controller/services/point.service.js";
import { ProductService } from "./mvc/controller/services/product.service.js";

const app = express();
const port = 3000;

app.use(express.json());

const productService = new ProductService();
const cashService = new CashService(); // new 한번으로 모든 곳에서 재사용 가능(싱글톤패턴)
const pointService = new PointService();
// 기획이 바뀌어서 현금 결제대신 point로 바뀌었을 때 의존성 주입만 바꿔주면 별다른 코드의 수정없이 재사용 가능
// nest.js에서는 의존성주입을 대신 해줌(Inversion Of Controll)

// 상품 API
const productController = new ProductController(productService, cashService);
// 중고상품 구매하기
app.post("/products/buy", productController.buyProduct);
// 중고상품 환불하기
app.post("/products/refund", productController.refundProduct);

// 쿠폰 API
const couponController = new CouponController(pointService);
// 쿠폰(상품권) 구매하기
app.post("coupons/buy", couponController.buyCoupon);

app.listen(port, () => {
  console.log(`example app listening on port ${port}`);
});
