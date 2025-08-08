const divisores = [];

for (let i = 1; i * i <= x; i++) {
  if (x % i === 0) {
    divisores.push(i);
    if (i !== x / i) {
      divisores.push(x / i);
    }
  }
}

divisores.sort((a, b) => a - b);
console.log(divisores.join(' '));
