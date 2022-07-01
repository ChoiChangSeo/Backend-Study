import {
  checkValidationEmail,
  sendWelcomeToEmail,
  getWelcomeTemplate,
} from "./welcome.js";

const createUser = ({ name, age, school, email, password }) => {
  // 1. 이메일 확인
  const isValid = checkValidationEmail(email);
  if (isValid) {
    // 2. 가입환영 템플릿 만들기
    const result = getWelcomeTemplate({ name, age, school });
    // 3. 이메일에 가입환영 템플릿 전송하기
    sendWelcomeToEmail(email, result);
  }
};

const myuser = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
  email: "a@a.com",
  password: "1234",
};

createUser(myuser);

JSON.stringify;
