export const phoneNumberValidation = (myphone) => {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("핸드폰 번호를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
};

export const createToken = () => {
  const count = 6;
  if (count === undefined) {
    return console.log("갯수를 제대로 입력해주세요");
  } else if (count <= 0) {
    return console.log("error 갯수가 너무 적습니다.");
  } else if (count > 10) {
    return console.log("error 갯수가 너무 많습니다.");
  }
  return String(Math.floor(Math.random() * 10 ** count)).padStart(count, "0");
};

export const sendTokenToPhone = (myphone, mytoken) => {
  console.log(myphone + "번호로 인증번호" + mytoken + "를 전송합니다.");
};
