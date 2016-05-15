(a) => {
  console.log(a);
}

const a = {
  a: '123',
  b: 'abc',
}

const b = {
  c: '1231',
  a: 'ggg',
}
class test {
  constructor(){
    this.name = "Shawn";
  }
}
let t = new test();
console.log(t.name);
console.log( a && b);
console.log(Object.assign({}, false || b));
