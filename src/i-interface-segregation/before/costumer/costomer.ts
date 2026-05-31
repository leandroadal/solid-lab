/**
 * ISP —  Interface Segregation Principle
 *
 * Nenhuma classe deve ser forçada a implementar métodos que não usa.
 *
 * Deve se preferir árias interfaces específicas a uma interface genérica e grande.
 */

import { CustomerProtocol } from './customer-protocol';

// Não deveria precisar de um cnpj
export class IndividualCustomer implements CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}

// Não deveria precisar de um firstName, lastName, cpf
export class EnterpriseCustomer implements CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string, cnpj: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = cnpj;
  }
}
