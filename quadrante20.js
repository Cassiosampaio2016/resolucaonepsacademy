const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x === 0 || y === 0) {
  console.log('eixos');
} else if (x > 0 && y > 0) {
  console.log('Q1');
} else if (x < 0 && y > 0) {
  console.log('Q2');
} else if (x < 0 && y < 0) {
  console.log('Q3');
} else {
  console.log('Q4');
}