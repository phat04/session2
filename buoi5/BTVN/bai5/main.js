let numbers = [1, 2, 3, 4, 5];

const checkNumber = (num) => {
  console.log(`Số bạn nhập: ${num}`);
  if (numbers.indexOf(num) !== -1) {
    console.log(`numbers.indexOf(${num}): ${numbers.indexOf(num)}`);
    alert(`vị trí của ${num} trong mảng là: ${numbers.indexOf(num)}`);
  } else {
    console.log(`${num} không có trong mảng.`);
    alert(`${num} không có trong mảng.`);
  }
};

let inputNumber = +prompt("Nhập vào một số để kiểm tra: ");
checkNumber(inputNumber);
