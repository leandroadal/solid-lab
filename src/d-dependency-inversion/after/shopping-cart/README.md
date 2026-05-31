# Shopping cart

Para resolver o problema de DPI as classes ShoppingCart, Messaging e Persistency implementaram interfaces própria para elas. Junto a isso, em Order a dependência fica para as interfaces

Dessa forma foi criado:

- [ShoppingCartProtocol](classes/interfaces/shopping-cart-protocol.ts)
- [MessagingProtocol](classes/interfaces/messaging-protocol.ts)
- [PersistencyProtocol](classes/interfaces/persistency-protocol.ts)
