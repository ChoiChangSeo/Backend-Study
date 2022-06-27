
const getToken = (count) => {
   if(count === undefined){
     return console.log("갯수를 제대로 입력해주세요")
   }else if(count<=0){
     return console.log("error 갯수가 너무 적습니다.")
   }else if(count>10){
     return console.log("error 갯수가 너무 많습니다.")
   }
   const result = String(Math.floor(Math.random() * 10**count)).padStart(count,"0")
   console.log(result)
}
getToken()