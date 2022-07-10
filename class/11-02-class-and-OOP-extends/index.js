class SkyUnit {
  constructor(qqq) {}
  run = () => {
    console.log("날아서 도망가자");
  };
}

class GroundUnit {
  constructor() {}
  run = () => {
    console.log("뛰어서 도망가기");
  };
}

// extends로 run 매서드를 제외한 나머지 메서드를 상속 받을 수 있다.
// extends로 상속된 constructor의 경우 super()를 활용하여 extends의 constructor로 값을 넘겨 줄 수 있다.
class Monster extends SkyUnit {
  power = 10;

  constructor() {
    super(300);
  }

  attack = () => {
    console.log("공격하자");
    console.log(`내 공격력은 ${this.power} 이야`);
  };
}

const mymonster1 = new Monster(20);

mymonster1.attack();
mymonster1.run();
