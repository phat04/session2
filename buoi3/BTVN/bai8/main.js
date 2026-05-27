let sum = 0;
for (let index = 1; index < 50; index++) {
  if (index % 5 === 0) {
    continue;
  }
  sum += index;
  console.log(index);
  if (sum > 200) {
    break;
  }
}

console.log(`Tổng: ${sum}`);
