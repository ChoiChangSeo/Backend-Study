import { validationNumber, changeNumber } from "./number.js";
const registrationNumber = (num) => {
  const pass = validationNumber(num);
  if (pass) {
    return changeNumber(num);
  }
};
registrationNumber("920324-0134449");
