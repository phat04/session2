function sum(...args) {
  const total = args.reduce((total, num) => total + num, 0);
  console.log("Tổng:", total);
  return total;
}
