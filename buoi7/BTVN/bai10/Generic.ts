// Generic Function
function identity<T>(arg: T): T {
  return arg;
}

// Gọi hàm với string
const text = identity<string>("Hello TypeScript");

console.log(text);

// Gọi hàm với number
const numberValue = identity<number>(100);

console.log(numberValue);

// Generic Interface
interface Box<T> {
  content: T;
}

// Object kiểu string
const stringBox: Box<string> = {
  content: "This is a string",
};

// Object kiểu number
const numberBox: Box<number> = {
  content: 999,
};

console.log(stringBox);

console.log(numberBox);
