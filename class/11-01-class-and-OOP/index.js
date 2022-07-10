const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

class Monster {
  power = 10;
  // constructor는 class가 실행될 떄 제일 처음 실행 됨
  constructor(aaa) {
    this.power = aaa;
  }

  attack = () => {
    console.log("공격!!");
    console.log(`내 공격력은 ${this.power} 이야`);
  };

  run = () => {
    console.log("도망");
  };
}

const mymonster1 = new Monster(10);
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(50);
mymonster2.attack();
mymonster2.run();

// 공통된 기능을 하나의 class에 모두 묶어라! 그게 바로 객체지향프로그래밍
const loginService = new loginService();
loginService.login();
loginService.logout();
loginService.loginCheck();
