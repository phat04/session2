let integer = +prompt("Nhập vào một số nguyên: ");
let isPrime = true;

for (let i = 2; i <= integer / 2; i++) {
  if (integer % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${integer} là số nguyên tố.`);
  alert(`${integer} là số nguyên tố.`);
} else {
  console.log(`${integer} không phải là số nguyên tố.`);
  alert(`${integer} không phải là số nguyên tố.`);
}
