import {
  phoneNumberValidation,
  createToken,
  sendTokenToPhone,
} from "./phone.js";

const createTokenAPI = (myphone) => {
  // 1. 핸드폰 번호는 제대로 입력했는가?
  const isValid = phoneNumberValidation(myphone);
  if (isValid) {
    // 2. 토큰 6자리 생성하기
    const mytoken = createToken();

    // 3. 핸드폰에 토큰 보내주기
    sendTokenToPhone(myphone, mytoken);
  }
};
createTokenAPI("01012345678");
