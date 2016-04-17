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
console.log( a && b);
console.log(Object.assign({}, a && b));
