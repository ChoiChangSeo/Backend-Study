export const validationNumber = (num) => {
  const number = num.split("-");
  if (!num.includes("-")) {
    console.log("올바른 형식이 아닙니다.");
    return false;
  } else if (number[0].length !== 6 || number[1].length !== 7) {
    console.log("갯수를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
};

export const changeNumber = (num) => {
  const bbb = num.split("");
  bbb.splice(8, 13, "******");
  const aaa = bbb.join("");
  return console.log(aaa);
};
