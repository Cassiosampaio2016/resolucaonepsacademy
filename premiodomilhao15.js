let n = parseInt(input[0]);
let somaAcessos = 0;
let dias = 0;

for (let i = 1; i <= n; i++) {
  somaAcessos += parseInt(input[i]);
  dias++;

  if (somaAcessos >= 1000000) {
    console.log(dias);
    break;
  }
}