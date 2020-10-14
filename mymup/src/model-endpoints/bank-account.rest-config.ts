import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {BankAccount} from '../models';

const config: ModelCrudRestApiConfig = {
  model: BankAccount,
  pattern: 'CrudRest',
  dataSource: 'mem',
  basePath: '/bank-accounts',
};
module.exports = config;
