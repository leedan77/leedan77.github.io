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


function A() {
    this.x = function() {
      console.log("g");
    }
}

A.prototype.y = function() {
  console.log("global");
}
var t1 = new A();
var t2 = new A();
t1.y();
t2.x();
