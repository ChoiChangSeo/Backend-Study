// 타입추론 (처음들어온 값의 타입을 인식해버림)
let aaa = "안녕하세요";
aaa = 3;

// 타입명시
let bbb: string = "반갑습니다";
bbb = 10;

// 문자타입
let ccc: string;
ccc = "반가워요";
ccc = 3;

// 숫자타입
let ddd: number;
ddd = "adfsf";

// 불린타입
let eee: boolean;
eee = false;
eee = "false"; //true로 작동함

// 배열타입
let fff: number[] = [1, 2, 3, 4, "하이요"];
let ggg: string[] = ["철수", "영희", "훈희", 13];
let hhh: (number | string)[] = [1, 2, 3, 4, 5, "안녕하세요"];

// 객체타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string;
}

let profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};
profile.age = "8살";
profile.school = 123;
profile.hobby = "수영";

// 함수타입
const add = (money1: number, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};
add(1000, 2000, "원");
