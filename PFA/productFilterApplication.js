function productFilter([obj = {name: "", price: 0.0, category: ""}, ...args], category = "", minPrice = 0.0, maxPrice = 10.0) {
  let productsArr = [obj, ...args];

  const filteredProducts = productsArr.filter(product => {
    const inCategory = category ? product.category.toLowerCase() == category.toLowerCase() : true;
    const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
    return inCategory && inPriceRange;
  });

  filteredProducts.length == 0 ? console.log("Brak produktów") : filteredProducts.forEach(product => {
    console.log(`${product.name}, ${product.price} PLN, ${product.category}`);
  });

  console.log("---------------------");
}

let products = [{name: "Orange juice", price: 5.99, category: "Beverages"}, 
  {name: "Water", price: 2.99, category: "Beverages"},
  {name: "Breadroll", price: 0.99, category: "Pastry"},
  {name: "Apple juice", price: 6.99, category: "Beverages"},
  {name: "Lay's Green Onion", price: 7.99, category: "Snacks"},
  {name: "Pringles classic", price: 10.99, category: "Snacks"},
  {name: "Bread", price: 5.99, category: "Pastry"},
  {name: "Baguette", price: 2.99, category: "Pastry"},
  {name: "Flour", price: 5.99, category: "Semi-finished products"},
  {name: "Eggs", price: 7.99, category: "Semi-finished products"},
  {name: "Frozen cherries", price: 6.99, category: "Frozen food"},
  {name: "Frozen strawberries", price: 5.99, category: "Frozen food"},
  {name: "Frozen vegetables", price: 8.99, category: "Frozen food"},
  {name: "Apples", price: 5.99, category: "Fruits"},
  {name: "Oranges", price: 7.99, category: "Fruits"},
  {name: "Sugar", price: 17.99, category: "Semi-finished products"},
  {name: "Watermelons", price: 15.99, category: "Fruits"},
  {name: "Lemons", price: 6.99, category: "Fruits"},
  {name: "Tomatoes", price: 7.99, category: "Vegetables"},
  {name: "Potatoes", price: 6.99, category: "Vegetables"},
  {name: "Pepper", price: 9.99, category: "Vegetables"},
  {name: "Carrots", price: 6.99, category: "Vegetables"},
];

productFilter(products, "Beverages",  3, 6);
productFilter(products, "Fruits",  6, 8);
productFilter(products, "Semi-finished products",  6, 20);
productFilter(products, "",  5, 10);