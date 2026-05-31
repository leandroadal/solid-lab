/**
 * ISP —  Interface Segregation Principle
 *
 * Nenhuma classe deve ser forçada a implementar métodos que não usa.
 *
 * Deve se preferir árias interfaces específicas a uma interface genérica e grande.
 */

import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './customer-protocol';

// Agora cada classe implementa uma interface que atende suas necessidades
// sem obrigar a implementar atributos ou métodos inúteis

// Implementa a nova interface
export class IndividualCustomer implements IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

// Implementa a nova interface
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
