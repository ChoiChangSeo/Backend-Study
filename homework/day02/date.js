const date = new Date();
const yyyy = date.getFullYear();
const mm = String(date.getMonth() + 1).padStart(2, 0);
const dd = String(date.getDate()).padStart(2, 0);
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const newDate = () => {
  return console.log(
    `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hours}:${minutes}:${seconds} 입니다.`
  );
};
newDate();
