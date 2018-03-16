// @flow
// selamat mencoba
let a: number = 1;
let b: number = 2;

function add(a: string, b: number): string {
  return a + b;
}

// see the error in editor ( TODO: fix it ! )
add(a, b);

type Product = {
  id: string,
  name: string,
  price: number,
  qty: number
};

let skateBoard: Product = {
  id: '1231243svsd',
  name: 'roller',
  price: 123,
  qty: 1
};

console.log(skateBoard);
