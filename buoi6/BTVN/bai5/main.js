function sumAllNumbers(...numbers) {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total;
}

// Gọi hàm với nhiều bộ số khác nhau
console.log(sumAllNumbers(1, 2, 3));

console.log(sumAllNumbers(10, 20, 30, 40));

console.log(sumAllNumbers(5, 15));

console.log(sumAllNumbers(100, 200, 300, 400, 500));
