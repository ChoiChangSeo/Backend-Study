function zzz(aaaa) {
  console.log("================");
  console.log(aaaa);
  console.log("================");
}

@zzz
class AppController {}

// public
class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }
  ggg() {
    console.log("안녕하세요");
  }
}
const aaa = new Aaa(50);
aaa.mypower = 5;
// private
class Bbb {
  constructor(private mypower) {
    this.mypower = mypower;
  }
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}

const bbb = new Bbb(50);
bbb.mypower = 5;

// readonly
class Cbb {
  constructor(readonly mypower) {
    this.mypower = mypower;
  }
  ggg() {
    this.mypower = 10;
    console.log("안녕하세요");
  }
}

const ccc = new Cbb(50);
bbb.mypower = 5;
