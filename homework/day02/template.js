import {
  checkValidationEmail,
  checkResident,
  checkPhone,
  welcomeEmail,
  changeNumber,
} from "./welcomeValidation.js";

const welcomeAPI = (user) => {
  const emailValidation = checkValidationEmail(user.email);
  const residentValidation = checkResident(user.resident);
  const phoneValidation = checkPhone(user.phone);
  if (emailValidation || residentValidation || phoneValidation) {
    const number = changeNumber(user.resident);
    console.log(welcomeEmail(user, number));
  }
};

const user = {
  name: "최창서",
  email: "a@a.com",
  resident: "123456-1234567",
  phone: "01011111111",
  site: "https://naver.com",
};
welcomeAPI(user);
