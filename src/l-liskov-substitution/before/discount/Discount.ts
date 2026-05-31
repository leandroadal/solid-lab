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

export class SpecialVipDiscount extends Discount {
  // Mudou o comportamento: agora exige um parâmetro extra que o pai não pedia
  // ou lança um erro inesperado se o cliente não for VIP.
  // Dessa forma, ela não substituir completamente o discount pois se uma classe esta usando
  // o método calculate do discount não sabe do parâmetro is vip nem
  // da possibilidade do erro
  calculate(price: number, isVip?: boolean): number {
    if (!isVip) {
      throw new Error('Este desconto só pode ser calculado para clientes VIP!');
    }
    return price - price * 0.7;
  }
}

// Violação por retornar resultado incompatível
// o desconto deveria retornar um valor final válido da compra
export class NegativeDiscount extends Discount {
  calculate(price: number): number {
    return -price;
  }
}

// Violação por ignorar completamente o contrato
// um desconto reduz o preço, torna gratuito
export class FreeEverythingDiscount extends Discount {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  calculate(_price: number): number {
    return 0;
  }
}

// Violação por adicionar restrições à entrada
// a classe base aceitava qualquer preço positivo
export class HighValueDiscount extends Discount {
  calculate(price: number): number {
    if (price < 1000) {
      throw new Error('Valor mínimo de R$1000');
    }

    return price * 0.8;
  }
}

// Violação por depender de estado externo
// o comportamento esperado de Discount deixa de ser previsível
export class RandomDiscount extends Discount {
  calculate(price: number): number {
    return Math.random() > 0.5
      ? price * 0.5
      : (() => {
          throw new Error('Desconto indisponível');
        })();
  }
}
