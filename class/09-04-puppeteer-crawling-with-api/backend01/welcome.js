import { getToday } from "./utils.js";
import axios from "axios";

export const checkValidationEmail = (email) => {
  if (email === undefined || !email.includes("@")) {
    console.log("올바른 이메일이 아닙니다.");
    return false;
  } else {
    return true;
  }
};

export const sendWelcomeToEmail = async (email, result) => {
  const appKey = process.env.EMAIL_APP_KEY;
  const XSecretKey = process.env.EMAIL_X_SECRET_KEY;
  const sender = process.env.EMAIL_SENDER;
  const result1 = await axios.post(
    `https://api-mail.cloud.toast.com//email/v2.0/appKeys/${appKey}/sender/mail`,
    {
      senderAddress: sender,
      title: "안녕하세요 철수님. 가입을 환영합니다.",
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

export const getWelcomeTemplate = ({ name, age, school }) => {
  return `
          <html>
              <body>
                  <h1>${name}님 가입을 환영합니다.!!</h1>
                  <hr />
                  <div>이름 : ${name}</div>
                  <div>나이 : ${age}살</div>
                  <div>학교 : ${school}</div>
                  <div>가입일 : ${getToday()}</div>
              </body>
          </html>
      `;
};
