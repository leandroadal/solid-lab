import { Messaging } from './services/messaging';
import { Order } from './classes/Order';
import { ShoppingCart } from './classes/ShoppingCart';
import { Persistency } from './services/Persistency';
import { Product } from './classes/Product';
import { FiftyPercentDiscount } from './classes/Discount';

// Aplicando o OPC agora é possível alterar o desconto sem
// precisar mexer nas classe que o usarem
// Dessa forma, se o desconto mudar não sera necessário
// modificar o código apenas adicionar outro desconto

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
