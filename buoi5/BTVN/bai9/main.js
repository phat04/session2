let prices = [100, 200, 300, 400, 500];

const getTotalPrice = () => {
  let totalPrice = prices.reduce((total, price) => total + price, 0);
  return totalPrice;
};

let totalPriceAfterVAT = getTotalPrice() * 0.9;

console.log(`Tong gia tri san pham sau VAT: ${totalPriceAfterVAT}`);
