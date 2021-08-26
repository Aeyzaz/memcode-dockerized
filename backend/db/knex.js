import Knex from 'knex';
import knexStringcase from 'knex-stringcase';

import getConnectionString from './services/getConnectionString';

const knex = Knex(knexStringcase({
  client: 'pg',
  connection: getConnectionString(),
  pool: { min: 0, max: 100 },
  createTimeoutMillis: 3000,
  acquireTimeoutMillis: 30000,
  idleTimeoutMillis: 30000,
  reapIntervalMillis: 1000,
  createRetryIntervalMillis: 100,
  propagateCreateError: false // <- default is true, set to false
  // debug: true,
  // asyncStackTraces: true
}));

export default knex;
