const N = parseInt(input[0]);
const interruptores = input[1].split(' ').map(Number);

let A = 0;
let B = 0;

for (let i = 0; i < N; i++) {
  if (interruptores[i] === 1) {
    A = 1 - A;
  } else {
    A = 1 - A;
    B = 1 - B;
  }
}

console.log(A);
console.log(B);