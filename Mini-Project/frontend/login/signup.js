// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  const myPhone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  console.log(myPhone);
  axios
    .post("http://localhost:3000/tokens/phone", {
      phone: myPhone,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("인증 번호 전송");
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const myPhone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  const token = document.querySelector("#TokenInput").value;
  console.log(myPhone, token);
  axios
    .patch("http://localhost:3000/tokens/phone", {
      phone: myPhone,
      token: token,
    })
    .then((res) => {
      console.log(res.data);
    });
  console.log("핸드폰 인증 완료");
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const myName = document.querySelector("#SignupName").value;
  const myRegistrationNumber =
    document.querySelector("#SignupPersonal1").value +
    "-" +
    document.querySelector("#SignupPersonal2").value;
  const myPhone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  const myPreferSite = document.querySelector("#SignupPrefer").value;
  const myPassword = document.querySelector("#SignupPwd").value;
  const myEmail = document.querySelector("#SignupEmail").value;
  console.log(myName);
  const user = {
    name: myName,
    personal: myRegistrationNumber,
    phone: myPhone,
    prefer: myPreferSite,
    password: myPassword,
    email: myEmail,
  };

  axios
    .post("http://localhost:3000/users", {
      name: myName,
      personal: myRegistrationNumber,
      phone: myPhone,
      prefer: myPreferSite,
      password: myPassword,
      email: myEmail,
    })
    .then((res) => {
      console.log(res.data);
    });
  console.log("회원 가입 이메일 전송");
};
