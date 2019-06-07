import Umzug from 'umzug';
import config from './../config/';
import db from '../app/models';
import logger from '../app/logger';

const check: any = () => {
  const umzug = new Umzug({
    logging: logger.info,
    storage: 'sequelize',
    storageOptions: { sequelize: db.sequelize },
    migrations: {
      params: [
        db.sequelize.getQueryInterface(),
        db.sequelize.constructor,
        () => {
          throw new Error('Migration tried to use old style "done" callback.upgrade');
        }
      ],
      path: `${__dirname}/migrations`,
      pattern: /\.js$/
    }
  });
  return umzug.pending().then(migrations => {
    if (migrations.length) {
      if (!config.isProduction) {
        return Promise.reject(new Error('Pending migrations, run: npm run migrations'));
      }
      return umzug.up().catch(err => {
        logger.error(err);
        return Promise.reject(new Error('There are pending migrations that could not be executed'));
      });
    }
    return Promise.resolve([]);
  });
};

export default check;
