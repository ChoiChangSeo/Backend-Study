import { getToday } from "./utils.js";

export const checkValidationEmail = (email) => {
  if (email === undefined || !email.includes("@")) {
    console.log("올바른 이메일이 아닙니다.");
    return false;
  } else {
    return true;
  }
};

export const sendWelcomeToEmail = (email, result) => {
  console.log(`${email} 이메일로 ${result}를 전송합니다.`);
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
