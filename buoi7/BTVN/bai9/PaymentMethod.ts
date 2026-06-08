abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Thanh toán ${amount}$ bằng Credit Card`);
  }
}

class PaypalPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Thanh toán ${amount}$ bằng Paypal`);
  }
}

const cardPayment = new CreditCardPayment();

const paypalPayment = new PaypalPayment();

cardPayment.processPayment(100);

paypalPayment.processPayment(200);
