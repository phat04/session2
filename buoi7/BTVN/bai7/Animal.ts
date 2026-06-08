// Lớp cha
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some sound...");
  }
}

// Lớp con kế thừa Animal
class Dog extends Animal {
  constructor(name: string) {
    // Gọi constructor của lớp cha
    super(name);
  }

  bark(): void {
    console.log("Woof woof!");
  }
}

// Tạo object
const dog1 = new Dog("Husky");

// Dùng thuộc tính kế thừa
console.log(dog1.name);

// Gọi method kế thừa
dog1.makeSound();

// Gọi method riêng của Dog
dog1.bark();
