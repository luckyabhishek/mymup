import {Entity, model, property} from '@loopback/repository';

@model()
export class BankAccount extends Entity {
  @property({
    type: 'string',
  })
  name?: string;


  constructor(data?: Partial<BankAccount>) {
    super(data);
  }
}

export interface BankAccountRelations {
  // describe navigational properties here
}

export type BankAccountWithRelations = BankAccount & BankAccountRelations;
