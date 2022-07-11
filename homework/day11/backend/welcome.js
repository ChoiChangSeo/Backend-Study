import { getToday } from "./utils.js";
import axios from "axios";

export const sendWelcomeToEmail = async (email, result, name) => {
  const appKey = process.env.EMAIL_APP_KEY;
  const XSecretKey = process.env.EMAIL_X_SECRET_KEY;
  const sender = process.env.EMAIL_SENDER;
  const result1 = await axios.post(
    `https://api-mail.cloud.toast.com//email/v2.0/appKeys/${appKey}/sender/mail`,
    {
      senderAddress: sender,
      title: `안녕하세요 ${name}님. 가입을 환영합니다.`,
      body: result,
      receiverList: [
        {
          receiveMailAddr: email,
          receiveType: "MRT0",
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Secret-Key": XSecretKey,
      },
    }
  );
  console.log(result1);
  console.log("전송끝");
};

export const getWelcomeTemplate = (user) => {
  return `
          <html>
              <body>
                  <h1>${user.name}님 가입을 환영합니다.!!</h1>
                  <hr />
                  <div>이름 : ${user.name}</div>
                  <div>핸드폰 : ${user.phone}</div>
                  <div>선호하는 사이트 : ${user.prefer}</div>
                  <div>이메일 : ${user.email}</div>
                  <div>가입일 : ${getToday()}</div>
              </body>
          </html>
      `;
};
