// import { CashService } from "./services/cash.service.js";
// import { ProductService } from "./services/product.service.js";

export class ProductController {
  constructor(productService, moneyService) {
    this.moneyService = moneyService;
    this.productService = productService;
  }
  buyProduct = (req, res) => {
    // 1. 가진 돈 검증하는 코드(10줄 => 2줄)
    // const cashService = new CashService();
    const hasMoney = this.moneyService.checkValue(); // true 또는 false 리턴

    // 2. 판매여부 검증하는 코드 (10줄 정도 => 2줄)
    // const checkSoldOut = new ProductService();
    const isSoldOut = this.productService.checkSoldOut(); // true 또는 false 리턴

    // 3. 상품 구매하는 코드
    if (hasMoney && !isSoldOut) {
      res.send("상품 구매 완료");
    }
  };

  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드 (10줄 정도)
    // const checkSoldOut = new ProductService();
    const isSoldOut = this.productService.checkSoldOut(); // true 또는 false 리턴

    // 2. 상품 환불하는 코드
    if (isSoldOut) {
      res.send("상품 환불 완료");
    }
  };
}
