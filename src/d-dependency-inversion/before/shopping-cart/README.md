# Shopping cart

Neste exemplo, o arquivo principal que tem os erros de Dependency Inversion Principle é o [Order.ts](classes/Order.ts). ShoppingCart, Messaging e Persistency são dependências concretas de Oder, o que caracteriza uma quebra do principio citado.

## DIP -  Dependency Inversion Principle

Dependa de abstrações, não de implementações concretas.
