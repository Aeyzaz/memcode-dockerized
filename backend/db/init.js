import * as pgPromise from 'pg-promise';

import pgOptions from './services/pgOptions';
import getConnectionString from './services/getConnectionString';

const pgPackage = pgPromise.default(pgOptions);

const db = pgPackage(getConnectionString());

db.connect()
  .then((obj) => {
      console.log('DB connected');
    obj.done();
  })
  .catch((error) => {
    console.log("ERROR:", error.message || error);
  });

export default db;
