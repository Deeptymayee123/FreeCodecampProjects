const cart = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 200, inStock: true },
  { name: "USB Cable", price: 10, inStock: false },
];

// filter: keep only items that are in in Stock
const availableItems = cart.filter((item) => item.inStock);

// console.log(availableItems);

// MAP: create a new list where each item has a 'pricewithTax'
const itemWithTax = availableItems.map((item) => {
  return {
    ...item,
    priceWithTax: item.price * 1.1,
  };
});

// Reduce the list to a single final total price.
// calculate the grand total of the tax-adjusted prices

const grandTotal = itemWithTax.reduce((acc, item) => {
  console.log(acc);
  console.log(item);

  return acc + item.priceWithTax;
}, 0);

console.log(itemWithTax);

console.log(grandTotal);
