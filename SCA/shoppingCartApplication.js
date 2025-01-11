class Product {
  constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }
}

class Cart {
  constructor() {
      this.products = [];
  }

  addProduct(name, price, quantity) {
      this.products = [...this.products, new Product(name, price, quantity)];
  }

  removeProduct(name) {
      this.products = products.filter(product => product[0] != name);
  }

  showCart() {
      console.log("Shopping cart:");
      this.products.forEach(product => {
          console.log(`${product.name}, Cena: ${product.price} zł, Quantity: ${product.quantity}`);
      });
  }
}

let koszyk = new Cart();
koszyk.addProduct("Jabłko", 1.50, 124);
koszyk.addProduct("Pies", 1200, 6);
koszyk.addProduct("Lody", 5.72, 50);
koszyk.showCart();