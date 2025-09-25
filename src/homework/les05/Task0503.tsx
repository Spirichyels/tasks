//ЗАДАЧА 1
function Task0503() {
  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
  ];
  const productsWithFinalPrice = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
      finalPrice: product.price * 0.85,
    };
  });
  return productsWithFinalPrice;
}

export default Task0503;
