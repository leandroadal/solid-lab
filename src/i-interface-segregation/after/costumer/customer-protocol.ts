// A interface foi dividida para cada ter uma única responsabilidade e
// não quebrar o principio de segregação de interface ao fazer com que
// as classes que implementam a interface tenham que ter atributos desnecessários

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
