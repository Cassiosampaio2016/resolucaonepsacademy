let coposQuebrados = 0;

for (let i = 1; i <= n; i++) {
  const [latas, copos] = input[i].split(' ').map(Number);
  if (latas > copos) {
    coposQuebrados += copos;
  }
}

console.log(coposQuebrados);