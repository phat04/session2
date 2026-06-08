// Tạo enum
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

// Tạo lớp Order
class Order {
  status: OrderStatus;

  constructor(status: OrderStatus) {
    this.status = status;
  }

  checkStatus(): void {
    if (this.status === OrderStatus.Delivered) {
      console.log("Order finished");
    } else {
      console.log("Order is not finished");
    }
  }
}

// Tạo object
const order1 = new Order(OrderStatus.Delivered);

order1.checkStatus();
