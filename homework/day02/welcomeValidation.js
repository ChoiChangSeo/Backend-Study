export const checkValidationEmail = (email) => {
  if (email === undefined || !email.includes("@")) {
    console.log("올바른 이메일이 아닙니다.");
    return false;
  } else {
    return true;
  }
};
export const checkResident = (num) => {
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
export const checkPhone = (myphone) => {
  if (myphone.length !== 10 && myphone.length !== 11) {
    console.log("핸드폰 번호를 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
};

export const changeNumber = (num) => {
  const bbb = num.split("");
  bbb.splice(8, 13, "******");
  const aaa = bbb.join("");
  return aaa;
};

export const welcomeEmail = (user, number) => {
  return `
        <html>
            <body>
                <h1>${user.name}님 가입을 환영합니다.!!</h1>
                <hr />
                <div>이름 : ${user.name}</div>
                <div>주민등록번호 : ${number} </div>
                <div>핸드폰 : ${user.phone}</div>
                <div>좋아하는 사이트 : ${user.site}</div>
            </body>
        </html>
    
    `;
};
