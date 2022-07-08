import axios from "axios";

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

export const sendTokenToPhone = async (myphone, mytoken) => {
  const appKey = process.env.SMS_APP_KEY;
  const XSecretKey = process.env.SMS_X_SECRET_KEY;
  const sender = process.env.SMS_SENDER;
  const result = await axios.post(
    `https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`,
    {
      body: `안녕하세요 최창서입니다. 인증번호는 [${mytoken}] 입니다.`,
      sendNo: sender,
      recipientList: [{ internationalRecipientNo: myphone }],
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Secret-Key": XSecretKey,
      },
    }
  );
};
