let ages = [20, 25, 30, 35, 40, 19, 15, 12, 14, 15, 13, 18];

const getAdult = () => {
  let adultAges = ages.filter((age) => age >= 18);
  return adultAges;
};

console.log(`nhung nguoi tren 18 tuoi: ${getAdult().join(", ")}`);
