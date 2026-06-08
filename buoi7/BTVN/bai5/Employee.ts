class Employee {
  public name: string;

  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  showInfo(): void {
    console.log(`Tên: ${this.name}`);
    console.log(`Lương: ${this.salary}`);
  }
}

const employee1 = new Employee("An", 1500);

console.log(employee1.name);

// Gọi method
employee1.showInfo();

// Sai: không được truy cập private từ bên ngoài
console.log(employee1.salary);
