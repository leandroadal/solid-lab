/**
 * LSP - Liskov Substitution Principle
 *
 * Subclasses devem poder substituir suas classes pai sem quebrar o sistema.
 * Se B herda de A, você deve conseguir usar B em qualquer lugar que A é esperado, com o mesmo comportamento esperado.
 */

// Uma classe filha deve poder substituir a classe pai sem quebrar o comportamento esperado.
export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
