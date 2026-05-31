import { Messaging } from './services/messaging';
import { Order } from './entities/Order';
import { ShoppingCart } from './entities/ShoppingCart';
import { Persistency } from './services/Persistency';
import { Product } from './entities/Product';

// ShoppingCart tinha outras responsabilidade
// Então essas responsabilidades foram expelidas para respeita o principio da responsabilidade única
// Dessa forma, ShoppingCart foi separado em 4 classes concretas, 1 interface e um type
const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
