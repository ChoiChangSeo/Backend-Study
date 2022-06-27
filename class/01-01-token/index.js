console.log("하이욤")
const getToken = () => {
   const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
   console.log(result)
}
getToken()