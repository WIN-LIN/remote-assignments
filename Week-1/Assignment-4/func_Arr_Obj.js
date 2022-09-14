function avg(data) {
  let len = data.size;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += data.products[i].price;
  }
  return sum / len;
}
console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
