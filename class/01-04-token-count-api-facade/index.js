
const phoneNumberValidation = (myphone) => {
  if(myphone.length !== 10 && myphone.length !== 11){
  console.log("핸드폰 번호를 제대로 입력해주세요")
  return false
} else {
  return true
}
}

const createToken = () => {
 const count = 6
 if(count === undefined){
  return console.log("갯수를 제대로 입력해주세요")
}else if(count<=0){
  return console.log("error 갯수가 너무 적습니다.")
}else if(count>10){
  return console.log("error 갯수가 너무 많습니다.")
}
 return String(Math.floor(Math.random() * 10**count)).padStart(count,"0")
}

const sendTokenToPhone = (myphone,mytoken) => {
 console.log(myphone + "번호로 인증번호" + mytoken + "를 전송합니다.")
}

const createTokenAPI = (myphone) => {
  // 1. 핸드폰 번호는 제대로 입력했는가?
  const isValid = phoneNumberValidation(myphone)
  if(isValid){
    // 2. 토큰 6자리 생성하기
    const mytoken = createToken()
  
    // 3. 핸드폰에 토큰 보내주기
    sendTokenToPhone(myphone, mytoken)
  }

}
createTokenAPI("01012345678")